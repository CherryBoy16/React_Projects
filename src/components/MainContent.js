import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MainContent() {
  const cards = [
    { title: "Illuminati", desc: "The cafe was cozy and filled with the aroma of freshly brewed coffee. Sunlight streamed through the large windows, illuminating dust motes dancing in the air." },
    { title: "Aroma", desc: "The cafe was cozy and filled with the aroma of freshly brewed coffee. Sunlight streamed through the large windows, illuminating dust motes dancing in the air."},
    { title: "Card", desc:"The cafe was cozy and filled with the aroma of freshly brewed coffee. Sunlight streamed through the large windows, illuminating dust motes dancing in the air." }
  ];

  return (
    <Container className="my-4">
      <Row>
        {cards.map((card, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContent;
