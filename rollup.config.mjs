import pkg from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: [
    {
      name: 'libraryBundleName',
      file: pkg.main,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [terser(), typescript({ outDir: 'dist' })],
};
