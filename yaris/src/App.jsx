import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header"
import Sec from "./Sec"
import './assets/css/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Sec />
    </>
  )
}

export default App

