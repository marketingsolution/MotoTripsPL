import { useStaticQuery, graphql } from "gatsby";

export const NewsQuery = () => {
    const { allWpNews } = useStaticQuery(
        graphql`query News {
  allWpNews(sort: {fields: [date], order: DESC}, limit: 12) {
    nodes {
      title
      slug
      lead
      id
      link
      date(formatString: "DD.MM.YYYY r.")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF],
                placeholder: BLURRED,
                layout: FULL_WIDTH)
              
            }
          }
        }
      }
    }
  }
}
`
    )
    return allWpNews.nodes
}