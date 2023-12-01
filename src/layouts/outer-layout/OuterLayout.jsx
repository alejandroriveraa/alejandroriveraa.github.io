import React from "react"
import "./OuterLayout.css"
import "./OuterLayout.responsive.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import {Outlet} from "react-router-dom"

function OuterLayout() {
  return (
    <div className="outer-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default OuterLayout