export default function ToolsGrid() {
  const tools = [
    { 
      icon: "🤖",
      title: "AI Tools",
      text: "Explore the best AI tools for writing, coding, design, and studying.",
      link: "/ai-tools",
    },
    {
      icon: "📄",
      title: "PDF Tools",
      text: "Merge, Split, Compress, Convert, and Edit PDF files.",
      link: "/pdf-tools",
    },
    {
      icon: "🎓",
      title: "Research Hub",
      text: "Generate citations, find references, and manage academic research.",
      link: "/research-hub",
    },
    {
      icon: "💻",
      title: "Programming",
      text: "Coding tools, code generators, and developer resources.",
      link: "/programming",
    },
    {
      icon: "🎨",
      title: "Design Tools",
      text: "Create presentations, images, logos, and graphics with AI.",
      link: "/design-tools",
    },
    {
      icon: "📚",
      title: "Study Assistant",
      text: "Flashcards, quizzes, summaries, and smart study planner.",
      link: "/study-assistant",
    },
  ];

  return (
    <section
      id="tools"
      style={{
        position: "relative",
        padding: "80px 20px",
        overflow: "hidden",
      }}
    >
      {/* خلفية المكتبة الفخمة (تم زيادة الوضوح) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
          zIndex: 0,
        }}
      />

      {/* طبقة العتمة السوداء (تم تعديلها لزيادة التوازن والبروز) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#020617",
          opacity: 0.88,
          zIndex: 1,
        }}
      />

      {/* شبكة الكروت */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className="glass-card"
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              padding: "30px",
              textAlign: "center",
              color: "white",
              textDecoration: "none",
              display: "block",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>
              {tool.icon}
            </div>
            <h2 style={{ color: "#38bdf8", marginBottom: "10px", fontSize: "1.25rem" }}>{tool.title}</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.5" }}>{tool.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}