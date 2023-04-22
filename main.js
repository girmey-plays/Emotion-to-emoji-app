prediction_1 = "";
prediction_2 = "";

Webcam.set({

width:350,
height:30,
image_format:"png",
png_quality:90


});

camera = document.getElementById("camera");

function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img id="image" src="'+data_uri+'">';

});

}

console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UpT7s8xqg/model.json",modelloaded);

function modelloaded(){

console.log("model loaded");

}

function speak(){

var synth = window.speechSynthesis;
speakData1 = "The first prediction is"+prediction_1;
speakData2 = "The second prediction is"+prediction_2;
var utterThis = new SpeechSynthesisUtterance(speakData1+speakData2);
synth.speak(utterThis);

}


function check(){

img = document.getElementById("image");
classifier.classify(img, gotresult);

}

function gotresult(error, results){

if(error)
{

console.error(error);

}

else{

console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;

if(results[0].label == "happy"){

document.getElementById("update_emoji").innerHTML = "&#128522;";

}

if(results[0].label == "sad"){

    document.getElementById("update_emoji").innerHTML = "&#128532;";
    
    }
  


if(results[0].label == "angry"){

    document.getElementById("update_emoji").innerHTML = "&#128548;";
    
    }
    

    if(results[1].label == "happy"){

        document.getElementById("update_emoji2").innerHTML = "&#128522;";
        
        }
        
        if(results[1].label == "sad"){
        
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
            
            }
          
                
        if(results[1].label == "angry"){
        
            document.getElementById("update_emoji2").innerHTML = "&#128548;";
            
            }
            
        }
}