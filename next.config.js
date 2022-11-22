const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { defaultLoaders } = options;

    const componentsDir = path.resolve(__dirname, "components");    
    const pagesDir = path.resolve(__dirname, "pages");
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.module.rules.push({
      test: /\.(js)$/,
      include: [componentsDir, pagesDir],
      use: [
        defaultLoaders.babel,
        {
          loader: 'babel-loader',
          options: {
            sourceMaps: true,
            plugins: [
              [
                'module-resolver',
                {
                  root: ['.'],
                  alias: {
                    styles: './styles'
                  },
                  cwd: 'babelrc'
                }
              ],
              [
                'wrap-in-js',
                {
                  extensions: ['css$', 'scss$']
                }
              ],
              [require.resolve('babel-plugin-macros')],
              [
                require.resolve('@babel/plugin-proposal-decorators'),
                { legacy: true }
              ],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-object-rest-spread'],
              ['@babel/plugin-proposal-private-methods', { loose: true }],
              [
                '@babel/plugin-proposal-private-property-in-object',
                { loose: true }
              ]
            ],
            presets: ['next/babel']
          }
        }
      ]
    })

    return config
  },
  env: {
    NEXT_PUBLIC_LOCALE: process.env.LOCALE,
  }
}

module.exports = nextConfig
