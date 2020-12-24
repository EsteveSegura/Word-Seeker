import {checkStream} from "../useCases";

export default function makeCreateStream({ createStream }) {
    return async function addStream(httpRequest) {
        try {
            console.log(httpRequest.body)
            const data = await createStream(httpRequest.body)
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