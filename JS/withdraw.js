document.getElementById('withdraw-btn').addEventListener('click', function(){
    // WithdrawField
    const newWithdraw = document.getElementById('withdraw-field');
    const newWithdrawAmountString = newWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    newWithdraw.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please type a number');
        return;
    }

    // Withdraw
    const withdrawTotalElement = document.getElementById('withdraw');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    

    // Ballence
    const previousBalance = document.getElementById('balance');
    const ballenceString = previousBalance.innerText;
    const balance = parseFloat(ballenceString);

    if(newWithdrawAmount > balance){
        alert('Baap er Bank a Ato tk nai!!');
        return;
    }

    const currentWithdrawAmount = previousWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    const currentBalance = balance - newWithdrawAmount;
    previousBalance.innerText = currentBalance;
    
})