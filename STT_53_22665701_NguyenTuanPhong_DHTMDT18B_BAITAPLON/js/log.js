let btnf = document.getElementById('btndndk');
let btnf1 = document.getElementById('btndn');
let btnf2 = document.getElementById('btndk');
let login_form = document.getElementById('loginForm');
let reg_form = document.getElementById('registerForm');

btnf.addEventListener('click', function() {
    login_form.style.display = 'block';
    reg_form.style.display = 'none';
    new bootstrap.Modal(document.getElementById('loginModal')).show();
});


function showRegisterForm() {
    login_form.style.display = 'none';
    reg_form.style.display = 'block';
}


function showLoginForm() {
    login_form.style.display = 'block';
    reg_form.style.display = 'none';
}


document.getElementById("btndk").addEventListener("click", function(event) {
    event.preventDefault();
    let isValid = true;
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const repassword = document.getElementById("repassword").value.trim();

    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(el => el.innerText = "");


    const phonePattern = /^\d{9}$/;
    const emailPattern = /^[\w-\.]+@gmail\.com$/;
    const usernamePattern = /^[A-Z][a-z]*(?:\s[A-Z][a-z]*){1,}$/;
    if (!username || !phone || !email || !password || !repassword) {
        document.getElementById("usernameError").innerText = "Bắt buộc nhập";
        document.getElementById("phoneError").innerText = "Bắt buộc nhập";
        document.getElementById("emailError").innerText = "Bắt buộc nhập";
        document.getElementById("passwordError").innerText = "Bắt buộc nhập";
        document.getElementById("repasswordError").innerText = "Bắt buộc nhập";
        isValid = false;
    }
    if (!usernamePattern.test(username)) {
        document.getElementById("usernameError").innerText = "Họ tên phải có chữ cái đầu viết hoa và chứa ít nhất 2 từ.";
        isValid = false;
    }


    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Số điện thoại phải có đúng 9 chữ số.";
        isValid = false;
    }


    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Email phải có đuôi là @gmail.com.";
        isValid = false;
    }


    if (password !== repassword) {
        document.getElementById("repasswordError").innerText = "Mật khẩu nhập lại không khớp.";
        isValid = false;
    }
    if (isValid) {

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        isValid = true;

        alert("Đăng ký thành công! Quý khách có thể đăng nhập ngay.");

        document.getElementById("usernameL").value = username;


        showLoginForm();


    }


});


document.getElementById("btndn").addEventListener("click", function() {

    const usernameL = document.getElementById("usernameL").value.trim();
    const passwordL = document.getElementById("passwordL").value.trim();


    if (!usernameL || !passwordL) {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
        return;
    }


    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");


    if (usernameL === savedUsername && passwordL === savedPassword) {
        alert("Đăng nhập thành công!");

    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
});

// Chuyển đổi hiển thị giữa form đăng ký và đăng nhập
function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}