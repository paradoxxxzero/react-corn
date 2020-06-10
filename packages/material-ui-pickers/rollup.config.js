import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [
    ...rollupConfig.external,
    '@material-ui/core',
    '@material-ui/core/styles',
    '@material-ui/pickers',
    'clsx',
    '@react-corn/core',
  ],
}
