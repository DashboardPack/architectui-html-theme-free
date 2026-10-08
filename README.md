# ArchitectUI Bootstrap 5 jQuery/HTML Theme FREE
## Made with love by DashboardPack.com

[![npm version](https://img.shields.io/badge/version-4.9.0-blue.svg)](https://github.com/DashboardPack/architectui-html-theme-free)
[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](package.json)
[![Security](https://img.shields.io/badge/runtime%20security-0%20vulnerabilities-brightgreen.svg)](package.json)
[![SASS](https://img.shields.io/badge/SASS-modernized-purple.svg)](src/assets/)

ArchitectUI is a **Modern Clean Responsive HTML Bootstrap 5 Admin UI Dashboard Template**. It is used by thousands of developers to build SaaS and various other admin panels for web apps. This version hosted on Github is for preview only. It has a limited functionality in comparison to [Pro version](https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/?utm_source=github&utm_medium=readme&utm_campaign=architectui-html-upgrade&utm_content=intro-link) yet it comes with unlimited color schemes and flexibility unmatched to most other Premium admin dashboards.

## What's New

### **⚡ Vite Tooling Migration**
- **Webpack replaced with Vite 8** for faster dev startup and a smaller build-tool dependency graph.
- **Custom Handlebars page renderer** keeps the existing 26 demo pages and layout partials intact.
- **0 npm audit vulnerabilities** after removing the old webpack-dev-server/tooling chain.
- **Explicit jQuery globals** replace webpack's `ProvidePlugin`/`expose-loader` behavior.

### **📦 Dependency Refresh**
- **Vite 8.3**, **Sass 1.105**, **ESLint 10.12**, **FontAwesome 7.3.1**
- Removed unused build packages including Babel, webpack loaders/plugins, `webpack-cli`, and `webpack-dev-server`
- Removed unused runtime dependencies

> **Requires Node.js 22.15+**.

See [CHANGELOG.md](Changelog.md) for historical release details.

## Earlier Release: v4.2.0

### 🚀 **Complete Modernization**
- **Latest Dependencies** - All npm packages updated to current versions
- **Future-Proof SASS** - Modern `@use` syntax, zero deprecation warnings
- **Enhanced Security** - Zero vulnerabilities detected
- **Modern Tooling** - ESLint v9, Webpack 5.99, latest build tools

### 🗺️ **Maps Component** (Updated in v4.4.0)
- **Real Google Maps** - Fully interactive maps with actual map data
- **Free to Use** - No API key required, uses Google's iframe embed system
- **5 Global Locations** - Tokyo, New York, London, Paris, San Francisco
- **Professional Quality** - All standard Google Maps features included

### 📦 **Performance Improvements**
- **Fast Dev Server** - Vite-powered local development
- **Optimized Production Build** - Minified JS/CSS with generated multi-page HTML
- **Clean Asset Loading** - Static template images and favicon served in dev and copied in production
- **Better Caching** - Improved asset loading and browser caching

### 🔧 **Developer Experience**
- **Vite 8** - Modern development server and production bundler
- **ESLint 10** - Latest linting with flat configuration format
- **Clean Development** - Professional console output without noise
- **Security First** - All dependencies audited and updated

## PRO Version Available [here](https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/?utm_source=github&utm_medium=readme&utm_campaign=architectui-html-upgrade&utm_content=pro-banner) 🏆

## Preview

![ArchitectUI Bootstrap 5 Free](.github/preview.webp)

## 🚀 Quick Start

### Installation
Download and Uncompress the theme package archive in your desired folder location.

Download and install Node.js LTS from https://nodejs.org/en/download/

Install the app dependencies by running the following command in the command line inside the folder root where you have unzipped the theme package archive.

```bash
npm install
```

After npm finishes installing the modules from package.json you can go ahead and start the application. To do so, run the command below.

```bash
npm run start
```

After the command starts, Vite will serve the template at **http://localhost:8080**.

### Production Build
To create a production optimized build run the command below:

```bash
npm run build
```

This creates the production-ready `architectui-html-free` folder. To preview that build locally, run:

```bash
npm run preview
```

## 🎯 **Key Features**

### **Modern Technology Stack**
- **Bootstrap 5.3.8** - Latest version with all features
- **jQuery 4.0.0** - Major modernization release
- **Chart.js 4.5.1** - Beautiful data visualizations
- **FontAwesome 7.3.1** - Latest icon library version
- **Sass 1.105.1** - Modern CSS preprocessing
- **Vite 8.3.4** - Modern build tooling

### **Components & Features**
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Real Google Maps** - 5 interactive locations, no API keys required
- ✅ **Chart Integration** - Beautiful data visualization with Chart.js
- ✅ **Calendar Component** - Full-featured event management
- ✅ **Form Elements** - Complete form components library
- ✅ **Navigation Systems** - Multiple menu styles
- ✅ **Card Components** - Flexible content containers
- ✅ **Button Variants** - Extensive button library
- ✅ **Icon Libraries** - FontAwesome 7, PE7, Linearicons
- ✅ **Animation Support** - Smooth transitions and effects

### **Developer Benefits**
- 🔒 **Security Focused** - Zero vulnerabilities
- 🚀 **Performance Optimized** - Fast loading times
- 🛠️ **Easy Customization** - Well-structured SASS files
- 📱 **Mobile Ready** - Responsive across all devices
- 🎨 **Theme Flexibility** - Multiple color schemes
- 🔧 **Modern Tooling** - Latest development tools

## 📁 **Project Structure**
```
architectui-html-theme-free/
├── src/
│   ├── assets/           # SASS, images, fonts
│   ├── DemoPages/        # HTML templates
│   ├── layout/           # Layout components
│   └── scripts-init/     # JavaScript modules
├── scripts/              # Page rendering utilities
├── architectui-html-free/ # Production build output
├── package.json          # Dependencies and scripts
└── vite.config.mjs       # Build configuration
```

## 🔄 **Upgrade from v4.1.0**
This version includes breaking improvements. For existing projects:

1. **Backup your customizations**
2. **Update dependencies**: `npm install`
3. **Review SASS changes** if you've customized themes
4. **Test your maps** - new implementation may require updates

## **Version History**
- **v4.9.0** (2026-10-08) - Vite 8 migration, webpack toolchain removal, dependency cleanup
- **v4.8.0** (2026-08-03) - PostCSS security patch, webpack-dev-server 6, chart + dev-server bug fixes
- **v4.7.0** (2026-06-19) - Full dependency refresh, Babel 8 + sass-loader 17, latest webpack/eslint/sass toolchain
- **v4.6.0** (2026-05-13) - Full dependency refresh, latest webpack/eslint/sass toolchain
- **v4.5.0** (2026-01-29) - jQuery 4.0 upgrade, all dependencies updated
- **v4.4.0** (2025-11-17) - Real Google Maps integration, improved UX
- **v4.3.0** (2025-09-17) - FontAwesome 7 upgrade, complete dependency refresh
- **v4.2.0** (2025-06-20) - Complete modernization, SASS future-proofing
- **v4.0.0** (2023-10-17) - React v18 migration, dependency upgrades
- **v3.1.0** (2022-08-22) - Library updates
- **v3.0.0** (2022-04-05) - WebPack v5 migration
- **v2.0.0** (2021-09-07) - Bootstrap v5 migration

## 🤝 **Contributing**
We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 **License**
Licensed under MIT. See [LICENSE](LICENSE) for details.

## 🔗 **Links**
- **Website**: [DashboardPack.com](https://dashboardpack.com)
- **Pro Version**: [ArchitectUI Pro](https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/?utm_source=github&utm_medium=readme&utm_campaign=architectui-html-upgrade&utm_content=footer-link)
- **Documentation**: Available with Pro version
- **Support**: [Contact Support](https://dashboardpack.com/contact)
