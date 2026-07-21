export default function Features() {
  const cards = [
    {
      title: " AI Tools",
      text: "Explore the best AI tools for writing, coding, design, and studying.",
    },
    {
      title: " PDF Tools",
      text: "Merge, Split, Compress, Convert, and Edit PDF files.",
    },
    {
      title: " Research Hub",
      text: "Generate citations, find references, and manage academic research.",
    },
    {
      title: " Programming",
      text: "Coding tools, code generators, and developer resources.",
    },
    {
      title: " Design Tools",
      text: "Create presentations, images, logos, and graphics with AI.",
    },
    {
      title: " Study Assistant",
      text: "Flashcards, quizzes, summaries, and smart study planner.",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        padding: "70px 40px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            width: "300px",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <h2
            style={{
              color: "#38bdf8",
              marginBottom: "15px",
              fontSize: "24px",
            }}
          >
            {card.title}
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            {card.text}
          </p>
        </div>
      ))}
    </section>
  );
}