img = "";

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#ea89f5');
    text("Dog", 45, 75);
    noFill();
    stroke('#ea89f5');
    rect(30, 60, 450, 350);
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload() {
    img = loadImage('dog_cat.jpg');
}