import About from "./componemts/About";
import Hero from "./componemts/Hero";
// import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
     {/*  */}
      <Hero />
      <About />
        {/* <Features />
        <Story />
        <Contact />
        <Footer /> */}

      <section className="flex-center h-screen w-screen bg-black"></section>
    </main>
  );
}

export default App;
