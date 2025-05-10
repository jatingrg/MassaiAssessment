const express = require('express');
const app = express();
const PORT = 3000;

app.get('/home',(req,res) =>{
  res.json({message:'This is Home Page'});
});


app.get('/contactus',(req,res) =>{
    res.json({message:'Contact us at contact@contact.com'});
  });

  
app.get('/about',(req,res) =>{
    res.json({message:'Welcome to the About Page!'});
  });

app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})  