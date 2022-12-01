img = "";
stats = "";

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#ea89f5');
    text("Dog", 45, 75);
    noFill();
    stroke('#ea89f5');
    rect(30, 60, 450, 350);

    fill('#a6f7ec');
    text("Cat", 320, 120);
    noFill();
    stroke('#a6f7ec');
    rect(300, 90, 270, 320);
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects...";
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function modelLoaded() {
    console.log("Model Loaded!");
    stats = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}