module.exports = {
  publicPath: '/',
  productionSourceMap: false,

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    200: {
      entry: 'src/main.js',
      template: 'public/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },

  configureWebpack: {
    externals: {
      moment: 'moment',
    },
  },
};
