import React from 'react'

function Header({ darkMode, setDarkMode }) {
  return (
    <>
      <header>
        <div className="box">
          <img src="src/assets/img/sum.png" alt="" />

          <div
            className={`toggle ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(prev => !prev)}
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
