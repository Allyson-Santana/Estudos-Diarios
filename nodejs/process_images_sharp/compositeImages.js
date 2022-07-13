const sharp = require("sharp");

/*
  Image Composition is a process of combining two or more separate pictures to 
  create a single image. This is done to create effects that borrow the best 
  elements from the different photos. Another common use case is to watermark an 
  image with a logo.
*/

async function compositeImages() {
  try {
    await sharp("assert/underwater.png")
      .composite([
        {
          input: "assert/sammy-transparent.png",
          top: 50,
          left: 50,
        },
      ])
      .toFile("sammy-underwater.png");
  } catch (error) {
    console.log(error);
  }
}

compositeImages()
