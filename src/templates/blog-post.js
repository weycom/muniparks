import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    label,
    author,
    date,
    helmet
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
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
                {/*
                {tags && tags.length ? (
                    <div style={{ marginTop: `4rem` }}>
                        <h4>Tags</h4>
                        <ul className="taglist">
                        {tags.map(tag => (
                            <li key={tag + `tag`}>
                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                ) : null}
                */}
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
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
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
        title
        label
        description
        tags
        author
      }
    }
  }
`
