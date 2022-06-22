import "./Index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dadjoke from "./components/Dadjoke";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Dadjoke />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
