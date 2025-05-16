import Navbar from "./components/Navbar";
import MovieGallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="container-fluid px-4 bg-dark">
        <h2 className="mb-4">TV Shows</h2>
        <MovieGallery
          title="Harry Potter Saga"
          queryList={[
            "Harry Potter and the Sorcerer's Stone",
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
            "Harry Potter and the Deathly Hallows: Part 1",
            "Harry Potter and the Deathly Hallows: Part 2",
            "Harry Potter and the Goblet of Fire",
          ]}
        />
        <MovieGallery
          title="Lord of the Rings"
          queryList={[
            "The Fellowship of the Ring",
            "The Two Towers",
            "The Return of the King",
            "The Fellowship of the Ring",
            "The Two Towers",
            "The Return of the King",
          ]}
        />
        <MovieGallery
          title="Batman Trilogy"
          queryList={[
            "Batman Begins",
            "The Dark Knight",
            "The Dark Knight Rises",
            "Batman Begins",
            "The Dark Knight",
            "The Dark Knight Rises",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
