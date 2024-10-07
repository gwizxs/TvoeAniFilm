export const API_URL = {
    // ITS A ANIME URLS
    // GET TITLE SCHEDULE. TYPE :: now / week
    schedule: (type: string) => `anime/schedule/${type}`,
 
    // OTHER URLS FOR FETCHES
    search: () => `app/search/releases`,
    episode: (id: string) => `anime/releases/episodes/${id}`,
    release: (alias: string) => `anime/releases/${alias}`,
    genre_releases: (id: number) => `anime/genres/${id}/releases`,
    last_releases: () => 'anime/releases/latest',
    catalog_releases: () => 'anime/catalog/releases',
    all_genres: () => 'anime/genres',
    genres_with_limit: () => `anime/genres/random`,
    franchises: () => 'anime/franchises',
    franchises_with_limit: () => 'anime/franchises/random',
    franchise: (id: string) => `anime/franchises/${id}`,
 
    // GET ALL POSSIBLE SETTINGS FOR SORTING IN CATALOG
    years: () => 'anime/catalog/references/years',
    types: () => 'anime/catalog/references/types',
    seasons: () => 'anime/catalog/references/seasons',
    statuses: () => 'anime/catalog/references/publish-statuses',
    catalog_genres: () => 'anime/catalog/references/genres',
 };




// FILMS URLS

export const FILMS_URL = {
    search_films_name: () => 'movie/search',
    searh_films_universal: () => 'movie?page=1&limit=10',
    search_seasons: () => 'movie/possible-values-by-field',

    reviews: () => 'review?page=1&limit=10',
    films: () => 'movie?page=1&limit=10&notNullFields=id&notNullFields=poster.url',
    awards: () => 'movie/awards',

}


