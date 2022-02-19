import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function YouTube({ src }) {
  const videoId = src
    .match(
      /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i
    )[1]
    .trim()

  return (
    <>
      <iframe
        width="100%"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <StaticQuery
        query={graphql`
          {
            youtube {
              schema {
                id
                publishedAt
                uploadDate
                channelId
                title
                name
                description
                channelTitle
                categoryId
                liveBroadcastContent
                defaultAudioLanguage
                interactionStatistic {
                  userInteractionCount
                }
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
                thumbnailUrl
                tags
                localized {
                  description
                  title
                }
                
              }
            }
          }
        `}
        render={data => {
          const schema =
            Array.isArray(data.youtube.schema) &&
            data.youtube.schema.find(schema => schema.id === videoId)

          return (
            schema && (
              <Helmet>
                <script type="ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    embedUrl: src,
                    ...schema,
                  })}
                </script>
              </Helmet>
            )
          )
        }}
      />
    </>
  )
}
