# Changelog

All notable changes to this project will be documented in this file.

## [4.9.0] - 2026-10-08

### ⚡ Tooling

- Replaced the webpack build/dev stack with **Vite 8**.
- Added a small Handlebars page renderer that keeps the existing 26 demo page templates and partials.
- Removed Babel, webpack loaders/plugins, `webpack-cli`, and `webpack-dev-server`.
- Added explicit jQuery global setup for legacy demo scripts that previously relied on webpack `ProvidePlugin`/`expose-loader`.
- Normalized Sass package imports by removing webpack-only `~` prefixes.

### 📦 Dependencies

- Removed unused direct dependencies: `@googlemaps/js-api-loader`, `animate.css`, `handlebars-loader`, and `wnumb`.
- Removed obsolete npm `overrides`; the Vite-based dependency tree audits clean without them.

### ✅ Verification

- `npm run lint` passes.
- `npm run build` passes and emits all 26 pages to `architectui-html-free`.
- `npm audit`: **0 vulnerabilities**.
- Vite dev server starts on `http://localhost:8080/` and serves HTML plus static assets.

## [4.8.0] - 2026-08-03

### 🔒 Security

Resolves the **PostCSS path traversal advisory** ([GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849), High) reported by Dependabot, plus every other outstanding advisory in the dependency tree. `npm audit` went from **16 vulnerabilities (2 critical, 6 high, 6 moderate, 2 low) to 0**.

- **postcss**: 8.5.14 → **8.5.25** — path traversal in previous-source-map auto-loading (`sourceMappingURL`) allowed arbitrary `.map` file disclosure. Reached transitively through `css-minimizer-webpack-plugin` → `cssnano`.
- **shell-quote** (critical), **websocket-driver** (critical), **brace-expansion**, **fast-uri**, **immutable**, **svgo**, **ws** (high), **http-proxy-middleware**, **launch-editor**, **qs**, **uuid**, **sockjs**, **webpack-dev-server** (moderate), **@babel/core**, **body-parser** (low) — all resolved.

An `overrides` block now pins security floors for `postcss`, `fast-uri`, `immutable`, `svgo` and `ws` so a fresh `npm install` cannot silently resolve back to a vulnerable release.

### 🐛 Fixed

- **Chart.js demo page would have rendered blank canvases on webpack ≥ 5.109.0.** From 5.109.0 the bundler eliminates side-effect-only imports (`import "./chartsjs-utils"`) when the module's only effect is writing to a global. That dropped `window.chartColors` from the production bundle, so every Chart.js canvas threw `Cannot read properties of undefined (reading 'red')` and drew nothing. `chartsjs-utils.js` now exports `chartColors` as a real binding and `chartjs.js` imports it; the global assignment is retained for backwards compatibility.
  - Bisected precisely: **5.108.4 is unaffected, 5.109.0 is the first bad version.** v4.7.0 shipped webpack 5.107.2 and was therefore **not** affected — this fix lands alongside the bump to 5.109.2.
- **Dev server failed to start on webpack-dev-server 6.** WDS 6 forwards `cwd: undefined` into `tinyglobby`, which overwrites its `process.cwd()` default and throws `ERR_INVALID_ARG_TYPE`. `watchFiles` now uses the object form with an explicit `cwd`.
- **Dead dev-server paths.** `static.directory` and `watchFiles` pointed at a `public/` folder that does not exist in this template. They now point at the real asset and template sources, so editing a `.hbs` file triggers a reload.
- Removed the manual `HotModuleReplacementPlugin`; `devServer.hot: true` applies it automatically and WDS 6 warns when it is added twice.
- Dropped the `resolutions` field — it is Yarn-only syntax that npm ignores, and `event-stream` is no longer in the dependency tree.

### 📦 Dependency Refresh

#### Production Dependencies

- **@fortawesome/fontawesome-free**: 7.2.0 → 7.3.1

#### Development Dependencies (Major Version Bump)

- **webpack-dev-server**: 5.2.5 → **6.0.0**

#### Development Dependencies (Minor/Patch)

- **eslint**: 10.5.0 → 10.8.0
- **html-webpack-plugin**: 5.6.7 → 5.6.8
- **sass**: 1.101.0 → 1.102.0
- **webpack**: 5.107.2 → 5.109.2
- **webpack-cli**: 7.0.3 → 7.2.2

#### Held Back (Deliberately)

- **@fullcalendar/core 7.x** — v7 is a re-architecture built on `@full-ui/headless-calendar`, and the `daygrid`/`timegrid`/`list`/`interaction` plugins this template uses are still published at 6.1.21. Core stays on the 6.x line so the plugin set matches.

