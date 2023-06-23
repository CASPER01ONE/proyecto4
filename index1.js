const depositForm = document.getElementById('depositForm');
const paymentForm = document.getElementById('paymentForm');
const messageDiv = document.getElementById('message');
const saldoElement = document.getElementById("saldo");

depositForm.addEventListener('submit', deposit);
paymentForm.addEventListener('submit', payService);


let saldo = 0;

function deposit(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('depositAmount').value);
    // Aquí puedes implementar la lógica para realizar el depósito en la cuenta del usuario
    saldo += amount;
    showMessage(`Se depositaron ${amount} pesos en su cuenta.`);
    updateSaldo();
    depositForm.reset();
}

function payService(event) {
    event.preventDefault();
    const service = document.getElementById('service').value;
    const amount = parseFloat(document.getElementById('paymentAmount').value);
    
    // Aquí puedes implementar la lógica para realizar el pago del servicio
    if (amount <= saldo) {
        saldo -= amount;
        showMessage(`Se realizó un pago de ${amount} pesos para ${service}.`);
    } else {
        showMessage(`No tienes saldo suficiente para realizar el pago de ${amount} pesos.`);
    }
    updateSaldo();
    paymentForm.reset();
}

function showMessage(message) {
    messageDiv.innerHTML = message;
    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 3000);
}

function updateSaldo() {
    saldoElement.textContent = `Saldo actual: ${saldo} pesos`;
}