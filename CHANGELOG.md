# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-01-12

### Added
- Basic test suite (`test.js`) with 10 validation tests
- `.gitignore` file to exclude unnecessary files from version control
- `.npmignore` file to reduce package size and exclude development files
- `CHANGELOG.md` to track version history
- Repository, bugs, and homepage fields in `package.json`
- Node.js engine requirement specification (>= 14.0.0)
- Additional keywords for better npm discoverability
- Smart branch handling - automatically creates branches if they don't exist
- Validation to check if in a git repository before operations
- Check for clean working directory to avoid empty commits
- Automatic upstream tracking when pushing branches

### Changed
- **BREAKING FIX**: Corrected logic flow - now checks out branch BEFORE committing (was committing first, then checking out)
- Improved error handling with more descriptive error messages
- Enhanced commit message validation
- Better user feedback with informative console messages
- Updated description in `package.json` for clarity
- Synchronized version numbers between `package.json` (2.1.0) and `index.js` (2.1.0)
- Updated README with badges, better documentation, and fixed broken links
- Removed MIT license reference (package uses ISC license)

### Removed
- Self-dependency bug - package no longer depends on itself (`npm-git-helper` removed from dependencies)

### Fixed
- Critical bug where branch checkout happened after commit (now correctly happens before)
- Missing repository information in package metadata
- Version mismatch between files
- Documentation inconsistencies and broken links
- Test script that always failed (now runs actual tests)

## [2.0.1] - 2024

### Changed
- Minor updates and improvements

## [1.0.0] - 2024

### Added
- Initial release
- Basic `push` command for staging, committing, and pushing changes
- Commander.js integration for CLI interface
- Simple-git integration for Git operations
- Binary command `git-helper`
- Basic README documentation
- ISC License

[2.1.0]: https://github.com/Leslie-23/git-helper/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/Leslie-23/git-helper/releases/tag/v2.0.1
[1.0.0]: https://github.com/Leslie-23/git-helper/releases/tag/v1.0.0
