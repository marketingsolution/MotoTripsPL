import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'

const TripPost = ({ data }) => {
    return (
        <Layout>
            <Breadcrumb title={data.mdx.frontmatter.title} path="/trasy-motocyklowe" pathName="Trasy Motocyklowe" />
            <h1>{data.mdx.frontmatter.title}</h1>
            <div className="row">
              <MDXRenderer>
                  {data.mdx.body}
              </MDXRenderer>
            </div>
        </Layout>
    )
}


export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
export default TripPost