import React from 'react'
import { withPrefix } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

const Seo = ({ title, description }) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata()
  const metaTitle = title || siteTitle
  const metaDescription = description || siteDescription

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
    </>
  )
}

export default Seo