### ⚙️ Requirements

`engines.node` is now **>= 22.15.0**, required by webpack-dev-server 6 (>= 22.15.0) and sass-loader 17 (>= 22.11.0).

### ✅ Verification

- Production build emits all 26 demo pages with zero errors
- All 26 pages loaded in headless Chromium — **zero console or page errors**
- Dev server starts and serves HTML, JS and assets (HTTP 200)
- `npm audit`: **0 vulnerabilities**

## [4.7.0] - 2026-06-19

### 📦 Dependency Refresh (All Latest Versions)

Another full sweep of the toolchain to the very latest releases on npm. Production build verified clean.

#### Production Dependencies

- **@fullcalendar/core**: 6.1.20 → 6.1.21
- **@fullcalendar/daygrid**: 6.1.20 → 6.1.21
- **@fullcalendar/interaction**: 6.1.20 → 6.1.21
- **@fullcalendar/list**: 6.1.20 → 6.1.21
- **@fullcalendar/timegrid**: 6.1.20 → 6.1.21
- **@googlemaps/js-api-loader**: 2.0.2 → 2.1.1

#### Development Dependencies (Major Version Bumps)

- **@babel/core**: 7.29.0 → 8.0.1
- **@babel/preset-env**: 7.29.5 → 8.0.2
- **sass-loader**: 16.0.8 → 17.0.0

#### Development Dependencies (Minor/Patch)

- **eslint**: 10.3.0 → 10.5.0
- **sass**: 1.99.0 → 1.101.0
- **webpack**: 5.106.2 → 5.107.2
- **webpack-cli**: 7.0.2 → 7.0.3
- **webpack-dev-server**: 5.2.4 → 5.2.5

### 🔧 Build Config

- **Babel 8 compatibility** — removed the now-defunct `bugfixes` option from `.babelrc`. Bugfix plugins are always enabled in Babel 8, and leaving the flag in place caused the build to fail.

### 🔒 Security

- `npm audit fix` applied for all non-breaking advisories
- 5 moderate advisories remain, all confined to the `webpack-dev-server` dependency chain (dev-only, never shipped in the production bundle). The only available "fix" is a major downgrade to `webpack-dev-server@1.x`, which would be a significant regression, so it was intentionally not applied.

### ✅ Verification

- Production build (`npm run build`) passes — all demo pages, JS entry chunks, and CSS bundle emit cleanly
- Webpack 5.107.2 compiled with only the pre-existing asset-size hints (unchanged from v4.6.0)

## [4.6.0] - 2026-05-13

### 📦 Dependency Refresh (All Latest Versions)

Comprehensive update of the entire toolchain to the very latest releases on npm. Build verified, zero vulnerabilities.

#### Production Dependencies

- **@fortawesome/fontawesome-free**: 7.1.0 → 7.2.0
- **@fullcalendar/core**: 6.1.19 → 6.1.20
- **@fullcalendar/daygrid**: 6.1.19 → 6.1.20
- **@fullcalendar/interaction**: 6.1.19 → 6.1.20
- **@fullcalendar/list**: 6.1.19 → 6.1.20
- **@fullcalendar/timegrid**: 6.1.19 → 6.1.20

#### Development Dependencies (Major Version Bumps)

- **copy-webpack-plugin**: 13 → 14
- **css-minimizer-webpack-plugin**: 7 → 8
- **eslint**: 9 → 10
- **eslint-webpack-plugin**: 5 → 6
- **webpack-cli**: 6 → 7

#### Development Dependencies (Minor/Patch)

- **@babel/core**: 7.28.6 → 7.29.0
- **@babel/preset-env**: 7.28.6 → 7.29.5
- **babel-loader**: 10.0.0 → 10.1.1
- **css-loader**: 7.1.3 → 7.1.4
- **handlebars**: 4.7.8 → 4.7.9
- **html-webpack-plugin**: 5.6.6 → 5.6.7
- **mini-css-extract-plugin**: 2.10.0 → 2.10.2
- **sass**: 1.97.3 → 1.99.0
- **sass-loader**: 16.0.6 → 16.0.8
- **webpack**: 5.104.1 → 5.106.2
- **webpack-dev-server**: 5.2.3 → 5.2.4

### 🔒 Security
- **Zero vulnerabilities** — full `npm audit` clean after refresh
- Regenerated `package-lock.json` against the latest registry metadata

