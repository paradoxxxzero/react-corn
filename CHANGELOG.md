# Changelog

## [Unreleased]

### Added

- New package @react-corn/material-ui-pickers for @material-ui/pickers integration

## [1.1.0] - 2020-06-09

### Added

- Add method="post" on form by default.
- Export object functions too
- onSubmit now allow returning a boolean or an object containing external errors, can also return a promise returning the latter.
- Add names (form field names) as last argument of onChange and onSubmit
- Only reset field error on prop change when prop is one of the input validation attributes

### Changed

- **BREAKING** Rename reset function to onReset.
- Lower opacity of simple field when disabled or readonly

## [1.0.1] - 2020-06-04

[unreleased]: https://github.com/paradoxxxzero/react-corn/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/paradoxxxzero/react-corn/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/paradoxxxzero/react-corn/compare/v1.0.0...v1.0.1
