require('dotenv').config()
const fs = require('fs')

module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kemily.love',
        short_name: 'kemily.love',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_KEMILY,
        tables: [
          {
            baseId: 'appFyLZt7WbjjBrpU',
            tableName: 'Website photos',
            tableView: 'Grid view',
            mapping: { Photos: 'fileNode' },
          },
          {
            baseId: 'appFyLZt7WbjjBrpU',
            tableName: 'RSVP',
            tableView: 'Published photos',
            mapping: {
              Photos: 'fileNode',
            },
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
