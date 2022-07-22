import sharp from 'sharp';

async function exploreParamsResize() {
    try {
        sharp("assert/underwater.png")
            .resize(200, 300, {
                kernel: sharp.kernel.nearest,
                fit: 'contain', // OK
                position: 'right top', // OK
                background: { r: 255, g: 255, b: 255, alpha: 0.5 }, // OK

            })
            .toFile('outputExploreParamsResize.png')
            .then(() => {
                // output.png is a 200 pixels wide and 300 pixels high image
                // containing a nearest-neighbour scaled version
                // contained within the north-east corner of a semi-transparent white canvas
            });

    } catch (error) {
        console.error(error);
    }
}

exploreParamsResize();

//https://sharp.pixelplumbing.com/api-resize

/**
    options.width String  ? meios alternativos de especificarwidth. Se ambos 
    estiverem presentes, isso terá prioridade.

    options.height String  ? meios alternativos de especificarheight. Se 
    ambos estiverem presentes, isso terá prioridade.

    options.fit String  como a imagem deve ser redimensionada para caber 
    nas duas dimensões fornecidas, umadecover,contain,ou. (opcional, padrão)
    fillinsideoutside'cover'

    options.position Posição da string  , gravidade ou estratégia para usar 
    quandofitécoveroucontain. (opcional, padrão'centre')

    options.background ( String  | Object  ) cor de fundo quando fité contain, 
    analisado pelo módulo de cores  , o padrão é preto sem transparência. (opcional, 
    padrão {r:0,g:0,b:0,alpha:1})

    options.kernel String  o kernel a ser usado para redução de imagem. 
    (opcional, padrão'lanczos3')

    options.withoutEnlargement Boolean  não aumenta se a largura ou altura já 
    for menor que as dimensões especificadas, equivalente à>opção de geometria 
    do GraphicsMagick. (opcional, padrãofalse)

    options.withoutReduction Boolean  não reduz se a largura ou altura já for 
    maior que as dimensões especificadas, equivalente à<opção de geometria do 
    GraphicsMagick. (opcional, padrãofalse)
    
    options.fastShrinkOnLoad Boolean  tiram maior vantagem do recurso de redução 
    ao carregar JPEG e WebP, que pode levar a um leve padrão moiré em algumas 
    imagens. (opcional, padrãotrue)
 * 
 */