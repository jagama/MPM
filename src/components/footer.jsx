import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className='d-flex align-items-center justify-content-center flex-wrap' id='footer'
            style={{ backgroundColor: '#182538', minHeight: 500 }}>
            <Row className="d-flex flex-wrap w-100 justify-content-center container">
                <Col className='text-left mx-0 my-5' xs={10} sm={10} md={3} lg={3} xl={3} style={{ color: 'white' }}>
                    <h4>Su di noi</h4>
                    <p style={{fontSize:15}}>Mpm è un'alleanza professionale e un laboratorio di idee. Accomuna 3 imprese differenti per specificità ma uguali per finalità: intendere un negozio come interessante strumento comunicativo e non come semplice contenitore espositivo </p>
                </Col>
                <Col className='text-left my-5' xs={10} sm={10} md={3} lg={3} xl={3} style={{ color: 'white' }}>
                    <h4>Modellando</h4>
                    <iframe title='map-modellando' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11963.628913404658!2d12.8920687!3d41.4412346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd7dce873445b7a3!2sModellando%20Srl!5e0!3m2!1sit!2sit!4v1583508002480!5m2!1sit!2sit" style={{width:'80%', height:'auto'}}> </iframe>
                </Col>
                <Col className='text-left my-5' xs={10} sm={10} md={3} lg={3} xl={3} style={{ color: 'white' }}>
                    <h4>Pregliasco</h4>
                    <iframe title='map-pregliasco' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11401.66061906599!2d8.9434029!3d44.404126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9be3b826527fb6d9!2sOttica%20Pregliasco!5e0!3m2!1sit!2sit!4v1583508201498!5m2!1sit!2sit" style={{width:'80%', height:'auto'}}> </iframe>
                </Col>
                <Col className='text-left my-5' xs={10} sm={10} md={3} lg={3} xl={3} style={{ color: 'white' }}>
                    <h4>Mentha</h4>
                    <iframe title='map-mentha' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.995331702633!2d9.200795615828236!3d45.429595443772335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c55e87cac3d3%3A0x1b9940d9cdb39f44!2sMENTHA%20S.R.L.S.!5e0!3m2!1sit!2sit!4v1583508469134!5m2!1sit!2sit" style={{width:'80%', height:'auto'}}> </iframe>
                </Col>
            </Row>
            <Link to='/policy' className='w-100' style={{color:'white'}}>
                Privacy Policy | Cookie Policy
            </Link>
        </div>
    )
}
