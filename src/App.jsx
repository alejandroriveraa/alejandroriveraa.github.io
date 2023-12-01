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

function App() {
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
              <Route path="brands/cohiba" element={<BrandTemplate />}/>
              <Route path="brands/montecristo" element={<BrandTemplate />}/>
              <Route path="brands/guantanamera" element={<BrandTemplate />}/>
              <Route path="brands/serrano" element={<BrandTemplate />}/>
              <Route path="brands/turquino" element={<BrandTemplate />}/>
              <Route path="brands/arriero" element={<BrandTemplate />}/>
              <Route path="brands/prodigio" element={<BrandTemplate />}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App