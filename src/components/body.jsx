import React from "react";
import Row from "react-bootstrap/Row";

import { useTranslation } from "react-i18next";

import left from "../assets/dadi.jpg";
import center from "../assets/due.jpg";
import right from "../assets/tre.jpg";
import mod from '../assets/Modellando.jpg'
import men from '../assets/Mentha.jpg'
import pre from '../assets/preglia.PNG'
import { Col } from "react-bootstrap";



export default function Body() {

  const {t}= useTranslation()

  //immagini
  const skelton = [
    {
      photo: left,
      tit: t("services")[0].tit,
      txt: t("services")[0].txt,
      id: t("services")[0].id,
      aos:t("services")[0].aos,
      time:t("services")[0].time
    },
    {
      photo: center,
      tit: t("services")[1].tit,
      txt: t("services")[1].txt,
      id: t("services")[1].id,
      aos:t("services")[1].aos,
      time:t("services")[1].time
    },
    {
      photo: right,
      tit: t("services")[2].tit,
      txt: t("services")[2].txt,
      id: t("services")[2].id,
      aos:t("services")[2].aos,
      time:t("services")[2].time
    }
  ];

  //partner
  const skelton_ = [
    {
      photo: mod,
      txt: t("partner")[0].txt,
      bold: t("partner")[0].boldo,
      time: t("partner")[0].time,
      site:'https://modellando.it/',
      id: t("partner")[0].id
    },
    {
      photo: pre,
      txt: t("partner")[1].txt,
      bold: t("partner")[1].boldo,
      time: t("partner")[1].time,
      site:'',
      id: t("partner")[1].id
    },
    {
      photo: men,
      txt: t("partner")[2].txt,
      bold: t("partner")[2].boldo,
      time: t("partner")[2].time,
      site:'https://www.menthaweb.it/',
      id: t("partner")[2].id
    }
  ];

  return (
 
      <Row className="justify-content-center align-items-center d-flex flex-wrap w-100 mx-0 mb-5 pb-5 sfondo">
        <div className="text-center w-100 my-5" data-aos="fade-up" data-aos-duration="1300">
          <h1>{t('heading')[0].tit}</h1>
          <h5>{t('heading')[0].txt}</h5>
        </div>
       <div className="w-75 d-flex flex-wrap justify-content-center">
          {skelton.map(i => (
            <Col xs={10} sm={10} md={10} lg={4} xl={4} key={i.id}
            className="flex-wrap px-3">
            <img
              src={i.photo}
              alt="body-pic"
              style={{ height: "auto", width: "100%", borderRadius:10 }}
              className="mb-4"
              data-aos={i.aos} data-aos-duration={i.time}
            />
            <div data-aos='fade-up' data-aos-duration='3000'>
            <h3>{i.tit}</h3>
            <br />
            <div className="text-left">
            <h4 style={{ color: "#111"}}>
              {i.txt}
            </h4>
            </div>
            </div>
          </Col>
          ))} 
          </div>


           <Row className="justify-content-center w-100 mt-5 py-5 sfondo">
        <Col xs={10} sm={10} md={10} lg={4} xl={4} className="d-flex flex-column">
          {skelton_.map(i => (
            <div className="text-left py-3" key={i.id} data-aos="fade-up"
            ata-aos-duration={i.time}>
              <a href={i.site} target="_blank" rel="noopener noreferrer">
                <img
                    src={i.photo}
                    alt="body-pic"
                    style={{ height: 90, width: 150, borderRadius:20 }}

                />
              </a>
              <h4>{i.txt}</h4>
          <h4><strong>{i.bold}</strong></h4>
            </div>
          ))}           
        
        </Col>
      </Row>     
      </Row>   
  );
}
