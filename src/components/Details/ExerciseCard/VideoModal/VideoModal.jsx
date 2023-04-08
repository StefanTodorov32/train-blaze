import React from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

export const VideoModal = ({
    handleShow,
    name,
    embedId,
    handleClose,
    show
}) => {
    return (
        <Modal
            size="lg"
            show= {show}
            onHide={() => handleShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            key={embedId}
        >
            <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <iframe
                                className="embed-responsive-item"
                                style={{
                                    width: "100%",
                                    height: "600px ",
                                    objectFit: "cover",
                                }}
                                src={`https://www.youtube.com/embed/${embedId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            ></iframe>
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
    );
};
