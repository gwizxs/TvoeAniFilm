'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { franchiseStore } from '@/shared/store/api/franchise-store/franchise-cards-store';

const FranchiseList = observer(() => {
    useEffect(() => {
        franchiseStore.getFranchisesAction();
    }, []);


    if (!franchiseStore.franchisesData) {
        return <div>Loading...</div>;
    }


    if (franchiseStore.franchisesData.state === 'rejected') {
        return <div>Error loading franchises.</div>;
    }

    return (
        <div>
            <h1>Anime Franchises</h1>
            <ul>
                {franchiseStore.franchisesData.value.map((franchise) => (
                    <li key={franchise.id}>
                        <h2>{franchise.name} ({franchise.name_english})</h2>
                        <p>Rating: {franchise.rating}</p>
                        <p>First Year: {franchise.first_year}</p>
                        <p>Total Releases: {franchise.total_releases}</p>
                        <p>Total Episodes: {franchise.total_episodes}</p>
                        <p>Total Duration: {franchise.total_duration}</p>
                        <Image
                            src={franchise.image.thumbnail}
                            alt={franchise.name}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default FranchiseList;