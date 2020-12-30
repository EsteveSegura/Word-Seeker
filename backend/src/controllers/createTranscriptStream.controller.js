import {checkStream} from "../useCases";

export default function makeCreateTranscriptStream({ createTranscriptStream }) {
    return async function addTranscript(httpRequest) {
        try {
            console.log(httpRequest.body)
            const data = await createTranscriptStream(httpRequest.body)
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