import React, { useState, useEffect } from "react";
import { LinkedInEmbed } from "react-social-media-embed";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

function OurBlogs() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jayeshsevatkar55"
      );
      const data = await response?.json();
      setArticles(data?.items);
    };
    fetchArticles();
  }, []);

  // ... existing code ...
  return (
    <div className="p-3">
      {/* Medium Articles Section */}
      <Container className="my-4">
        <h2 className="mb-4" style={{ fontWeight: "bold" }}>
          Medium Blogs
        </h2>
        <Row className="g-3">
          {articles?.map((article: any, index: any) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card className="h-100">
                <a
                  href={article?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    src={
                      article?.description?.match(
                        /<img[^>]+src="([^">]+)"/
                      )?.[1]
                    }
                    alt={article?.title}
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                </a>
                <Card.Body>
                  <a
                    href={article?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card.Title className="mb-2">{article?.title}</Card.Title>
                  </a>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0">
                  <Button
                    variant="warning"
                    href={article?.link}
                    target="_blank"
                    className="d-flex align-items-center justify-content-center"
                  >
                    Read more
                    <svg
                      className="ms-2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8h14m0 0L9 3m6 5L9 13"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* LinkedIn Posts Section */}
      {/* <Container className="my-5">
        <h2
          className="mb-4 text-center"
          style={{ fontWeight: "700", color: "#00796B" }}
        >
          LinkedIn Posts
        </h2>

        {[
          "7268523071064457217",
          "7267559034411507712",
          "7212169672161431552",
        ].map((postId, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
              overflow: "hidden",
              marginBottom: "30px",
              backgroundColor: "#fff",
            }}
          >
            <iframe
              src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${postId}`}
              height="400"
              width="100%"
              frameBorder="0"
              title={`Embedded post ${index + 1}`}
              allowFullScreen
              style={{
                border: "none",
                display: "block",
                width: "100%",
              }}
            ></iframe>
          </div>
        ))}
      </Container> */}
      );
    </div>
  );
  // ... existing code ...
}

export default OurBlogs;
