
document.getElementById('btn-desposit').addEventListener('click', function(){
    // DeposideField
    const newDeposite = document.getElementById('deposit-field');
    const newDepositeAmountString = newDeposite.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

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

    newDeposite.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // WithdrawField
    const newWithdraw = document.getElementById('withdraw-field');
    const newWithdrawAmountString = newWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Withdraw
    const withdrawTotalElement = document.getElementById('withdraw');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const currentWithdrawAmount = previousWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    // Ballence
    const previousBalance = document.getElementById('balance');
    const ballenceString = previousBalance.innerText;
    const balance = parseFloat(ballenceString);

    const currentBalance = balance - newWithdrawAmount;
    previousBalance.innerText = currentBalance;
    
    newWithdraw.value = '';
})