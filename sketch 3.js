let angle=0
let font;  //載入字型文字
let points = [];  //轉成點狀文字
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("f/Danfo-Regular-VariableFont_ELSH.ttf") 
}
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background("#22577a")
  textFont(font)
  textSize(100)
  textAlign(CENTER,CENTER)
  points = font.textToPoints("413730739", 250,450, 200, {
    sampleFactor:2//數字越小 產生點數越少
  }); 
     for (let u=0;u<points.length; u++) { 
       text(str(u),points[u].x,points[u].y)
       noStroke()
       ellipse(points[u].x,points[u].y,8)
       fill("#08d9d6")
    }
  rectMode(CENTER)//畫方形以中心點為座標點
  noFill()//方形不填滿顏色
  angleMode(DEGREES)//設定角度的單位(有角度的時候要有)
  frameRate(20)//每秒進入draw()函數的次數
  
}

function draw() {
  background("#22577a");
  push()
     translate(width/2,height/2)
     rotate(angle);  
     scale(1,cos(angle))
    let  points = font.textToPoints("413730739", -500,75, 200, {
      sampleFactor:2//數字越小 產生點數越少
    }); 
    let flip = sin(angle * 10);  // 隨著角度變化進行翻轉
    scale(flip, cos(angle * 200));
    for (let u=0; u<points.length; u++) { 
    //text(str(i),points[i].x,points[i].y)
       noStroke()
       ellipse(points[u].x,points[u].y,8)
       fill("#08d9d6")
       // strokeWeight(8)
      //stroke("#08d9d6")
      //line(points[u].x,points[u].y,points[u+1].x,points[u+1].y)
      //line(points[u].x,points[u].y+r*sin(angle+u*10),points[u+1].x,points[u=u+1].y+r*sin(angle+u*10))
      
   }
   

   pop()
   angle=(angle+5)%180
   
   
  for (let y=0;y<height;y=y+120){
   for (let x=0;x<width;x=x+120){
    push()//重新設定格式(包含原點(0，0)的位子、線條顏色...)，要設定原點(0，)0的位子在(x，y)上
     translate(x+50,y+50)//把原點(0，0)移到視窗的中心
     stroke("#c7f9cc")//線條顏色
     noFill()
     for(let i=0;i<10;i=i+1){
       let r=map(sin(frameCount),-1,1,50,255)
       let g=map(cos(frameCount/2),-1,1,50,255)
       let b=map(sin(frameCount/4),-1,1,50,255)
       stroke(r,g,b)
       rotate(angle)//物件旋轉的角度 以原點(0，0)作為旋轉的基準點
       rect(0,0,100-i*2,100-i*2,10)//75是讓方形四角變有弧度
       angle=sin(frameCount)*10
    
     }
    pop()//取消所有設定格式，原點(0，0)回到視窗左上角
   }
 }
}
