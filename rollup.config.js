import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import path from 'path'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: id => !(id.startsWith('.') || id.startsWith(path.resolve('.'))),
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
}
