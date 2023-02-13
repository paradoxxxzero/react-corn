import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import path from 'path'

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  external: id => !(id.startsWith('.') || id.startsWith(path.resolve('.'))),
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
}
