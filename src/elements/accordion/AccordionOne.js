import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Alternatik Yaklaşım Nedir?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Alternatik kelimesinde bulunan tik "tik işaretine bir göndermedir" kişilere ve kurumlara dijital mecrada çözümler üretir.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Kişisel web sitesi tek ödeme şeklinde mi yapılır?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>SEO Paketinden faydalanmak isteyenler ayrıca aylık 350 TL ödeme yaparlar.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Nasıl destek alabilirim?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>İletişim kısmından, randevu ve formlar ayrıca telefon ve whatsapp üzerinden destek talep edebilirsiniz.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Sitelerin güncelleme işlemleri fiyata dahil midir?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Sitelerin tek ödeme yapıldıktan sonra desteğin devam etmesi durumunda aylık 350 TL güncelleme ücreti fatura edilir.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

