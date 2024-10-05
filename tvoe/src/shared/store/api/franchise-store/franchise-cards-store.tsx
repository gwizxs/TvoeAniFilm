
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getRandomFranchises } from "@/shared/api/cards-anime/api";
import { Franchise } from "@/shared/api/cards-anime/types";

class FranchiseStore {
    constructor() {
        makeAutoObservable(this);
    }

    franchisesData?: IPromiseBasedObservable<Franchise[]>;

    getFranchisesAction = async () => {
        try {
            this.franchisesData = await fromPromise(getRandomFranchises());
        } catch (error) {
            console.log(error);
        }
    }
}

export const franchiseStore = new FranchiseStore();
