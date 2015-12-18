$( document ).ready(function(){

//SETUP CONTEXT

  var coordinatesArray = [];
  var lineCanvas = document.getElementById("grapher-canvas");
  var dotCanvas = document.getElementById("dot-canvas");
  var lineContext = lineCanvas.getContext('2d');
  var dotContext = dotCanvas.getContext('2d');
  dotContext.imageSmoothingEnabled = true;
  lineContext.imageSmoothingEnabled = true;
  lineContext.shadowBlur = 12;
  lineContext.shadowColor='rgb(0,0,0)';
  var circleRadius = 10;
  var canvasLineWidth = 1;
  var dotsCount, linesCount = 0;
  var sectionColor;
  var timesRun = 0;


var autoRunner = setInterval(function(){
    autoGenerator();
    timesRun+=1;

    if (timesRun == 65){
     clearInterval(autoRunner);
    }

  }, 1000);


setInterval(setCanvasSize(), 20);

// INIT CLICK CREATE
function init(){
        lineCanvas.addEventListener("mousedown", addPoint, false);
}

init();




function getClickPosition(event){
    var x = event.x;
    var y = event.y;
    x -= lineCanvas.offsetLeft;
    y -= lineCanvas.offsetTop;
    return [ x , y ]
  }


function getRandomPoint(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
}



function drawLine(origin, dest){
    lineContext.beginPath();
    lineContext.moveTo(origin[0], origin[1]);
    lineContext.lineTo(dest[0], dest[1]);
    lineContext.lineWidth = canvasLineWidth;
    lineContext.strokeStyle = sectionColor;
    lineContext.stroke();
  }

function followDraw(origin){
    lineContext.beginPath();
    lineContext.moveTo(origin[0], origin[1]);
    lineContext.lineTo(origin[0] + getRandomPoint(-4,4), origin[1] + getRandomPoint(-5,5));
    lineContext.lineWidth = canvasLineWidth;
    lineContext.strokeStyle = sectionColor;
    lineContext.stroke();
}

function setCanvasSize() {
    var pageHeight = window.innerHeight;
    var pageWidth = window.innerWidth;
    lineCanvas.width = pageWidth;
    lineCanvas.height = pageHeight;

}


function addPoint(event){
    var newPoint = getClickPosition(event);
    coordinatesArray.push(newPoint);
    dotContext.beginPath();
    dotContext.arc(newPoint[0],  newPoint[1], circleRadius, 0, 2*Math.PI,false)
    dotContext.fillStyle =  'white';
    dotContext.fill();

    if (coordinatesArray.length > 1) {
      var newCoordinate = coordinatesArray[coordinatesArray.length-1];
      sectionColor = randomColor();
      for (var i = 0; i < coordinatesArray.length ; i++) {
        var currentCoordinate = coordinatesArray[i];

        drawLine(currentCoordinate, newCoordinate);

      }
    }
  }


function autoGenerator(){
      var randomX = getRandomPoint(0, lineCanvas.width);
      var randomY = getRandomPoint(0, lineCanvas.height);
      var newPoint = [randomX, randomY];

    coordinatesArray.push(newPoint);

    dotContext.beginPath();
    dotContext.arc(newPoint[0],  newPoint[1], circleRadius, 0, 2*Math.PI,false)
    dotContext.fillStyle =  'white';
    dotContext.fill();


    if (coordinatesArray.length > 1) {
      var newCoordinate = coordinatesArray[coordinatesArray.length-1];

      for (var i = 0; i < coordinatesArray.length ; i++) {
        var currentCoordinate = coordinatesArray[i];
        /* varie hue */
        sectionColor = '#444';
        drawLine(currentCoordinate, newCoordinate);
      }
    }
}



function snakeGenerator(){

    if (coordinatesArray.length < 1){
      var randomX = lineCanvas.width/2;
      var randomY = lineCanvas.height/2;
        var firstPoint = [randomX, randomY];
        coordinatesArray.push(firstPoint);
        dotContext.beginPath();

        dotContext.arc(firstPoint[0],  firstPoint[1], circleRadius, 0, 2*Math.PI,false)
      dotContext.fillStyle =  'white';
      dotContext.fill();
    }


    else  {
      var newX = coordinatesArray[coordinatesArray.length-1][0] + getRandomPoint(-5,5);
      var newY = coordinatesArray[coordinatesArray.length-1][1] + getRandomPoint(-5,5);
      if(newX % 12 === 0 || newY % 12 === 0){
        newX = getRandomPoint(0, lineCanvas.width);
        newY = getRandomPoint(0, lineCanvas.height);
      }
      var newCoordinate = [newX, newY] ;

      coordinatesArray.push(newCoordinate);

      sectionColor = 'white';
      for (var i = 0; i < coordinatesArray.length ; i++) {
        var currentCoordinate = coordinatesArray[i];

        drawLine(currentCoordinate, newCoordinate);

      }
    }

 }






//COLOR GENERATORS

function randomColor(){
  var randomHex = '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
  return randomHex;
};

function randomGrayscale(){
  var value = Math.random() * 0xFF | 0;
  var grayscale = (value << 16) | (value << 8) | value;
  var color = '#' + grayscale.toString(16);
  return color;
}




});


