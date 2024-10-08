import { FILMS_URL } from "../api_url";
import { createInstanceV2 } from "../base";
import { Movie } from "./types";



export const getFilms = async ({ page, limit }: { page: number, limit: number }): Promise<Movie[]> => {
    const axiosInstance = createInstanceV2;
    const response = (await axiosInstance.get(FILMS_URL.films(), {
        params: {
            page,
            limit,
            notNullFields: 'poster.url'
        }
    }))
    return response.data;
};


export const SearchFilms = async (searchTerm: string) => {
    const response = await createInstanceV2.get(FILMS_URL.search_films_name(), {
        params: {
            query: searchTerm,
        },
    })
    return response;
}