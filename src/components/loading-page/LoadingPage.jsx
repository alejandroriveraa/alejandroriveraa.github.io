import useAdaptiveImage from "../../useAdaptiveImage";
import AppImage from "../app-image/AppImage";
import "./LoadingPage.css"
import "./LoadingPage.responsive.css"

const LoadingPage = function ({isVisible}) {
   const {logoCubacafe} = useAdaptiveImage()
   
   return (
      <div className="loading-page" style={isVisible ? null : {display: "none"}}>
         <div className="center">
            <AppImage src={logoCubacafe} />
         </div>
      </div>
   )
}

export default LoadingPage