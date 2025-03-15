/* Cart Section Styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.cart-section {
    padding: 5rem 0;
}

.cart-section h2 {
    text-align: center;
    color: var(--color-gold);
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.cart-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

@media (max-width: 768px) {
    .cart-container {
        grid-template-columns: 1fr;
    }
}

/* Cart Table Styles */
.cart-table-container {
    overflow-x: auto;
    margin-bottom: 1.5rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.cart-table {
    width: 100%;
    border-collapse: collapse;
}

.cart-table th, .cart-table td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #eee;
}

.cart-table th {
    background-color: var(--color-matcha);
    color: white;
    font-weight: 500;
}

.cart-table tr:last-child td {
    border-bottom: none;
}

.cart-table img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
}

/* Quantity Controls */
.quantity-control {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.qty-btn {
    width: 25px;
    height: 25px;
    background-color: var(--color-beige);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
}

.qty-btn:hover {
    background-color: var(--color-gold);
    color: white;
}

.qty-input {
    width: 40px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 3px;
}

/* Remove Button */
.remove-btn {
    background: none;
    border: none;
    color: #ff6b6b;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.remove-btn:hover {
    transform: scale(1.2);
}

/* Cart Actions */
.cart-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.continue-shopping, .clear-cart {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;
}

.continue-shopping {
    background-color: var(--color-beige);
    color: var(--color-dark);
}

.continue-shopping:hover {
    background-color: var(--color-gold);
    color: white;
}

.clear-cart {
    background-color: #ff6b6b;
    color: white;
    border: none;
}

.clear-cart:hover {
    background-color: #ff5252;
}

/* Order Summary Styles */
.order-summary {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.summary-card, .payment-options {
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.summary-card h3, .payment-options h3 {
    color: var(--color-gold);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px dashed #eee;
}

.summary-item.total {
    border-top: 2px solid var(--color-gold);
    border-bottom: none;
    padding-top: 15px;
    margin-top: 5px;
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--color-gold);
}

/* Payment Methods */
.payment-list {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
}

.payment-method {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background-color: var(--color-beige);
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.payment-method:hover {
    background-color: #f4e1c9;
}

.payment-method.selected {
    background-color: #f4e1c9;
    border: 2px solid var(--color-gold);
}

.payment-method img {
    width: 30px;
    height: 30px;
    object-fit: contain;
}

/* Checkout Button */
.checkout-btn {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: var(--color-matcha);
    color: white;
    text-align: center;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.checkout-btn:hover {
    background-color: var(--color-gold);
}

/* Empty Cart Message */
.empty-cart-message {
    text-align: center;
    padding: 3rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.empty-cart-message i {
    font-size: 3rem;
    color: var(--color-gold);
    margin-bottom: 1rem;
}

.empty-cart-message p {
    margin-bottom: 1.5rem;
    color: var(--color-dark);
}