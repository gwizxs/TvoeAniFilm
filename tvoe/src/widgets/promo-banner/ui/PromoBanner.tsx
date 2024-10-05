'use client'

import { Card, Col, Row } from "antd"
import Image from "next/image"
import MovieBanner from '@/shared/assets/icons/PromoBanner/MovieBanner.svg'
import cl from './PromoBanner.module.scss'
import { observer } from "mobx-react-lite"
import { CirclePlay, Heart, MonitorSmartphone, Star } from "lucide-react"

const PromoBanner = observer(() => {
    return (
        <Row className={cl.Container}>
            <Card className={cl.Card} >
                <Col className="text-center">
                    <h2 className={cl.Title}>Мы -</h2>
                </Col>
                <Row className="mt-4" gutter={[16, 16]}>
                    <Col xs={12} className="text-center">
                        <div className={cl.IconText}>
                            <MonitorSmartphone size={24} />
                            <p>на любом устройстве</p>
                        </div>
                    </Col>
                    <Col xs={12} className="text-center ">
                        <div className={cl.IconText}>
                            <Star size={24} />
                            <p>Новинки каждую неделю</p>
                        </div>
                    </Col>
                    <Col xs={12} className="text-center">
                        <div className={cl.IconText}>
                            <CirclePlay size={24} />
                            <p>Без рекламы и доплат</p>
                        </div>
                    </Col>
                    <Col xs={12} className="text-center">
                        <div className={cl.IconText}>
                            <Heart size={24} />
                            <p>АБСОЛЮТНО бесплатно</p>
                        </div>
                    </Col>
                </Row>
                <Col className="text-center mt-4">
                    <Image className={cl.Banner} src={MovieBanner} alt='Бесплатно' />
                </Col>
            </Card>
        </Row>
    );
});

export default PromoBanner;
