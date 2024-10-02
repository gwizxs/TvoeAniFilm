import { createInstanceV1 } from "../base"


export const getCards = async () => (await createInstanceV1.get('/v1.4/movie?page=1&limit=10')).data


 