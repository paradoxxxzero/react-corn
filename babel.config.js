module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      { modules: process.env.NODE_ENV === 'test' ? 'auto' : false },
    ],
  ]

  return {
    presets,
  }
}