### ✅ Verification
- Production build (`npm run build`) passes — all 26 HTML pages, 7 JS entry chunks, and CSS bundle emit cleanly
- Webpack 5.106.2 compiled with only the pre-existing asset-size hints (unchanged from v4.5.0)

## [4.5.0] - 2026-01-29

### 🚀 Major Upgrade: jQuery 4.0

- **jQuery 4.0.0** - First major jQuery release in over a decade
  - Removed deprecated APIs and internal methods
  - ES modules internally, smaller bundle size
  - Improved CSP (Content Security Policy) support
  - Dropped IE 10 and older support
- **MetisMenu 3.1.0** - Updated to version requiring jQuery 4.0+
- **Simplified dropdown handler** - Replaced internal `$._data()` API usage with simpler stopPropagation approach

### 📦 Dependency Updates (All Latest Versions)

#### Production Dependencies
- **jquery**: 3.7.1 → 4.0.0 (major)
- **metismenu**: 3.0.7 → 3.1.0

#### Development Dependencies
- **@babel/core**: 7.28.5 → 7.28.6
- **@babel/preset-env**: 7.28.5 → 7.28.6
- **@fullcalendar/core**: 6.1.19 → 6.1.20
- **@fullcalendar/daygrid**: 6.1.19 → 6.1.20
- **@fullcalendar/interaction**: 6.1.19 → 6.1.20
- **@fullcalendar/list**: 6.1.19 → 6.1.20
- **@fullcalendar/timegrid**: 6.1.19 → 6.1.20
- **css-loader**: 7.1.2 → 7.1.3
- **css-minimizer-webpack-plugin**: 7.0.4 (new)
- **eslint**: 9.39.1 → 9.39.2
- **html-webpack-plugin**: 5.6.4 → 5.6.6
- **mini-css-extract-plugin**: 2.9.4 → 2.10.0
- **sass**: 1.94.0 → 1.97.3
- **webpack**: 5.102.1 → 5.104.1
- **webpack-dev-server**: 5.2.2 → 5.2.3

### 🔒 Security
- **Zero vulnerabilities** - All packages audited and secure
- **lodash** updated to fix prototype pollution vulnerability

### 🏗️ Production Build Fixes

- **Fixed CSS extraction** - Production builds now properly extract CSS to separate file
  - CSS output: `./assets/styles/main.css` (462KB minified)
  - HTML pages now include `<link>` tag for CSS
- **Added CSS minification** - Using `css-minimizer-webpack-plugin` for optimal CSS compression
- **Fixed webpack configuration**:
  - Updated to use `--env production/development` flags
  - Fixed deprecated `CleanWebpackPlugin` API usage
  - Fixed `MiniCssExtractPlugin.loader` syntax (replaced deprecated `.extract()`)
  - Set proper `mode: 'production'` for production builds
- **Modern browser targeting** - Updated `.babelrc` to target only modern browsers
  - Targets: last 2 versions of Chrome, Firefox, Safari, Edge
  - Eliminates unnecessary polyfills (~9KB savings)
  - Removes `@babel/plugin-transform-classes` transforms
  - Removes `Array.prototype.indexOf` polyfills

### 📊 Chart.js Improvements

- **Fixed HMR error** - Resolved "Cannot set properties of undefined" error on initial page load
- **Fixed NaN error in production** - Charts in hidden tabs no longer cause `scale(NaN)` errors
- **Deferred chart initialization** - Charts in hidden tabs are only created when tabs become visible
  - Added `isElementVisible()` check before creating charts
  - Added `shown.bs.tab` event listener for lazy chart initialization
- **Added charts to secondary tabs**:
  - Sales Report "Current" tab: Horizontal bar chart with categories
  - Bandwidth Reports "Tab 2": Line chart with bandwidth in/out data

### 🎨 Design System Improvements

#### New Utility Classes

- **New design-system utilities SCSS** - Centralized utility classes for consistent styling
- **Container height utilities** - `.chart-container`, `.chart-container-sm`, `.chart-container-lg`, `.map-container`
- **Spacing utilities** - `.divider-spacing` replaces inline `margin-bottom: 30px`
- **Card variants** - `.card-dark` for dark background cards
- **Shadow utilities** - `.shadow-theme`, `.shadow-theme-right`, `.shadow-theme-inverse`
- **Opacity scale variables** - Standardized opacity values for consistent transparency
- **Replaced 20+ inline styles** with utility classes across templates

#### Color Consistency (50+ fixes)

