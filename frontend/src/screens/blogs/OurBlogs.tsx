import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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

  return (
    <div className="p-3">
      {/* <h1>Latest Medium Articles</h1> */}
      <div
        className="mb-2"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          alignSelf: "start",
        }}
      >
        <ArrowBackIcon onClick={() => navigate("/")} />
        <h2 className="mb-0">Blogs</h2>
      </div>
      <Container className="my-4">
      <Row className="g-3">
        {articles?.map((article:any, index:any) => (
          <Col key={index} xs={12} sm={6} lg={4}>
            <Card className="h-100">
              <a href={article?.link} target="_blank" rel="noopener noreferrer">
                <Card.Img
                  variant="top"
                  src={article?.description?.match(/<img[^>]+src="([^">]+)"/)?.[1]}
                  alt={article?.title}
                  style={{ height: '240px', objectFit: 'cover' }}
                />
              </a>
              <Card.Body>
                <a href={article?.link} target="" rel="noopener noreferrer">
                  <Card.Title className="mb-2">{article?.title}</Card.Title>
                </a>
                {/* <Card.Text>
                  Tags:{" "}
                  {article.categories.map((category: string, index: number) => (
                    <a href={`#${category}`} key={index}>
                      {category}
                      {index < article.categories.length - 1 && ", "}
                    </a>
                  ))}
                </Card.Text> */}
              </Card.Body>
              <Card.Footer className="bg-transparent border-0">
                <Button
                  variant="warning"
                  href={article?.link}
                  target=""
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
    </div>
  );
}

export default OurBlogs;
