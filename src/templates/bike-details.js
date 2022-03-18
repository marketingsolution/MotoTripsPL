import { graphql } from "gatsby"
import React from "react"
import BikeDetailTable from "../components/BikeDetailTable"
import Layout from "../components/Layout"
import * as classes from "../styles/bikeDetail.module.css"

function BikdeDetails({ data }) {
  console.log({ data })
  const {
    category,
    image_url,
    make,
    model,
    year_of_launch,
    rating,
    front_tyre,
    front_brakes,
    rear_tyre,
    rear_brakes,
    front_suspension,
    rear_suspension,
  } = data.mysqlBikes
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.header}>{model}</div>
        <div className={classes.route}>{`/katalog-motocykli/${model}`}</div>
        <div className={classes.main}>
          <div className={classes.content}>
            <img src={image_url} />
            <div className={classes.textContainer}>
              <div>Ducati DesertX Specs 2021</div>

              <div>
                The new Ducati DesertX is unveiled in the sixth and final
                episode of the Ducati World Première 2022 series online
                premieres. High ground clearance, a 21 '' front wheel and 18 ''
                rear, plus a long travel suspension: the DesertX is designed to
                cope with the most demanding terrain. Powered by the 11 °
                Testastretta engine, the new DesertX guarantees a comfortable,
                easy and safe ride in a variety of conditions, thanks to its
                obsessive attention to ergonomics, in-depth aerodynamic research
                as well as the latest generation technologies.
              </div>
            </div>
            <div></div>
          </div>
          <div className={classes.detail}>
            <div className={classes.item}>
              <div>Producer</div>
              <div>{make}</div>
            </div>
            <div className={classes.item}>
              <div>Year of Production</div>
              <div>{year_of_launch}</div>
            </div>
            <div className={classes.item}>
              <div>Type</div>
              <div>{category}</div>
            </div>

            <div className={classes.item}>
              <div>Rating</div>
              <div>{rating.substring(0, 3)}</div>
            </div>
          </div>
          <BikeDetailTable
            data={{
              title: "Wheels",
              table: {
                "Front tyre": front_tyre,
                "Front brakes": front_brakes,
                "Rear tyre": rear_tyre,
                "Rear brakes": rear_brakes,
              },
            }}
          />

          <BikeDetailTable
            data={{
              title: "Suspension",
              table: {
                Front: front_suspension,
                Back: rear_suspension,
              },
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BikePage($id: String) {
    mysqlBikes(id: { eq: $id }) {
      id
      page_url
      image_url
      make
      model
      year_of_launch
      category
      rating
      front_tyre
      front_brakes
      rear_brakes
      rear_brakes
      front_suspension
      rear_suspension
    }
  }
`

export default BikdeDetails
