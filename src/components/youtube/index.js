import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function YouTube({ src }) {
  if (typeof src === "string" && src !== "") {
    const videoParts = src.match(
      /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i
    )

    if (Array.isArray(videoParts) && videoParts.length > 1) {
      const videoId = videoParts[1].trim()

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
                    viewCount
                    regionsAllowed
                  }
                }
              }
            `}
            render={data => {
              const schema =
                Array.isArray(data.youtube.schema) &&
                data.youtube.schema.find(schema => schema.id === videoId)
              const { id, viewCount, ...rest } = schema

              return (
                schema && (
                  <Helmet>
                    <script type="ld+json">
                      {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
                        embedUrl: src,
                        ...rest,
                        interactionStatistic: {
                          "@type": "InteractionCounter",
                          interactionType: { "@type": "WatchAction" },
                          userInteractionCount: viewCount,
                        },
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
  }

  return null
}
