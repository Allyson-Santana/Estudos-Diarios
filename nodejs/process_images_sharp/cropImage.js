const sharp = require("sharp");

/*
  The rotateImage() function is an asynchronous function that reads an image and will 
  return the image rotated to an angle of 33 degrees. Within the function, the rotate() method of 
  the sharp module takes two arguments. The first argument is the rotation angle of 33 degrees. 
  By default, sharp makes the background of the rotated image black. To remove the black background, 
  you pass an object as a second argument to make the background transparent.

  The object has a background property which holds an object defining the RGBA color model. 
  RGBA stands for red, green, blue, and alpha.

  r: controls the intensity of the red color. It accepts an integer value of 0 to 255. 
  0 means the color is not being used, and 255 is red at its highest.

  g: controls the intensity of the green color. It accepts an integer value of 0-255. 
  0 means that the color green is not used, and 255 is green at its highest.

  b: controls the intensity of blue. It also accepts an integer value between 0 and 255. 
  0 means that the blue color isn’t used, and 255 is blue at its highest.

  alpha: controls the opacity of the color defined by r, g, and b properties. 0 or 0.0 
  makes the color transparent and 1 or 1.1 makes the color opaque.

  For the alpha property to work, you must make sure you define and set the values 
  for r, g, and b. Setting the r, g, and b values to 0 creates a black color. To create a transparent 
  background, you must define a color first, then you can set alpha to 0 to make it transparent.
*/

async function cropImage() {
  try {
    await sharp("assert/sammy.png")
      .extract({ width: 500, height: 330, left: 120, top: 70  })
      .grayscale()
      .toFile("sammy-cropped-grayscale.png");
  } catch (error) {
    console.log(error);
  }
}

cropImage();