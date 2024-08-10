function generateReport(period) {
    const orders = getOrders();
    let filteredOrders = [];

    const now = new Date();
    if (period === 'daily') {
        filteredOrders = orders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate.toDateString() === now.toDateString();
        });
    } else if (period === 'monthly') {
        filteredOrders = orders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
        });
    }

    let totalSales = 0;
    filteredOrders.forEach(order => totalSales += order.totalAmount);

    return {
        period,
        orders: filteredOrders,
        totalSales
    };
}
