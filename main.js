
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function(data_uri){
        console.log(data_uri);
        var img_row = '<img id="resulted" src="' + data_uri + '"/>';
        document.getElementById("result").innerHTML = img_row;
    });
}

console.log("ml5 version :-" + ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-3u3MCCLw/model.json',modelLoaded);