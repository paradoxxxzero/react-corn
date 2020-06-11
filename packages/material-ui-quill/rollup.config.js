import rollupConfig from '../../rollup.config.js'
export default {
  ...rollupConfig,
  external: [
    ...rollupConfig.external,
    'clsx',
    '@react-corn/core',
    '@react-corn/material-ui',
    '@react-corn/quill',
    '@material-ui/core',
    '@material-ui/core/Input/Input',
    '@material-ui/core/FilledInput/FilledInput',
    '@material-ui/core/OutlinedInput/OutlinedInput',
    '@material-ui/core/OutlinedInput/NotchedOutline',
    '@material-ui/core/styles',
  ],
}
