interface ExternalId {
    kpHD: string | null;
    imdb: string;
    tmdb: number;
  }
  
  interface Rating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  }
  
  interface Votes {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  }
  
  interface Backdrop {
    url: string | null;
    previewUrl: string | null;
  }
  
  interface Images {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
  }
  
  interface Distributor {
    distributor: string | null;
    distributorRelease: string | null;
  }
  
  interface Premiere {
    world: string | null;
    digital: string | null;
    bluray: string | null;
    cinema: string | null;
    dvd: string | null;
    russia: string | null;
  }
  
  interface Genre {
    name: string;
  }
  
  interface Country {
    name: string;
  }
  
  interface Person {
    id: number;
    photo: string;
    name: string | null;
    enName: string | null;
    profession: string;
    enProfession: string;
  }
  
  interface Name {
    name: string;
  }
  
  interface Fees {
    world: Record<string, unknown>;
    russia: Record<string, unknown>;
    usa: Record<string, unknown>;
  }
  
  interface Technology {
    hasImax: boolean;
    has3D: boolean;
  }
  
  interface Logo {
    url: string | null;
    previewUrl: string | null;
  }
  
  interface Watchability {
    items: unknown[];
  }
  
  interface Videos {
    trailers: unknown[];
  }
  
  export interface Movie {
    status: string | null;
    externalId: ExternalId;
    rating: Rating;
    votes: Votes;
    backdrop: Backdrop;
    movieLength: number;
    images: Images;
    productionCompanies: unknown[];
    spokenLanguages: unknown[];
    id: number;
    type: string;
    name: string | null;
    description: string | null;
    distributors: Distributor;
    premiere: Premiere;
    slogan: string | null;
    year: number;
    poster: Logo;
    facts: unknown[];
    genres: Genre[];
    countries: Country[];
    seasonsInfo: unknown[];
    persons: Person[];
    lists: unknown[];
    typeNumber: number;
    alternativeName: string;
    enName: string | null;
    names: Name[];
    fees: Fees;
    updatedAt: string;
    ratingMpaa: string | null;
    shortDescription: string | null;
    technology: Technology;
    ticketsOnSale: boolean;
    similarMovies: unknown[];
    sequelsAndPrequels: unknown[];
    budget: Record<string, unknown>;
    ageRating: string | null;
    logo: Logo;
    watchability: Watchability;
    top10: string | null;
    top250: string | null;
    deletedAt: string | null;
    isSeries: boolean;
    seriesLength: number | null;
    totalSeriesLength: number | null;
    networks: unknown | null;
    videos: Videos;
  }
  
  