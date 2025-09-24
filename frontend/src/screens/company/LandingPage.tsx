import React, { useState, useEffect, useRef } from "react";

export default function LandingPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const targetSectionRef = useRef<any>(null);
  const targetContactRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // Delay for fade-in effect
  }, []);

  const gradientButton = {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
    transition: "transform 0.3s",
  };

  const hoverEffect = (e: any) => {
    e.target.style.transform = "scale(1.05)";
  };

  const hoverOut = (e: any) => {
    e.target.style.transform = "scale(1)";
  };

  // 2. Create the scroll handler function
  const handleScrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleScrollToContact = () => {
    if (targetContactRef.current) {
      targetContactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: 1.6,
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 32px",
          gap: "32px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          transition: "opacity 1s",
          opacity: fadeIn ? 1 : 0,
        }}
      >
        <div style={{ flex: "1 1 55%", animation: "slideInLeft 1s ease" }}>
          <h2
            style={{
              fontSize: "38px",
              marginBottom: "16px",
              fontWeight: "bold",
            }}
          >
            Complete Digital Solutions
          </h2>
          <p style={{ marginBottom: "24px", fontSize: "16px", color: "#333" }}>
            We build modern websites, scalable web applications, and
            feature-rich mobile apps. High performance, secure, and
            user-friendly experiences guaranteed.
          </p>
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <button
              style={gradientButton}
              onMouseEnter={hoverEffect}
              onMouseLeave={hoverOut}
              onClick={handleScrollToContact}
            >
              Start a Project
            </button>
            <button
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                background: "#eee",
                color: "#222",
                transition: "transform 0.3s",
              }}
              onMouseEnter={hoverEffect}
              onMouseLeave={hoverOut}
              onClick={handleScrollToSection}
            >
              Explore Services
            </button>
          </div>
        </div>

        <div
          style={{
            flex: "1 1 35%",
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            transform: fadeIn ? "translateY(0)" : "translateY(30px)",
            transition: "transform 1s",
          }}
        >
          <h3 style={{ marginBottom: "16px", fontWeight: "bold" }}>
            Quick Facts
          </h3>
          <dl style={{ margin: 0, fontSize: "14px", color: "#555" }}>
            <div>
              <dt style={{ fontWeight: "bold" }}>Core Expertise</dt>
              <dd style={{ marginBottom: "12px" }}>Web · Mobile · Cloud</dd>
            </div>
            <div>
              <dt style={{ fontWeight: "bold" }}>Stack</dt>
              <dd style={{ marginBottom: "12px" }}>React · MERN · Native</dd>
            </div>
            <div>
              <dt style={{ fontWeight: "bold" }}>Availability</dt>
              <dd style={{ marginBottom: "12px" }}>
                Enterprise & Govt Contracts
              </dd>
            </div>
            {/* <div>
              <dt style={{ fontWeight: "bold" }}>GSTIN</dt>
              <dd>Enter-GSTIN-Here</dd>
            </div> */}
          </dl>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        ref={targetSectionRef}
        style={{
          padding: "60px 32px",
          backgroundColor: "#fff",
        }}
      >
        <h3
          style={{ fontSize: "28px", marginBottom: "16px", fontWeight: "bold" }}
        >
          Our Services
        </h3>
        <p style={{ marginBottom: "24px" }}>
          Complete solutions across web and mobile platforms.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {[
            "Website Development",
            "Web Applications",
            "Mobile Applications",
            "UI/UX Design",
            "Performance & SEO",
            "Govt Contract Ready",
          ].map((service) => (
            <div
              key={service}
              style={{
                flex: "1 1 30%",
                backgroundColor: "#f0f4ff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={hoverEffect}
              onMouseLeave={hoverOut}
            >
              <h5 style={{ marginBottom: "12px", fontWeight: "bold" }}>
                {service}
              </h5>
              <p style={{ fontSize: "14px", color: "#555" }}>
                High-quality solution for {service}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{ padding: "60px 32px", backgroundColor: "#f5f7fa" }}
        ref={targetContactRef}
      >
        <h3
          style={{ fontSize: "28px", marginBottom: "24px", fontWeight: "bold" }}
        >
          Contact Us
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div
            style={{
              flex: "1 1 40%",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            }}
          >
            <p>
              Reach out for projects, government contracts, or enterprise
              solutions. GST-compliant billing available.
            </p>
            <p>
              <strong>Company:</strong> Banavoo.in
            </p>
            {/* <p style={{ color: "red" }}>
              <strong>GSTIN:</strong> Comming Soon :)
            </p> */}
            <p>
              <strong>Email:</strong> jayeshsevatkar55@gmail.com
            </p>
            <p>
              <strong>Email:</strong> +918888585093
            </p>
          </div>

          <form
            style={{
              flex: "1 1 50%",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            }}
          >
            {[
              { label: "Name", type: "text", placeholder: "Your Name" },
              { label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((field) => (
              <div key={field.label}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            ))}
            {/* <div>
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Project details, budget, deadlines..."
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div> */}
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                // type="submit"
                disabled
                style={gradientButton}
                onMouseEnter={hoverEffect}
                onMouseLeave={hoverOut}
              >
                Comming Soon
              </button>
              {/* <button
                type="button"
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: "#eee",
                  color: "#222",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={hoverEffect}
                onMouseLeave={hoverOut}
              >
                Schedule Call
              </button> */}
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "32px",
          textAlign: "center",
          backgroundColor: "#222",
          color: "#fff",
        }}
      >
        <p>© {new Date().getFullYear()} banavoo.in. All rights reserved.</p>
        {/* <p>Contact: jayeshsevatkar55@gmail.com</p> */}
      </footer>
    </div>
  );
}
