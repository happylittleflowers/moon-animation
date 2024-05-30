// Canvas - Moon scene

// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Animation variables
let moon1x = 55;
let text1x = 18;
let text1speed = 2;
let fish1x = 220;
let fish1xspeed = 1;
let fish2x = 134;
let fish2xspeed = 2;

// Track frames gone by
let frame = 0;
//Triggers the start of the animation
requestAnimationFrame(draw);

// Put all drawing code in the draw function
function draw() {
  // top-left corner (0,0)
  // top-right corner (400,0)
  // bottom-left corner (0,400)
  // bottom-right corner (400,400)

  // Sky
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // update timing
  frame++;

  // Water
  ctx.beginPath();
  ctx.fillStyle = "darkblue";
  ctx.fillRect(0, 160, cnv.width, 300);

  // Moon
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(234, moon1x, 49, 0, 35 * Math.PI);
  ctx.fill();

  // Blur lights 1
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(25, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 2
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(69, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 3
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(115, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 4
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(155, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 5
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(198, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 6
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(235, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 7
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(276, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 8
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(325, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Blur lights 9
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(368, 147, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Text
  ctx.font = "15px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Art by Priyanka B", text1x, 390);

  // Shark Image
  let sharkImg = document.getElementById("shark");
  ctx.drawImage(sharkImg, 15, 214, 125, 90);

  // Fish Head 1
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(fish1x, 300, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Fish Tail 1
  ctx.beginPath();
  ctx.moveTo(220, 300);
  ctx.lineTo(240, 290);
  ctx.lineTo(240, 310);
  ctx.fill();

  // Fish Head 2
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(fish2x, 325, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Fish Tail 2
  ctx.beginPath();
  ctx.moveTo(300, 325);
  ctx.lineTo(320, 315);
  ctx.lineTo(320, 335);
  ctx.lineTo(300, 325);
  ctx.fill();

  // lighthouseImage
  let lighthouseImg = document.getElementById("lighthouse");
  ctx.drawImage(lighthouseImg, 303, 165, 90, 90);

  ctx.font = "20px Georgia";
  ctx.fillText("Frame: " + frame, 20, 20);

  // Animation
  // Moon goes down into the water
  if (moon1x <= 457 && frame >= 199) {
    moon1x = moon1x + 2; // or moon1x++
  }

  // Fishhead back and forth
  fish1x = fish1x + fish1xspeed;

  if (fish1x >= 350) {
    fish1xspeed = -1;
  }

  if (fish1x <= 150) {
    fish1xspeed = 1;
  }
  // Fishhead back and forth
  fish2x = fish2x + fish2xspeed;

  if (fish2x >= 350) {
    fish2xspeed = -1;
  }

  if (fish2x <= 150) {
    fish2xspeed = 1;
  }

  // Text
  text1x = text1x + text1speed;

  requestAnimationFrame(draw);
}
