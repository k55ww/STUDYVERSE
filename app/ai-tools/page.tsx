"use client";
import { useState } from "react";
import Link from "next/link";
import { aiTools } from "./tools";

export default function AIToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#030712",
        color: "white",
        padding: "60px 24px",
        overflow: "hidden",
      }}
    >
      {/* 🌐 شبكة النقاط الثابتة بالخلفية */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 🔮 هالة النيون البنفسجية/الزرقاء الخاصة بقسم الـ AI */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "650px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              marginBottom: "12px",
              letterSpacing: "-1px",
            }}
          >
            AI Tools
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              maxWidth: "700px",
              lineHeight: "1.7",
            }}
          >
            Explore the world's most powerful AI tools for writing, coding,
            design, productivity and learning.
          </p>

          {/* Search Input الزجاجي */}
          <input
            type="text"
            placeholder="Search AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "16px 20px",
              marginTop: "28px",
              marginBottom: "24px",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(12px)",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          {/* Categories Filter Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {[
              { id: "all", label: "All" },
              { id: "writing", label: "Writing" },
              { id: "coding", label: "Coding" },
              { id: "image", label: "Image" },
              { id: "video", label: "Video" },
              { id: "productivity", label: "Productivity" },
              { id: "learning", label: "Learning" },
            ].map((cat) => {
              const isActive = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
                      : "rgba(15, 23, 42, 0.6)",
                    color: isActive ? "#ffffff" : "#94a3b8",
                    border: isActive
                      ? "1px solid rgba(168, 85, 247, 0.5)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    padding: "8px 18px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {aiTools
            .filter((tool) => {
              const matchesSearch = tool.name
                .toLowerCase()
                .includes(search.toLowerCase());

              const matchesCategory =
                category === "all" ||
                tool.features.some((feature) =>
                  feature.toLowerCase().includes(category.toLowerCase())
                );

              return matchesSearch && matchesCategory;
            })
            .map((tool) => (
              <Link
                key={tool.id}
                href={`/tool/${tool.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    background: "rgba(15, 23, 42, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                    padding: "24px",
                    borderRadius: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          background:
                            "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "28px",
                          flexShrink: 0,
                          boxShadow: "0 0 15px rgba(37, 99, 235, 0.25)",
                        }}
                      >
                        {tool.icon}
                      </div>

                      <div>
                        <h2
                          style={{
                            margin: 0,
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#ffffff",
                          }}
                        >
                          {tool.name}
                        </h2>
                        <span
                          style={{
                            color: "#38bdf8",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          ⭐ {tool.rating || "4.8"}
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        margin: 0,
                        color: "#94a3b8",
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {tool.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(56, 189, 248, 0.15)",
                        color: "#38bdf8",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      Free
                    </span>

                    <button
                      style={{
                        background:
                          "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                        color: "white",
                        border: "none",
                        padding: "8px 18px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "13px",
                        boxShadow: "0 0 15px rgba(2, 132, 199, 0.3)",
                      }}
                    >
                      Open →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}