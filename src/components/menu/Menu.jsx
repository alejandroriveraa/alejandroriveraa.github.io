import React, {useState, useEffect, useRef} from "react"
import "./Menu.css"

function Menu({main, side, bodyItems}) {
  const [menuOn, setMenuOn] = useState(false)
  const menuRef = useRef();

  const closeMenuOnClick = (e) => {
    // Checks that menuRef exists, otherwise it wouldn't be necessary the checking.
    // Then checks that clicked element currently exist before treating it as and outside element.\
    if (menuRef.current && document.contains(e.target)) {
      if (!menuRef.current.contains(e.target)) {
        setMenuOn(false)
      }
    }
  }

  const closeMenuOnHover = (e) => {
    if (menuRef.current) {
      if (document.contains(e.detail.emitter)) {
        if (!menuRef.current.contains(e.detail.emitter)) {
          setMenuOn(false)
        }
      }
    }
  }

  const openMenuOnHover = () => {
    window.dispatchEvent(new CustomEvent("closeMenuOnHover", {detail: {emitter: menuRef.current}}))
    setMenuOn(true)
  }

  useEffect(() => {
    window.addEventListener("click", closeMenuOnClick)
    window.addEventListener("closeMenuOnHover", closeMenuOnHover)
    return () => {
      window.removeEventListener("click", closeMenuOnClick) 
      window.removeEventListener("closeMenuOnHover", closeMenuOnHover)
    }
  }, [])
  
  return (
    <div className="menu" ref={menuRef}>
      <div className="menu__head" onMouseEnter={openMenuOnHover} onClick={() => setMenuOn(!menuOn)}>
        {main && (<div className="menu__head__main">{main}</div>)} 
        {side && (<div className="menu__head__side">{side}</div>)}
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