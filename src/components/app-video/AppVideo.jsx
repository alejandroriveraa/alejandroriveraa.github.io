import React from "react"

function AppVideo({videoUrl, thumbnail}) {
  return (
    <>
      <video src={videoUrl} poster={thumbnail} controls/>
    </>
  )
}

export default AppVideo