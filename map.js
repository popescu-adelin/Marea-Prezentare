class Map {
  constructor() {}
  draw(ctx) {
    const img = new Image();
    img.src = "map.jpg";
    ctx.drawImage(img, 0, 0, 10000, 10000);
  }
}
