async function fetchProducts(){
    const category  = document.getElementById('category').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const results = document.getElementById('results');
    const status = document.getElementById('status');
    results.innerHTML =" ";
    status.innerHTML = '<div class = "loading">Loading Products...</div>';

    const api_url = `https://mockapi.io/clone/67f0577f2a80b06b88979bcf?category=${category}&min_price=${minPrice}&max_price=${maxPrice}&sort=asc`;


    try{
    const response = await fetch(api_url);
    if(!response.ok) throw new Error('Faild to fetch Products');

    const products = await response.json();
    if(products.length === 0){
        status.innerHTML = '<div class ="error"> No Products found.</div>';
        return;
    }
    status.innerHTML='';
    products.forEach(product=>{
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<img src = "${product.image} alt="${product.name}"/>
                            <h3>${product.name}</h3>
                            <p>${product.price}</p>`;
        results.appendChild(card);                    
    })
    }
    catch(err){
        status.innerHTML=`<div class="error">${err.message}</div>`;

    }


    
}