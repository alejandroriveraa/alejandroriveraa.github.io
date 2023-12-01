import React from "react"
import "./AppVideo.css"
import "./AppVideo.responsive.css"

function AppVideo({videoUrl}) {
  return (
    <>
      <video src={videoUrl} controls/>
    </>
  )
}

export default AppVideo