const sharp = require("sharp")


async function convertToPng() {

  const data =  await sharp('./borabill.jpeg', {
    kernel: sharp.kernel.nearest,
  }).png().toFile('img.png')
  console.log("finish...", data)
}



convertToPng();