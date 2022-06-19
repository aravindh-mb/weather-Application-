
            function runSpeechRecognition(){
				var action = document.getElementById("action");
			var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
            var recognition = new SpeechRecognition();
			// recognition.lang='ta-IN';
			window.onclick= recognition.lang='en-GB';
// run recognition starts
			recognition.onstart =function(){
				action.style.transition="1s";

				action.innerHTML = "<h4>Recognition started...</h4>";
				// console.log(action.innerText.value);
			}
// run when recognition ends 
			recognition.onspeechend=function(){
				action.innerHTML="<h4> ok done..</h4>";
                action.style.marginLeft="50px";
// if no voices stop  listening 
				recognition.stop();
// Timeout Setting for oK done Text !
            setTimeout(() => {
            action.style.transition = '1s';
                    action.innerHTML="<h4> </h4>";
            }, 2000);
            let txt = "please wait for a minute.. ";
                let utterance = new SpeechSynthesisUtterance(txt); 
                    speechSynthesis.speak(utterance);     
			}
			recognition.onresult=function(event){
                var transcripts = event.results[0][0].transcript;
			console.log(transcripts);
			let resultvalue = transcripts;
            searchText.value=transcripts;

			let x= transcripts.split(' ');
			console.log(x);
			if(transcripts==`open YouTube`){
				window.open(`https://www.youtube.com`);
			}
			if(transcripts=='open Instagram'){
				window.open("https://www.instagram.com");
			}
			if(transcripts=='open Github'){
				window.open("https://www.github.com/aravindh-mb");
			}
            if(transcripts=='open Blog'){
				window.open("https://www.mrblackblogging.blogspot.com");
			}
				var confi = event.results[0][0].confidence;
				console.log(confi);
			}
       recognition.start();
			let txt = "please wait a second";
                let utterance = new SpeechSynthesisUtterance(txt); 
                window.onclick=speechSynthesis.speak(utterance);
}	

// // let gobtn = document.querySelector('.go');



// // gobtn.addEventListener('click',()=>{
// // 	if(!navigator.onLine){
// // 		swal("Internet not Connected!","", "warning");
// // 	}
// // 	else{ 		
// // 	  let cityName = document.getElementById('search').value;
// // 	  let api =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4094f56683903ba10f8d1c31036fb31c`;	
      
// // 	  var weather = {
// // 		temparature:{
// // 			 value:undefined,
// // 			 unit: "celsius"
// // 		            }	
// // 	    }
// // fetch(api)
// // 		  .then((response) => response.json())
// // 			 .then((data)=> {
// // 					 console.log(data);
// // 					 weather.temparature.value =Math.floor( data.main.temp - KELVIN);
// // 					 weather.description = data.weather[0].description;
// // 					 weather.iconId = data.weather[0].icon;
// // 					 weather.city = data.name;
// // 					 weather.country = data.sys.country;
// // 					 weather.latitude = data.coord.lat;
// // 					 weather.longitude = data.coord.lon;
// // 				// print our weather data object
// // 					 console.log(weather);
// //                   console.log("hi")

// // 				});
// // 				console.log("weather data fetched successfully ");
 
// // 			}
// // });

 
