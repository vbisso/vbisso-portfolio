import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center  bg-stone-200">
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
