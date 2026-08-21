"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Account created successfully! You can now sign in.");
    }
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Logged in successfully! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#030712", color: "#fff", padding: "20px" }}>
      <div style={{ background: "rgba(30, 41, 59, 0.7)", backdropFilter: "blur(16px)", padding: "40px", borderRadius: "16px", width: "100%", maxWidth: "420px", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
        
        <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "inline-block", marginBottom: "20px" }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "24px", color: "#fff" }}>
          Welcome to StudyVerse
        </h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "6px" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#fff", outline: "none", fontSize: "14px" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "6px" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#fff", outline: "none", fontSize: "14px" }}
            />
          </div>

          {message && (
            <p style={{ fontSize: "13px", color: message.includes("success") ? "#34d399" : "#f87171", margin: "4px 0" }}>
              {message}
            </p>
          )}

          <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
            <button
              type="button"
              onClick={handleSignIn}
              disabled={loading}
              style={{ flex: 1, padding: "12px", borderRadius: "8px", background: "#059669", color: "#fff", fontWeight: "600", border: "none", cursor: "pointer", transition: "opacity 0.2s" }}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              disabled={loading}
              style={{ flex: 1, padding: "12px", borderRadius: "8px", background: "#334155", color: "#fff", fontWeight: "600", border: "none", cursor: "pointer", transition: "opacity 0.2s" }}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}