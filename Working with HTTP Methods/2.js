async function addUsers(event) {
    event.preventDefault();
let  name  = document.getElementById('fullname').value;
let gmail = document.getElementById('gmail').value;
let password = document.getElementById('password').value;
let status = document.getElementById('status');
let result = document.getElementById('results');

status.innerHTML='';
result.innerHTML='';
if(!name || !gmail || !password){
    status.innerHTML = '<div class="error">Please Fill in an All Fields</div>';
    return;
}

const api_url = `https://67f0577f2a80b06b88979bce.mockapi.io/productsfetching/Users`
try{
  const res = await fetch(api_url,{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({name,gmail,password})
  });
  if(!res.ok) throw new Error ('failed to post data');
  const data = await res.json();
  
  status.innerHTML='';
   
    const card = document.createElement('div');
    card.className ="user_card";
    card.innerHTML = `<h6>${data.name}</h6>
                     <h6>${data.gmail}</h6>`;
    result.appendChild(card);
    


}
catch(err){
    status.innerHTML =`<div class ="error">${err.message}</div>`;
}

    
}