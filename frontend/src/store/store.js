import { reactive } from "vue";
import axios from 'axios';
import router from '../router/index'
axios.defaults.withCredentials = true;

export const store = reactive({
    login: {
        status: false,
        data: {}
    },
    errs: [],
    stream: false,
    recognition: {},
    crono: 0,
    player: {},
    currentOffset: 0,
    setLogin: (val) => store.login.status = val,
    setData: (val) => store.login.data = val,
    getLoginStatus: () => store.login.status,
    logout: async() => {
        try {
            router.push({ name: "Home" })
            store.login.status = false
            store.login.data = {}
            store.stream = false
            localStorage.removeItem('auth')
            await axios.get('http://localhost:3001/logout')
        } catch (error) {
            console.log(error)
        }
    },
    doLogin: async () => {
        if (window.location.hash) {
            localStorage.removeItem('auth')
        }

        if (!localStorage.auth) {
            try {
                let auth = await axios.post(`http://localhost:3001/streamdata/${window.location.hash.split("=")[1].split("&")[0]}`);
                localStorage.auth = JSON.stringify(auth.data)
                console.log(auth.data)
                store.login.data = auth.data;
                store.login.status = true;
                await store.getStream();
            } catch (error) {
                store.login.status = false;
                console.log(error)
            }
        }

        if (localStorage.auth) {
            store.login.status = true;
            store.login.data = JSON.parse(localStorage.auth);

        }

        if (!window.location.hash && !localStorage.auth) {
            localStorage.removeItem('auth')
            store.login.status = false
            store.login.data = {}
            store.stream = false
        }
    },

    getStream: async () => {
        try {
            let stream = await axios.get(`http://localhost:3001/streamdata/stream/${store.login.data.name}`);//${store.login.data.name} thelibertymario
            console.log(stream)
            store.stream = stream.data.stream
            let createT = await axios.post(`http://localhost:3001/streams/create`, {
                owner: stream.data.stream.channel.name,
                twitchId: stream.data.stream.videoId,
            })
            if(createT.data.offset) store.offset = createT.data.offset
        } catch (error) {
            console.log(error)
            store.stream = null
        }
    },
    craeteTranscript: async (text, crono) => {
        try {
            let push = await axios.post(`http://localhost:3001/streams/pushtranscript`, {
                twitchId: store.stream.videoId,
                text: text,
                timeStamp: crono
            })
            console.log(push)
        } catch (error) {
            console.log(error)
        }
    }
});