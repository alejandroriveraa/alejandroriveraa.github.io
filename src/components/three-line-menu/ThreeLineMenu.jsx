import "./ThreeLineMenu.css"
import "./ThreeLineMenu.responsive.css"
import React from 'react'

const ThreeLineMenu = () => {
   return (
     <div className="three-line-menu">
      <div className="three-line-menu__content">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
     </div>
   );
 };
 
 export default ThreeLineMenu;
