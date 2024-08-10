const messages = {
    en: {
        add_to_cart: 'Add to cart',
        remove: 'Remove',
        total: 'Total',
        checkout: 'Checkout',
        payment_method: 'Payment Method',
        cash: 'Cash',
        credit_card: 'Credit Card',
        debit_card: 'Debit Card',
        pix: 'Pix',
        order_history: 'Order History'
    },
    pt: {
        add_to_cart: 'Adicionar ao carrinho',
        remove: 'Remover',
        total: 'Total',
        checkout: 'Finalizar Compra',
        payment_method: 'Método de Pagamento',
        cash: 'Dinheiro',
        credit_card: 'Cartão de Crédito',
        debit_card: 'Cartão de Débito',
        pix: 'Pix',
        order_history: 'Histórico de Pedidos'
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = messages[currentLanguage][key];
    });
}

document.getElementById('language-select').addEventListener('change', (event) => {
    setLanguage(event.target.value);
});
