document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        db.ref('users/' + user.uid).set({
          email: user.email,
          role: role
        });
  
        alert('Registration successful');
        window.location.href = 'login.html'; 
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  