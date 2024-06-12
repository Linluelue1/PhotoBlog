function registerButton(){
    var loginForm = document.querySelector('.loginForm');
    var confirmPassword = document.querySelector('.confirmPassword');
    var register = document.querySelector('.register');
    var register2 = document.querySelector('.register2');
    var login = document.querySelector('.login');

    // 假设.loginForm的初始宽度是300px
    var initialWidth = 300;
    var moveDistance = -1122; // 移动的距离

    // 平滑移动界面到左边
    loginForm.style.transform = 'translateX(' + moveDistance + 'px)';
    
    // 显示确认密码的input
    confirmPassword.style.display = 'block';

    //按钮消失
    login.style.display = 'none'    
    register.style.display  = 'none'

    //按钮居中
    register2.style.transform = 'translateX(110px)';
    register2.style.display  = 'block'
}

function validAccount(){
    var account = document.querySelector('.accountInput')
    var password = document.querySelector('.passwordInput')
    if(account.value=="admin" && password.value=="123"){
        alert("登陆成功！")
        window.location.href = 'MainPage.html';
    }else{
        alert("账号或密码错误！")
    }
}

function registerButton2(){
    var account = document.querySelector('.accountInput')
    var password = document.querySelector('.passwordInput')
    var confirmPassword = document.querySelector('.confirmPasswordInput')

    if(password.value==confirmPassword.value){
        alert("注册成功，功能待开发，请返回")
        location.reload();
    }else{
        alert("账号重复或密码有误请重试")
        account.value=''
        password.value=''
        confirmPassword.value=''
    }
}
