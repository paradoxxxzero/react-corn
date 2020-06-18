import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [
    ...rollupConfig.external,
    '@material-ui/core',
    '@material-ui/core/styles',
    '@material-ui/utils',
    '@material-ui/pickers',
    'clsx',
    'prop-types',
    'hoist-non-react-statics',
    'react-is',
    '@react-corn/core',
  ],
}
