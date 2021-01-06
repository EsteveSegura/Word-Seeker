export default function makeFindTranscriptStream({ findTranscriptStream }) {
    return async function findTranscription(httpRequest) {
        try {
            console.log(httpRequest)
            const data = await findTranscriptStream(httpRequest.params.idStream)
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: data
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