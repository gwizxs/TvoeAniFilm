'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFranchisesDetails, Release } from '@/shared/api/Franchise/index';
import Image from 'next/image';

const AnimePage = () => {
  const router = useRouter();
  const { franchiseId } = router.query;

  const [releases, setReleases] = useState<Release[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (franchiseId) {
      setIsLoading(true);
      getFranchisesDetails(franchiseId as string)
        .then(data => {
          setReleases(data);
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [franchiseId]);

  if (!franchiseId) {
    return <div>Загрузка...</div>;
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.messag}</div>;
  }

  return (
    <div>
      {releases.map((release) => (
        <div key={release.release.id}>
          <h2>{release.release.name.main}</h2>
          <p>{release.release.description}</p>
          {/* ... отображаем информацию о релизе ... */}
          <Image
            src={release.release.poster.src}
            alt={release.release.name.main}
            width={200}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimePage;
