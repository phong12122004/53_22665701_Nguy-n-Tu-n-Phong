let btnf = document.getElementById('btndndk');
let btnf1 = document.getElementById('btndn');
let btnf2 = document.getElementById('btndk');
let login_form = document.getElementById('loginForm');
let reg_form = document.getElementById('registerForm');
// Show the login modal when "Đăng nhập/đăng kí" is clicked
btnf.addEventListener('click', function() {
    login_form.style.display = 'block';
    reg_form.style.display = 'none';
    new bootstrap.Modal(document.getElementById('loginModal')).show();
});

// Show registration form and hide login form
function showRegisterForm() {
    login_form.style.display = 'none';
    reg_form.style.display = 'block';
}

// Show login form and hide registration form
function showLoginForm() {
    login_form.style.display = 'block';
    reg_form.style.display = 'none';
}

// Xử lý sự kiện đăng ký
document.getElementById("btndk").addEventListener("click", function() {
    // Lấy giá trị từ form đăng ký
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const repassword = document.getElementById("repassword").value.trim();
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(el => el.innerText = "");
    // Kiểm tra các điều kiện đăng ký
    const phonePattern = /^\d{9}$/; // Số điện thoại phải có đúng 9 chữ số
    const emailPattern = /^[\w-\.]+@gmail\.com$/; // Email phải có đuôi là @gmail.com
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

    // Kiểm tra điều kiện số điện thoại
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Số điện thoại phải có đúng 9 chữ số.";
        isValid = false;
    }

    // Kiểm tra điều kiện email
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Email phải có đuôi là @gmail.com.";
        isValid = false;
    }

    // Kiểm tra mật khẩu nhập lại
    if (password !== repassword) {
        document.getElementById("repasswordError").innerText = "Mật khẩu nhập lại không khớp.";
        isValid = false;
    }


    if (isValid == true) {
        // Lưu dữ liệu vào LocalStorage nếu đăng ký thành công
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Đăng ký thành công! Quý khách có thể đăng nhập ngay.");
        // Tự động điền thông tin vào form đăng nhập
        document.getElementById("usernameL").value = username;


        // Hiển thị form đăng nhập và ẩn form đăng ký
        showLoginForm();
    }


});

// Xử lý sự kiện đăng nhập
document.getElementById("btndn").addEventListener("click", function() {
    // Lấy giá trị từ form đăng nhập
    const usernameL = document.getElementById("usernameL").value.trim();
    const passwordL = document.getElementById("passwordL").value.trim();

    // Kiểm tra các trường trống
    if (!usernameL || !passwordL) {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
        return;
    }

    // Lấy dữ liệu từ LocalStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    // Kiểm tra thông tin đăng nhập
    if (usernameL === savedUsername && passwordL === savedPassword) {
        alert("Đăng nhập thành công!");
        // Thực hiện các hành động sau khi đăng nhập thành công (nếu có)
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