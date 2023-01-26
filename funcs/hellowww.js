//Hello Netlify Function

export async function handler (event, context) {
    console.log(event.queryStringParameters)
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Helloooow Gijouu' })
    }
}
