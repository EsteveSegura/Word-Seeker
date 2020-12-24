export default function makeFindUser({ findUser }) {
    return async function getUser(httpRequest) {
        try {
            const find = await findUser(httpRequest.params.streamer)
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: find
            }
        } catch (e) {
            console.log(e)

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}