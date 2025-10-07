import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center  bg-stone-200">
        <Home />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
