"use client";
export default function Hero() {
  return (
    <section
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        Learn Without Limits
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cbd5e1",
          maxWidth: "700px",
        }}
      >
        AI-powered platform for university students to create reports,
        summarize PDFs, use AI tools, and study smarter.
      </p>

      <button
      onClick={() => {
  document.getElementById("tools")?.scrollIntoView({
    behavior: "smooth",
  });
}}
        style={{
          marginTop: "35px",
          padding: "15px 40px",
          fontSize: "20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}