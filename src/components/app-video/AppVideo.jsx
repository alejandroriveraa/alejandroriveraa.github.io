import React from "react"

function AppVideo({videoUrl}) {
  return (
    <>
      <video src={videoUrl} controls/>
    </>
  )
}

export default AppVideo