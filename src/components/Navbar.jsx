import logo from "../assets/logo/urgo-logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.brand} onClick={() => navigate("/")}>
  <img src={logo} alt="URGO Logo" style={styles.logoImg} />
  <span style={styles.logoText}>URGO</span>
</div>


      <div style={styles.actions}>
        <button
  style={{ ...styles.btn, background: "var(--accent-orange)" }}
  onClick={() => navigate("/auth")}
>
  Login / Sign Up as Volunteer
         
        </button>
        <button style={{ ...styles.btn, background: "var(--accent-blue)" }}>
          Emergency Helplines
        </button>
        <button style={{ ...styles.btn, background: "var(--accent-gray)" }}>
          How It Works
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid var(--border-soft)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  btn: {
    border: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    },
  brand: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
},

logoImg: {
  width: "36px",
  height: "36px",
  objectFit: "contain",
  borderRadius: "6px",
  background: "#ffffff",
},

logoText: {
  fontSize: "22px",
  fontWeight: "700",
  letterSpacing: "0.5px",
},

};
