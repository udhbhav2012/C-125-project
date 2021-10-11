noseX = 0;
noseY = 0;
difference = 0;
rigthWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function draw() {
    background('#87CEEB');
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = " + difference + "px";
    fill('#f90093');
    stroke('#f90093');
    square(noseX, noseY, difference);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
        

    }
}

