import { Button, Card, Col, Row, Space } from "antd"; 
import cl from './CardFilm.module.scss'


const cardData = [
  {
    title: 'Inverce',
    description: 'Инновационная платформа для объединения в команды, прокачки своего проекта, участия в мероприятиях и обмена опытом  жезлпрщзл4зщ5рз54 54зщлнзщ54лнзщ54лнзщлнзщ4лнзщ5 лн5зщ лнщ л зщ5л зщ лзщнл54зщнлзщ54 нзщ зщ жезлпрщзл4зщ5рз54 54зщлнзщ54лнзщ54лнзщлнзщ4лнзщ5 лн5зщ лнщ л зщ5л зщ лзщнл54зщнлзщ54 нзщ зщ',
    vacancy: 'Есть вакансии',
  },
];

const CardFilm = () => {
  return (
    <Row gutter={6} style={{ padding: '0.2rem' }}>
{/* 
      {cardsData?.state === "pending" ? (
        <div>loading</div>
      ) : (
        остальное
      )} */}
      {cardData.map((card, index) => (
        <Col span={4} key={index} className={cl.Card}>
          <Card
            className={cl.CardContent}
          >
            <Space wrap size={4}>
              <div>
                <h2 className={cl.textTitle}>{card.title}</h2>
                <h6>{card.title}</h6>
              </div>
            </Space>
            <p className={cl.descriptionCard}>{card.description}</p>
            <div style={{ padding: '0.5rem' }}>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardFilm;

