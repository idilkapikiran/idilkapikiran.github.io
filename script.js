function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    draw=function(){
    fill(mouseX, mouseY, 255);
    ellipse(mouseX, mouseY, 50, 50);
    }
  }