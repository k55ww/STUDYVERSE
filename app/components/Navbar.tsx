"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(3, 7, 18, 0.85)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "10px 15px", // تقليل البادينغ ليتناسب مع الموبايل والشاشات الصغيرة
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* 🚀 الشعار واسم الموقع */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(168, 85, 247, 0.4) 100%)",
              filter: "blur(8px)",
              borderRadius: "50%",
              opacity: 0.7,
            }}
          />
          <Image
            src="/logo.png"
            alt="StudyVerse Logo"
            width={36}
            height={36}
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "8px",
              objectFit: "contain",
              mixBlendMode: "screen",
            }}
          />
        </div>

        <span
          style={{
            fontSize: "18px",
            fontWeight: "900",
            letterSpacing: "-0.5px",
            color: "#ffffff",
          }}
        >
          Study<span style={{ color: "#38bdf8" }}>Verse</span>
        </span>
      </Link>

      {/* 🔗 روابط الملاحة + زر تسجيل الدخول */}
      <nav style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* الروابط تظهر بشكل مصغر ومناسب، أو تختفي بالشاشات الضيقة جداً */}
        <Link
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          Home
        </Link>
        <Link
          href="/courses"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "13px",
          }}
        >
          Courses
        </Link>
        <Link
          href="/about"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "13px",
          }}
        >
          About
        </Link>

        {/* زر تسجيل الدخول */}
        <Link
          href="/login"
          style={{
            backgroundColor: "#059669",
            color: "#ffffff",
            padding: "6px 14px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "13px",
            boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
            transition: "background 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}