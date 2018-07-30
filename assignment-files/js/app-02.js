/* 02 - FORM VALIDATION :: YOUR CODE BELOW */


var htmlForm = document.getElementById('registration-form');

 htmlForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var validateUser = event.target.elements.username.value;
    formComplete = 0;

    if (validateUser === '') {
        document.querySelector('.validation--username').textContent = 'User cannot be blank';
    } else if (validateUser !== ''){
        document.querySelector('.validation--username').textContent = 'Success';
        formComplete++;
    }

    var validatePassword = event.target.elements.userpassword.value;
    var matchPassword = event.target.elements.confirmpassword.value;
    var sizePassword = event.target.elements.userpassword.value.length;
    console.log(sizePassword)

    if (sizePassword >= 8) {
        document.querySelector('.validation--user-password').textContent = 'Success';
        if (validatePassword === matchPassword) {
            document.querySelector('.validation--confirm-password').textContent = 'Success';
            formComplete++;
        } else{
            document.querySelector('.validation--confirm-password').textContent = 'Password must match original password';
        }
    } else {
        document.querySelector('.validation--user-password').textContent = 'Password must be longer than 8 characters';
        document.querySelector('.validation--confirm-password').textContent = 'Password must be longer than 8 characters & match original password';
    }

    var taxId = event.target.elements.taxid.value;
    var taxLength = event.target.elements.taxid.value.length;
    numbers = /^[0-9]+$/;
    if (taxId.match(numbers) && taxLength >= 10) {
      console.log(taxId)
        document.querySelector('.validation--tax-id').textContent = 'Success';
        formComplete++;
    } else if (taxId === ""){
        document.querySelector('.validation--tax-id').textContent = 'Must provide Tax ID';
    } else {
        document.querySelector('.validation--tax-id').textContent = 'Input field must contain a number > 0 and is 10 digits';
    }

    var select = event.target.elements.account.value;
    if (select !== "") {
        document.querySelector('.validation--account').textContent = 'Success';
        formComplete++;
    }else {
      document.querySelector('.validation--account').textContent = 'You must select an Option';
    }

    var checkbox = event.target.elements.termsofservice.checked;
    if (checkbox !== true) {
      document.querySelector('.validation--terms-of-service').textContent = "You must check this box before proceding";
    } else {
      document.querySelector('.validation--terms-of-service').textContent = "Success";
      formComplete++;
    }
    var succesForm = document.querySelector('.validation--entire-form');
    console.log(formComplete)
    if (formComplete == 5) {
        succesForm.textContent = "Form Completed";
      }else {
        succesForm.textContent = "Form not completed";
      }
});
