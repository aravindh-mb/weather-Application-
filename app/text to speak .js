let txt = "pleasecheck your internet connection ";
let utterance = new SpeechSynthesisUtterance(txt); 
 window.onclick= () => {
 speechSynthesis.speak(utterance);
}
 const texts = document.querySelector('text');

   window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

   const recognition = new window.speechRecognition();
   recognition.interimResults = true;
   
//    let p =document.createElement('p').innerHTML='lorem ipsum dolor amet '
   recognition.addEventListener('result',(e)=>{
       console.log(e);
   })
   recognition.start();