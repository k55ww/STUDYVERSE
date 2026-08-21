import { aiTools } from "../../ai-tools/tools";
import Link from "next/link";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tool = aiTools.find((t) => t.id === id);
  if (!tool) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#030712",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Tool not found</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#030712",
        color: "#ffffff",
        padding: "40px 20px 80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🌐 شبكة النقاط خلفية ثابته */}
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

      {/* 🔮 هالة نيون ضوئية خلف البطاقة */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
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
        {/* ⬅️ زر العودة مع التفاعل */}
        <Link
          href="/ai-tools"
          className="glass-card"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#94a3b8",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "20px",
            padding: "8px 16px",
            borderRadius: "8px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          ← Back
        </Link>

        {/* 💳 الكارت الزجاجي الموحد الكبير */}
        <div
          className="glass-card"
          style={{
            background: "rgba(15, 23, 42, 0.65)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* هيدر الأداة: الأيقونة + الاسم + الوصف + التقييمات */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              paddingBottom: "24px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
                flexShrink: 0,
              }}
            >
              {tool.icon}
            </div>

            <div>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  margin: "0 0 6px 0",
                  color: "#ffffff",
                }}
              >
                {tool.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  color: "#94a3b8",
                  margin: "0 0 10px 0",
                }}
              >
                {tool.description}
              </p>

              {/* Badges صغيرة */}
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span
                  style={{
                    background: "rgba(34, 197, 94, 0.15)",
                    color: "#4ade80",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  ⭐ {tool.rating}
                </span>

                <span
                  style={{
                    background: "rgba(168, 85, 247, 0.15)",
                    color: "#c084fc",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {tool.category}
                </span>

                <span
                  style={{
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "#38bdf8",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    padding: "2px 10px",
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

          {/* 📝 ABOUT THIS TOOL */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#38bdf8",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: "0 0 10px 0",
              }}
            >
              About This Tool
            </h3>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {tool.longDescription || tool.description}
            </p>
          </div>

          {/* ⚡ FEATURES */}
          {tool.features && tool.features.length > 0 && (
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#38bdf8",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  margin: "0 0 14px 0",
                }}
              >
                Features
              </h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {tool.features.map((feature) => (
                  <span
                    key={feature}
                    className="glass-card"
                    style={{
                      background: "rgba(30, 41, 59, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#e2e8f0",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 🚀 ZER OPEN TOOL */}
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              display: "block",
              width: "100%",
              padding: "16px",
              textAlign: "center",
              background: "linear-gradient(135deg, #0284c7 0%, #6d28d9 100%)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
              borderRadius: "14px",
              boxShadow: "0 0 25px rgba(2, 132, 199, 0.35)",
              boxSizing: "border-box",
            }}
          >
            Open {tool.name} →
          </a>
        </div>
      </div>
    </div>
  );
}