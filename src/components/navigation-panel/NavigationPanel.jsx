import React from "react"
import "./NavigationPanel.css"
import "./NavigationPanel.responsive.css"
import Menu from "../menu/Menu";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BRAND_LINKS, SEAL_LINKS} from "../../utils";
import AppImage from "../app-image/AppImage";

function NavigationPanel() {
  const {t} = useTranslation()

  const activeLinkStyle = {
    opacity: "50%"
  };

  const [menuAOpen, setMenuAOpen] = React.useState(false);
  const [menuBOpen, setMenuBOpen] = React.useState(false);

  return (
    <div className="navigation-panel">
      <div className="navigation-panel__item">
        <NavLink style={({isActive}) => isActive ? activeLinkStyle: null} to="/">{t("header.a").toUpperCase()}</NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink style={({isActive}) => isActive ? activeLinkStyle: null} to="/who-are-we">{t("header.b").toUpperCase()}</NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink style={({isActive}) => isActive ? activeLinkStyle: null} to="/our-coffee">{t("header.c").toUpperCase()}</NavLink>
      </div>
      <div className="navigation-panel__item">
        <Menu 
        main={<p>{t("header.d").toUpperCase()}</p>} 
        side={<AppImage src={"/images/icon-arrow-down-white.svg"}/>}
        bodyItems={SEAL_LINKS.map(i => <NavLink to={i.to}>{i.text.toUpperCase()}</NavLink>)}
        currentMenuState={menuAOpen}
        setCurrentMenuState={setMenuAOpen}
        setOffOtherMenu={setMenuBOpen}
        />
      </div>
      <div className="navigation-panel__item">
        <Menu 
        main={<p>{t("header.e").toUpperCase()}</p>} 
        side={<AppImage src={"/images/icon-arrow-down-white.svg"}/>}
        bodyItems={BRAND_LINKS.map(i => <NavLink to={i.to}>{i.text.toUpperCase()}</NavLink>)}
        currentMenuState={menuBOpen}
        setCurrentMenuState={setMenuBOpen}
        setOffOtherMenu = {setMenuAOpen}
        />
      </div>
    </div>
  )
}

export default NavigationPanel