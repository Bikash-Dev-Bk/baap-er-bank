document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email').value;
    const passwordField = document.getElementById('password').value;

    if(emailField === 'baperbank@gmail.com' && passwordField === 'lock'){
        console.log('Valid user');
    }
    else{
        console.log('Invalid user!');
    }
})