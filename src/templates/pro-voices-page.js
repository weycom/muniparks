import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProVoicesPageTemplate = ({ title, subheading, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <main>
        <section className="grid page-header">
            <div className="full-width">
                <h1>{title}</h1>
                <p>{subheading}</p>
            </div>
        </section>
        <section>
            <PageContent className="content" content={content} />
        </section>
        </main>
    )
}

ProVoicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ProVoicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProVoicesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  )
}

ProVoicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProVoicesPage

export const ProVoicesPageQuery = graphql`
  query ProVoicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        subheading
      }
    }
  }
`
