/* global jest */

import { createSerializer } from '@emotion/jest'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('react-quill', () => ({
  __esModule: true,
  default: function ReactQUillMock() {
    return <div>React quill mock</div>
  },
}))
jest.mock('@mui/material/Slider', () => ({
  __esModule: true,
  default: function MuiSliderMock() {
    return <div>Mui slider mock</div>
  },
}))
jest.mock('@mui/material/TextareaAutosize', () => ({
  __esModule: true,
  default: {
    //  This is a forwardRef (since we can't use anything external)
    $$typeof: Symbol.for('react.forward_ref'),
    render: function TextareaAutosizeMock(props) {
      return <textarea {...props} />
    },
  },
}))

// eslint-disable-next-line no-undef
expect.addSnapshotSerializer(createSerializer())

initStoryshots()
