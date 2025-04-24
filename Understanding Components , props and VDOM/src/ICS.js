import {useState} from 'react';

function ICS(){
    const[color,setcolor] = useState('red');
    const[count,setcount] = useState(0);

    function colorchange(){
        setcount(count+1);
        if(count%2==0){
            setcolor('red');
        }
        else{
            setcolor('blue');
        }
    }
    return(
        <>
        <button onClick={colorchange} style={{backgroundColor:color}}>click{count}</button>
        </>
    )
}
export default ICS;