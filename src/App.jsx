import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import OuterLayout from "./layouts/outer-layout/OuterLayout"
import InnerLayout from "./layouts/inner-layout/InnerLayout"
import NotFoundErrorPage from "./error-pages/not-found-error/NotFoundErrorPage"
import Home from "./pages/home/Home"
import WhoAreWe from "./pages/who-are-we/WhoAreWe"
import OurCoffee from "./pages/our-coffee/OurCoffee"
import BrandTemplate from "./pages/brand-template/BrandTemplate"
import SealTemplate from "./pages/seal-template/SealTemplate"
import { useTranslation } from "react-i18next"
import ScrollTop from "./components/scroll-top/ScrollTop"
import LoadingPage from "./components/loading-page/LoadingPage"
import Preloader from "./components/Preloader"
import { arrieroVideo, cohibaVideo, guantanameraVideo, montecristoVideo, prodigioVideo, serranoVideo,turquinoVideo} from "./assets/videos";
import useAdaptiveImage from "./useAdaptiveImage"

function App() {
  const {t} = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const {bannerArriero, bannerCafeCubano, bannerCohiba, bannerGuantanamera, bannerMontecristo, bannerProdigio, bannerSerrano, bannerTuesteCubano, bannerTurquino, logoArriero, logoCohiba, logoGuantanamera, logoMontecristo, logoProdigio, logoSerrano, logoTurquino,  thumbnailArriero, thumbnailCohiba, thumbnailGuantanamera, thumbnailMontecristo, thumbnailProdigio, thumbnailSerrano, thumbnailTurquino} = useAdaptiveImage()

  useEffect(() => {
    window.addEventListener("preloadComplete", () => setIsLoading(false))
  }, [])

  return (
    <>
      <LoadingPage isVisible={isLoading}/>
      <div className="app" style={isLoading ? {display: "none"} : null}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OuterLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="*" element={<InnerLayout/>}>
                <Route path="who-are-we" element={<WhoAreWe/>}/>
                <Route path="our-coffee" element={<OurCoffee/>}/>
                <Route path="seals/tueste-cubano" element={
                  <SealTemplate
                  banner={bannerTuesteCubano}
                  header={t("pages.stc.header")}
                  content={t("pages.stc.content")}
                  />
                }/>
                <Route path="seals/cafe-cubano" element={
                  <SealTemplate
                  banner={bannerCafeCubano}
                  header={t("pages.scc.header")}
                  content={t("pages.scc.content")}
                  />
                }/>
                <Route path="brands/cohiba" element={
                  <BrandTemplate 
                  backgroundColor={"--color-raisin-black"}
                  banner={bannerCohiba}
                  logo={logoCohiba}
                  category={t("pages.cohiba.category")}
                  video={cohibaVideo}
                  videoThumbnail={thumbnailCohiba}
                  slogan={t("pages.cohiba.header")}
                  description={t("pages.cohiba.content")}
                  format={t("pages.cohiba.format")}
                  />
                }/>
                <Route path="brands/guantanamera" element={
                  <BrandTemplate 
                  backgroundColor={"--color-persian-plum"}
                  banner={bannerGuantanamera}
                  logo={logoGuantanamera}
                  category={t("pages.guantanamera.category")}
                  video={guantanameraVideo}
                  videoThumbnail={thumbnailGuantanamera}
                  slogan={t("pages.guantanamera.header")}
                  description={t("pages.guantanamera.content")}
                  format={t("pages.guantanamera.format")}
                  />
                }/>
                <Route path="brands/montecristo" element={
                  <BrandTemplate
                  backgroundColor={"--color-deep-taupe"}
                  banner={bannerMontecristo}
                  logo={logoMontecristo}
                  category={t("pages.montecristo.category")}
                  video={montecristoVideo}
                  videoThumbnail={thumbnailMontecristo}
                  slogan={t("pages.montecristo.header")}
                  description={t("pages.montecristo.content")}
                  format={t("pages.montecristo.format")}
                  />
                }/>
                <Route path="brands/serrano" element={
                  <BrandTemplate
                  backgroundColor={"--color-dark-raspberry"}
                  banner={bannerSerrano}
                  logo={logoSerrano}
                  category={t("pages.serrano.category")}
                  video={serranoVideo}
                  videoThumbnail={thumbnailSerrano}
                  slogan={t("pages.serrano.header")}
                  description={t("pages.serrano.content")}
                  format={t("pages.serrano.format")}
                  />
                }/>
                <Route path="brands/turquino" element={
                  <BrandTemplate
                  backgroundColor={"--color-stpatricks-blue"}
                  banner={bannerTurquino}
                  logo={logoTurquino}
                  category={t("pages.turquino.category")}
                  video={turquinoVideo}
                  videoThumbnail={thumbnailTurquino}
                  slogan={t("pages.turquino.header")}
                  description={t("pages.turquino.content")}
                  format={t("pages.turquino.format")}
                  />
                }/>
                <Route path="brands/arriero" element={
                  <BrandTemplate
                  backgroundColor={"--color-persian-plum"}
                  banner={bannerArriero}
                  logo={logoArriero}
                  category={t("pages.arriero.category")}
                  video={arrieroVideo}
                  videoThumbnail={thumbnailArriero}
                  slogan={t("pages.arriero.header")}
                  description={t("pages.arriero.content")}
                  format={t("pages.arriero.format")}
                  />
                }/>
                <Route path="brands/prodigio" element={
                  <BrandTemplate
                  backgroundColor={"--color-old-burgundy"}
                  banner={bannerProdigio}
                  logo={logoProdigio}
                  category={t("pages.prodigio.category")}
                  video={prodigioVideo}
                  videoThumbnail={thumbnailProdigio}
                  slogan={t("pages.prodigio.header")}
                  description={t("pages.prodigio.content")}
                  format={t("pages.prodigio.format")}
                  />
                }/>
              </Route>
            </Route>
            <Route path="*" element={<NotFoundErrorPage/>}/>
          </Routes>
          <ScrollTop/>
          <Preloader/>
        </BrowserRouter>
      </div>
    </>
    )
}

export default App