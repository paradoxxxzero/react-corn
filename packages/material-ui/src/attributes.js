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
  'onBlur',
  'onChange',
  'onFocus',
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
  'size',
  'variant',
]
export const muiTextFieldProps = muiTextFieldOnlyProps.concat(
  muiFormControlProps
)

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

export const useFilteredProps = (props, ...groups) => {
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
