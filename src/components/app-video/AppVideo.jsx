import React from "react"
import "./AppVideo.css"

function AppVideo({videoUrl, thumbnail}) {  
  return (
    <>
      <video src={videoUrl} poster={thumbnail} controls controlsList="nodownload noremoteplayback noplaybackrate muted" disablePictureInPicture/>
    </>
  )
}

export default AppVideo