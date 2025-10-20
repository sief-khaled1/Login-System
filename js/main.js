var nameinput = document.getElementById('nameinput');
var emailinput = document.getElementById('emailinput');
var passwordinput = document.getElementById('passwordinput');
var signupbtn = document.querySelector('.signupbtn');

var dataList = [];
if (localStorage.getItem('info') !== null) {
    dataList = JSON.parse(localStorage.getItem('info'));
}

function signup() {
    var isNameValid = validateform(nameinput);
    var isEmailValid = validateform(emailinput);
    var isPassValid = validateform(passwordinput);
    var areinputsright = check();

    if (isNameValid && isEmailValid && isPassValid && areinputsright) {
        var data = {
            name: nameinput.value,
            email: emailinput.value,
            password: passwordinput.value,
        };
        dataList.push(data);
        localStorage.setItem('info', JSON.stringify(dataList));
    } else {
        console.log("Invalid input");
    }
}

function validateform(element) {
    var regex = {
        nameinput: /^[A-Za-z0-9_-]{3,15}$/,
        emailinput: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
        passwordinput: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    };
    if (regex[element.id].test(element.value)) {
        return true;

    }
    else {
        return false;
    }
}


var error = document.getElementById('errormessage');
var error2 = document.getElementById('errormessage2');
var error3 = document.getElementById('errormessage3');
var success = document.getElementById('successmessage');

function check() {
    for (var i = 0; i < dataList.length; i++) {
        if (dataList[i].email.toLowerCase() === emailinput.value.trim().toLowerCase()) {
            error.classList.remove('d-none');
            success.classList.add('d-none');
            error2.classList.add('d-none');
            error3.classList.add('d-none');
            return false;
        }
    }

    if (nameinput.value == '' || emailinput.value == '' || passwordinput.value == '') {
        error2.classList.remove('d-none');
        error.classList.add('d-none');
        success.classList.add('d-none');
        error3.classList.add('d-none');
        return false;
    } else if (validateform(nameinput) && validateform(emailinput) && validateform(passwordinput)) {
        success.classList.remove('d-none');
        error2.classList.add('d-none');
        error3.classList.add('d-none');
        error.classList.add('d-none');
        return true;
    }
    else {
        error3.classList.remove('d-none');
        success.classList.add('d-none');
        error2.classList.add('d-none');
        error.classList.add('d-none');
    }
};

signupbtn.addEventListener('click', signup);


var signinbtn = document.querySelector('.signinbtn');

function signin() {
    for (var j = 0; j < dataList.length; j++) {
        if (dataList[j].email.toLowerCase() === emailinput.value.trim().toLowerCase() && dataList[j].password == passwordinput.value) {
            window.location.href = 'home.html'
        }
    }
}
