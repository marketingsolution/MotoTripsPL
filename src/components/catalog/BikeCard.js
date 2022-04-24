import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import { Link, navigate } from "gatsby"

import * as classes from "../../styles/bikeCard.module.css"
import FaArrowRight from "react-icons/fa"

export default function BikeCard({ data }) {
  const {
    id,
    category,
    image_url,
    make,
    model,
    page_url,
    rating,
    year_of_launch,
    power_ps,
    power_rpm,
  } = data
  return (
    <Card
      className={classes.container}
      key={id}
      // onClick={() => navigate(`/bikes/${id}`)}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {`${model} ${year_of_launch}`}
          </Typography>
          <div className={classes.descContainer}>
            <div className={classes.descItem}>
              <div>Power</div>
              <div>{`${power_ps}ps`}</div>
            </div>

            <div className={classes.descItem}>
              <div>Capacity</div>
              <div>{`${power_rpm}rpm`}</div>
            </div>
          </div>
          <Link className={classes.link} to={`/katalog-motocykli/${id}`}>
            <FaArrowRight width="15%" />
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}