- **Replaced hardcoded rgba() values** with SASS variables across all theme files
- **Sidebar themes** - Now use `rgba($white, .x)` and `rgba($black, .x)` instead of numeric values
- **Header themes** - Consistent color management with SASS variables
- **Main themes** - Use Bootstrap gray scale variables (`$gray-100`, `$gray-800`, etc.)
- **Buttons** - Fixed hardcoded `#f5f5f5` to use `$light` variable
- **Cards/Popovers** - Consistent black/white rgba values
- **Badges** - Fixed `rgba(#333)` to use `$gray-800`
- **Helpers** - Updated hardcoded colors to SASS variables
- **Toastr** - Fixed hardcoded `#cccccc` to `$gray-400`

#### New Button Shadow Mixin

- Added `@mixin btn-shadow($color, $intensity)` for consistent button shadows
- Supports 'default', 'hover', and 'outline-hover' intensity levels

### 🛠️ Dashboard Improvements

- **Functional card tabs** - Dashboard card tabs now work with Bootstrap 5 native tab system
- **Sales Report card** - Added working "Last" and "Current" tabs with Chart.js visualizations
- **Bandwidth Reports card** - Added working "Tab 1" and "Tab 2" with line charts
- Uses proper `data-bs-toggle="tab"` attributes for Bootstrap 5 compatibility
- **Consistent tab sizing** - Secondary tabs have matching content to prevent resize on switch

### 🔧 Code Changes

- Refactored `src/app.js` dropdown click handler for jQuery 4.0 compatibility
- Removed usage of undocumented `$._data()` internal API
- Added `expose-loader` to webpack config for proper jQuery global exposure with ES modules
- Updated webpack ProvidePlugin to use `['jquery', 'default']` syntax for jQuery 4.0
- Updated `package.json` scripts to pass environment flags to webpack
- Updated version to v4.5.0 in `base.hbs` HTML comment header

### 📁 Build Output

| File            | Size  |
| --------------- | ----- |
| main.css        | 462KB |
| main.js         | 161KB |
| chart_js.js     | 216KB |
| fullcalendar.js | 260KB |
| scrollbar.js    | 95KB  |
| toastr.js       | 86KB  |
| maps.js         | 80KB  |
| demo.js         | 78KB  |

## [4.4.0] - 2025-11-17

### 🗺️ Maps Component Enhancement
- **Real Google Maps Integration** - Replaced CSS-based placeholders with actual Google Maps iframe embeds
- **No API Key Required** - Uses Google's free iframe embed system with standard watermarks
- **Five Global Locations**:
  - Tokyo, Japan (Satellite View)
  - New York, USA (Standard View)
  - London, UK (City Map)
  - Paris, France (Location Map)
  - San Francisco, USA (City Map)
- **Professional Appearance** - Fully interactive maps with zoom, pan, and street view capabilities
- **Improved User Experience** - Real map data instead of CSS gradients and placeholder graphics

### 📦 Bundle Optimization
- **Reduced maps.js size**: 882KB → 854KB (28KB improvement)
- **Cleaner implementation**: Removed complex CSS animations in favor of native Google Maps interactivity
- **Better performance**: iframes load on-demand with lazy loading attributes

### 📝 Documentation Updates
- Clarified that `@googlemaps/js-api-loader` package is not used (can be removed)
- Added comprehensive maps documentation for developers

### 🔧 Technical Details
- Maps now use Google Maps Embed API (completely free, no quota limits)
- Each map is fully interactive with Google's standard controls
- Proper responsive design maintained across all devices
- Lazy loading implemented for optimal performance
- All map locations tested and verified working

## [4.3.0] - 2025-09-17

### Major Updates
- **Complete dependency refresh** - All packages updated to September 2025 versions
- **FontAwesome 7 migration** - Successfully upgraded from FontAwesome 6.7.2 to 7.0.1
- **Latest build tools** - Webpack, Sass, and ESLint updated to current versions
- **Zero vulnerabilities** - All security issues resolved with latest dependencies

### Package Updates

#### Production Dependencies
- **@fortawesome/fontawesome-free**: 6.7.2 → 7.0.1 (major version upgrade)
- **Bootstrap**: 5.3.7 → 5.3.8
- **@fullcalendar/core**: 6.1.17 → 6.1.19
- **@fullcalendar/daygrid**: 6.1.17 → 6.1.19
- **@fullcalendar/interaction**: 6.1.17 → 6.1.19
- **@fullcalendar/list**: 6.1.17 → 6.1.19
- **@fullcalendar/timegrid**: 6.1.17 → 6.1.19
- **@googlemaps/js-api-loader**: 1.16.8 → 1.16.10

