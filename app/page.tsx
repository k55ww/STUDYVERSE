import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolsGrid from "./components/ToolsGrid";
export default function Home() {
  return (
   <main
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
     <Navbar />
<Hero />
<ToolsGrid />
    
    </main>
  );
}
