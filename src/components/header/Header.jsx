import React from "react"
import "./Header.css"
import "./Header.responsive.css"
import NavigationPanel from "../navigation-panel/NavigationPanel"
import LanguageSelector from "../language-selector/LanguageSelector"
import Menu from "../menu/Menu"
import AppImage from "../app-image/AppImage"
import ThreeLineMenu from "../three-line-menu/ThreeLineMenu"

function Header() {
  return (
    <div className="header">
      <div className="header__content ctn min-hp">
        <div className="header__content__logo">
          <AppImage src="/images/logo-header.svg" />
        </div>
        <div className="header__content__panel">
          <NavigationPanel />
          <LanguageSelector />
        </div>
        <div className="header__content__menu">
          <Menu 
          main={null} 
          side={<ThreeLineMenu />}
          bodyItems={[<NavigationPanel />, <LanguageSelector />]}
          />
        </div>
      </div>
    </div>
  )
}

export default Header