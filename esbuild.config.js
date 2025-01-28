const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './bundle.js',
  target: ['es2020'],
  platform: 'browser',
  globalName: 'AWS',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  minify: true,
}).catch(() => process.exit(1));