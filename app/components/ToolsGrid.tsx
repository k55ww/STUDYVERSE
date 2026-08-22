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
        padding: "40px 15px", // مسافات متجاوبة ومناسبة للموبايل والشاشات الكبيرة
        overflow: "hidden",
      }}
    >
      {/* خلفية المكتبة الفخمة */}
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

      {/* طبقة العتمة السوداء */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#020617",
          opacity: 0.88,
          zIndex: 1,
        }}
      />

      {/* شبكة الكروت المتجاوبة */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          // متجاوبة: تصغر وتصطف عمودياً بالموبايل وتتوسع بالـ PC
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
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
              padding: "25px 20px", // بادينغ متناسق للموبايل
              textAlign: "center",
              color: "white",
              textDecoration: "none",
              display: "block",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div style={{ fontSize: "38px", marginBottom: "12px" }}>
              {tool.icon}
            </div>
            <h2 style={{ color: "#38bdf8", marginBottom: "8px", fontSize: "1.15rem" }}>{tool.title}</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.4" }}>{tool.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}