const path = require('path')
const toPath = filePath => path.join(process.cwd(), filePath)
// https://github.com/mui-org/material-ui/issues/24282#issuecomment-796755133
module.exports = {
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-storysource'],
}
