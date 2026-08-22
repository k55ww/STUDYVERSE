"use client";

export default function Hero() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById("tools");
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 15px 60px 15px",
        minHeight: "100vh",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden", // لمنع أي خروج للعناصر عن حدود الشاشة أفقياً
      }}
    >
      {/* 🌑 طبقة عتمة */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(3, 7, 18, 0.75)",
          zIndex: 1,
        }}
      />

      {/* محتوى الـ Hero */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", width: "100%" }}>
        
        {/* 🔮 هالة ضوئية متجاوبة (تم تقليل عرضها للموبايل) */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(400px, 90vw)",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        {/* ⚡ Badge احترافي */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(15, 23, 42, 0.7)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            padding: "6px 16px",
            borderRadius: "50px",
            fontSize: "12px",
            color: "#38bdf8",
            fontWeight: "600",
            marginBottom: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <span>✨</span> Next-Gen Academic Platform
        </div>

        {/* 🚀 العنوان الرئيسي (متجاوب: أصغر بالموبايل وأكبر بالـ PC) */}
        <h1
          style={{
            fontSize: "clamp(36px, 7vw, 64px)",
            fontWeight: "900",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            margin: "0 0 20px 0",
            color: "#ffffff",
          }}
        >
          Learn & Research <br />
          <span style={{ color: "#38bdf8" }}>Without Limits</span>
        </h1>

        {/* 📝 الوصف */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "#94a3b8",
            maxWidth: "680px",
            margin: "0 auto 30px auto",
            lineHeight: "1.6",
            fontWeight: "400",
            padding: "0 10px",
          }}
        >
          An AI-powered workspace built for university students to craft reports,
          summarize PDFs, analyze citations, and study smarter.
        </p>

        {/* 🔘 زر Get Started */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "35px" }}>
          <button
            onClick={scrollToTools}
            style={{
              background: "linear-gradient(135deg, #0284c7 0%, #6d28d9 100%)",
              color: "#ffffff",
              padding: "14px 36px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "700",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(2, 132, 199, 0.4)",
              transition: "all 0.2s ease",
            }}
          >
            Get Started ↓
          </button>
        </div>

        {/* ✨ الميزات السريعة */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              padding: "10px 18px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#e2e8f0",
              fontWeight: "500",
            }}
          >
            <span>🤖</span> Advanced AI Models
          </div>

          <div
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              padding: "10px 18px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#e2e8f0",
              fontWeight: "500",
            }}
          >
            <span>⚡</span> Real-time Processing
          </div>

          <div
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              padding: "10px 18px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#e2e8f0",
              fontWeight: "500",
            }}
          >
            <span>🎯</span> Accurate Academic Citations
          </div>
        </div>

      </div>
    </section>
  );
}