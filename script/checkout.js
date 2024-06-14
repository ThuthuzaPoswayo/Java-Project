document.addEventListener("DOMContentLoaded", function() {
    // Retrieve checkout items from localStorage
    const checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    
    // Display checkout items in the table
    const checkoutTableBody = document.getElementById('checkout-items');
    let totalPrice = 0;
    checkoutItems.forEach(item => {
        const row = document.createElement('tr');
        const total = item.amount * item.quantity;
        totalPrice += total;
        row.innerHTML = `
            <td>${item.productName}</td>
            <td>${item.amount}</td>
            <td>${item.quantity}</td>
            <td>${total}</td>
            <td><button class="remove-btn" data-id="${item.id}">Remove</button></td>
        `;
        checkoutTableBody.appendChild(row);
    });

    // Update total price
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Add event listener for remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.products.id);
            // Remove item from checkoutItems array
            const updatedCheckoutItems = checkoutItems.filter(item => item.id !== itemId);
            // Update localStorage
            localStorage.setItem('checkout', JSON.stringify(updatedCheckoutItems));
            // Reload the page to reflect changes
            location.reload();
        });
    });
});
function addToCart(product) {
    try {
        // Check if the product already exists in checkoutItems
        const existingItemIndex = checkoutItems.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            // If the product already exists, increment its quantity
            checkoutItems[existingItemIndex].quantity++;
        } else {
            // If the product is new, add it to checkoutItems with quantity 1
            product.quantity = 1;
            checkoutItems.push(product);
        }

        // Update localStorage
        localStorage.setItem('checkout', JSON.stringify(checkoutItems));

        // Reload the page to reflect changes
        location.reload();
    } catch (e) {
        alert("Unable to add to cart");
    }
}
