import React, {useEffect, useState} from "react"
import "./ViewMore.css"
import "./ViewMore.responsive.css"
import ViewMoreItem from "../view-more-item/ViewMoreItem"
import {useLocation} from "react-router"
import {BRAND_ITEMS, SEAL_ITEMS, shuffle} from '../../utils'

// TODO: Algorithm for showing different items according to the current page. 
function ViewMore() {
  const location = useLocation()
  const [items, setItems] = useState([])

  useEffect(() => {
    const itemsUpdate = location.pathname.includes("seals/")
      ? shuffle(SEAL_ITEMS).slice(0, 2)
      : shuffle(BRAND_ITEMS).slice(0, 3)
    setItems(itemsUpdate)
 }, [location])
  
  return (
    <div className="view-more min-vp">
      <div className="view-more__items ctn min-hp">
        {
          items.map((item, index) => (
            //TODO: Replace the key assignment technique, for a correct one, though it doesn't have a big impact on performance, in this case.
            <ViewMoreItem key={index} src={item.src} header={item.header.toUpperCase()} path={item.path} />
          ))
       }   
      </div>
    </div>
  )
}

export default ViewMore