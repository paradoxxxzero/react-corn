# Changelog

## [Unreleased]

## [1.4.1] - 2020-12-02

### Fixed

- Broken rollup config

## [1.4.0] - 2020-12-02

### Added

- Picker component which can be a fieldset of checkbox or radio according to multiple attribute

### Fixed

- Materia-ui checkbox is now fixed and supports indeterminate state by default

## [1.3.16] - 2020-11-04

### Fixed

- Better sizing of autocomplete

## [1.3.15] - 2020-11-04

### Added

- Inline component in @react-corn/material-ui
- Make Autocomplete inlineable

## [1.3.14] - 2020-08-27

### Fixed

- Bad peer dependencies for @react-corn packages

## [1.3.13] - 2020-08-27

### Fixed

- Don't prevent submit when there are no changes. (This case should only happen when we don't honor the modified state on submit button and should be intentional in this case)

## [1.3.12] - 2020-08-24

### Added

- `onBlur` is now supported on useCorn

### Fixed

- Some extraneous `onChange` calls have been removed

## [1.3.11] - 2020-08-17

### Fixed

- Trim blank values in quill on every change, this prevent some undesired modified
- Handle size property collision between mui and input

## [1.3.10] - 2020-08-06

### Fixed

- Fix 3rd argument of onSubmit mixing null values and empty strings
- Minor problems

## [1.3.9] - 2020-07-02

### Fixed

- Fix "." considered as external

## [1.3.8] - 2020-07-02

### Added

- Add @react-corn/password-strength package to display and check password strength

## [1.3.7] - 2020-07-02

### Added

- Add password visibility toggler in simple and material-ui

### Fixed

- Remove all externals in rollup build
- Fix bad change comparison in reducer

## [1.3.6] - 2020-06-29

### Fixed

- Fix performance regression (onBlur prop was regenerated each render)

## [1.3.5] - 2020-06-19

### Fixed

- Money type could be null

## [1.3.4] - 2020-06-19

### Fixed

- Typo in useCorn onBlur dispatch
- Restore checked to false in material-ui Switch

## [1.3.3] - 2020-06-19

### Fixed

- @react-corn/material-ui-lab meta prop is now mapping from title
- @react-corn/material-ui-lab has now correct externals
- Add Money field for main ui packages

## [1.3.2] - 2020-06-19

- Rerelease all packages

## [1.3.1] - 2020-06-18

### Added

- Add useControlField to uniformize hidden input control fields
- Add a new package for @material-ui/lab based field containing the Autocomplete field

## [1.3.0] - 2020-06-18

Bad release

## [1.2.4] - 2020-06-12

### Fixed

- Fixed missing onBlur on quill
- Removed the need of regenerator runtime

## [1.2.3] - 2020-06-11

### Fixed

- Fixed extra dispatch on corn reducer on item change

## [1.2.2] - 2020-06-11

### Fixed

- Fixed material-ui-quill dependencies

## [1.2.1] - 2020-06-11

### Added

- New package @react-corn/material-ui-quill for react-quill integration in material-ui

### Changed

- material-ui-pickers now throw an explicit error when date-io context is not available

### Fixed

- material-ui-pickers withSeconds was not respected in DateTime

## [1.2.0] - 2020-06-10

### Added

- New package @react-corn/material-ui-pickers for @material-ui/pickers integration
- New package @react-corn/quill for react-quill (v2) integration

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

[unreleased]: https://github.com/paradoxxxzero/react-corn/compare/v1.4.1...HEAD
[1.4.1]: https://github.com/paradoxxxzero/react-corn/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.16...v1.4.0
[1.3.16]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.15...v1.3.16
[1.3.15]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.14...v1.3.15
[1.3.14]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.13...v1.3.14
[1.3.13]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.12...v1.3.13
[1.3.12]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.11...v1.3.12
[1.3.11]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.10...v1.3.11
[1.3.10]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.9...v1.3.10
[1.3.9]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.8...v1.3.9
[1.3.8]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.7...v1.3.8
[1.3.7]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.6...v1.3.7
[1.3.6]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.5...v1.3.6
[1.3.5]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.4...v1.3.5
[1.3.4]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.3...v1.3.4
[1.3.3]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/paradoxxxzero/react-corn/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/paradoxxxzero/react-corn/compare/v1.2.4...v1.3.0
[1.2.4]: https://github.com/paradoxxxzero/react-corn/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/paradoxxxzero/react-corn/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/paradoxxxzero/react-corn/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/paradoxxxzero/react-corn/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/paradoxxxzero/react-corn/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/paradoxxxzero/react-corn/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/paradoxxxzero/react-corn/compare/v1.0.0...v1.0.1
