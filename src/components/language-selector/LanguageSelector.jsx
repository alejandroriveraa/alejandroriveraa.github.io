import React from "react"
import {useTranslation} from "react-i18next";
import {LANGUAGES} from "../../utils/index"

function LanguageSelector() {
  const {i18n} = useTranslation()

  const setLanguage = (code) => {
    i18n.changeLanguage(code)   
 }

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