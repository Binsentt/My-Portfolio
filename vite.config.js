import { transformWithEsbuild } from 'vite';

export default {
  plugins: [
    {
      name: 'transform-js-files-as-jsx',
      async transform(code, id) {
        if (!/src\/.*\.js$/.test(id)) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          loader: 'jsx'
        });
      }
    }
  ]
};
