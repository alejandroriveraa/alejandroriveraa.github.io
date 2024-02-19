import React, { useState } from "react";
import { IMAGE_PRELOAD } from "../utils";

const Preloader = () => {
   const [preload, setPreload] = useState(IMAGE_PRELOAD)
   const onload = function (src) {
      if (preload.includes(src)) {
         preload.splice(preload.indexOf(src), 1)
         setPreload(preload)
      }
      if (preload.length === 0) {
         window.dispatchEvent(new Event("preloadComplete"))
      }
   }
   const onerror = function (e) {
      const eTarget = e.target
      console.log("error preloading: ", eTarget.src);
   }
   
   return (
      <div className="preloader" style={{display: "none"}}>
         {
            IMAGE_PRELOAD.map(i => <img className="preload-image" src={i} key={i} onLoad={(e) => onload(e.target.src.replace(/^https:\/\/localhost:\d+\//, "/"))} onError={(e) => onerror(e.target.src.replace(/^https:\/\/localhost:\d+\//, "/"))}></img>
            )
         }
      </div>
   )
}

export default Preloader