import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getRandomFranchises } from "@/shared/api/Franchise/index";
import { Franchise } from "@/shared/api/Franchise/types";

class FranchiseStore {
    constructor() {
        makeAutoObservable(this);
    }

    franchisesData?: IPromiseBasedObservable<Franchise[]>;

    getFranchisesAction = async () => {
        try {
            this.franchisesData = fromPromise(getRandomFranchises());
        } catch (error) {
            console.log(error);
        }
    }
}

export const franchiseStore = new FranchiseStore();
