window.onload = function() {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            window.location.href = 'login.html';
        } else {
            fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => {
                    const productsContainer = document.getElementById("products");
                    data.forEach(product => {
                        const productDiv = document.createElement("div");
                        productDiv.innerHTML = `
                            <h3>${product.title}</h3>
                            <p>Price: $${product.price}</p>
                            <img src="${product.image}" alt="${product.title}" width="100">
                        `;
                        productsContainer.appendChild(productDiv);
                    });
                })
                .catch(error => console.error("Error fetching products:", error));
        }
    });
};
