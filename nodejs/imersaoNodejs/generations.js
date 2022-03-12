const { createServer } = require('http') 
const { parse } = require('url') 
const { randomUUID } = require('crypto') 
const axios = require('axios')

/** Router Get */
{
    const PORT = 3000
    async function handler(request, response) {
        if (
            request.method === 'GET' &&
            request.url.includes('products')
        ) {
            const { query: { productName } } = parse(request.url, true)
            const result = {
                id: randomUUID(),
                product: productName
            }

            return response.end(JSON.stringify(result))
        }


        return response.end('hey!')
    }

    createServer(handler)
        .listen(PORT, () => console.log(`products API is running at ${PORT}`))
}

/** Router Post */
{
    const PORT = 4000
    async function handler(request, response) {
        if (
            request.method === 'POST' &&
            request.url.includes('cart')
        ) {
            for await (const data of request) {
                const item = JSON.parse(data)
                console.log('received', item)

                return response.end(`process succeeded for ${item.id}`)
            }
        }

        return response.end('hey!')
    }

    createServer(handler)
        .listen(PORT, () => console.log(`cart API is running at ${PORT}`))
}

const database = async () => 
    Array.from({ length: 1000 }, 
        (v, index) => `${index}-cellphone`
    )

const PRODUCTS_URL = 'http://localhost:3000/products'
const CART_URL = 'http://localhost:4000/cart'

/** Working used  Generations*/

async function * proccessData() {
    const products = await database()

    for (const product of products) {
        
        const { data: productInfo } = await axios
            .get(`${PRODUCTS_URL}?productName=${product}`)

        const { data: cardData } = await axios
            .post(`${CART_URL}?productName=${product}`, productInfo)
        
        yield cardData
    }
}

(async function(){
    for await (const data of proccessData()) {
        console.table(data)
    }
})()



/** Working not used  Generations*/

/*
async function proccessData() {
    const products = await database()
    const responses = new Array();

    for (const product of products) {
        
        const { data: productInfo } = await axios
            .get(`${PRODUCTS_URL}?productName=${product}`)

        const { data: cardData } = await axios
            .post(`${CART_URL}?productName=${product}`, productInfo)
        
        responses.push(cardData)
    }

    return responses
}

(async function(){
    console.table( await proccessData() )
})()
*/