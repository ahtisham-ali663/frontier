var path = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: 'sass-loader',
        options: {
          additionalData: '$env: STORYBOOK;',
        },
      },
    ],
  })
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./'),
  ];
  return config
}