#### Development Dependencies
- **@babel/core**: 7.27.4 → 7.28.4
- **@babel/preset-env**: 7.27.2 → 7.28.3
- **ESLint**: 9.29.0 → 9.35.0
- **Sass**: 1.89.2 → 1.92.1
- **Webpack**: 5.99.9 → 5.101.3
- **Mini CSS Extract Plugin**: 2.9.2 → 2.9.4

### Technical Improvements
- **FontAwesome 7 Integration**: Updated SASS configuration to use new module syntax with proper namespacing
- **Build Optimization**: Both development and production builds compile successfully
- **Compatibility**: Resolved variable conflicts between FontAwesome 7 and Bootstrap 5
- **Font Loading**: Fixed webfont path resolution for FontAwesome 7

### Bug Fixes
- Fixed FontAwesome 7 font path issues with new Sass module configuration
- Resolved SASS variable conflicts by namespacing FontAwesome imports
- Corrected webfont loading paths for production builds

### Verified Functionality
- Development server runs without errors
- Production build completes successfully
- All HTML pages generate properly
- FontAwesome icons render correctly on all pages

## [4.2.0] - 2025-06-20

### 🚀 Major Updates
- **Complete dependency modernization** - All npm packages updated to latest versions
- **SASS future-proofing** - Migrated from deprecated SASS syntax to modern `@use` modules
- **Enhanced security** - Fixed all security vulnerabilities (0 vulnerabilities detected)
- **Modern tooling** - Upgraded to ESLint v9 with flat configuration
- **Performance optimizations** - Reduced bundle sizes and improved build times

### ✨ New Features
- **Enhanced Maps Component** - Completely rebuilt with 5 interactive map examples
  - CSS-based satellite terrain map
  - Interactive demo with animations
  - Multiple cities markers display
  - Custom gradient styling
  - Interactive controls demo
- **Improved Favicon Support** - Proper favicon serving and webpack integration
- **Better Development Experience** - Clean console output with no 404 errors

### 🔧 Technical Improvements
#### Package Updates
- **Bootstrap**: 5.3.5 → 5.3.7
- **Chart.js**: 4.4.8 → 4.5.0
- **Webpack**: 5.88.2 → 5.99.9
- **Babel Core**: 7.26.10 → 7.27.4
- **CSS Loader**: 6.11.0 → 7.1.2
- **SASS**: 1.86.3 → 1.89.2
- **ESLint**: 8.57.1 → 9.29.0
- And 15+ other package updates

#### SASS Modernization
- Replaced deprecated `map-merge()` with `map.merge()`
- Replaced deprecated `divide()` with `math.div()`
- Added modern `@use` statements for SASS modules
- Eliminated 500+ deprecation warnings in custom theme files
- Future-proof code ready for SASS 3.0

#### Dependency Optimization
- **Removed**: `moment.js` (unused, 67KB bundle reduction)
- **Replaced**: `gmaps` with modern `@googlemaps/js-api-loader`
- **Enhanced**: Security with latest package versions
- **Maintained**: Full backward compatibility

### 🐛 Bug Fixes
- Fixed broken maps implementation that relied on expired API keys
- Resolved favicon 404 errors in development
- Eliminated console source map warnings
- Fixed webpack dev server security vulnerabilities

### 💼 Developer Experience
- **ESLint v9** with modern flat config format
- **Zero security vulnerabilities** in all dependencies
- **Clean console output** during development
- **Optimized build process** with faster compilation
- **Better error handling** in map components

### 📦 Bundle Improvements
- **Reduced main bundle size**: 1.87 MiB → 1.82 MiB (50KB improvement)
- **Eliminated unused dependencies** for better performance
- **Modern ES modules** for better tree-shaking
- **Optimized asset loading** with proper webpack configuration

### 🎯 Migration Benefits
- **Future-proof codebase** ready for upcoming SASS and build tool updates
- **Enhanced security posture** with latest dependency versions
- **Improved development workflow** with modern tooling
- **Better performance** through optimized dependencies
- **Clean code architecture** following modern best practices

## [4.0.0] - 2023-10-17

### Changed
- Migrated to React v18
- Upgraded all dependencies

## [3.1.0] - 2022-08-22

### Changed
- Updated the library

## [3.0.0] - 2022-04-05

### Changed
- Migrated to WebPack v5

## [2.0.0] - 2021-09-07

### Changed
- Migrated to Bootstrap v5

## [1.2.3] - 2021-05-19

### Added
- Added mapbox-gl plugin

### Fixed
- Resolved alert dismissing issue
- Resolved card image issue
- Resolved Fontawesome icon issue

## [1.0.0] - 2019-01-17

### Added
Initial release of the project.
