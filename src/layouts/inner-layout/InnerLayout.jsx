import React from "react"
import "./InnerLayout.css"
import "./InnerLayout.responsive.css"
import {Outlet} from "react-router-dom"
import ViewMore from "../../components/view-more/ViewMore"

function InnerLayout() {
  return (
    <div className="inner-layout">
      <Outlet />
      <ViewMore />
    </div>
  )
}

export default InnerLayout