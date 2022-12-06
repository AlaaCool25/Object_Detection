img = "";
stats = "";
objects = [];

function draw() {
    image(img, 0, 0, 640, 420);
   
    if (stats != "") 
    {
        for (i = 0; i < objects.length; i++) 
        {
            document.getElementById("status").innerHTML = "Status = Object Detected";
            fill('#ea89f5');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke('#ea89f5');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
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
    objects = results;
}