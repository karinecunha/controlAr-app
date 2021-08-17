// const BASE_API = 'http://lgrdev.com/karine/laravel/public/api';
const BASE_API = 'http:/192.168.18.7:8000/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/user/refresh?token=${token}`, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/user/login`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const json = await req.json();
        return json;
    },
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user/create`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: name,
                email: email,
                password: password
            })
        });
        const json = await req.json();
        return json;

    },
    forgotPassword: async () => {

    },
    checkCode: async () => {

    },
    getRoomsInfo: async(token) => {
        try{
            const request = await fetch(`${BASE_API}/air?token=${token}`);
            const json = await request.json();
            console.log(token);
            return json;
        }catch(e){
            alert(e);
            console.log(e);
        }  
    },
    getTemperature: async(latitude, longitude) => {
        try{
            const request = await fetch(`https://api.hgbrasil.com/weather?key=97248cd9&lat=${latitude}&lon=${longitude}&user_ip=remote`);
            const json = await request.json();
            return json;
        }catch(e){
            alert(e);
            console.log(e);
        }  
    },
};