document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        db.ref('users/' + user.uid).once('value')
          .then((snapshot) => {
            const role = snapshot.val().role;
            localStorage.setItem('role', role); 
  
            if (role === 'admin') {
              window.location.href = 'admin-dashboard.html';
            } else {
              window.location.href = 'user-dashboard.html';
            }
          });
      })
      .catch((error) => {
        alert('Incorrect email or password!');
      });
  });
  