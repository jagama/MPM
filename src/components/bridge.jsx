import React from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function bridge() {
    return (
        <Row className='w-100 justify-content-center align-items-center mx-0'>
            <Col sm={5} md={5} lg={5} xl={5}
            className='text-center py-5'>
            <h1 className='media text-center w-100'>Forza, contattaci!</h1>
            <h4>Insieme faremo emergere la tua unicità</h4>
            <Button variant="warning" size='lg'>
                <a href="https://forms.gle/fKN5ZwcRxZGBQfJ39"
                   target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'black' }}>Contattaci</a>
            </Button>
            </Col>
        </Row>
    )
}
