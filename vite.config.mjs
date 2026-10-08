import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { pages, renderPages } from "./scripts/render-pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = "architectui-html-free";

function htmlInputs() {
  return Object.fromEntries(
    pages.map((page) => {
      const filename = page.output.replace(/^\.\//, "");
      const name = filename.replace(/\.html$/, "");

      return [name, path.resolve(__dirname, filename)];
    }),
  );
}

function architectuiPages() {
  const watchedFiles = ["src/**/*.hbs", "src/pages.js", "scripts/render-pages.mjs"];

  return {
    name: "architectui-pages",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) {
          next();
          return;
        }

        const url = new URL(req.url, "http://localhost");
        const staticFile = resolveTemplateStaticFile(url.pathname);

        if (!staticFile) {
          next();
          return;
        }

        res.setHeader("Content-Type", contentType(staticFile));
        fs.createReadStream(staticFile).pipe(res);
      });

      server.watcher.add(watchedFiles);
      server.watcher.on("change", (file) => {
        if (file.endsWith(".hbs") || file.endsWith("pages.js") || file.endsWith("render-pages.mjs")) {
          renderPages({ root: __dirname });
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

function resolveTemplateStaticFile(pathname) {
  if (pathname === "/favicon.ico") {
    return path.resolve(__dirname, "src", "layout", "favicon.ico");
  }

  if (!pathname.startsWith("/assets/")) {
    return null;
  }

  const candidate = path.resolve(__dirname, "src", pathname.slice(1));
  const assetsRoot = path.resolve(__dirname, "src", "assets");

  if (!candidate.startsWith(assetsRoot) || !fs.existsSync(candidate) || !fs.statSync(candidate).isFile()) {
    return null;
  }

  return candidate;
}

function contentType(file) {
  const extension = path.extname(file).toLowerCase();

  return {
    ".css": "text/css",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".js": "text/javascript",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  }[extension] ?? "application/octet-stream";
}

function copyTemplateAssets() {
  return {
    name: "copy-template-assets",
    closeBundle() {
      const destination = path.resolve(__dirname, outDir);

      fs.cpSync(path.resolve(__dirname, "src", "assets", "images"), path.join(destination, "assets", "images"), {
        recursive: true,
      });
      fs.copyFileSync(path.resolve(__dirname, "src", "layout", "favicon.ico"), path.join(destination, "favicon.ico"));
    },
  };
}

renderPages({ root: __dirname });

export default defineConfig({
  appType: "mpa",
  base: "./",
  publicDir: false,
  plugins: [architectuiPages(), copyTemplateAssets()],
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ["node_modules", "src/assets"],
      },
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs(),
      output: {
        entryFileNames: "assets/scripts/[name].js",
        chunkFileNames: "assets/scripts/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? "";

          if (name.endsWith(".css")) {
            return "assets/styles/[name][extname]";
          }

          if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
            return "assets/fonts/[name]-[hash][extname]";
          }

          if (/\.(png|svg|jpe?g|gif|webp|ico)$/i.test(name)) {
            return "assets/images/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
