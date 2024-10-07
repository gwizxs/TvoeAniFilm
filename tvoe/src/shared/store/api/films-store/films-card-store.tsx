import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getFilms } from "@/shared/api/Films";
import { Movie } from "@/shared/api/Films/types"; 

class FilmStore {
    constructor() {
        makeAutoObservable(this);
    }

    filmsData?: IPromiseBasedObservable<Movie[]>;

    getFilmsAction = async (page: number, limit: number) => {
        try {
            this.filmsData = fromPromise(getFilms({ page, limit }));
        } catch (error) {
            console.log(error);
        }
    }
}

export const filmStore = new FilmStore();
