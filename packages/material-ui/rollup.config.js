import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [...rollupConfig.external, '@material-ui/core', '@react-corn/core'],
}
