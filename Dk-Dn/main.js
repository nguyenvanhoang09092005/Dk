const container = document.getElementById("container");

const registerBtn = document.getElementById("register");

const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.getElementById("googleLogin").addEventListener("click", function () {
  var oauthUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    "response_type=code" +
    "&client_id=YOUR_CLIENT_ID" +
    "&redirect_uri=YOUR_REDIRECT_URI" +
    "&scope=openid%20email" +
    "&state=STATE_STRING";
  window.location.href = oauthUrl;
});

function register() {
  var name = document.getElementById("signup-name").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;

  // Gửi dữ liệu đăng ký đến server sử dụng AJAX hoặc Fetch API
  // Ví dụ sử dụng Fetch API:
  fetch("register.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data); // Hiển thị thông báo từ server
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function login() {
  var email = document.getElementById("signin-email").value;
  var password = document.getElementById("signin-password").value;

  // Gửi dữ liệu đăng nhập đến server sử dụng AJAX hoặc Fetch API
  // Tương tự như phần đăng ký
}
