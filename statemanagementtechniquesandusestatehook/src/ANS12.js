import React, { useState } from 'react';
import './App.css';



export default function ANS12() {
    const [counter,setcounter] = useState(0);
    const [taskcounter,tasksetcounter] = useState(0);


    function incremnet(taskcounter){
    setcounter(counter+1)
    }
    function decrement(){
        setcounter(counter-1)
        }
     function increaseByvalue(){
        let x = parseInt(taskcounter);
        setcounter(counter+x);
     }   
  return (
    <>
    <button className='buttonContainer' onClick={incremnet}>Increment</button>
    <button className='buttonContainer' onClick={decrement}>Decrement</button>
    <input type='text' placeholder='Enter Counter amount' value={taskcounter} onChange={(e) => tasksetcounter(e.target.value)}></input>
    <button className='buttonContainer' onClick={increaseByvalue}>Increase by value</button>
    <p>{counter}</p>


    </>
  )
}
