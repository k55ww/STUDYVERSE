import Hero from "./components/Hero";
import ToolsGrid from "./components/ToolsGrid";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Hero />
      <ToolsGrid />
    </main>
  );
}