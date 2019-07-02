import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
        <Layout>
            <section className="grid page-header">
                <div className="full-width">
                    <h1>Research Briefs</h1>
                    <p>Insights and pragmatic solutions from Parks and Recreation research.</p>
                </div>
            </section>
            <BlogRoll />
        </Layout>
        )
    }
}