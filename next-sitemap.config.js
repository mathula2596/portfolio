/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mathula.vercel.app', 
    generateRobotsTxt: true,
    changefreq: 'weekly', 
    sitemapSize: 5000, 
    priority: 1.0, 
    exclude: [], 
    additionalPaths: async (config) => {
        return [
            {
                loc: '/', // Root URL
                changefreq: 'weekly',
                priority: 1.0,
            },
            {
                loc: '/#about',
                changefreq: 'weekly',
                priority: 1.0,
            },
            {
                loc: '/#skill',
                changefreq: 'weekly',
                priority: 1.0,
            },
            {
                loc: '/#portfolio',
                changefreq: 'weekly',
                priority: 1.0,
            },
            {
                loc: '/blogs',
                changefreq: 'daily',
                priority: 1.0,
            },
            {
                loc: '/#contact',
                changefreq: 'weekly',
                priority: 1.0,
            },
        ];
    },
  };
  