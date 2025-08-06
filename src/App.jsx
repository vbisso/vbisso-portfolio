import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
