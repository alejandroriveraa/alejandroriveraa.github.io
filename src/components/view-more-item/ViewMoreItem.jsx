import React from "react"
import "./ViewMoreItem.css"
import "./ViewMoreItem.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../app-image/AppImage"
import { NavLink } from "react-router-dom"

function ViewMoreItem({src, header, path}) {
  const {t} = useTranslation()

  return (
    <div className="view-more-item">
      <div className="view-more-item__image">
        <AppImage src={src} />
      </div>
      <div className="view-more-item__header">
        <p>{header}</p>
      </div>
      <div className="view-more-item__button">
        {/* <NavLink to={path}>
          <button>
            {t("buttons.seeMore").toUpperCase()}
          </button>
        </NavLink> */}
        <button>
          <NavLink to={path}>
              {t("buttons.seeMore").toUpperCase()}
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default ViewMoreItem