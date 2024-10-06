
import { createInstanceV1 } from '../base'; 
import { API_URL } from '../api_url'; 
import { Franchise } from './types';

export const getRandomFranchises = async (): Promise<Franchise[]> => {
    const axiosInstance = createInstanceV1;
    try {
        const response = (await axiosInstance.get(API_URL.franchises_with_limit()))
        return response.data; 
    } catch (error) {
        console.error("Error fetching anime franchises:", error);
        throw error; 
    }
};
