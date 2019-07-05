import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <div className="page-wrapper">
            <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143367766-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-143367766-1');
            </script>
            </Helmet>
        <Navbar />
        <div id="wrap">{children}</div>
        <Footer />
        </div>
  )
}

export default TemplateWrapper
