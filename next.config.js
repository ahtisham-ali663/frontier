/**
 * @type {import('next').NextConfig}
 */
const withPlugins = require('next-compose-plugins')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
// const optimizedImages = require('next-optimized-images');
const isProduction = process.env.NODE_ENV === 'production'
const basePath = '/pages'
module.exports = withPlugins([], {
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      return config
    } else if (!isProduction) {
      return config
    }
    // else if (isProduction) {
    //   config.optimization.splitChunks.cacheGroups.commons.minChunks = 10;
    //   return config
    // }
    // config.plugins.push(
    //   new webpack.optimize.LimitChunkCountPlugin({
    //     maxChunks: 3,
    //   }),
    // )
    // config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
    return config
  },
  basePath,
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [420, 768, 1366],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    domains: [
      'frontier.com',
      'tundra.frontier.redventures.io',
      'frontier.com',
      'stoqapaasrg-634540-cdn-endpoint.azureedge.net',
      'vsgstoqarg-539670-cdn-endpoint.azureedge.net',
      'vsgprdstopaasrg-151210-cdn-endpoint.azureedge.net',
    ],
    minimumCacheTTL: 600,
  },
  swcMinify: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|woff|gif|ttf)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
      {
        source: '/:all*(js|css|scss)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
      {
        source: '/pp_fonts/:all*(eot|otf|ttf|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  env: {
    BRIGHTCOVE_ACCOUNT_ID: process.env.BRIGHTCOVE_ACCOUNT_ID,
    BRIGHTCOVE_PLAYER_ID: process.env.BRIGHTCOVE_PLAYER_ID,
    PREDICTIVE_BASE_URL: process.env.PREDICTIVE_BASE_URL,
    PREDICTIVE_API_KEY: process.env.PREDICTIVE_API_KEY,
    PREDICTIVE_API_PASSWORD: process.env.PREDICTIVE_API_PASSWORD,
    FRONTIER_BASE_URL: process.env.FRONTIER_BASE_URL,
  },
  publicRuntimeConfig: {
    basePath,
  },
})
