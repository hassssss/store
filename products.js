document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');

    const products = [
        {
            id: 1,
            name: 'عطر الجنة الذهبي',
            category: 'عطور',
            price: 250,
            image: 'images/products/perfume1.jpg'
        },
        {
            id: 2,
            name: 'فستان سهرة أنيق',
            category: 'أزياء',
            price: 500,
            image: 'images/products/dress1.jpg'
        },
        {
            id: 3,
            name: 'طقم مكياج فاخر',
            category: 'مستحضرات تجميل',
            price: 350,
            image: 'images/products/makeup1.jpg'
        }
    ];

    function renderProducts(productList) {
        productsGrid.innerHTML = productList.map(product => `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <div class="product-footer">
                    <span class="price">${product.price} ريال</span>
                    <button class="btn btn-add-to-cart" data-id="${product.id}">
                        أضف للسلة
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderProducts(products);
});