import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import { useTranslation } from "react-i18next";


import pic2 from "../assets/two.jpg";
import pic3 from "../assets/three.jpg";
import com1 from '../assets/comOne.jpg';
import com2 from '../assets/comTwo.jpg';
import pic1 from "../assets/mpm.jpg";
import forma from '../assets/forma.jpg';

const picArray = [
    {
        pic: pic1,
        id:0
    },
    {
        pic: pic2,
        id:1
    },
    {
        pic: com1,
        id:2
    },
    {
        pic: pic3,
        id:3
    },
    {
        pic: com2,
        id:4
    },
    {
        pic: forma,
        id:5
    },
]

export default function Hero() {
    //interpolation
    const { t } = useTranslation()
    return (
        <Row
            className="d-flex w-100 justify-content-center align-items-center mb-5 sfondo"
            style={{ minHeight: "90vh", margin: 0 }}
        >
            <Col sm={10} md={5} lg={5} xl={5}>
                <div className="text-left w-100 mobileMargin">
                    <h1 className='size' style={{ fontWeight: 600}} data-aos="fade-right" data-aos-duration="2000">
                        {t('hero')[0].tit}
                    </h1>

                    <h4 data-aos="fade-right" data-aos-duration="3000">{t('hero')[0].txt}</h4>
                    <Button variant="warning" size='lg' data-aos="fade-right" data-aos-duration="3000">
                        <a href="https://forms.gle/fKN5ZwcRxZGBQfJ39"
                           target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'black' }}>Contattaci</a>
                    </Button>
                </div>
            </Col>
            <Col sm={10} md={5} lg={6} xl={6} className='marginMobile'>

                            <Carousel>
                                {picArray.map((i) => {
                                    return(
                                        <Carousel.Item key={i.id}>

                                            <img

                                                className="d-block w-100"
                                                src={i.pic}
                                                alt="First slide"
                                            />

                                        </Carousel.Item>
                                    )
                                })}

                            </Carousel>



            </Col>
        </Row>
    );
}
