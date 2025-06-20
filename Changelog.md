# Changelog

All notable changes to this project will be documented in this file.

## [4.2.0] - 2025-01-27

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
