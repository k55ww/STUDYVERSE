"use client";

import { use } from "react";
import Link from "next/link";
import { researchTools } from "../../tools";

export default function ToolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  // البحث عن الأداة المحددة (مع تحويل النوع لـ any لتفادي أخطاء TypeScript)
  const tool: any = researchTools.find((t: any) => t.id === id);

  if (!tool) {
    return (
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#030712",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h2>Tool Not Found</h2>
        <Link
          href="/research-hub"
          style={{
            color: "#38bdf8",
            textDecoration: "underline",
            fontWeight: "600",
          }}
        >
          Back to Research Hub
        </Link>
      </main>
    );
  }

  // مميزات الأداة (تأمين الحقل ضد خطأ TypeScript)
  const defaultFeatures: string[] = tool?.features || [
    "Google Search",
    "Coding",
    "Image Understanding",
    "Writing",
    "Research",
  ];

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#030712",
        color: "#ffffff",
        padding: "40px 20px 80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      {/* 🔮 هالة النيون خلف الصفحة */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "680px",
        }}
      >
        {/* ⬅️ زر الرجوع مع التفاعل */}
        <div style={{ marginBottom: "16px" }}>
          <Link
            href="/research-hub"
            className="glass-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "600",
              padding: "6px 16px",
              borderRadius: "8px",
              background: "rgba(30, 41, 59, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            ← Back
          </Link>
        </div>

        {/* 💳 الكارت الزجاجي الرئيسي مع التفاعل */}
        <div
          className="glass-card"
          style={{
            background: "rgba(15, 23, 42, 0.65)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              marginBottom: "24px",
            }}
          >
            {/* أيقونة الأداة */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
                flexShrink: 0,
              }}
            >
              {tool.icon || "🎓"}
            </div>

            <div>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  margin: "0 0 4px 0",
                  color: "#ffffff",
                }}
              >
                {tool.name}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#94a3b8",
                  margin: "0 0 10px 0",
                }}
              >
                {tool.description}
              </p>

              {/* Badges */}
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span
                  style={{
                    background: "rgba(234, 179, 8, 0.2)",
                    color: "#facc15",
                    border: "1px solid rgba(234, 179, 8, 0.3)",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  ⭐ {tool?.rating || "4.8"}
                </span>

                <span
                  style={{
                    background: "rgba(168, 85, 247, 0.2)",
                    color: "#c084fc",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    padding: "2px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {tool?.category || "Chatbot"}
                </span>

                <span
                  style={{
                    background: "rgba(56, 189, 248, 0.2)",
                    color: "#38bdf8",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    padding: "2px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Free
                </span>
              </div>
            </div>
          </div>

          {/* ABOUT THIS TOOL */}
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#38bdf8",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                margin: "0 0 8px 0",
              }}
            >
              ABOUT THIS TOOL
            </h3>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {tool?.longDescription ||
                `${tool.name} is a powerful research tool designed for students, academics, and researchers to discover scientific papers, literature, and trusted academic resources.`}
            </p>
          </div>

          {/* FEATURES */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#38bdf8",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                margin: "0 0 12px 0",
              }}
            >
              FEATURES
            </h3>

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {defaultFeatures.map((feature: string, idx: number) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    background: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: "#e2e8f0",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open Tool Button مع التفاعل */}
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              display: "block",
              width: "100%",
              padding: "14px",
              textAlign: "center",
              background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
              borderRadius: "12px",
              boxShadow: "0 0 25px rgba(37, 99, 235, 0.35)",
              boxSizing: "border-box",
            }}
          >
            Open {tool.name} →
          </a>
        </div>
      </div>
    </main>
  );
}