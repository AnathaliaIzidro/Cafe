function addOrder() {
    const tableId = document.getElementById('order-table-id').value;
    const products = getFromLocalStorage('products') || [];
    const orderProducts = []; // Adicionar lógica para coletar produtos do pedido
    const totalAmount = orderProducts.reduce((total, p) => total + p.price * p.quantity, 0);
    const order = {
        id: Date.now().toString(),
        tableId,
        products: orderProducts,
        totalAmount,
        date: new Date().toISOString()
    };

    const orders = getFromLocalStorage('orders') || [];
    orders.push(order);
    saveToLocalStorage('orders', orders);

    loadOrders();
}

function loadOrders() {
    const orders = getFromLocalStorage('orders') || [];
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';

    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        orderElement.innerHTML = `
            <p>Pedido ${order.id} - Mesa ${order.tableId} - Total: ${order.totalAmount.toFixed(2)}</p>
        `;

        ordersList.appendChild(orderElement);
    });
}
