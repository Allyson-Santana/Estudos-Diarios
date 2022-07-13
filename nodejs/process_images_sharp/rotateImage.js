const sharp = require("sharp");

/*
    The rotateImage() function now reads the image, rotate it, and applies a gaussian blur 
    to the image. It applies a gaussian blur to the image using the sharp module’s blur() method. 
    The method accepts a single argument containing a sigma value between 0.3 and 1000. Passing it 
    4 will apply a gaussian blur with a sigma value of 4. 
*/

async function rotateImage() {
  try {
    await sharp("assert/sammy.png")
      .rotate(33, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .blur(4)
      .toFile("sammy-rotated-blurred.png")
  } catch (error) {
    console.log(error);
  }
}

rotateImage();