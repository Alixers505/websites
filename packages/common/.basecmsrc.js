module.exports = {
  babelLoader: {
    exclude: file => (
      /node_modules\/(?!@base-cms\/marko-web\/browser)/.test(file)
      && !/packages\/common\/browser/.test(file)
      && !/\.vue\.js/.test(file)
    ),
    debug: true,
  },
};
