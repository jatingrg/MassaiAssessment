const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const userId = userCredential.user.uid;
        
        firebase.database().ref('users/' + userId).set({
            name: name,
            email: email,
            password: password,
        });

        alert("Registration Successful! Please log in.");
        window.location.href = 'login.html';
    } catch (error) {
        alert("Error: " + error.message);
    }
});
