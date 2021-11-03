import * as React from "react"


function NewsView({ news }) {
  return (
    <div>
      
      <main>
        <h1>{news.title}</h1>
        <p>
          {news.lead}
        </p>
       
      </main>
     
    </div>
  )
}

export default NewsView