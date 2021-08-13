Webcam.set({
    width: 310, 
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snap(){
    console.log("abcd");
    Webcam.snap(function(data_uri){
        document.getElementById('camera').innerHTML = '<img id="captured_image" src="'+data_uri+'" />';
    });
}

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
    document.getElementById("accurate_model").innerHTML = "MobileNet is more accurate than azure";
}

function gotResult(error, results){
    if(error){
     console.error(error);
    }else{
        console.log(results);
        document.getElementById("answer").innerHTML = results[0].label;
        
    }
}