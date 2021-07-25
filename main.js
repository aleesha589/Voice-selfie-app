var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start_speak() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var speechtotext = event.results[0][0].transcript;
    console.log(speechtotext);
    document.getElementById("textbox").innerHTML = speechtotext;
    if(speechtotext=="take my selfie"){
        speak();

    }
    
}
function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';

        }
    );


}
function speak() {
    var synth = window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        download_snapshot();
    }, 5000);
}
Webcam.set({
    width: 400,
    height: 400,
    image_format: 'png',
    png_quality: 90

});
camera = document.getElementById("camera");

function download_snapshot(){
anchor=document.getElementById("link");
Image_download=document.getElementById("selfie_img").src;
anchor.href=Image_download;
anchor.click();

}