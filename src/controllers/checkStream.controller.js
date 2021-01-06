import {checkStream} from "../useCases";

export default function makeCheckStream({ checkStream }) {
    return async function getStream(httpRequest) {
        try {

            const dataStream = await checkStream(httpRequest.params.name)
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: dataStream
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