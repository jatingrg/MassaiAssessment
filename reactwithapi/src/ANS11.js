import React, { useState } from 'react'

function ANS11() {

    const [username,setusername] = useState('');
    const [error,seterror] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        if(username.trim() === ''){
            seterror('usernaame is required');
        }
        else{
            seterror('');
            alert(`submitted username :${username}`);
        }
    }
  return (
    <>
    <form onSubmit = {handleSubmit}>
        <div>
            <label>Username</label>
            <input type = "text" placeholder='enter Username' value={username} onChange={(e) => setusername(e.target.value)}/>

        </div>
        {error && <p style ={{color:'red'}}>{error}</p>
        
        }
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default ANS11