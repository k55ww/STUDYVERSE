import Navbar from "./components/Navbar";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"; // 1. استيراد أداة قياس السرعة

export const metadata = {
  title: "StudyVerse | Next-Gen AI Academic Platform",
  description: "AI-powered workspace for university students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#030712",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Navbar ثابت يظهر بكل الأقسام والصفحات */}
        <Navbar />

        {/* محتوى الصفحة */}
        {children}

        {/* أدوات تتبع الأداء والزوار */}
        <Analytics />
        <SpeedInsights /> {/* 2. تفعيل قياس سرعة الموقع */}
      </body>
    </html>
  );
}