import React from "react"
import "./WhoAreWe.css"
import "./WhoAreWe.responsive.css"
import { useTranslation } from "react-i18next"
import AppImage from "../../components/app-image/AppImage"
import useAdaptiveImage from "../../useAdaptiveImage"

function WhoAreWe() {
  const {t} = useTranslation()
  const { bannerWhoAreWe, logoCubacafe} = useAdaptiveImage()

  return (
    <div className="who-are-we">
        <div className="who-are-we__banner ctn">
          <div className="who-are-we__banner__image">
            <AppImage src={bannerWhoAreWe}/>
          </div>
        </div>
        <div className="who-are-we__content ctn min-vp">
          <div className="who-are-we__content__logo">
            <AppImage src={logoCubacafe}/>
          </div>
          <div className="who-are-we__content__header">
            <p>{t("pages.whoAreWe.header").toUpperCase()}</p>
          </div>
          <div className="who-are-we__content__body">
            <p>{t("pages.whoAreWe.content")}</p>
          </div>
        </div>
    </div>
  )
}

export default WhoAreWe