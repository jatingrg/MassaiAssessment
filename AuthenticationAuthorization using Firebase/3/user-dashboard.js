window.onload = function() {
    const role = localStorage.getItem('role');
  
    if (role !== 'user') {
      window.location.href = 'admin-dashboard.html'; 
    }
  
    db.ref('products').on('value', (snapshot) => {
      const products = snapshot.val();
      const productList = document.getElementById('products-list');
      productList.innerHTML = '';
  
      for (const key in products) {
        const product = products[key];
        const productElement = document.createElement('div');
        productElement.innerHTML = `
          <h3>${product.title}</h3>
          <p>Price: $${product.price}</p>
          <img src="${product.image}" alt="${product.title}" width="100">
        `;
        productList.appendChild(productElement);
      }
    });
  };
  
  document.getElementById('logout').addEventListener('click', function() {
    auth.signOut().then(() => {
      localStorage.removeItem('role');
      window.location.href = 'login.html';
    });
  });
  