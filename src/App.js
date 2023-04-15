import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action " fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy " fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror " fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance " fetchURL={requests.fetchRomanceMovies} />
      <Row title="Crime " fetchURL={requests.fetchCrime} />
      <Row title="Animation " fetchURL={requests.fetchAnimation} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Fantasy " fetchURL={requests.fetchFantasy} />
      <Row title="Mystery " fetchURL={requests.fetchMystery} />
      <Row title="Science Fiction " fetchURL={requests.fetchScienceFiction} />
      <Row title="Thriller " fetchURL={requests.fetchThriller} />
      <Row title="Adventure " fetchURL={requests.fetchAdventure} />
    </div>
  );
}

export default App;
