import React from "react"
import "./Footer.css"
import "./Footer.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../app-image/AppImage"
import { NavLink } from "react-router-dom"
import useAdaptiveImage from "../../useAdaptiveImage"

function Footer() {
  const {t} = useTranslation()
  const { logoFooter, logoGroup, logoInstagram } = useAdaptiveImage()

  return (
    <div className="footer">
      <div className="footer__a">
        <div className="footer__a__content ctn">
          <div className="footer__a__content__logo">
            <AppImage src={logoFooter} />
          </div>
          <div className="footer__a__content__contact">
            <div className="footer__a__content__contact__header">
              <p>{t("footer.contactUs").toUpperCase()}</p>
            </div>
            <div className="footer__a__content__contact__body">
              <div className="footer__a__content__contact__body__item">
                <p>{t("footer.phone")}</p>
              </div>
              <div className="footer__a__content__contact__body__item">
                <p>{t("footer.email")}</p>
              </div>
              <div className="footer__a__content__contact__body__sm">
                <div className="footer__a__content__contact__body__sm__follow">
                  <p>{t("footer.followUs")}</p>
                </div>
                <div className="footer__a__content__contact__body__sm__icon">
                  <NavLink to={"https://www.instagram.com/maestros.del.cafe.cubacafe?igsh=MWwwczJnaTI3dXUyZg=="}>
                    <AppImage src={logoInstagram} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__a__content__group-logo">
            <AppImage src={logoGroup} />
          </div>
        </div>
      </div>
      
      <div className="footer__b">
        <div className="footer__b__content ctn">
          <div className="footer__b__content__item">
            <p>{t("footer.copyright.a")}</p>
          </div>
          <div className="footer__b__content__item">
            <p>{t("footer.copyright.b")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer