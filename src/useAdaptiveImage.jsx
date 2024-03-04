import { useEffect, useState } from "react"
import { isMobile, isDesktop } from "react-device-detect"

const useAdaptiveImage = () => {
   const [images, setImages] = useState([])
   const loadImages = async () => {
      if (isMobile) setImages(await import("./assets/images/index-mobile"))
      else if (isDesktop) setImages(await import("./assets/images/index-full"))
   }

   useEffect(() => {
      loadImages()
   }, [])

   return images
}

export default useAdaptiveImage