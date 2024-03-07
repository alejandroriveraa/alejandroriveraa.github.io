import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

const useAdaptiveVideo = () => {
   const [videos, setVideos] = useState({})
   const loadVideos = async () => {
      return isMobile 
      ? await import("./assets/video/index.mobile")
      : await import("./assets/video/index.desktop")
   }

   useEffect(() => {
      loadVideos().then(result => setVideos(result))
   }, [])

   return videos
}

export default useAdaptiveVideo