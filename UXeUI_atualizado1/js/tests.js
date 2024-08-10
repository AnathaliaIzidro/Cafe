function testAddToCart() {
    clearCart();
    addProduct('Test Product', 10, 'Category 1');
    addCartItem(1);
    const cart = getCart();
    console.assert(cart.length === 1, 'Test Add to Cart Failed');
    console.assert(cart[0].productId === 1, 'Test Add to Cart Failed');
}

function testRemoveFromCart() {
    clearCart();
    addProduct('Test Product', 10, 'Category 1');
    addCartItem(1);
    removeCartItem(1);
    const cart = getCart();
    console.assert(cart.length === 0, 'Test Remove from Cart Failed');
}

function runTests() {
    testAddToCart();
    testRemoveFromCart();
    console.log('All tests passed!');
}
