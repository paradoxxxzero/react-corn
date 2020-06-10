import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [
    ...rollupConfig.external,
    'react-quill',
    '@react-corn/core',
    'styled-components',
  ],
}
