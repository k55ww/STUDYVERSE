import Hero from "./components/Hero";
import ToolsGrid from "./components/ToolsGrid";

export default function Home() {
  return (
    <main style={{ position: "relative", backgroundColor: "#020617", minHeight: "100vh" }}>
      <Hero />
      <ToolsGrid />
    </main>
  );
}