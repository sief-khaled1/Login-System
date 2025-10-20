var emailinput = document.getElementById('emailinput2');
var passwordinput = document.getElementById('passwordinput2');
var signinbtn = document.querySelector('.signinbtn');
var error4 = document.querySelector('.error4');
var error5 = document.querySelector('.error5');

signinbtn.addEventListener('click', login);

function login() {
    var users = JSON.parse(localStorage.getItem('info')) || [];

    if (check()) {
        var found = false;
        for (var i = 0; i < users.length; i++) {
            if (
                users[i].email.toLowerCase() === emailinput.value.trim().toLowerCase() &&
                users[i].password === passwordinput.value
            ) {
                found = true;
                break;
            }
        }

        if (found) {
            error4.classList.add('d-none');
            error5.classList.add('d-none');
            var theuser = users[i];
            users.push(theuser);
            localStorage.setItem('info', JSON.stringify(users));
            window.location.href = "home.html";
        } else {
            error4.classList.remove('d-none');
            error5.classList.add('d-none');
        }
    }
}


function check() {
    if (emailinput.value == '' || passwordinput.value == '') {
        error5.classList.remove('d-none');
        error4.classList.add('d-none');
        return false;
    }
    return true;
}




