import Link from "next/link";
import { pdfTools } from "../../tools";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PDFToolDetailPage({ params }: Props) {
  const { id } = await params;
  const tool = pdfTools.find((t) => t.id === id) as any;

  if (!tool) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%" }}>
        {/* زر الرجوع مع التفاعل */}
        <Link
          href="/pdf-tools"
          className="glass-card"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
            padding: "8px 16px",
            background: "#1e293b",
            borderRadius: "8px",
          }}
        >
          ← Back to PDF Tools
        </Link>

        {/* الكارد الرئيسي للتفاصيل مع التفاعل */}
        <div
          className="glass-card"
          style={{
            background: "#1e293b",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #334155",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* الهيدر: الأيقونة + الاسم والوصف المختصر */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              borderBottom: "1px solid #334155",
              paddingBottom: "24px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "#831843",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                flexShrink: 0,
              }}
            >
              {tool.icon}
            </div>

            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: "32px",
                  fontWeight: "800",
                  letterSpacing: "-0.5px",
                }}
              >
                {tool.name}
              </h1>
              <p
                style={{
                  margin: "8px 0 0 0",
                  color: "#cbd5e1",
                  fontSize: "18px",
                }}
              >
                {tool.description}
              </p>
            </div>
          </div>

          {/* قسم عن الأداة */}
          <div style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "18px",
                color: "#f43f5e",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              About this tool
            </h2>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.6",
                fontSize: "16px",
                margin: 0,
              }}
            >
              {tool.about ||
                `${tool.name} is one of the most popular online PDF toolkits for merging, splitting, compressing, converting and editing PDF documents.`}
            </p>
          </div>

          {/* قسم المميزات */}
          {tool.features && Array.isArray(tool.features) && tool.features.length > 0 && (
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  color: "#f43f5e",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Features
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {tool.features.map((feature: string, index: number) => (
                  <span
                    key={index}
                    className="glass-card"
                    style={{
                      background: "#0f172a",
                      color: "#e2e8f0",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      border: "1px solid #334155",
                    }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* زر فتح الأداة الخارجي مع التفاعل */}
          <a
            href={tool.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              display: "inline-block",
              width: "100%",
              textDecoration: "none",
              textAlign: "center",
              background: "#e11d48",
              color: "white",
              padding: "14px 24px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "18px",
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