import React, { useState } from "react"
import MultiRangeSlider from "multi-range-slider-react"
function RangeSlider({ minD, maxD, min, setMin, max, setMax, title }) {
  const [minValue, set_minValue] = useState(25)
  const [maxValue, set_maxValue] = useState(75)
  const handleInput = e => {
    setMin(e.minValue)
    setMax(e.maxValue)
  }

  return (
    <div
      style={{ border: "2px solid red", width: "300px" }}
      className="RangeSlider"
    >
      <div>{title}</div>
      <MultiRangeSlider
        min={minD}
        max={maxD}
        step={5}
        ruler={false}
        label={false}
        preventWheel={false}
        minValue={min}
        maxValue={max}
        onInput={e => {
          handleInput(e)
        }}
      />
      <div>{`${min}-${max}`}</div>
    </div>
  )
}

export default RangeSlider
