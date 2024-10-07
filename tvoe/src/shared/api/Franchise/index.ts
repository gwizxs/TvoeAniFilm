
import { createInstanceV1 } from '../base'; 
import { API_URL } from '../api_url'; 
import { Franchise, Release } from './types';

export const getRandomFranchises = async (): Promise<Franchise[]> => {
    const axiosInstance = createInstanceV1;
        const response = (await axiosInstance.get(API_URL.franchises_with_limit()))
        return response.data; 
};

export const getFranchisesDetails = async (franchiseId: string): Promise<Release[]> => {
    const axiosInstance = createInstanceV1;
        const response = (await axiosInstance.get(API_URL.franchise(franchiseId)))
        return response.data; 
};

export type { Release };

