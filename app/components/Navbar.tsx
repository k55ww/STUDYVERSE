export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
      }}
    >
      <h2 style={{ color: "#38bdf8" }}>StudyVerse</h2>

      <div style={{ display: "flex", gap: "25px", color: "white" }}>
        <span>Home</span>
        <span>Courses</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}