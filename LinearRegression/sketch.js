var points = [];
var m = 1
var b = 0

function draw() {
  background(51)
  for(var i = 0; i < points.length; i++){
    var x = map(points[i].x, 0, 1, 0, width)
    var y = map(points[i].y, 0, 1, height, 0)
    fill(255)
    stroke(255)
    ellipse(x, y, 8, 8)
  }
  if(points.length > 1){
    getLinearRegression()
    drawLine()
  }
}

function drawLine(){
  var x1 = 0
  var x2 = 1
  var y1 = m * x1 + b
  var y2 = m * x2 + b
  x1 = map(x1, 0, 1, 0, width)
  x2 = map(x2, 0, 1, 0, width)
  y1 = map(y1, 0, 1, height, 0)
  y2 = map(y2, 0, 1, height, 0)
  stroke(255, 0, 255)
  line(x1, y1, x2, y2)
} 

function getLinearRegression(){
  var xSum = 0
  var ySum = 0
  for(var i  = 0; i < points.length; i++){
    xSum += points[i].x
    ySum += points[i].y
    var xMean = xSum / points.length
    var yMean = ySum / points.length
  }
  var numerator = 0
  var denominator = 0
  for(var i = 0; i < points.length; i++){
    numerator += (points[i].x - xMean) * (points[i].y - yMean)
    denominator += (points[i].x - xMean) * (points[i].x - xMean)
  }
  m = numerator / denominator
  b = yMean - m * xMean
}

function mousePressed(){
  var x = map(mouseX, 0, width, 0, 1)
  var y = map(mouseY, 0, width, 1, 0)
  var point = createVector(x, y)
  points.push(point)
}

function setup() {
  createCanvas(400, 400)
  background(56)
}