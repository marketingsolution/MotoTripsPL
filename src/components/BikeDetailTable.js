import React from "react"
import * as classes from "../styles/bikeDetailTable.module.css"

// const data = {
//   title: "Suspension",
//   table: {
//     Front: "Kayaba upside-down diameter 46mm and stroke 230mm, adjustable",
//     Back: "Monoshock Kayaba, 220mm travel, adjustable",
//   },
// }

function BikeDetailTable({ data }) {
  console.log(data)
  const { title, table } = data
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div>
        {Object.entries(table).map(el => {
          const [key, value] = el
          return (
            <div className={classes.item}>
              <div>{key}</div>
              <div>{value?.trim() || "No Data"}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BikeDetailTable
