import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'

const Layout = ({ children, title, hasHero = false, hideHeader = false }) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title ? `${title} 💕 kemily.love 💕` : `💕 kemily.love 💕`}
      meta={[
        {
          name: 'description',
          content: 'A love party for Kevin & Emily.',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: 'A love party for Kevin & Emily.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ]}
    />
    {!hideHeader && <Header hasHero={hasHero} />}
    <main>{children}</main>
  </>
)

export default Layout
