import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { ANIME_HOST, FILMS_HOST } from "../constants/host";


function createAxiosInstance(baseURL: string, additionalHeaders: { [key: string]: string } = {}) {
  const instance = axios.create({
    baseURL,
    headers: {}
  });

  Object.entries(additionalHeaders).forEach(([key, value]) => {
    instance.defaults.headers.common[key] = value;
  });

  instance.interceptors.response.use(
    (res) => {
      console.log(res);
      return res;
    },
    async (err) => {
      if (err.response?.data?.errors) {
        const message = err.response.data.errors.id[0]; 
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
      } else {
        console.error("Ошибка запроса:", err);
        toast.error("Произошла ошибка. Пожалуйста, попробуйте позже.");
      }
    }
  );

  return instance;
}

export const createInstanceV1 = createAxiosInstance(ANIME_HOST); 
export const createInstanceV2 = createAxiosInstance(FILMS_HOST, {
    'X-API-KEY': process.env.API_KEY_KINO || '',
}); 

