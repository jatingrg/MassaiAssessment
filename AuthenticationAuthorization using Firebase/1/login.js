const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert("Wrong credentials! Try again.");
    }
});
