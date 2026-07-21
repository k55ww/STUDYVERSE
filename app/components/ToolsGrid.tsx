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
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
        padding: "60px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {tools.map((tool, index) => (
       <a
  key={index}
  href={tool.link}
  style={{
    background: "#1e293b",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
    display: "block",
    cursor: "pointer",
          }}
        ><div style={{ fontSize: "40px", marginBottom: "15px" }}>
  {tool.icon}
</div>
          <h2 style={{ color: "#38bdf8" }}>{tool.title}</h2>
          <p>{tool.text}</p>
        </a>
      ))}
    </section>
  );
}