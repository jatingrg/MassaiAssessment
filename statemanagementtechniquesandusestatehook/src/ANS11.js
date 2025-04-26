import React, { useState } from 'react'
import './App.css';


function ANS11() {
    const [toggle,settoggle] = useState(false);
    const meaasagedisplay = () =>{
        settoggle(!toggle);
    }
  return (
    <>
    <button className="buttonConatainer"onClick={meaasagedisplay}>{toggle ? 'show' : 'Hide'}</button>
    <p>{toggle ? "Hello, welcome to React state management!" : ""}</p>
    </>
  )
}

export default ANS11