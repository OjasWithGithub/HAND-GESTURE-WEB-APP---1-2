Webcam.set({
    width: 350,
    height: 270,
    png_quality: 90,
    png_format: 'png'
})

camera = document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "img" src = " '+data_uri+'"/></img>';
    })
    
}

console.log('ml5 version',ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-osTVLbhn/model.json',modelLoaded)

function modelLoaded(){
    console.log("Model Loaded!")
}

img = document.getElementById("image")

classifier.classify(img,gotResults)

function speak(){
    synth = window.SpeechSynthesis
    speak_data1 = "The first prediction is "+prediction_1;
    speak_data2 = " and second prediction is "+prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2)
    synth.speak(utterThis)
}

function gotResults(error,results){
    if (error != null){
        console.error(error)
    }
    else {
        
    }
}