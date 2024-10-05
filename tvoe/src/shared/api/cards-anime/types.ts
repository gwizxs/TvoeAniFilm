
export interface FranchiseImage {
    preview: string;
    thumbnail: string;
    optimized: {
        preview: string;
        thumbnail: string;
    };
}

export interface Franchise {
    id: string;
    name: string;
    name_english: string;
    rating: number;
    last_year: number;
    first_year: number;
    total_releases: number;
    total_episodes: number;
    total_duration: string;
    total_duration_in_seconds: number;
    image: FranchiseImage;
}
