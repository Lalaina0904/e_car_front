import {AuthProvider} from 'react-admin';
import Cookies from "js-cookie"
import { urlBase } from '@/utils/urlBase';
export const authProvider:AuthProvider = {


    login: ({ username, password }) => {
        const request = new Request(urlBase+"/token", {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then((token) => {
                Cookies.set("token",token)
            });
    },
    getIdentity:()=>{
    return Promise.resolve({
        id: "id",
        fullName: "fullname",
        
    })
    },
    logout: () => {
        Cookies.remove("token")
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            Cookies.remove("token")
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: ()=>Cookies.get("token")?Promise.resolve():Promise.reject(),
    getPermissions: () => Promise.resolve(),
}