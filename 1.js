// 预设的有效账号
const validUsers = {
  "user1": "pass1",
  "user2": "pass2"
};

function showRegisterForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (validUsers[username] === password) {
    window.location.href = 'https://space.bilibili.com/3546587571686054?spm_id_from=333.1007.0.0';
  } else {
    document.getElementById('loginFailurePopup').style.display = 'block';
    setTimeout(() => {
      document.getElementById('loginFailurePopup').style.display = 'none';
    }, 3000); 
  }
}

function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // 检查用户名是否重复
  if (validUsers[username]) {
    document.getElementById('usernameError').innerHTML = '该用户名已存在，请选择其他用户名！';
    return;
  } else {
    document.getElementById('usernameError').innerHTML = '';
  }

  // 检查密码是否符合要求
  if (password.length < 4 ||!/[a-zA-Z]/.test(password) ||!/\d/.test(password)) {
    document.getElementById('passwordError').innerHTML = '密码至少 4 位且必须包含字母和数字！';
    return;
  } else {
    document.getElementById('passwordError').innerHTML = '';
  }

  // 检查两次输入的密码是否一致
  if (password!== confirmPassword) {
    alert('两次输入的密码不一致！');
    return;
  }

  validUsers[username] = password;
  alert('注册成功！');
  showLoginForm();
}