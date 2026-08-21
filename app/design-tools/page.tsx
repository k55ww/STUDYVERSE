"use client";

import { useState } from "react";
import Link from "next/link";
import { designTools } from "./tools";

export default function DesignToolsPage() {
  const [search, setSearch] = useState("");

  const filteredTools = designTools.filter((tool: any) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#030712", color: "white", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#34d399", textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "inline-block", marginBottom: "15px" }}>← Back to Home</Link>
        <h1 style={{ fontSize: "40px", fontWeight: "800", marginBottom: "10px" }}>Design Tools Hub</h1>
        <p style={{ color: "#94a3b8", marginBottom: "24px" }}>Create presentations, images, logos, and graphics with powerful design tools.</p>

        <input
          type="text"
          placeholder="Search design tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "#1e293b", color: "white", border: "1px solid #334155", marginBottom: "24px", outline: "none" }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {filteredTools.map((tool: any) => (
            <Link key={tool.id} href={`/design-tools/${tool.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ background: "#1e293b", padding: "20px", borderRadius: "14px", border: "1px solid #334155" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{tool.icon}</div>
                <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "6px" }}>{tool.name}</h2>
                <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}