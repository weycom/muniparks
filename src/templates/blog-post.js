import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO'

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    label,
    author,
    date,
    image,
    featured,
    helmet
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            <SEO title={title} description={description} image={image}/>
            {helmet || ''}
            <article className="article">
                <div className="article-header-wrapper">
                <span className="article-label">{label}</span>
                <h1>{title}</h1>
                <p>{description}</p>
                </div>
                <cite className="byline">
                    By {author} | <time datetime="{date}">{date}</time>
                </cite>
                <PostContent content={content} />
            </article>
        </section>
    )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        label={post.frontmatter.label}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Muniparks">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        title
        label
        description
        tags
        author
      }
    }
  }
`