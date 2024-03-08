import React, { useEffect, useState } from "react"
import "./Home.css"
import "./Home.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../../components/app-image/AppImage"
import AppCarousel from "../../components/app-carousel/AppCarousel"
import AppVideo from "../../components/app-video/AppVideo"
import { NavLink } from "react-router-dom"
import { cubacafeVideo } from "../../assets/videos/index.desktop"
import useAdaptiveImage from "../../useAdaptiveImage"

function Home() {
  const {t} = useTranslation()
  const { homeCafeCubano, homeOurCoffee, homeTuesteCubano, logoArriero, logoCohiba, logoGuantanamera, logoIslaGrande, logoMontecristo, logoProdigio, logoRegil, logoSerrano, logoTurquino, thumbnailCubacafe } = useAdaptiveImage()

  return (
    <div className="home">
      {/* carousel */}
      <div className="home__carousel">
        <AppCarousel />
      </div>

      {/* know-us */}
      <div className="home__know-us min-vp">
        <div className="home__know-us__content ctn">
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
          <AppVideo videoUrl={cubacafeVideo} thumbnail={thumbnailCubacafe} />
        </div>
      </div>

      {/* our-coffee */}
      <div className="home__our-coffee">
        <div className="home__our-coffee__card ctn">
          <div className="home__our-coffee__card__image"> 
            <AppImage src={homeOurCoffee} />
          </div>

          {/* Horizontal padding is putted on .(...)main__content since it has position: absolute. */}
          <div className="home__our-coffee__card__content">
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
              <AppImage src={logoCohiba} />
            </div>
            <div className="home__trademarks__brands__a__image">
              <AppImage src={logoMontecristo} />
            </div>
            <div className="home__trademarks__brands__a__image">
              <AppImage src={logoGuantanamera} />
            </div>
          </div>
          <div className="home__trademarks__brands__b">
            <div className="home__trademarks__brands__b__image">
              <AppImage src={logoSerrano} />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src={logoTurquino} />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src={logoArriero} />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src={logoIslaGrande} />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src={logoRegil} />
            </div>
            <div className="home__trademarks__brands__b__image">
              <AppImage src={logoProdigio} />
            </div>
          </div>
        </div>

        {/* seals */}
        <div className="home__trademarks__seals ctn">
            <div className="home__trademarks__seals__stc">
              <div className="seal-bg-image">
                <AppImage src={homeTuesteCubano} />
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
                <AppImage src={homeCafeCubano} />
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
