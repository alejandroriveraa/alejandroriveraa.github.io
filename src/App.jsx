import React from "react"
import "./App.css"
import "./App.responsive.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import OuterLayout from "./layouts/outer-layout/OuterLayout"
import InnerLayout from "./layouts/inner-layout/InnerLayout"
import NotFoundErrorPage from "./error-pages/not-found-error/NotFoundErrorPage"
import Home from "./pages/home/Home"
import WhoAreWe from "./pages/who-are-we/WhoAreWe"
import OurCoffee from "./pages/our-coffee/OurCoffee"
import BrandTemplate from "./pages/brand-template/BrandTemplate"
import SealTemplate from "./pages/seal-template/SealTemplate"
import {useTranslation} from "react-i18next"

function App() {
  const {t} = useTranslation()
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OuterLayout />}>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<InnerLayout />}>
              <Route path="who-are-we" element={<WhoAreWe />}/>
              <Route path="our-coffee" element={<OurCoffee />}/>
              <Route path="seals/tueste-cubano" element={<SealTemplate />}/>
              <Route path="seals/cafe-cubano" element={<SealTemplate />}/>
              <Route path="brands/cohiba" element={
                <BrandTemplate 
                backgroundColor={"--color-raisin-black"}
                banner={"/images/banner-cohiba.jpg"}
                logo={"/images/logo-cohiba.svg"}
                category={t("pages.cohiba.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.cohiba.header")}
                description={t("pages.cohiba.content")}
                format={t("pages.cohiba.format")}
                />
              }/>
              <Route path="brands/guantanamera" element={
                <BrandTemplate 
                backgroundColor={"--color-persian-plum"}
                banner={"/images/banner-guantanamera.jpg"}
                logo={"/images/logo-guantanamera.svg"}
                category={t("pages.guantanamera.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.guantanamera.header")}
                description={t("pages.guantanamera.content")}
                format={t("pages.guantanamera.format")}
                />
              }/>
              <Route path="brands/montecristo" element={
                <BrandTemplate
                backgroundColor={"--color-deep-taupe"}
                banner={"/images/banner-montecristo.jpg"}
                logo={"/images/logo-montecristo.svg"}
                category={t("pages.montecristo.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.montecristo.header")}
                description={t("pages.montecristo.content")}
                format={t("pages.montecristo.format")}
                />
              }/>
              <Route path="brands/serrano" element={
                <BrandTemplate
                backgroundColor={"--color-dark-raspberry"}
                banner={"/images/banner-serrano.jpg"}
                logo={"/images/logo-serrano.svg"}
                category={t("pages.serrano.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.serrano.header")}
                description={t("pages.serrano.content")}
                format={t("pages.serrano.format")}
                />
              }/>
              <Route path="brands/turquino" element={
                <BrandTemplate
                backgroundColor={"--color-stpatricks-blue"}
                banner={"/images/banner-turquino.jpg"}
                logo={"/images/logo-turquino.svg"}
                category={t("pages.turquino.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.turquino.header")}
                description={t("pages.turquino.content")}
                format={t("pages.turquino.format")}
                />
              }/>
              <Route path="brands/arriero" element={
                <BrandTemplate
                backgroundColor={"--color-persian-plum"}
                banner={"/images/banner-arriero.jpg"}
                logo={"/images/logo-arriero.svg"}
                category={t("pages.arriero.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.arriero.header")}
                description={t("pages.arriero.content")}
                format={t("pages.arriero.format")}
                />
              }/>
              <Route path="brands/prodigio" element={
                <BrandTemplate
                backgroundColor={"--color-old-burgundy"}
                banner={"/images/banner-prodigio.jpg"}
                logo={"/images/logo-prodigio.svg"}
                category={t("pages.prodigio.category")}
                video={"/videos/sample-video-compressed.mp4"}
                slogan={t("pages.prodigio.header")}
                description={t("pages.prodigio.content")}
                format={t("pages.prodigio.format")}
                />
              }/>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App