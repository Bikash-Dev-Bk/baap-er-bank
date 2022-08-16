
document.getElementById('btn-desposit').addEventListener('click', function(){
    // DeposideField
    const newDeposite = document.getElementById('deposit-field');
    const newDepositeAmountString = newDeposite.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    newDeposite.value = '';

    if(isNaN(newDepositeAmount)){
        alert('Please type a number');
        return;
    }

    // Deposit
    const depositTotalElement = document.getElementById('deposit');
    const previousDepositeTotalString = depositTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    
    const currentDepositAmount = previousDepositeTotal + newDepositeAmount;
    depositTotalElement.innerText = currentDepositAmount ;

    // Ballence
    const previousBalance = document.getElementById('balance');
    const ballenceString = previousBalance.innerText;
    const balance = parseFloat(ballenceString);


    const currentBalance = balance + newDepositeAmount;
    previousBalance.innerText = currentBalance;
})