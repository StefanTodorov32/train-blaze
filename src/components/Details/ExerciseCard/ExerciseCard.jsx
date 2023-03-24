import React from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
export const ExerciseCard = ({ handleClose, handleShow, show, name, description, videoLink, videoImage }) => {
    const embedId = videoLink.match(/(?<=v=)[^&\s]*/g)[0]
    console.log(embedId)
    return (
        <Card style={{ width: '18rem', paddingTop: "20px" }}>
            <Card.Img variant="top" src={videoImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                    How to do?
                </Button>
                <div>

                    <Modal
                        size="lg"
                        show={show}
                        onHide={() => handleShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                {name}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Container>
                            <Row>
                                <Col>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" style={{ width: "100%", height: "600px ", objectFit: "cover" }} src={`https://www.youtube.com/embed/${embedId}`} allowFullScreen></iframe>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Card.Body>
        </Card>
    )
}
