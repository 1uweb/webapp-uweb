const withSass = require('@zeit/next-sass')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withSass(), {
            // You may only need to add assetPrefix in the production.
            assetPrefix: isProd ? 'https://cdn.uwe-barthel.net/cdn/' : ''
        }, {
            exportPathMap: async function (defaultPathMap) {
                return {
                    '/': { page: '/' },
                    '/ueber': { page: '/ueber' },
                    '/portfolio': { page: '/portfolio' },
                    '/impressum': { page: '/impressum' },
                    '/datenschutz': { page: '/ueber' },
                    '/404': { page: '/404' }
                }
            }
        }