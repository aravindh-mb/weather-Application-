let un = document.getElementById('username');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var mobile = document.getElementById('mobile');

var submit =document.getElementById('submit');

submit.addEventListener('',(un)=>{
  let username = localStorage.setItem('username','hello');
  console.log(userName);
})
mobile.onfocus = function snackbar(){
  if(password.innerText.value == !password2.innerText.value){
    var x = document.getElementById("snackbar");
    x.className.add = "show";
    setTimeout(function(){
       x.className = x.className.replace("show", ""); 
      }, 3000);
   
  }else{
    console.log("all the datas are filled");
  }
}

submit.onclick=function check(event){
  e.preventDefault();
  if(password==!password2){
    alert("Please fill all the input fields");
  }
}


