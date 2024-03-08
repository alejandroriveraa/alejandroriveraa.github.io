import React from "react"
import "./OurCoffee.css"
import "./OurCoffee.responsive.css"
import { useTranslation } from "react-i18next"
import AppImage from "../../components/app-image/AppImage";
import useAdaptiveImage from "../../hooks/useAdaptiveImage";

function OurCoffee() {
  const {t} = useTranslation()
  const {bannerOurCoffee} = useAdaptiveImage()

  return (
    <div className="our-coffee">
        <div className="our-coffee__banner ctn">
          <div className="our-coffee__banner__image">
            <AppImage src={bannerOurCoffee} />
          </div>
        </div>
        <div className="our-coffee__content ctn min-vp">
          <div className="our-coffee__content__header">
            <p>{t("pages.ourCoffee.header").toUpperCase()}</p>
          </div>
          <div className="our-coffee__content__body">
            <p>{t("pages.ourCoffee.content.a")}</p>
          </div>
          <div className="our-coffee__content__body">
            <p>{t("pages.ourCoffee.content.b")}</p>
          </div>
          <div className="our-coffee__content__body">
            <p>{t("pages.ourCoffee.content.c")}</p>
          </div>
        </div>
    </div>
  )
}

export default OurCoffee