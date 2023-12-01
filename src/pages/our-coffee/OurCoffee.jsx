import React from "react"
import "./OurCoffee.css"
import "./OurCoffee.responsive.css"
import { useTranslation } from "react-i18next"
import AppImage from "../../components/app-image/AppImage";

function OurCoffee() {
  const {t} = useTranslation()

  return (
    <div className="our-coffee">
        <div className="our-coffee__banner ctn">
          <div className="our-coffee__banner__image">
            <AppImage src="/images/banner-our-coffee.jpg" />
          </div>
        </div>
        <div className="our-coffee__content ctn min-hp min-vp">
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