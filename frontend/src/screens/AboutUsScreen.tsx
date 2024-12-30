import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AboutUsScreen = () => {
  const navigate = useNavigate();
  const developers = [
    {
      _id: 1,
      name: "Jayesh Sevatkar",
      position: "Founder & Producer",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bookbucket-5253e.appspot.com/o/images%2Fimage.jpeg?alt=media&token=68e004c3-4070-449c-b4a6-1ed50a707f5c&_gl=1*279wwo*_ga*MzcyMzM2MzI5LjE2OTI0NTY4ODU.*_ga_CW55HF8NVT*MTY5NzE5MDE5NC4xOC4xLjE2OTcxOTA0MTYuMjAuMC4w",
    },
    {
      _id: 2,
      name: "Vaibhav Shinde",
      position: "Videography & Direction",
      image:
        "https://firebasestorage.googleapis.com/v0/b/maharashtrachya-kushit.appspot.com/o/images%2Fimage%20(1).png?alt=media&token=45b061d5-bb7e-4b98-a39e-b427ee836ad7",
    },
    {
      _id: 3,
      name: "Sameer",
      position: "Marketing Manager",
      image:
        "https://webcodeft.com/wp-content/uploads/2021/11/dummy-user.png",
    },
    // {
    //   _id: 4,
    //   name: "Shivam Kinkar",
    //   position: "Account Manager",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/bookbucket-5253e.appspot.com/o/images%2Fsk.jpeg?alt=media&token=fa812607-2e82-475c-a11a-a98224419a2e&_gl=1*et15m0*_ga*MzcyMzM2MzI5LjE2OTI0NTY4ODU.*_ga_CW55HF8NVT*MTY5NzczODM5Mi4yNy4xLjE2OTc3Mzg1MzIuMzkuMC4w",
    // },
  ];
  return (
    <section id="about-us" className="mt-3">
      <Container>
        <div className="mb-2" style={{display:'flex', alignItems:'center', gap:"4px"}}>
        <ArrowBackIcon onClick={()=>navigate("/")} />
        <h2 className="mb-0">About Us</h2>
        </div>
       
        {/* <Link to={"/"} className="btn btn-light mb-3">
          Go Back
        </Link> */}
        <Row>
          <Col md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <div>
              <p style={{ color: '#555', fontSize: '16px' }}>
        Welcome to <strong>Maharashtrachya Kushit</strong>! We are a vibrant YouTube channel dedicated to exploring
        the beauty, history, and culture of Maharashtra. Our content includes travel blogs, historical
        documentaries, podcasts, interviews, and more – all aimed at bringing the rich heritage and scenic landscapes
        of Maharashtra closer to you.
      </p>
              </div>
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/bookbucket-5253e.appspot.com/o/images%2Fimage.jpeg?alt=media&token=68e004c3-4070-449c-b4a6-1ed50a707f5c&_gl=1*279wwo*_ga*MzcyMzM2MzI5LjE2OTI0NTY4ODU.*_ga_CW55HF8NVT*MTY5NzE5MDE5NC4xOC4xLjE2OTcxOTA0MTYuMjAuMC4w" // Replace with your image URL
                alt="About Us"
                className="img-fluid rounded-circle"
                style={{
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              /> */}

              <Carousel
                interval={1500}
                pause="hover"
                className="bg-error mb-4 user-carousel-background"
                style={{
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {developers.map((developer: any) => (
                  <Carousel.Item
                    key={developer._id}
                    className="custom-carousel-item"
                  >
                    <Image
                      src={developer.image}
                      alt={developer.name}
                      className="custom-image"
                    />
                    <Carousel.Caption className="carousel-caption">
                      <h2>
                        {developer.name} <br />
                        <span style={{ color: "#baf2ba", fontSize: "22px" }}>
                          {developer.position}
                        </span>
                      </h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col md={6}>
          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
     
      <p style={{ color: '#555', fontSize: '16px' }}>
        <strong>Maharashtrachya Kushit</strong> is not just a channel; it’s a journey through the heart of
        Maharashtra. We strive to capture the essence of the region by showcasing its ancient forts, traditional
        festivals, unexplored destinations, and the stories of people who make Maharashtra truly unique. Through our
        videos, we aim to educate, entertain, and inspire our viewers to discover the untold stories and hidden gems
        of our beloved state.
      </p>
      <p style={{ color: '#555', fontSize: '16px' }}>
        As part of our mission to engage and connect with our community, we are organizing a <strong>Best Photo
        Competition</strong> for photography enthusiasts across Maharashtra. This competition provides a platform for
        you to share your best photos and stand a chance to win exciting cash prizes: ₹2001 for the first place, ₹1001
        for the second, and ₹501 for the third. The competition will run for one month, and we will be sharing daily
        updates about entries, results, and more on our YouTube channel.
      </p>
      <p style={{ color: '#555', fontSize: '16px' }}>
        Join us on this journey and become part of our growing community by subscribing to our channel. Let’s explore
        <strong> Maharashtrachya Kushit</strong> together!
      </p>
      </div>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsScreen;
