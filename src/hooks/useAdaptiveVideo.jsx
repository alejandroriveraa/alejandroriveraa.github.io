import { useEffect, useState } from "react"

const useAdaptiveVideo = () => {
   const [videos, setVideos] = useState({})
   const [mobile, setMobile] = useState(window.screen.width < 1024 ? true : false)

   const loadVideos = async () => {
      return mobile 
      ? await import("./assets/video/index.mobile")
      : await import("./assets/video/index.desktop")
   }
   
   useEffect(() => {
      loadVideos().then(result => setVideos(result))
      window.matchMedia('(min-width: 1024px)').addEventListener("change", (e) => {
         if (e.matches) setMobile(false)
         else setMobile(true)
      })
   }, [mobile])

   return videos
}

export default useAdaptiveVideo