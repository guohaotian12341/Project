$(function(){
    $("input[value=登录]").on("click",function(){
        $.get("Sys_User/Login",$("#f").serialize(),function(data){
            if(data!==""){
                window.location.href="Login.jsp";
            }else{
                alert("密码错误")
            }
        })
    })
})