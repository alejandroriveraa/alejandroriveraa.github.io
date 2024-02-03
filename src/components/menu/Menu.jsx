import React, {useState, useEffect, useRef} from "react"
import "./Menu.css"
import "./Menu.responsive.css"

function Menu({main, side, bodyItems}) {
  const [menuOn, setMenuOn] = useState(false)
  const menuRef = useRef();

  const setMenuOffOnClick = (e) => {
    // Checks that menuRef exists, otherwise it wouldn't be necessary the checking.
    // Then checks that clicked element currently exist before treating it as and outside element.
    if (menuRef.current && document.contains(e.target)) {
      if (!menuRef.current.contains(e.target)) {
        setMenuOn(false)
     }
   }
 }

  useEffect(() => {
    // Add event callback to manage click events like click outside a specific element.
    window.addEventListener("click", setMenuOffOnClick)

    return () => {
      window.removeEventListener("click", setMenuOffOnClick)  
    }
 }, [])
  
  return (
    <div className="menu" ref={menuRef}>
      <div className="menu__header" onClick={() => {setMenuOn(!menuOn)}} >
          {
            main && (
              <div className="menu__header__main">{main}</div>
            )
          } 
          {
            side && (
              <div className="menu__header__side">{side}</div>
            )
          }
      </div>
      {
        menuOn && (
          <div className="menu__body scale-in-ver-top">
            {
              //TODO: Replace the key assignment technique, for a correct one, though it doesn't have a big impact on performance, in this case.
              bodyItems.map((item, index) => (
                <div key={index} className="menu__body__item">
                  {item}
                </div> 
              ))
           } 
          </div>
          )
     }
    </div>
  )
}

export default Menu