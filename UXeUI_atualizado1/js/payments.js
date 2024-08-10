function processPayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    const totalAmount = parseFloat(document.getElementById('total-amount').textContent);

    if (paymentMethod === 'Dinheiro') {
        const cashAmount = parseFloat(prompt('Digite o valor em dinheiro recebido:'));
        if (!isNaN(cashAmount)) {
            const change = cashAmount - totalAmount;
            alert(`Troco: R$ ${change.toFixed(2)}`);
        } else {
            alert('Valor inválido!');
        }
    } else {
        // Integração fictícia com API de pagamento
        fetch('https://api.exemplo.com/process_payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                method: paymentMethod,
                amount: totalAmount
            })
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  alert('Pagamento realizado com sucesso!');
              } else {
                  alert('Falha no pagamento');
              }
          });
    }

    clearCart();
    saveOrder();
}
