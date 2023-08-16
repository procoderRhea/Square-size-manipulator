noseY=0;
noseX=0;
difference = 0;
rightWristX = 0;
leftWristX = 0; 

function preload() {
    
}

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(570, 150);

    video = createCapture(VIDEO);
    video.size(550, 500)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

    }
}

function draw() {
    background('#A7FFF4');

    fill('#FC70EB');
    stroke('black');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Dimensions of a Square will be - " + difference + " px";
}