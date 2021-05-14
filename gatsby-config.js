require('dotenv').config()

module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    /*{
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kemily.love',
        short_name: 'kemily.love',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },*/
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Karla:wght@200;300;700', 'Spectral:wght@700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: 'appFyLZt7WbjjBrpU',
            tableName: 'Website photos',
            tableView: 'Grid view',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
