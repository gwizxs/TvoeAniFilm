'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { franchiseStore } from '@/shared/store/api/franchise-store/franchise-cards-store';
import { ANIME_HOST } from '@/shared/constants/host';

const FranchiseList = observer(() => {
    const [limit, setLimit] = useState(10); 

    useEffect(() => {
        franchiseStore.getFranchisesAction();
    }, []);

    if (!franchiseStore.franchisesData) {
        return <div>Loading...</div>;
    }

    if (franchiseStore.franchisesData.state === 'rejected') {
        return <div>Error loading franchises.</div>;
    }

    const franchises = franchiseStore.franchisesData.value || [];
    const displayedFranchises = franchises.slice(0, limit);

    return (
        <div>
            <h1>Anime Franchises</h1>
            <ul>
                {displayedFranchises.map((franchise) => (
                    <li key={franchise.id}>
                        <h2>{franchise.name} ({franchise.name_english})</h2>
                        <p>Rating: {franchise.rating}</p>
                        <p>First Year: {franchise.first_year}</p>
                        <p>Total Releases: {franchise.total_releases}</p>
                        <p>Total Episodes: {franchise.total_episodes}</p>
                        <p>Total Duration: {franchise.total_duration}</p>
                        <Image
                            src={'https://anilibria.top/' + franchise.image.optimized.preview}
                            alt={franchise.name}
                            width={500} 
                            height={300} 
                        />
                    </li>
                ))}
            </ul>
            {limit < franchises.length && (
                <button onClick={() => setLimit(limit + 10)}>Загрузить еще</button>
            )}
        </div>
    );
});

export default FranchiseList;
