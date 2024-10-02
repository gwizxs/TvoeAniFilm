// import { AxiosInstance } from "axios";
import axios from "axios";
import { Bounce, toast } from "react-toastify";



function createInstance() {
    const instance = axios.create({
        baseURL: 'Apiurl',
        headers: {}
    })

    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token')
            if (token && config.url !== '/auth') config.headers.Authorization = `Bearer ${token}`
            return config
        },
        (error) => { return Promise.reject(error) }
    )

    instance.interceptors.response.use(
        res => {
            console.log(res);
            return res
        },
        async (err) => {
            const message = err.response.data.errors.id[0]

            if (err.response.data.status !== 200) {
                toast.error(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce
                })
            }
        }
    )
    return instance
}

export const createInstanceV1 = createInstance()