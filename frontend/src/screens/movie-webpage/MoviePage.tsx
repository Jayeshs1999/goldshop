import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";

function App() {
  const driveFileId = "1y18mgMtaQuSOQp3bicxUAOp86StMJjOJ";

  return (
    <>
      <Helmet>
        <title>स्थळ मराठी मूवी ऑनलाईन | Watch Online</title>
        <meta
          name="description"
          content="Watch स्थळ मराठी मूवी online. Stream directly"
        />
        <meta
          name="keywords"
          content="स्थळ, sthal marathi movie, sthal movie, stal marathi movie, Marathi movie, watch online, HD, streaming"
        />
      </Helmet>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-dark text-white text-center py-3">
                <h4>🎬 स्थळ मराठी मूवी ऑनलाईन</h4>
              </Card.Header>
              <Card.Body className="text-center">
                <p>
                  Watch the latest Marathi movie <strong>स्थळ</strong> online.
                  Enjoy HD streaming directly.
                </p>

                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://drive.google.com/file/d/${driveFileId}/preview`}
                    width="100%"
                    height="480"
                    allow="autoplay"
                    title="Movie Player"
                  ></iframe>
                </div>

                <p className="mt-3 text-muted">
                  Streaming from Maharashtrachya Kushit
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
