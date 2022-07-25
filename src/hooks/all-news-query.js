import { useStaticQuery, graphql } from "gatsby";

export const NewsQuery = () => {
    const { allWpNews } = useStaticQuery(
        graphql`query AllNews {
  allWpNews(sort: {fields: [date], order: DESC}) {
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
              gatsbyImageData(formats: [AUTO, WEBP, AVIF])
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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