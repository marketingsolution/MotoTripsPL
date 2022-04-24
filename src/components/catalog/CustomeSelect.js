import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"

function CustomeSelect({
  name = "",
  value = "",
  title = "",
  data = [],
  handleChange,
}) {
  return (
    <FormControl
      style={{ width: "auto", minWidth: "300px", margin: "5px 10px" }}
      className={"classes.margin"}
    >
      <InputLabel id="demo-customized-select-label">{title}</InputLabel>
      <Select
        variant="outlined"
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        name={name}
        autoWidth={true}
        onChange={handleChange}
        //   input={<TextField />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map(el => {
          return (
            <MenuItem key={el.id} value={el.id}>
              {el.name}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default CustomeSelect