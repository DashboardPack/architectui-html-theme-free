import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import Handlebars from "handlebars";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

export function loadPages(root = defaultRoot) {
  const pagesPath = path.resolve(root, "src", "pages.js");

  delete require.cache[require.resolve(pagesPath)];

  return require(pagesPath);
}

export const pages = loadPages(defaultRoot);

const layoutDir = path.join(defaultRoot, "src", "layout");
const demoPagesDir = path.join(defaultRoot, "src", "DemoPages");

function toPartialName(file, baseDir) {
  return path.relative(baseDir, file).replace(/\\/g, "/").replace(/\.hbs$/, "");
}

function walkHbsFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walkHbsFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith(".hbs") ? [fullPath] : [];
  });
}

function registerPartialAliases(file, root) {
  const template = fs.readFileSync(file, "utf8");
  const relativeToLayout = toPartialName(file, path.join(root, "src", "layout"));
  const relativeToDemoPages = toPartialName(file, path.join(root, "src", "DemoPages"));
  const basename = path.basename(file, ".hbs");

  [
    relativeToLayout,
    relativeToDemoPages,
    basename,
    path.basename(path.dirname(file)) + "/" + basename,
  ].forEach((name) => {
    if (!name.startsWith("..")) {
      Handlebars.registerPartial(name, template);
    }
  });
}

export function registerPartials(root = defaultRoot) {
  Handlebars.partials = {};

  [...walkHbsFiles(path.join(root, "src", "layout")), ...walkHbsFiles(path.join(root, "src", "DemoPages"))].forEach((file) => {
    registerPartialAliases(file, root);
  });

  Handlebars.registerPartial(
    "../AppHeader/Components/logo",
    fs.readFileSync(path.join(root, "src", "layout", "AppHeader", "Components", "logo.hbs"), "utf8"),
  );
}

export function pageHtmlFiles(root = defaultRoot) {
  return loadPages(root).map((page) => path.resolve(root, page.output.replace(/^\.\//, "")));
}

export function renderPages({ root = defaultRoot } = {}) {
  registerPartials(root);

  loadPages(root).forEach((page) => {
    const template = Handlebars.compile(fs.readFileSync(path.resolve(root, page.template), "utf8"));
    const output = path.resolve(root, page.output.replace(/^\.\//, ""));
    const html = template({
      htmlWebpackPlugin: {
        options: page.content,
      },
    });

    fs.writeFileSync(output, html);
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  renderPages();
}
