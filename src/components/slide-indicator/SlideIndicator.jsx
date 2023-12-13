import React from "react"
import "./SlideIndicator.css"
import "./SlideIndicator.responsive.css"

function SlideIndicator({slides, selectedSlide}) {
  return (
    <div className="slide-indicator">
      {
        slides.map((element, index) => 
          index == selectedSlide
          ? <div key={index} className="slide-indicator__item" style={{backgroundColor: "white"}}/>
          : <div key={index} className="slide-indicator__item"/>
        )
      }
    </div>
  )
}

export default SlideIndicator