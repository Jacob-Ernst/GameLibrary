import * as esbuild from 'esbuild';

const [, , WATCH] = process.argv;

const shouldWatch = WATCH === '--watch' || false;

const config = {
  entryPoints: ['app/javascript/*.*', 'app/javascript/pages/*.*'],
  define: {
    'process.env.ROOT_URL': JSON.stringify(
      process.env.ROOT_URL || 'http://localhost',
    ),
  },
  bundle: true,
  sourcemap: true,
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  loader: {
    '.js': 'jsx',
  },
};

if (shouldWatch) {
  const ctx = await esbuild.context(config);

  await ctx.watch();
} else {
  await esbuild.build(config);
}
