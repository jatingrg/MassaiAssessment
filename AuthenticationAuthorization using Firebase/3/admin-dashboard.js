window.onload = function() {
    const role = localStorage.getItem('role');
  
    if (role !== 'admin') {
      window.location.href = 'user-dashboard.html'; 
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
          <button onclick="deleteProduct('${key}')">Delete</button>
          <button onclick="editProduct('${key}')">Edit</button>
        `;
        productList.appendChild(productElement);
      }
    });
  
    document.getElementById('add-product').addEventListener('click', function() {
      const title = prompt('Enter product title:');
      const price = prompt('Enter product price:');
      const image = prompt('Enter product image URL:');
  
      db.ref('products').push({
        title: title,
        price: price,
        image: image
      });
    });
  };
  
  function deleteProduct(productId) {
    db.ref('products/' + productId).remove();
  }
  
  function editProduct(productId) {
    const newTitle = prompt('Enter new product title:');
    const newPrice = prompt('Enter new product price:');
    const newImage = prompt('Enter new product image URL:');
  
    db.ref('products/' + productId).update({
      title: newTitle,
      price: newPrice,
      image: newImage
    });
  }
  
  document.getElementById('logout').addEventListener('click', function() {
    auth.signOut().then(() => {
      localStorage.removeItem('role');
      window.location.href = 'login.html';
    });
  });
  