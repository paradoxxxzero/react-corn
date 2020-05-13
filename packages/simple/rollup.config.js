import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [...rollupConfig.external, 'styled-components', '@react-corn/core'],
}
