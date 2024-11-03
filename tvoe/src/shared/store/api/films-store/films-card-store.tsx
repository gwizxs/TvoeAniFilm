import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getMovie } from "@/shared/api/Films";
import type { Movie } from "@/shared/api/Films/types";

class MovieStore {
    constructor() {
        makeAutoObservable(this);
    }

    moviesData?: IPromiseBasedObservable<Movie[]>;

    getMoviesAction = async () => {
        try {
            this.moviesData = fromPromise(getMovie());
        } catch (error) {
            console.log(error);
        }
    }
}

export const movieStore = new MovieStore();
