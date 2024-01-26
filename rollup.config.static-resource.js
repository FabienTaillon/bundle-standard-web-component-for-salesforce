import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'bundle-staticresource.js',
    format: 'iife'
  },
  plugins: [nodeResolve()]
};