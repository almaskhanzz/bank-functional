//bank deposite and withdraw
//Share one function between two input fields..
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clearing the deposit field
    inputField.value = '';
    return inputAmount;
}
//Deposit and withdraw update with one function..
function updateTextField(inputId, newTextAmout) {
    const textField = document.getElementById(inputId);
    const previousText = textField.innerText;
    const previousAmount = parseFloat(previousText);
    //total deposited..
    const amountUpdate = previousAmount + newTextAmout;
    textField.innerText = amountUpdate;
}
//Shared Balance update function
function totalBalance(newBalance, isAdd) {
    const balanceTextField = document.getElementById('total-balance');
    const balanceText = balanceTextField.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    if (isAdd == true) {
        const balanceUpdate = previousBalanceAmount + newBalance;
        balanceTextField.innerText = balanceUpdate;
    }
    else {
        const balanceUpdate = previousBalanceAmount - newBalance;
        balanceTextField.innerText = balanceUpdate;
    }
}
//Deposite Section...
document.getElementById('deposite-button').addEventListener('click', function () {
    const newDeposite = getInputValue('deposite-input');
    if (newDeposite > 0) {
        updateTextField('deposite-total', newDeposite);
        totalBalance(newDeposite, true);
    }
    else {
        alert("can't be deposited...try with some money");
    }
})
//Withdraw Section...
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdraw = getInputValue('withdraw-input');
    if (newWithdraw > 0) {
        updateTextField('withdraw-total', newWithdraw);
        totalBalance(newWithdraw, false);
    }
    else {
        alert("can't be withdrawn...try with some money");
    }
})