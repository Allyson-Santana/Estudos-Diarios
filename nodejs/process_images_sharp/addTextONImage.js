import sharp from 'sharp';

/*
    Nota: Se você instalou o Node.js usando a Opção 2 — Instalando Node.js com Apt 
    Usando um PPA NodeSource ou Opção 3 — Instalando Node Usando o Node Version
    Manager e obtendo o erro fontconfig error: cannot load default config file: no 
    such file: (null), instale fontconfigpara gerar o arquivo de configuração de fonte.

    Atualize o índice de pacotes do seu servidor e, depois disso, use apt installpara 
    instalar o fontconfig.
*/

async function addTextOnImage() {
  try {
    const width = 750;
    const height = 483;
    const text = "Sammy the Shark";

    const svgImage = `<svg 
        width="${width}" 
        height="${height}"
    >
        <style>
            .title { 
                fill: #001; 
                font-size: 70px; 
                font-weight: bold;
            }
        </style>
        <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>`;

    const svgBuffer = Buffer.from(svgImage);
    const image = await sharp("assert/sammy.png")
        .composite([
            {
                input: svgBuffer,
                top: 0,
                left: 0
            }
        ])
        .toFile("sammy-text-overlay.png");

  } catch (error) {
    console.log(error);
  }
}

addTextOnImage();