let darkmode="";
let DM =document.getElementById('cb');
let s = localStorage.getItem('darkmode',`${darkmode}`);
let GO = document.getElementById('go');

DM.onclick = function check(){
      if(DM.checked) {
         darkmode=true;
         localStorage.setItem('darkmode',`${darkmode}`)
         document.body.style.transition='0.8s ease-in-out';
         document.body.style.background="black"
         document.body.style.backgroundImage="../assets/mic green.png" ;
         document.body.style.color="dodgerblue";
         GO.style.backgroundColor="green";
}
else {
   darkmode=false;
   document.body.style.transition='0.8s ease-in-out';
   document.body.style.background="orange";
}
}
