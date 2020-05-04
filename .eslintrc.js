module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    browser: true,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/sort': 'error',
    'import/order': 'off',
    'react/prop-types': 'off',
  },
}
