import React, { useEffect } from "react"
import {useTranslation} from "react-i18next";
import {LANGUAGES} from "../../utils"

function LanguageSelector() {
  const {i18n} = useTranslation()

  const setLanguage = (code) => {
    i18n.changeLanguage(code)   
 }

 useEffect(() => {
  var element = document.getElementById('langSelectorItem');

  // For touch devices
  element.addEventListener('touchstart', function() {
    element.classList.add('active');
  });

  element.addEventListener('touchend', function() {
    element.classList.remove('active');
  });

  // For desktop devices
  element.addEventListener('mousedown', function() {
    element.classList.add('active');
  });

  element.addEventListener('mouseup', function() {
    element.classList.remove('active');
  });
 }, [])

  return (
    <div className="language-selector">
      {
        //TODO: Replace the key assignment technique, for a correct one, though it doesn't have a big impact on performance, in this case.
        LANGUAGES.map((language, index) => (
          <div key={index} id="langSelectorItem" className="language-selector__item" style={{cursor: "pointer"}} onClick={() => setLanguage(language.code)}>
            <img src={language.img} alt=""/>
          </div>
        ))
     }
    </div>
  )
}

export default LanguageSelector