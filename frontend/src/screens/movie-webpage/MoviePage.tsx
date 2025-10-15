import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import useDeviceType from "../../utils/DeviceType";

function App() {
  const deviceType = useDeviceType();
  const driveFileId = "1y18mgMtaQuSOQp3bicxUAOp86StMJjOJ";

  // Direct preview URL
  const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  // Fullscreen handler (for iframe container)
  const openFullscreen = () => {
    const iframeContainer = document.getElementById("movie-player");
    if (iframeContainer?.requestFullscreen) {
      iframeContainer.requestFullscreen();
    }
  };

  return (
    <>
      <Helmet>
        <title>स्थळ मराठी मूवी ऑनलाईन | Watch Online</title>
        <meta
          name="description"
          content="Watch स्थळ मराठी मूवी online. Stream directly in HD quality."
        />
        <meta
          name="keywords"
          content="स्थळ, sthal marathi movie, sthal movie, stal marathi movie, Marathi movie, watch online, HD, streaming"
        />
      </Helmet>

      <Container fluid className="py-5 bg-dark text-white">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-lg border-0 bg-black">
              <Card.Header className="bg-dark text-center py-3 border-0 color-white">
                <h3 style={{ color: "white" }}>🎬 स्थळ मराठी मूवी ऑनलाईन</h3>
              </Card.Header>
              <Card.Body className="text-center p-0" id="movie-player">
                <iframe
                  src={videoUrl}
                  width="100%"
                  height={deviceType === "mobile" ? "300" : "600"}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="स्थळ Marathi Movie Player"
                  style={{
                    border: "none",
                    borderRadius: "0px",
                    display: "block",
                  }}
                ></iframe>
              </Card.Body>
              <Card.Footer className="bg-dark text-center border-0">
                <Button
                  variant="outline-light"
                  className="mt-3"
                  onClick={openFullscreen}
                >
                  ⛶ Watch Full Screen
                </Button>
                <p className="mt-3 text-secondary mb-0 small">
                  Streaming from Maharashtrachya Kushit
                </p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
