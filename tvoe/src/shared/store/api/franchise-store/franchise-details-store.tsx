import { makeAutoObservable } from "mobx";
import { getFranchisesDetails, Release } from "@/shared/api/Franchise/index"; 

class AnimeStore {
    releases: Release[] = [];
    loading: boolean = false;
    error: Error | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchReleases(id: string): Promise<void> {
        this.loading = true;
        try {
            this.releases = await getFranchisesDetails(id);
        } catch (error) {
            this.error = error as Error; 
            console.error("Ошибка при получении данных:", error);
        } finally {
            this.loading = false;
        }
    }
}

export const animeStore = new AnimeStore();
