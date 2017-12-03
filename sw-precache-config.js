// we overwrite the default service worker config to enable runtimeCaching
module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/**/*.html',
    'build/**/*.svg',
    'build/**/*.jpg',
    'build/**/*.png',
    'build/**/*.ico',
    'build/**/*.json',
    'build/**/*.woff',
    'build/**/*.woff2',
    'build/**/*.eot',
    'build/**/*.ttf',
    'build/static/**/!(*map*)',
    'build/manifest.json'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  // any external urls you wish to cache (e.g. CDN)
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/source.unsplash.com/,
      handler: 'cacheFirst'
    }
  ]
}
