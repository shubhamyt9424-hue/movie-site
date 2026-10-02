import "./App.css";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Contact from "./Contact";
function App() {
    const path = window.location.hash;

  if (path === "#/privacy") return <Privacy />;
  if (path === "#/terms") return <Terms />;
  if (path === "#/contact") return <Contact />;
  return (
    <div className="website">

      <header className="header">
        <div className="logo">🎬 MOVIE HUB</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#series">Web Series</a>
        </nav>
      </header>

      <main>

        <section className="hero" id="home">
          <div className="hero-content">
            <p className="small-title">WELCOME TO MOVIE HUB</p>

            <h1>Movies & Web Series</h1>

            <p>
              Discover movies and web series in one place.
            </p>

            <a href="#movies" className="hero-button">
              Explore Now
            </a>
          </div>
        </section>

        <div className="ad-box">
          Advertisement
        </div>

        <section className="section" id="movies">
          <h2>🔥 Popular Movies</h2>

          <div className="cards">

            <div className="card">
              <div className="poster">🎬</div>
            
            </div>

            <div className="card">
              <div className="poster">🎬</div>
              <h3>Movie Two</h3>
              <p>Comedy • Drama</p>

            </div><button className="details-button">
  View Details
</button>

            <div className="card">
              <div className="poster">🎬</div>
              <h3>Movie Three</h3>
              <p>Action • Thriller</p>
            </div>

            <div className="card">
              <div className="poster">🎬</div>
              <h3>Movie Four</h3>
              <p>Adventure • Action</p>
            </div>

          </div>
        </section>

        <section className="section" id="series">
          <h2>📺 Web Series</h2>

          <div className="cards">

            <div className="card">
              <div className="poster">📺</div>
              <h3>Series One</h3>
              <p>Drama • Thriller</p>
            </div>

            <div className="card">
              <div className="poster">📺</div>
              <h3>Series Two</h3>
              <p>Action • Crime</p>
            </div>

            <div className="card">
              <div className="poster">📺</div>
              <h3>Series Three</h3>
              <p>Comedy • Drama</p>
            </div>

            <div className="card">
              <div className="poster">📺</div>
              <h3>Series Four</h3>
              <p>Adventure • Drama</p>
            </div>

          </div>
        </section>

        <div className="ad-box">
          Advertisement
        </div>

      </main>

      <footer>
        <h2>🎬 MOVIE HUB</h2>

        <p>
          Movies and entertainment information.
        </p>

        <a
          href="https://www.moviesspace.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="old-site-button"
        >
          🔗 Visit Movies Space
        </a>
<div className="footer-links">
<a href="#/privacy">Privacy Policy</a>
  <a href="#/terms">Terms & Conditions</a>
  <a href="#/contact">Contact Us</a>
</div>
        <p className="copyright">
          © 2026 Movie Hub
        </p>
      </footer>

    </div>
  );
}

export default App;