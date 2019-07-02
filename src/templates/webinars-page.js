import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WebinarsPageTemplate = ({ title, subheading, content, contentComponent }) => {
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

WebinarsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WebinarsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WebinarsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  )
}

WebinarsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WebinarsPage

export const webinarsPageQuery = graphql`
  query WebinarsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        subheading
      }
    }
  }
`
