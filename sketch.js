let angle=0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#22577a")
  rectMode(CENTER)//畫方形以中心點為座標點
  noFill()//方形不填滿顏色
  angleMode(DEGREES)//設定角度的單位(有角度的時候要有)
  frameRate(20)//每秒進入draw()函數的次數
}

function draw() {
  background("#22577a");
  for (let y=0;y<height;y=y+120){
   for (let x=0;x<width;x=x+120){
    push()//重新設定格式(包含原點(0，0)的位子、線條顏色...)，要設定原點(0，)0的位子在(x，y)上
     translate(x+50,y+50)//把原點(0，0)移到視窗的中心
     stroke("#c7f9cc")//線條顏色
  //----------------產生一個方形---------------------------
 // rotate(angle)//物件旋轉的角度 以原點(0，0)作為旋轉的基準點
 // rect(0,0,600,600,75)//75是讓方形四角變有弧度
  //angle=sin(frameCount)*100//讓方形的旋轉角度為-100～100
  //--------------產生十個方形，每個方形大小不一樣---------------------
     for(let i=0;i<10;i=i+1){
     //let r=random(50,255)//抽一個亂數值 介於50(包含)~255(不包含)的數字
     //let g=random(50,255)//抽一個亂數值 介於50(包含)~255(不包含)的數字
     //let b=random(50,255)//抽一個亂數值 介於50(包含)~255(不包含)的數字
       let r=map(sin(frameCount),-1,1,50,255)
       let g=map(cos(frameCount/2),-1,1,50,255)
       let b=map(sin(frameCount/4),-1,1,50,255)
   //rect(0,0,600-i*5,600-i*5,75)//75是讓方形四角變有弧度
   //rect(0,0,600-i*5,600-i*5,75)//75是讓方形四角變有弧度
   //rect(0,0,600-i*5,600-i*5,75)//75是讓方形四角變有弧度
       stroke(r,g,b)
       rotate(angle)//物件旋轉的角度 以原點(0，0)作為旋轉的基準點
       rect(0,0,100-i*2,100-i*2,10)//75是讓方形四角變有弧度
       angle=sin(frameCount)*10
    
     }
    pop()//取消所有設定格式，原點(0，0)回到視窗左上角
   }
 }
}