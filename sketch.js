function setup() {
  createCanvas(600,600)
}

function draw() {
  
  //head
  strokeWeight(3)
  stroke(100)
  line(310,150,340,90)
  line(280,180,250,150)
  line(350,210,380,215)
  fill(205)
  noStroke()
  ellipse(width/2,height/3,100,100)
 
  
  
  //eye
  fill(255)
  noStroke()
  ellipse(310,height/3,30,30)
  fill(0)
  noStroke()
  ellipse(310,height/3,8,8)
  
  //dots
  fill(100)
  noStroke()
  ellipse(280,195,10,10)
  ellipse(310,170,8,8)
  ellipse(320,220,5,5)
  
  //neck
  strokeWeight(3)
  stroke(100)
  line(290,250,290,300)
  line(width/2,250,width/2,300)
  line(310,250,310,300)
  
  //body
  fill(100)
  noStroke()
  ellipse(290,450,80,80)
  fill(205)
  noStroke()
  rect(240,300,100,150)
  fill(0)
  rect(240,310,100,8)
 
  
  
  
  
  
}