const sharp  = require("sharp");

/*
    ********************************************************
        sharp uses mozjpeg defaults to compress the image 
                without sacrificing quality. 
    ********************************************************
    
    Note: Regarding the toFormat() method’s second argument, each image format takes 
    an object with different properties. For example, mozjpeg property is accepted 
    only on JPEG images.

    However, other image formats have equivalents options such quality, compression, 
    and lossless. Make sure to refer to the documentation to know what kind of options
    are acceptable for the image format you are compressing.
 */

async function resizeImage() {
  try {
    await sharp("assert/sammy.png")
      .resize({
        width: 150,
        height: 97
      })
      .toFormat('jpeg', { mozjpeg: true })
      .toFile("sammy-resized-compressed.jpeg");
  } catch (error) {
    console.log(error);
  }
}
resizeImage();
