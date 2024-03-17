import React, { useEffect, useState } from "react";
import { IMAGE_PRELOAD } from "../../utils";

const Preloader = () => {
   const [preload, setPreload] = useState(IMAGE_PRELOAD)
 
   const preloadComplete = function () {
      console.log("Preload complete")
      window.dispatchEvent(new Event("preloadComplete"))
   }
   
   const onLoad = function (e) {
      const src = e.target.src.replace(/^https?:\/\/[^\/]+/i, "")
      if (preload.includes(src)) {
         console.log("Preload", src)
         preload.splice(preload.indexOf(src), 1)
         setPreload(preload)
      }
      if (preload.length === 0) preloadComplete()
   }
   
   const onError = function (e) {
      const src = e.target.src.replace(/^https?:\/\/[^\/]+/i, "")
      console.log("Error preloading", src)
   }

   useEffect(() => {
      console.log("asdasdasd", preload);
   }, [preload])

   return (
      <div className="preloader" style={{display: "none"}}>
         {
            IMAGE_PRELOAD.map((item, index) => <img className="preload-image" key={index} onLoad={e => onLoad(e)} onError={e => onError(e)} src={item}></img>)
         }
      </div>
   )
}

export default Preloader