const colorOptions = Array.from(document.querySelectorAll('.color-option'));//array 생성 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineWidth = document.querySelector('#line-width');
const color = document.querySelector('#color');

canvas.width = 800;
canvas.height = 800;
let ispainting = false;
ctx.lineWidth =lineWidth.value;

//strokeStyle 와 fillStyle를 한번에 바꿔주는 함수
function colorChage(e){
    ctx.strokeStyle =  ctx.fillStyle = color.value= e;
   
}
// color선택
colorOptions.forEach((option)=>{
    option.addEventListener('click',(e)=>{
        colorChage(e.target.dataset.color)
        //console.dir(e.target.dataset.color) dir에서 보면 더 자세히 볼수있음
    })
})

//color input이 바뀔때
function onColorChange(e){
    colorChage(e.target.value);
}




//lineWidth가 바뀔때
function onLineWidthChange(e){

 ctx.lineWidth =e.target.value
}


// 마우스가 움직일때
function onMove(e){
   
    if(ispainting){ 
       
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    //마우스를 때고 그리고있지 않을때 
    
    ctx.moveTo(e.offsetX, e.offsetY);
  
   

}
// 누르다가 마우스를 땟을때
function cancelPainting(){
    ispainting = false;
    ctx.beginPath();//모든 line들은 path가 같기때문에 이전에 그려진 선과 새로운 선의 연결을 끊어줘야 함
}
//처음 누르는 순간,계속 누르고 있을때 , 이때 선이 나타나야 함
function startPainting(){
    ispainting = true;

}
canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting)
canvas.addEventListener('mouseup', cancelPainting)
canvas.addEventListener('mouseleave', cancelPainting) //

//moveTo는 선을 긋지 않으면서 브러쉬를 움직이게 해줌,유저가 마우스를 움직 일 때마다 호출,연필은 계속 움직여줘야 하기 때문
//click하면 click한 곳에서부터 선을 그려야 함
//

lineWidth.addEventListener('change',onLineWidthChange)
color.addEventListener('change',onColorChange)const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // === paint brush

//js한테도 canvas가 얼마나 큰지 알려줘야함 왜 css뿐 아니고 javascript에게 알려줘야야 하는 지?
//canvas에서 이미지의 퀄리티를 높이기 위해서
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(200,200,50,200)
// ctx.fillRect(400,200,50,200)
// ctx.lineWidth = 4;//선의 너비를 먼저 바꿔주고 storoke를 해야함.
// ctx.strokeRect(300,300, 50,100)
// ctx.fillRect(200,200,200,20)
// ctx.moveTo(200,200);
// ctx.lineTo(325,100);
// ctx.lineTo(450,200);
// ctx.fill();
ctx.fillRect(200,200,15,100);
ctx.fillRect(385,200,15,100);
ctx.fillRect(250,200,100,150);


ctx.arc(300, 150, 50, 0, 2 * Math.PI);
//CanvasPath.arc(/x: 시작좌표 , y: 시작좌표, radius: 반지름, startAngle: number, endAngle: number, counterclockwise?: boolean | undefined): void
//startAngle: 원의 시작부분
//endAngle:원을 끝내는 angle, 2 * Math.PI가 돼야 완전한 원이 된다.
ctx.fill();
//만약 무언가의색을 바꿔주려고 하려면 우선 새로운 path가 필요한지 아닌지 생각
ctx.beginPath();
ctx.fillStyle =  'white';
ctx.arc(330, 150, 5, 0, 2 * Math.PI);
ctx.arc(270, 150, 5, 0, 2 * Math.PI);
ctx.fill();
