// Funções para manipulação da interface do usuário, como animações, atualizações visuais, etc.

// Atualiza o badge do carrinho
function updateCartBadge(count) {
    const cartBadge = document.getElementById('cart-badge');
    cartBadge.textContent = count.toString();
}

// Mostra uma mensagem de alerta na interface
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', `alert-${type}`);
    alertDiv.textContent = message;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000); // Remove a mensagem após 3 segundos
}
