const canvas = document.getElementById("myCanvas");
canvas.width = 10000;
canvas.height = 10000;
const ctx = canvas.getContext("2d");
const map = new Map();

const car = new Car(1000, 500, 150, 300);

animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  ctx.save();
  if (car.y > canvas.height * 4 && car.x < canvas.width / 4) {
    ctx.translate(0, -canvas.height * 3.65);
    //ctx.translate(-car.x + canvas.width / 4,-canvas.height*3.65);
  } else if (
    car.x > canvas.width / 4 &&
    car.x < canvas.width - canvas.width / 4 &&
    car.y > canvas.height * 4
  ) {
    ctx.translate(-car.x + canvas.width / 4, -canvas.height * 3.65);
  } else if (
    car.x > canvas.width - canvas.width / 4 &&
    car.y > canvas.height * 4
  ) {
    ctx.translate(-canvas.width / 2, -canvas.height * 3.65);
  } else if (
    car.x > canvas.width - canvas.width / 4 &&
    car.y < canvas.height / 2
  ) {
    ctx.translate(-canvas.width / 2, 0);
  } else if (
    car.x > canvas.width - canvas.width / 4 &&
    car.y > canvas.height / 2
  ) {
    ctx.translate(-canvas.width / 2, -car.y + canvas.height / 2);
  } else if (car.x > canvas.width / 4 && car.y > canvas.height / 2) {
    ctx.translate(-car.x + canvas.width / 4, -car.y + canvas.height / 2);
  } else if (car.x < canvas.width / 4 && car.y < canvas.height / 2) {
    ctx.translate(0, 0);
  } else if (car.x > canvas.width / 4 && car.y < canvas.height / 2) {
    ctx.translate(-car.x + canvas.width / 4, 0);
  } else if (car.x < canvas.width / 4 && car.y > canvas.height / 2) {
    ctx.translate(0, -car.y + canvas.height / 2);
  }
  map.draw(ctx);
  car.draw(ctx);

  ctx.restore();
  requestAnimationFrame(animate);
}
