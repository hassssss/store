document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.btn-cart');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const closeCartModal = cartModal.querySelector('.close-modal');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
        calculateTotal();
    }

    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        cartCountElement.textContent = cart.length;
    }

    function renderCartItems() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>سلة التسوق فارغة</p>';
            return;
        }

        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.price} ريال</p>
                </div>
                <div class="cart-item-actions">
                    <button class="btn-remove-item" data-id="${item.id}">إزالة</button>
                </div>
            </div>
        `).join('');

        attachCartItemEvents();
    }

    function attachCartItemEvents() {
        document.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.dataset.id;
                cart = cart.filter(item => item.id !== parseInt(itemId));
                updateCart();
            });
        });
    }

    function calculateTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalElement.textContent = total.toFixed(2);
    }

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    // Add to Cart Event Delegation
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            const product = document.querySelector(`.product-card[data-id="${productId}"]`);

            const productData = {
                id: productId,
                name: product.querySelector('h3').textContent,
                price: parseFloat(product.querySelector('.price').textContent),
                image: product.querySelector('img').src
            };

            addToCart(productData);
        }
    });

    // Cart Modal Events
    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Initial setup
    updateCartCount();
});