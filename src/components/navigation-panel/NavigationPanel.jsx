import React from "react"
import Menu from "../menu/Menu";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BRAND_LINKS, SEAL_LINKS} from "../../utils";
import AppImage from "../app-image/AppImage";
import useAdaptiveImage from "../../hooks/useAdaptiveImage";

function NavigationPanel() {
  const {t} = useTranslation()
  const activeLinkStyle = {opacity: "50%"};
  const activeLinkStyleCallback = ({isActive}) => isActive ? activeLinkStyle: null
  const {iconArrowDownWhite} = useAdaptiveImage()

  return (
    <div className="navigation-panel">
      <div className="navigation-panel__item">
        <NavLink to="/" style={activeLinkStyleCallback}>
          <p>{t("header.a").toUpperCase()}</p>
        </NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink to="/who-are-we" style={activeLinkStyleCallback}>
          <p>{t("header.b").toUpperCase()}</p>
        </NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink to="/our-coffee" style={activeLinkStyleCallback}>
          <p>{t("header.c").toUpperCase()}</p>
        </NavLink>
      </div>
      <Menu 
      main={<p>{t("header.d").toUpperCase()}</p>} 
      side={<AppImage src={iconArrowDownWhite}/>} 
      bodyItems={SEAL_LINKS.map(i => <NavLink to={i.to} key={i} style={activeLinkStyleCallback}><p>{i.text.toUpperCase()}</p></NavLink>)}
      />
      <Menu 
      main={<p>{t("header.e").toUpperCase()}</p>} 
      side={<AppImage src={iconArrowDownWhite}/>}
      bodyItems={BRAND_LINKS.map(i => <NavLink to={i.to} key={i} style={activeLinkStyleCallback}><p>{i.text.toUpperCase()}</p></NavLink>)}
      />
    </div>
  )
}

export default NavigationPanel