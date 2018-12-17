/* https://vimeo.com/144162102
JSON source (5:05) https://github.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json
Video referenced (9:05)"createP from DOM" https://vimeo.com/142698165 */

var data;
var l1;
var l2;
function preload() {
  
 font = loadFont('assets/SF-Pro-Text-Bold.otf');
logo1 = loadImage("assets/iiith_full.png");
logo2 = loadImage("assets/iith_full.png");

}

function setup() {
  //logo1.loadPixels();
  //logo2.loadPixels();
	angleMode(DEGREES);
  textFont(font);
  createCanvas( windowWidth, windowHeight);
   
  
  
}

function draw()
{
background(0);

  var left_padding = 60;
var text_3_size=20;
var rect_padding=40;
var rhombus_size = windowHeight/10;
  noFill();
stroke(0,174,239,120);
  for(var i=0;i<windowWidth;i=i+rhombus_size)
  {
    for(var j=0;j<windowHeight;j=j+rhombus_size)
  {
    strokeWeight(random(0,10));
    rhombus(i,j,rhombus_size);
  }
  }
fill(255);
noStroke();
rect(0,windowHeight-(windowHeight/6)-text_3_size-rect_padding,windowWidth,windowHeight);
//image(logo1,10,10);

// logo1 = loadImage("assets/iiith_full.png"); 
// logo2 = loadImage("assets/iith_full.png");
  
  var right_padding =windowWidth/3;
   var logo_size= 50;
    image(logo1, windowWidth-windowWidth/3,windowHeight-(windowHeight/6)+20,logo1.width/logo_size,logo1.height/logo_size);

image(logo2, windowWidth-windowWidth/3,windowHeight-(windowHeight/6)+60,logo2.width/logo_size,logo2.height/logo_size);

//background_pattern();














textSize(80);
text("India HCI ",left_padding,windowHeight/6);

text("2019 ",left_padding,windowHeight/6+80);


textSize(40);
var middle_spacing = 50;
text("Hyderabad  ",left_padding,(windowHeight/2)-middle_spacing);

text("December ",left_padding,windowHeight/2);

text("6th 7th 8th ",left_padding,(windowHeight/2)+middle_spacing);
 
fill(255);

textSize(text_3_size);
fill(0);
text("General Chairs",left_padding,windowHeight-(windowHeight/6));
textSize(14);
text("Nimmi Rangaswamy",left_padding,windowHeight-(windowHeight/6)+50);
text("Deepak John Mathew",left_padding,windowHeight-(windowHeight/6)+70);
text("Ramesh Loganathan",left_padding,windowHeight-(windowHeight/6)+90);



textSize(text_3_size);
text("Co-hosted by",windowWidth-right_padding,windowHeight-(windowHeight/6));
textSize(14);

// text("IIIT Hyderabad",windowWidth-right_padding+70,windowHeight-(windowHeight/6)+40);
// text("IIT Hyderabad",windowWidth-right_padding+70,windowHeight-(windowHeight/6)+60);



// line(0,windowHeight-(windowHeight/6),windowWidth,windowHeight-(windowHeight/6));
// line(0,windowHeight-(windowHeight/6)+90,windowWidth,windowHeight-(windowHeight/6)+90);

noLoop();
}

function background_pattern()
{ 
  var rhombus_size = windowHeight/10;
  noFill();
stroke(0,200,155,0);
  for(var i=0;i<windowWidth;i=i+rhombus_size)
  {
    for(var j=0;j<windowHeight;j=j+rhombus_size)
  {
    strokeWeight(random(0,10));
    rhombus(i,j,rhombus_size);
  }
  }
  
}

function rhombus(x1,y1,size1)
{
  var x = x1;
  var y =y1;
  var size = size1;
 
beginShape();
  vertex(x+(size/2), y);
  vertex(x+size, y+(size/2));
  vertex(x+(size/2),y+size);
  vertex(x, y+(size/2));
  vertex(x+(size/2), y);
  endShape()
}

