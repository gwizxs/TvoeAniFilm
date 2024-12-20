'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { franchiseStore } from '@/shared/store/api/franchise-store/franchise-cards-store';
import { ANIME_MAIN_HOST } from '@/shared/constants/host';
import cl from './CardAnime.module.scss'
import { Col, Row, Spin } from 'antd';
import Link from 'next/link';

export const FranchiseList = observer(() => {
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        franchiseStore.getFranchisesAction();
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        if (!franchiseStore.franchisesData) return;
        if (!franchiseStore.franchisesData.value) return;
        setLimit((prevLimit) => Math.min(prevLimit + 8, franchiseStore.franchisesData.value.length));
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!franchiseStore.franchisesData) {
        return (<div className={cl.Loader}>
            <Spin size="large" />
        </div>);
    }

    if (franchiseStore.franchisesData.state === 'rejected') {
        return <div>Error loading franchises.</div>;
    }

    const franchises = franchiseStore.franchisesData.value || [];
    const displayedFranchises = franchises.slice(0, limit);

    return (
        <div className={cl.SlideContainer}>
            <Row gutter={16} justify="start">
                {displayedFranchises.map((franchise) => (
                    <Col key={franchise.id} span={6}>
                        <Link href={`/Anime/${franchise.id}`}>
                        <div className={cl.Card}
                        >
                            <div className={cl.ImgContainer}>
                                <span className={cl.overlay}></span>
                                <div className={cl.CardImage}>
                                    <span className={cl.Rating}>{franchise.rating}</span>
                                    <Image
                                        src={ANIME_MAIN_HOST + franchise.image.optimized.preview}
                                        alt={franchise.name}
                                        className={cl.CardImg}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className={cl.CardContent}>
                                <h2 className={cl.Name}>{franchise.name}</h2>
                                <p className={cl.Description}>Год выхода: {franchise.first_year}</p>
                                <p className={cl.Description}>Всего релизов: {franchise.total_releases}</p>
                                <p className={cl.Description}>Всего эпизодов: {franchise.total_episodes}</p>
                            </div>
                        </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
});
