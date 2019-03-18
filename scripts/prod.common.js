import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/index.tsx',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      exclude: ['*.d.ts', 'stories'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    sass(),
  ],
  output: {
    sourcemap: true,
    exports: 'named',
    name: 'react-sortable-pane',
    globals: {
      react: 'React',
      're-resizable': 'Resizable',
      'react-draggable': 'Draggable',
    },
  },
  external: ['react', 're-resizable', 'react-draggable'],
};