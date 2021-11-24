Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("cam");
Webcam.attach(camera);


function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imageresult"src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-i462rX-T/model.json",modelloaded);


function modelloaded(){
    console.log("modelloaded");
}
