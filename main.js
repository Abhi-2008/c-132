img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",75,45);
    stroke("#FF0000")
    noFill();
    rect(75,30,400,400);

    fill("#FF0000");
    text("cat",320,120);
    stroke("#FF0000");
    noFill();
    rect(300,90,270,320);
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
    }
}