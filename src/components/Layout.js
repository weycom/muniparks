import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const TemplateWrapper = ({ children }) => {
    return (
        <div className="page-wrapper">
            <Helmet>
            <html lang="en" />
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
            </Helmet>
        <Navbar />
        <div id="wrap">{children}</div>
        <Footer />
        </div>
  )
}

export default TemplateWrapper
