const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  headers: {
    '*': {
      Expires: new Date(Date.now() + 86400000).toUTCString(),
    },
  },
}
module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    dirs: ['components', 'constant', 'layouts', 'libs', 'pages', 'scripts', 'utils'],
  },
  images: {
    domains: ['i.scdn.co'],
  },
  typescript: { tsconfigPath: './tsconfig.json' },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
