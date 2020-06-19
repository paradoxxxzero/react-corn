import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [
    ...rollupConfig.external,
    '@material-ui/core',
    '@material-ui/core/styles',
    '@material-ui/utils',
    '@material-ui/lab',
    'clsx',
    '@react-corn/core',
  ],
}
