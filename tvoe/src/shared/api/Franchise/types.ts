
export interface FranchiseImage {
    preview: string;
    thumbnail: string;
    optimized: {
        preview: string;
        thumbnail: string;
    };
}

export interface Franchise {
    slug: any;
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



// ============================ Franchise Details ===============================


interface Image {
    preview: string;
    thumbnail: string;
    optimized: {
        preview: string;
        thumbnail: string;
    };
}

interface AgeRating {
    value: string;
    label: string;
    is_adult: boolean;
    description: string;
}

export interface Release {
    id: number;
    type: {
        value: string;
        description: string;
    };
    year: number;
    name: {
        main: string;
        english: string;
        alternative: string;
    };
    alias: string;
    season: {
        value: string;
        description: string;
    };
    poster: {
        src: string;
        thumbnail: string;
        optimized: {
            src: string;
            thumbnail: string;
        };
    };
    fresh_at: string;
    created_at: string;
    updated_at: string;
    is_ongoing: boolean;
    age_rating: AgeRating;
    publish_day: {
        value: string;
        description: string;
    };
    description: string;
    notification: string;
    episodes_total: number;
    external_player: string;
    is_in_production: boolean;
    is_blocked_by_geo: boolean;
    episodes_are_unknown: boolean;
    is_blocked_by_copyrights: boolean;
    added_in_users_favorites: number;
    average_duration_of_episode: number;
}

interface FranchiseRelease {
    id: string;
    sort_order: number;
    release_id: number;
    franchise_id: string;
    release: Release;
}

interface Anime {
    id: string;
    title: string;
    englishTitle: string;
    score: number;
    finalYear: number;
    startYear: number;
    releaseCount: number;
    episodeCount: number;
    duration: string;
    durationInSeconds: number;
    artwork: Image;
    franchiseReleases: FranchiseRelease[];
}
