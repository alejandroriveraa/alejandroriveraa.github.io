import { useEffect, useState } from "react"

const useAdaptiveImage = () => {
   const [images, setImages] = useState({})
   const [mobile, setMobile] = useState(window.screen.width < 1024 ? true : false)

   const loadImages = async () => {
      return mobile
      ? await import("../assets/images/index.mobile")
      : await import("../assets/images/index.desktop")
   }

   useEffect(() => {
      loadImages().then(result => setImages(result))
      window.matchMedia('(min-width: 1024px)').addEventListener("change", (e) => {
         if (e.matches) setMobile(false)
         else setMobile(true)
      })
   }, [mobile])

   return images
}

export default useAdaptiveImage