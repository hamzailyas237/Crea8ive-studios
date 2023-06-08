

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const handleForm = (e) => {
    e.preventDefault()
    alert('Form Submitted Successfully')
}

function ContactFrom() {
    return (

        <div className='contact-form-container'>

            <div className='contact-form-text-container'>
                <h1>Ready to build website that engage customers?</h1>
                <small>Let’s Create Together</small>
            </div>

            <div>
                <Form className='contact-form' onSubmit={handleForm}>
                    <Row className="mb-3">

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>


                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control placeholder="Enter address e.g abc street, city" />
                    </Form.Group>

                    <Row>
                        <Form.Group className="mb-3" controlId="formGridCity">
                            <Form.Control type="number" placeholder='Enter phone number' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridState">
                            <Form.Select className='select-service'>
                                <option value="Select Service">Select Service</option>
                                <option value="Select Service">Website Design</option>
                                <option value="Select Service">Wordpress Development</option>
                                <option value="Select Service">Ecommerce Web Development</option>
                                <option value="Select Service">Web Application Development</option>
                                <option value="Select Service">Backend Development</option>
                                <option value="Select Service">Custom Website Development</option>
                                <option value="Select Service">Mobile App Development</option>
                                <option value="Select Service">Website Maintainance</option>
                                <option value="Select Service">Domain And Hosting</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Enter details of project">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <Button className='btn' type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>

    );
}

export default ContactFrom;


