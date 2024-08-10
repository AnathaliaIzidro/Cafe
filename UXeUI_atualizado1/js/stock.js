function updateStock(productId, quantity) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);

    if (product) {
        product.stock = (product.stock || 0) + quantity;
        saveProducts(products);
        showAlert('Estoque atualizado', 'success');
    } else {
        showAlert('Produto não encontrado', 'error');
    }
}

function getStock(productId) {
    const product = getProducts().find(p => p.id === productId);
    return product ? product.stock : 0;
}
