export default function Hero() {
  return (
    <div className="hero hero-reset">
      <h1>COORDINATION IN CRISIS:</h1>
      <h1>UNIFYING HELPING HANDS.</h1>
      <h1>SAVING LIVES</h1>
      <p>Connect. Respond. Rebuild.</p>
    </div>
  );
}


const styles = {
  hero: {
    maxWidth: "520px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "800",
    lineHeight: "1.3",
  },
  tagline: {
    marginTop: "16px",
    color: "var(--text-secondary)",
  },
};
