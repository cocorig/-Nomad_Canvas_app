const canvas = document.querySelector('canvas');
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
