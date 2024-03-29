export const caughtAttributes = [
  // Here are the attribute that should be duplicated to the input that might
  // be caught by the other fields
  'required',
  'error',
  'min',
  'max',
  'step',
]

export const muiTextFieldOnlyProps = [
  // TextField
  'autoComplete',
  'autoFocus',
  'children',
  'classes',
  'className',
  'color',
  'defaultValue',
  'disabled',
  'error',
  'FormHelperTextProps',
  'fullWidth',
  'helperText',
  'hiddenLabel',
  'id',
  'InputLabelProps',
  'inputProps',
  'InputProps',
  'inputRef',
  'label',
  'multiline',
  'name',
  'onChange',
  'placeholder',
  'required',
  'rows',
  'rowsMax',
  'select',
  'SelectProps',
  'type',
  'value',
  'variant',
]
export const muiFormControlProps = [
  // FormControl
  'children',
  'classes',
  'className',
  'color',
  'component',
  'disabled',
  'error',
  'fullWidth',
  'focused',
  'hiddenLabel',
  'margin',
  'required',
  // 'size',
  'variant',
]
export const muiTextFieldProps =
  muiTextFieldOnlyProps.concat(muiFormControlProps)

export const muiSliderProps = [
  'aria-label',
  'aria-labelledby',
  'aria-valuetext',
  'classes',
  'className',
  'color',
  'component',
  'defaultValue',
  'disabled',
  'getAriaLabel',
  'getAriaValueText',
  'marks',
  'max',
  'min',
  'name',
  'onChange',
  'onChangeCommitted',
  'onMouseDown',
  'orientation',
  'scale',
  'step',
  'ThumbComponent',
  'track',
  'value',
  'ValueLabelComponent',
  'valueLabelDisplay',
  'valueLabelFormat',
]

export const muiSwitchProps = [
  'classes',
  'className',
  'color',
  'edge',
  'size',
  'autoFocus',
  'checked',
  'checkedIcon',
  'classes',
  'className',
  'defaultChecked',
  'disabled',
  'icon',
  'id',
  'inputProps',
  'inputRef',
  'name',
  'onBlur',
  'onChange',
  'onFocus',
  'readOnly',
  'required',
  'tabIndex',
  'type',
  'value',
]

// Most are generated from https://material-ui.com/api/autocomplete/ by:
// [...table.querySelectorAll("tr td:first-of-type")].map(e => e.textContent.replace("*", "").trim())
export const muiAutocompleteProps = [
  'autoComplete',
  'autoHighlight',
  'autoSelect',
  'blurOnSelect',
  'ChipProps',
  'classes',
  'clearOnBlur',
  'clearOnEscape',
  'clearText',
  'clearIcon',
  'closeText',
  'debug',
  'defaultValue',
  'disableClearable',
  'disableCloseOnSelect',
  'disabled',
  'disabledItemsFocusable',
  'disableListWrap',
  'disablePortal',
  'filterOptions',
  'filterSelectedOptions',
  'forcePopupIcon',
  'freeSolo',
  'fullWidth',
  'getLimitTagsText',
  'getOptionDisabled',
  'getOptionLabel',
  'getOptionSelected',
  'groupBy',
  'handleHomeEndKeys',
  'id',
  'includeInputInList',
  'inputValue',
  'limitTags',
  'ListboxComponent',
  'ListboxProps',
  'loading',
  'loadingText',
  'multiple',
  'noOptionsText',
  'onChange',
  'onClose',
  'onHighlightChange',
  'onInputChange',
  'onOpen',
  'open',
  'openOnFocus',
  'openText',
  'options',
  'PaperComponent',
  'PopperComponent',
  'popupIcon',
  'renderGroup',
  'renderInput',
  'renderOption',
  'renderTags',
  'selectOnFocus',
  'size',
  'value',
]

export const useFilteredProps = (props, ...groups) => {
  // size should not be caught if it's int -> inputProps
  const filteredProps = groups.map(group =>
    Object.fromEntries(Object.entries(props).filter(([k]) => group.includes(k)))
  )
  const filteredKeys = filteredProps.map(o => Object.keys(o)).flat()

  return filteredProps.concat(
    Object.fromEntries(
      Object.entries(props).filter(
        ([k]) => caughtAttributes.includes(k) || !filteredKeys.includes(k)
      )
    )
  )
}
