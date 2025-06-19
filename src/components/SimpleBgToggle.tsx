"use client";
import { useState } from "react";

export default function SimpleBgToggle({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ background: isDark ? "#111" : "#fff", minHeight: "100vh", transition: "background 0.3s" }}>
      <button
        onClick={() => setIsDark((d) => !d)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: "10px 20px",
          background: isDark ? "#fff" : "#111",
          color: isDark ? "#111" : "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      {children}
    </div>
  );
} 