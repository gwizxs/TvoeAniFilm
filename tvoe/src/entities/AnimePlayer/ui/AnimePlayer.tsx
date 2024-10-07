'use client'

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { animeStore } from "@/shared/store/api/franchise-store/franchise-details-store";
import Image from "next/image";

const AnimePlayer = observer(({ franchiseId }: {franchiseId: string}) => {
    useEffect(() => {
        animeStore.fetchReleases(franchiseId);
    }, [franchiseId]);

    if (animeStore.loading) {
        return <div>Загрузка...</div>;
    }

    if (animeStore.error) {
        return <div>Ошибка: {animeStore.error.message}</div>;
    }

    return (
        <div>
            {animeStore.releases.map((release) => (
                <div key={release.name.english}>
                    <h2>{release.name.main}</h2>
                    <h3>{release.description}</h3>
                    <Image
                     src={release.poster.src}
                     alt={release.name.main} />
                </div>
            ))}
        </div>
    );
});

export default AnimePlayer;

