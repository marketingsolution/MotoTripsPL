import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function YouTube() {
  return (
    <StaticQuery
      query={graphql`
        {
          youtube {
            schema {
              publishedAt
              channelId
              title
              description
              channelTitle
              categoryId
              liveBroadcastContent
              defaultAudioLanguage
              thumbnails {
                default {
                  height
                  url
                  width
                }
                high {
                  height
                  url
                  width
                }
                maxres {
                  height
                  url
                  width
                }
                medium {
                  height
                  url
                  width
                }
                standard {
                  height
                  url
                  width
                }
              }
              tags
              localized {
                description
                title
              }
            }
          }
        }
      `}
      render={data =>
        data.youtube.schema && (
          <Helmet>
            <script type="ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                ...data.youtube.schema,
              })}
            </script>
          </Helmet>
        )
      }
    />
  )
}
