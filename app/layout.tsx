import Navbar from "./components/Navbar";
import "./globals.css";

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
      </body>
    </html>
  );
}