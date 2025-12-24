import React from 'react'
import { useState } from "react";

function Header( { darkMode, setDarkMode } ) {
  const [active, setActive] = useState(false);
  return (
   <>
   <header>
    <div className= "box">
        <img src="src/assets/img/sum.png" alt="" />

        <div
        className={`toggle ${active ? "active" : ""}`}
        onClick={() => 
        {          
          setActive(!active);
          setDarkMode(prev => !prev)
        }}
        >
            <div className="dot"></div>
        </div>

        <img src="src/assets/img/Vector.png" alt="" />
    </div>
   </header>
   </>
  )
}

export default Header
