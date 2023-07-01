# Nomad_Canvas_app

```javascript
ctx.rect(50, 50, 100 , 100)//(x시작좌표, y시작좌표 ,  width, height)
ctx.rect(150, 150, 100 , 100) //선을 만듬,색을 칠하기 전엔 나타나지 않는다.
ctx.fillStyle = 'tomato';
ctx.fill();//색을 채운다.


ctx.beginPath(); //이 전 경로와 단절하고 새 경로를 만든다.
ctx.rect(250, 250, 100 , 100)
ctx.rect(350, 350, 100 , 100)
ctx.fillStyle = 'green';
ctx.fill();


//fill 단색으로 모양을 다 채움
//stroke 선으로만 그림
```