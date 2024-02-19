import React from "react"
import "./OurCoffee.css"
import "./OurCoffee.responsive.css"
import { useTranslation } from "react-i18next"
import AppImage from "../../components/app-image/AppImage";
import { bannerOurCoffee } from "../../assets/images";

function OurCoffee() {
  const {t} = useTranslation()

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