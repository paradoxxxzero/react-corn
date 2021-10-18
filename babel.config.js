module.exports = function (api) {
  try {
    api.cache(true)
    // eslint-disable-next-line no-empty
  } catch (e) {}
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
