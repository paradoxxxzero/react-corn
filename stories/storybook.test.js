/* global jest */

import initStoryshots from '@storybook/addon-storyshots'
import React from 'react'

jest.mock('react-quill', () => ({
  __esModule: true,
  default: function ReactQUillMock() {
    return <div>React quill mock</div>
  },
}))
jest.mock('@material-ui/core/Slider', () => ({
  __esModule: true,
  default: function MuiSliderMock() {
    return <div>Mui slider mock</div>
  },
}))
jest.mock('@material-ui/core/TextareaAutosize', () => ({
  __esModule: true,
  default: {
    //  This is a forwardRef (since we can't use anything external)
    $$typeof: Symbol.for('react.forward_ref'),
    render: function TextareaAutosizeMock(props) {
      return <textarea {...props} />
    },
  },
}))

initStoryshots()
