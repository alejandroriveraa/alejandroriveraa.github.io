import React from "react"
import "./BrandTemplate.css"
import "./BrandTemplate.responsive.css"
import AppImage from "../../components/app-image/AppImage"
import AppVideo from "../../components/app-video/AppVideo"

function BrandTemplate({
  backgroundColor,
  banner,
  logo,
  category,
  video,
  videoThumbnail,
  slogan,
  description,
  format
}) {
  return (
    <div className="brand-template" style={{backgroundColor: `var(${backgroundColor})`}}>
      <div className="brand-template__banner">
        <div className="brand-template__banner__image">
          <AppImage src={banner}/>
        </div>
      </div>
      <div className="brand-template__content ctn min-vp">
        <div className="brand-template__content__logo">
          <AppImage src={logo}/>
        </div>
        <div className="brand-template__content__category">
          <p>{category}</p>
        </div>
        <div className="brand-template__content__video">
          <AppVideo videoUrl={video} thumbnail={videoThumbnail}/>
        </div>
        <div className="brand-template__content__slogan">
          <p>{slogan}</p>
        </div>
        <div className="brand-template__content__description">
          <p>{description}</p>
        </div>
        <div className="brand-template__content__format">
          <p>{format}</p>
        </div>
      </div>
    </div>
  )
}

export default BrandTemplate