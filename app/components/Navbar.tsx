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
        background: "rgba(3, 7, 18, 0.8)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* 🚀 الضغط على الشعار يرجعك للصفحة الرئيسية "/" */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "42px",
            height: "42px",
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
              filter: "blur(10px)",
              borderRadius: "50%",
              opacity: 0.7,
            }}
          />
          <Image
            src="/logo.png"
            alt="StudyVerse Logo"
            width={42}
            height={42}
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "10px",
              objectFit: "contain",
              mixBlendMode: "screen",
            }}
          />
        </div>

        <span
          style={{
            fontSize: "22px",
            fontWeight: "900",
            letterSpacing: "-0.5px",
            color: "#ffffff",
          }}
        >
          Study<span style={{ color: "#38bdf8" }}>Verse</span>
        </span>
      </Link>

      {/* 🔗 روابط الملاحة + زر تسجيل الدخول */}
      <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
        <Link
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "14px",
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
            fontSize: "14px",
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
            fontSize: "14px",
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Contact
        </Link>

        {/* زر تسجيل الدخول الاحترافي */}
        <Link
          href="/login"
          style={{
            backgroundColor: "#059669",
            color: "#ffffff",
            padding: "8px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "14px",
            boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
            transition: "background 0.2s",
          }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}