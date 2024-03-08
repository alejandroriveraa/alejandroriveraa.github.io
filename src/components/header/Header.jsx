import React from "react"
import "./Header.css"
import "./Header.responsive.css"
import NavigationPanel from "../navigation-panel/NavigationPanel"
import LanguageSelector from "../language-selector/LanguageSelector"
import Menu from "../menu/Menu"
import AppImage from "../app-image/AppImage"
import ThreeLineMenu from "../three-line-menu/ThreeLineMenu"
import { NavLink } from "react-router-dom"
import useAdaptiveImage from "../../hooks/useAdaptiveImage"

function Header() {
  const {logoHeader} = useAdaptiveImage()

  return (
    <div className="header">
      <div className="header__content ctn">
        <div className="header__content__logo">
          <NavLink to={"/"}>
            <AppImage src={logoHeader}/>
          </NavLink>
        </div>
        <h2 style={{marginRight: "auto", backgroundColor: "red", color: "beige", borderRadius: "3px", padding: "0 6px 0 6px"}}>DEV</h2>
        <div className="header__content__panel">
          <NavigationPanel/>
        <LanguageSelector/>
        </div>
        <div className="header__content__menu">
          <Menu
          main={null}
          side={<ThreeLineMenu/>}
          bodyItems={[<NavigationPanel/>, <LanguageSelector/>]}
          />
        </div>
      </div>
    </div>
  )
}

export default Header