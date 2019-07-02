import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

    return (
        <section className="grid-wrapper feed">
            {posts && posts.map(({ node: post }) => (
                <article className={`${
                      post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                    <figcaption>
                        <h3>
                            <Link to={post.fields.slug}>
                            {post.frontmatter.title}
                            </Link>
                        </h3>
                        <p>{post.frontmatter.date}</p>
                        <p>
                        {post.frontmatter.description}
                        &nbsp;
                        <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                        </Link>
                        </p>
                    </figcaption>
                    {post.frontmatter.featuredimage ? (
                    <figure>
                        <Link to={post.fields.slug}>
                        <PreviewCompatibleImage
                        imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${
                                post.title
                            }`,
                        }} />
                        </Link>
                    </figure>
                    ) : null}
                </article>
            ))}
        </section>
        )
    }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
