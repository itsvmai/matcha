// cart.js - Shopping Cart Functionality for Whisk & Sip

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage or create empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const shippingElement = document.getElementById('shipping');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart');
    const paymentMethods = document.querySelectorAll('.payment-method');
    const cartCountElement = document.querySelector('.cart-count');
    
    // Shipping cost constant
    const SHIPPING_COST = 15.00;
    
    // Update cart display
    function updateCartDisplay() {
        // Update cart count
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        
        // Save cart count to localStorage
        localStorage.setItem('cartCount', cartCount.toString());
		JSON.parse(localStorage.getItem('cart'))
        
        // If we're not on the cart page, no need to update the cart items display
        if (!cartItemsContainer) return;
        
        // Clear current cart items
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            // Display empty cart message
            const emptyCartRow = document.createElement('tr');
            emptyCartRow.innerHTML = `
                <td colspan="6">
                    <div class="empty-cart-message">
                        <i class="fas fa-shopping-basket"></i>
                        <p>Your cart is empty</p>
                        <a href="product.html" class="cta-button">Continue Shopping</a>
                    </div>
                </td>
            `;
            cartItemsContainer.appendChild(emptyCartRow);
            
            // Update totals
            updateTotals(0);
            return;
        }
        
        // Add each item to the cart display
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            const itemTotal = item.price * item.quantity;
            
            row.innerHTML = `
                <td>
                    <img src="${item.image || 'images/matcha.png'}" alt="${item.name}">
                </td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)} SAR</td>
                <td>
                    <div class="quantity-control">
                        <button class="qty-btn minus-btn" data-index="${index}">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" min="1" data-index="${index}">
                        <button class="qty-btn plus-btn" data-index="${index}">+</button>
                    </div>
                </td>
                <td>${itemTotal.toFixed(2)} SAR</td>
                <td>
                    <button class="remove-btn" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            
            cartItemsContainer.appendChild(row);
        });
        
        // Calculate subtotal
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Update totals
        updateTotals(subtotal);
        
        // Add event listeners to quantity buttons
        addQuantityListeners();
    }
    
    // Update subtotal and total
    function updateTotals(subtotal) {
        if (!subtotalElement || !totalElement || !shippingElement) return;
        
        // Update display
        subtotalElement.textContent = `${subtotal.toFixed(2)} SAR`;
        
        // Only add shipping cost if there are items in the cart
        const shipping = cart.length > 0 ? SHIPPING_COST : 0;
        shippingElement.textContent = `${shipping.toFixed(2)} SAR`;
        
        // Calculate total
        const total = subtotal + shipping;
        totalElement.textContent = `${total.toFixed(2)} SAR`;
    }
    
    // Add event listeners to quantity buttons and inputs
    function addQuantityListeners() {
        // Minus buttons
        document.querySelectorAll('.minus-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    saveCart();
                    updateCartDisplay();
                }
            });
        });
        
        // Plus buttons
        document.querySelectorAll('.plus-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                saveCart();
                updateCartDisplay();
            });
        });
        
        // Quantity inputs
        document.querySelectorAll('.qty-input').forEach(input => {
            input.addEventListener('change', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const quantity = parseInt(this.value);
                
                if (quantity > 0) {
                    cart[index].quantity = quantity;
                } else {
                    this.value = 1;
                    cart[index].quantity = 1;
                }
                
                saveCart();
                updateCartDisplay();
            });
        });
        
        // Remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                saveCart();
                updateCartDisplay();
            });
        });
    }
    
    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Handle payment method selection
    if (paymentMethods) {
        paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                // Remove selected class from all methods
                paymentMethods.forEach(m => m.classList.remove('selected'));
                
                // Add selected class to clicked method
                this.classList.add('selected');
                
                // Save selected payment method
                const paymentMethod = this.getAttribute('data-method');
                localStorage.setItem('paymentMethod', paymentMethod);
            });
        });
    }
    
    // Clear cart button
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                cart = [];
                saveCart();
                updateCartDisplay();
            }
        });
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            // Get selected payment method
            const selectedPayment = document.querySelector('.payment-method.selected');
            
            if (!selectedPayment && cart.length > 0) {
                alert('Please select a payment method');
                return;
            }
            
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }
            
            // Here you would normally proceed to checkout
            // For this example, we'll just show a success message
            alert('Thank you for your order! Your payment is being processed.');
            
            // Clear cart after successful checkout
            cart = [];
            saveCart();
            updateCartDisplay();
        });
    }
    
    // Add to cart function (for use on product pages)
    window.addToCart = function(product) {
        // Check if product already exists in cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex !== -1) {
            // Product exists, increase quantity
            cart[existingProductIndex].quantity++;
        } else {
            // Product doesn't exist, add to cart
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        // Save cart and update display
        saveCart();
        
        // Update cart count
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        
        // Save cart count to localStorage
        localStorage.setItem('cartCount', cartCount.toString());
        
        // Show confirmation message
        alert(`${product.name} has been added to your cart!`);
    };
    
    // Initialize cart display
    updateCartDisplay();
});