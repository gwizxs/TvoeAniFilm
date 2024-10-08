'use client' // Add the 'use client' directive

import { Col, Row } from "antd";
import cl from "./CardFilm.module.scss";
import { observer } from "mobx-react-lite";
import { filmStore } from "@/shared/store/api/films-store/films-card-store";
import { useEffect } from "react";
import { Movie } from "@/shared/api/Films/types";
import Image from 'next/image'; 

const CardFilm: React.FC = observer(() => {
  const page = 1; 
  const limit = 10; 

  useEffect(() => {
    console.log("Fetching films...");
    filmStore.getFilmsAction(page, limit).then(() => {
      console.log("Films fetched:", filmStore.filmsData);
    });
  }, [page, limit]);

  if (filmStore.filmsData?.state === "pending") {
    return <div>Loading...</div>;
  }

  if (filmStore.filmsData?.state === "rejected") {
    return <div>Error loading films.</div>;
  }

  const films: Movie[] = filmStore.filmsData?.value || []; 
  return (
    <div className={cl.SlideContainer}>
      <Row gutter={16} justify="start">
      {Array.isArray(films) && films.map((film: Movie) => ( 
          <Col key={film.id} span={6}>
            <div className={cl.Card} onClick={() => '/qwerty'}> 
              <div className={cl.ImgContainer}>
                <span className={cl.overlay}></span>
                <div className={cl.CardImage}>
                  <span className={cl.Rating}>{film.rating.kp}</span> 
                </div>
              </div>
              <div className={cl.CardContent}>
                <h2 className={cl.Name}>{film.name || ''}</h2>
                <p className={cl.Description}>
                  Год выхода: {film.year}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {/* ... your logic for loading more films */}
    </div>
  );
});

export default CardFilm;