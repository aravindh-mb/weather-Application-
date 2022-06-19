$('.container').tilt({
    scale: 1.2
})

function showPassword() {
    var x = document.getElementById("user-password");
    if (x.type === "password") {
      x.type = "text";
      let z=document.getElementById("cbox");
      z.style.accentColor='green';
    } else {
      x.type = "password";
    }
  }


