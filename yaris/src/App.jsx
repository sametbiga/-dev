import { useState } from "react";
import Header from "./Header"
import Sec from "./Sec"
import './assets/css/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    
    <Header/>

    <Sec  />
    </>


  )
}

export default App
