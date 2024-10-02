import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getCards } from "shared/api/cards/api";
import { getCardsResponce } from "shared/api/cards/types";


class CardStore {

    constructor() {
        makeAutoObservable(this)
    }

    cardsData?: IPromiseBasedObservable<getCardsResponce[]>

    getCardsAction = async () => {
        try {
            this.cardsData =  await fromPromise(getCards())
        } catch (error) {
            console.log(error);
            
        }
    }
}

export const cardStore = new CardStore()