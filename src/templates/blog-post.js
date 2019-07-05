import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO'

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    date,
    image,
    label,
    author
}) => {
    const PostContent = contentComponent || Content

    return (
        <Layout>
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
        </Layout>
    )
}

BlogPostTemplate.propTypes = {
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
     let { markdownRemark: post } = data;

    post = Object.assign({}, post, post.fields, post.frontmatter)

    return (
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.description}
            helmet={
                <SEO
                isBlogPost={true}
                    postData={post}
                    postImage={post.image}
                />}
            tags={post.tags}
            title={post.title}
            date={post.date}
            image={post.image}
            label={post.label}
            author={post.author}
        />
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
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        label        
        author
      }
    }
  }
`
