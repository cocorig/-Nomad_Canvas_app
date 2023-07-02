const colorOptions = Array.from(document.querySelectorAll('.color-option'));//array 생성 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineWidth = document.querySelector('#line-width');
const color = document.querySelector('#color');
const modeBtn = document.querySelector('#mode-btn');
const destroyBtn = document.querySelector('#destroy-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const file = document.querySelector('#file');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
let ispainting = false;
let isFilling = false;
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

//선을 그릴지, canvas를 채울지 모드 변경
function onModeClick(){
    if(!isFilling){
       
       modeBtn.innerText = 'fill';
       isFilling = true;
       console.log(isFilling)
    }else{
        
       modeBtn.innerText = 'Draw';
       isFilling = false;
       console.log(isFilling)
    }
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
//cavas를 색으로 채우는 함수,click은 mousedown + mouseup
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)//현재 선택된 색으로 그림
       
    }
}
//리셋 버튼
function onDestroyClick(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}
//지우개 버튼
function onEraserClick(){
    ctx.strokeStyle = 'white';
    isFilling = false;
    modeBtn.innerText = 'Draw';

}
//file change
function onFileChange(e){
    const file = e.target.files[0];
    const url = URL.createObjectURL(file); //브라우저의 메모리에서 내가 선택한 file의 URL을 얻어옴
    const image = new Image();
    image.src =  url;
    image.onload = function(){
        ctx.drawImage(image, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
        file.value = null; //새로운 이미지를 추가할 수있다.
    }
}


canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting)
canvas.addEventListener('mouseup', cancelPainting)
canvas.addEventListener('mouseleave', cancelPainting) 
canvas.addEventListener('click',onCanvasClick)

lineWidth.addEventListener('change',onLineWidthChange);
color.addEventListener('change',onColorChange);
modeBtn.addEventListener('click',onModeClick);
destroyBtn.addEventListener('click',onDestroyClick);
eraserBtn.addEventListener('click',onEraserClick);
file.addEventListener('change',onFileChange);