import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'bundle-lwcmodule.js',
    format: 'es'
  },
  plugins: [nodeResolve()]
};