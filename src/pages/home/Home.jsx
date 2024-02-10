import React from "react"
import "./Home.css"
import "./Home.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../../components/app-image/AppImage"
import AppCarousel from "../../components/app-carousel/AppCarousel"
import AppVideo from "../../components/app-video/AppVideo"
import { NavLink } from "react-router-dom"

function Home() {
  const {t} = useTranslation()

  return (
    <div className="home">
      {/* carousel */}
      <div className="home__carousel">
        <AppCarousel />
      </div>

      {/* know-us */}
      <div className="home__know-us min-vp">
        <div className="home__know-us__content ctn min-hp">
          <div className="home__know-us__content__header">
            <div className="home__know-us__content__header__a">
              <p>{t("pages.home.knowUs.header.a")}</p>
            </div>
            <div className="home__know-us__content__header__b">
              <p>{t("pages.home.knowUs.header.b")}</p>
            </div>
          </div>
          <div className="home__know-us__content__body">
            <p>{t("pages.home.knowUs.content")}</p>
          </div>
          <div className="home__know-us__content__link">
            <NavLink to="/who-are-we">
              {t("buttons.knowWhoWeAre").toUpperCase()}
            </NavLink>
          </div>
        </div>
        <div className="home__know-us__video ctn">
          <AppVideo videoUrl={"/videos/sample-video-compressed.mp4"} thumbnail={"/images/thumbnail-cubacafe.jpg"} />
        </div>
      </div>

      {/* our-coffee */}
      <div className="home__our-coffee">
        <div className="home__our-coffee__card ctn">
          <div className="home__our-coffee__card__image"> 
            <AppImage src={"/images/home-our-coffee.jpg"} />
          </div>

          {/* Horizontal padding is putted on .(...)main__content since it has position: absolute. */}
          <div className="home__our-coffee__card__content min-hp">
            <div className="home__our-coffee__card__content__header">
              <p>{t("pages.home.ourCoffee.header").toUpperCase()}</p>
            </div>
            <div className="home__our-coffee__card__content__body">
              <p>{t("pages.home.ourCoffee.content")}</p>
            </div>
            <div className="home__our-coffee__card__content__link">
              <NavLink to="/our-coffee">
                {t("buttons.readMore").toUpperCase()}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
      {/* trademarks */}
      <div className="home__trademarks min-vp">
        <div className="home__trademarks__header ctn">
          <p>{t("pages.home.brands.header").toUpperCase()}</p>
        </div>
        
        {/* brands */}
        <div className="home__trademarks__brands ctn">
          <div className="home__trademarks__brands__a">
            <div className="home__trademarks__brands__a__image">
              <AppImage src="/images/logo-cohiba.svg" />
            </div>
            <div className="home__trademarks__brands__a__image">
              <AppImage src="/images/logo-montecristo.svg" />
            </div>
            <div className="home__trademarks__brands__a__image">
              <AppImage src="/images/logo-guantanamera.svg" />
            </div>
          </div>
          <div className="home__trademarks__brands__b">
            <div className="home__trademarks__brands__b__image">
              <AppImage src="/images/logo-serrano.svg" />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src="/images/logo-turquino.svg" />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src="/images/logo-arriero.svg" />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src="/images/logo-isla-grande.svg" />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src="/images/logo-regil.svg" />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src="/images/logo-prodigio.svg" />
            </div>
          </div>
        </div>

        {/* seals */}
        <div className="home__trademarks__seals ctn">
            <div className="home__trademarks__seals__stc">
              <div className="seal-bg-image">
                <AppImage src="/images/home-tueste-cubano.jpg" />
              </div>
              <div className="seal-content">
                <div className="seal-content__header">
                  <p>{t("seals.tuesteCubano").toUpperCase()}</p>
                </div>
                <div className="seal-content-link">
                  <NavLink to={"/seals/tueste-cubano"}>
                    {t("buttons.seeMore").toUpperCase()}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="home__trademarks__seals__scc">
              <div className="seal-bg-image">
                <AppImage src="/images/home-cafe-cubano.jpg" />
              </div>
              <div className="seal-content">
                <div className="seal-content__header">
                  <p>{t("seals.cafeCubano").toUpperCase()}</p>
                </div>
                <div className="seal-content-link">
                  <NavLink to={"/seals/cafe-cubano"}>
                    {t("buttons.seeMore").toUpperCase()}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
