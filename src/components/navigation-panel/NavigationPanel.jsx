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
  const activeLinkStyle = {opacity: "50%"};
  const activeLinkStyleCallback = ({isActive}) => isActive ? activeLinkStyle: null

  return (
    <div className="navigation-panel">
      <div className="navigation-panel__item">
        <NavLink to="/" style={activeLinkStyleCallback}>
          {t("header.a").toUpperCase()}
        </NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink to="/who-are-we" style={activeLinkStyleCallback}>
          {t("header.b").toUpperCase()}
        </NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink to="/our-coffee" style={activeLinkStyleCallback}>
          {t("header.c").toUpperCase()}
        </NavLink>
      </div>
      <div className="navigation-panel__item">
        <Menu main={<p>{t("header.d").toUpperCase()}</p>} 
        side={<AppImage src={"/images/icon-arrow-down-white.svg"}/>}
        bodyItems={SEAL_LINKS.map(i => <NavLink to={i.to} style={activeLinkStyleCallback}>{i.text.toUpperCase()}</NavLink>)}
        />
      </div>
      <div className="navigation-panel__item">
        <Menu main={<p>{t("header.e").toUpperCase()}</p>} 
        side={<AppImage src={"/images/icon-arrow-down-white.svg"}/>}
        bodyItems={BRAND_LINKS.map(i => <NavLink to={i.to} style={activeLinkStyleCallback}>{i.text.toUpperCase()}</NavLink>)}
        />
      </div>
    </div>
  )
}

export default NavigationPanel