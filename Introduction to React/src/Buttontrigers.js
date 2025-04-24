import { useState } from "react";

function Buttontrigers(){
    const [title,settitle] = useState('Vanila Js');
    const [count,setcount] = useState(0);

    
function changetitle(){
    document.title = title;
    settitle('React.js');
    setcount(count+1);


}


    return (
        <>
        <button onClick={changetitle}>chnage title</button>
        <p>{title}</p>
        <p>{count}</p>
        </>
        
    )
}
export default Buttontrigers;