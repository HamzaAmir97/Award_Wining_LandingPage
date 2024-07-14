import Hero from "./componemts/Hero";
import About from "./componemts/About";
import Navbar from "./componemts/Navbar";
import Features from "./componemts/Featuers";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
     <About />
      <Features />
      {/* <Story />
      <Contact />
      <Footer /> */}
    </main>
  );
}

export default App;
