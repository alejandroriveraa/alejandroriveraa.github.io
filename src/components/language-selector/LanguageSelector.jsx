import React, { useEffect, useRef } from "react"
import {useTranslation} from "react-i18next";
import {LANGUAGES} from "../../utils"

function LanguageSelector() {
  const {i18n} = useTranslation()

  const setLanguage = (code) => {
    i18n.changeLanguage(code)   
 }

 useEffect(() => {
  var elements = document.getElementsByClassName('language-selector__item');
  for (let i = 0; i < elements.length; i++) {
    // For touch devices
    elements[i].addEventListener('touchstart', function() {
      elements[i].classList.add('active');
    });
  
    elements[i].addEventListener('touchend', function() {
      elements[i].classList.remove('active');
    });
  
    // For desktop devices
    elements[i].addEventListener('mousedown', function() {
      elements[i].classList.add('active');
    });
  
    elements[i].addEventListener('mouseup', function() {
      elements[i].classList.remove('active');
    });
  }
 }, [])

  return (
    <div className="language-selector">
      {
        //TODO: Replace the key assignment technique, for a correct one, though it doesn't have a big impact on performance, in this case.
        LANGUAGES.map((language, index) => (
          <div key={index} className="language-selector__item" style={{cursor: "pointer"}} onClick={() => setLanguage(language.code)}>
            <img src={language.img} alt=""/>
          </div>
        ))
     }
    </div>
  )
}

export default LanguageSelector