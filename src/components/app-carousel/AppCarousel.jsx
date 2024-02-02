import React, {useEffect, useState} from "react"
import "./AppCarousel.css"
import "./AppCarousel.responsive.css"
import AppImage from "../app-image/AppImage"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import SlideIndicator from "../slide-indicator/SlideIndicator"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

function AppCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
      startIndex: 1,
      duration: 40,
    }, 
    [
      Autoplay({delay: 3000}),
    ]
  )
  const {t} = useTranslation()
  const [selectedSlide, setSelectedSlide] = useState(0)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedSlide(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          {/* Cohiba */}
          <div className="slide cohiba">
            <div className="slide__image desktop">
              <AppImage src={"/images/carousel-image-01.jpg"} />
            </div>
            <div className="slide__image mobile">
              <AppImage src={"/images/carousel-image-01-mobile.jpg"} />
            </div>
            <div className="slide__content">
              <div className="slide__content__header">
                <p>{t("pages.home.carousel.a.header.a").toUpperCase()}</p>
                <p>{t("pages.home.carousel.a.header.b").toUpperCase()}</p>
                <p>{t("pages.home.carousel.a.header.c").toUpperCase()}</p>
              </div>            
              <div className="slide__content__body">
                <p>{t("pages.home.carousel.a.body.a")}</p>
                <p>{t("pages.home.carousel.a.body.b")}</p>
              </div>
              <div className="slide__content__button">
                <button>
                  <NavLink to="/brands/cohiba">
                    {t("pages.home.carousel.a.button").toUpperCase()}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>

          {/* Coffee Embassador */}
          <div className="slide coffee-embassador">
            <div className="slide__image">
              <div className="slide__image desktop">
                <AppImage src={"/images/carousel-image-02.jpg"} />
              </div>
              <div className="slide__image mobile">
                <AppImage src={"/images/carousel-image-02-mobile.jpg"} />
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content__header">
                <p>{t("pages.home.carousel.b.header.a").toUpperCase()}</p>
                <p>{t("pages.home.carousel.b.header.b").toUpperCase()}</p>
              </div>
              <div className="slide__content__body">
                <p>{t("pages.home.carousel.b.body.a")}</p>
                <p>{t("pages.home.carousel.b.body.b")}</p>
                <p>{t("pages.home.carousel.b.body.c")}</p>
                <p>{t("pages.home.carousel.b.body.d")}</p>
              </div>
              <div className="slide__content__button">
                <button>
                  <NavLink to={"/brands/guantanamera"}>
                    {t("pages.home.carousel.b.button").toUpperCase()}
                  </NavLink>
                </button>
              </div>

            </div>
          </div>

          {/* Cubacafe */}
          <div className="slide cubacafe">
            <div className="slide__image">
              <AppImage src={"/images/carousel-image-03.jpg"} />
            </div>
            <div className="slide__content">
              <div className="slide__content__logo">
                <AppImage src={"/images/logo-cubacafe.svg"}/>
              </div>
              <div className="slide__content__button">
                <button>
                  <NavLink to={"/who-are-we"}>
                    {t("pages.home.carousel.c.button").toUpperCase()}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          emblaApi && (
            <SlideIndicator slides={emblaApi.slideNodes()} selectedSlide={selectedSlide}  />
          )
        }
      </div>
    </div>
  )
}

export default AppCarousel