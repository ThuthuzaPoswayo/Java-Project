document.addEventListener("DOMContentLoaded", function() {
    // Get products from local storage
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Display products in the table
    displayProducts(products);

    function displayProducts(products) {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.productName}</td>
                <td>${product.description}</td>
                <td>R${product.amount}</td>
                <td class="actions">
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;
            productList.appendChild(row);
        });
    }

    // Edit product function
    function editProduct(id) {
        // Implement edit logic here, for example: redirect to edit page
        console.log(`Editing product with ID ${id}`);
    }

    // Delete product function
    function deleteProduct(id) {
        // Implement delete logic here, for example: remove product from array and update UI
        products = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts(products);
        console.log(`Deleted product with ID ${id}`);
    }
});
