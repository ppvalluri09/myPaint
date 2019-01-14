
var size1, size2, size3;
var eraser;
var pencil;
var colors = ['Red', 'Green', 'Yellow', 'Blue', 'Orange', 'White', 'Purple', 'Cyan'];
var col_button = [];
//var col_value = ['rgb(255, 0, 0)', 'green', 'yellow', 'blue', 'orange', 'white', 'purple'];
var color_value = 255;
var bg;
var clear_btn;
var tools = [];
var tools_value = ['1px', '5px', '10px', 'Eraser', 'Pencil', 'Background', 'Reset'];
var canvas1;

function preload(){
  fullscreen();
}

function setup() {
  // setup code
  var canvas = createCanvas(1300, 420);
  canvas1 = document.querySelector( 'canvas' );
  canvas.style('border', '2px dashed white');
  canvas.style('border-radius', '30px');
  canvas.parent('canvas_box');
  canvas.class('canvas');
  if (mouseX<width && mouseY<height){
    canvas.style('cursor', 'url(pen.ico)');
  }
  background(0);
  strokeWeight(10);
  createP('');
  for (var i=0; i<tools_value.length; i++){
    tools[i] = createButton(tools_value[i]);
    tools[i].class('tools');
    tools[i].parent('tool_box');
  }
  tools[6].mousePressed(function(){
    clear();
  });
  var flag = 0;
  tools[5].mousePressed(function(){
    if (flag==0){
      background(255);
      canvas.style('border', '3px dotted #999');
      canvas.style('border-radius', '30px');
      flag = 1;
    } else if (flag==1){
      background(0);
      canvas.style('border', '2px dashed white');
      canvas.style('border-radius', '30px');
      flag = 0;
    }
  });
  createP('');
  for (var i=0; i<colors.length; i++){
    col_button[i] = createButton(colors[i]);
    col_button[i].class('colors');
    col_button[i].parent('color_box');
  }
    col_button[0].mousePressed(function(){
      color_value = 'red';
      stroke(color_value);
    });
    col_button[1].mousePressed(function(){
      color_value = 'green';
      stroke(color_value);
    });
    col_button[2].mousePressed(function(){
      color_value = 'yellow';
      stroke(color_value);
    });
    col_button[3].mousePressed(function(){
      color_value = 'blue';
      stroke(color_value);
    });
    col_button[4].mousePressed(function(){
      color_value = 'orange';
      stroke(color_value);
    });
    col_button[5].mousePressed(function(){
      color_value = 'white';
      stroke(color_value);
    });
    col_button[6].mousePressed(function(){
      color_value = 'purple';
      stroke(color_value);
    });
    col_button[7].mousePressed(function(){
      color_value = 'cyan';
      stroke(color_value);
    });
    stroke(color_value);
  tools[0].mousePressed(function(){
    strokeWeight(1);
  });
  tools[1].mousePressed(function(){
    strokeWeight(5);
  });
  tools[2].mousePressed(function(){
    strokeWeight(10);
  });
  tools[3].mousePressed(function(){
    stroke(0);
  });
  tools[4].mousePressed(function(){
    stroke(color_value);
  });
  var link = document.createElement('a');
  link.innerHTML = 'Download Image';
  link.addEventListener('click', function(ev){
    link.href = canvas1.toDataURL();
    link.download = "mypainting.png";
  }, false);
  document.body.appendChild(link);


}

function draw() {
  // drawing code
  //var xc = constrain(mouseX, 0, width);
  //var yc = constrain(mouseY, 0, height);
  if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
  }
}
