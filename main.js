var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event){
console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
var Accuracy = event.results[0][0].confidence;
var Percentage = Accuracy*100;
var RoundedPercentage = Percentage.toFixed(2);
console.log(RoundedPercentage);
document.getElementById("accuracy").innerHTML = "The Accuracy Of The Speech To Text Conversion Is = "+ RoundedPercentage + "!";
}