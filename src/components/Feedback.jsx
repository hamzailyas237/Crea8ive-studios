

import React from 'react'
import Card from 'react-bootstrap/Card';

const Feedback = (props) => {
    return (
        <div>
            <Card className='feeback-card'>
                <Card.Img className='feeback-image'
                    src={props.clientImage}
                />
                <Card.Body className='card-body'>
                    <Card.Title>{props.clientName}</Card.Title>
                    <Card.Title> <small>{props.clientCountry}</small></Card.Title>
                    <Card.Text className='feedback-text'> <small> {props.feedback}</small> </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Feedback

