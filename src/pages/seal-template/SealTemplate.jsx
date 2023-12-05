import React from "react"
import "./SealTemplate.css"
import "./SealTemplate.responsive.css"
import AppImage from '../../components/app-image/AppImage';

const SealTemplate = ({banner, header, content}) => {
  return (
    <div className="seal-template">
        <div className="seal-template__banner">
          <div className="seal-template__banner__image">
            <AppImage src={banner} />
          </div>
        </div>
        <div className="seal-template__content ctn min-vp">
          <div className="seal-template__content__header">
            <p>{header}</p>
          </div>
          <div className="seal-template__content__body">
            <p>{content}</p>
          </div>
        </div>
      </div>
  )
}

export default SealTemplate