import Highlight from "./components/Highlights";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

import D1 from "./assets/d1.jpg";
import D2 from "./assets/d2.jpg";
import D3 from "./assets/d3.jpg";
import MiniCircle from "./components/MiniCircle";

function App() {
  return (
    <div>
      <MiniCircle xscale={1.5} yscale={0.8} />

      <Hero />
      <main className="bg-linear-to-b from-[#0a0a0a] to-[#300000]">
        <About />
        <div className="cards min-h-screen flex flex-wrap justify-center gap-16 px-4 sm:px-8 md:px-16 py-12">
          <Card
            title="Engineered For Extremes"
            des="Our UAV platforms are tested and validated for military-grade endurance, weather resistance, and operational stability."
          />
          <Card
            title="Autonomy at the Core"
            des="AI-driven navigation, sensor fusion, and real-time analytics power every mission with advanced autonomy and situational awareness."
          />
          <Card
            title="Reliability You Can Trust"
            des="Every system we build is driven by redundant architecture, rigorous testing, and uncompromising safety protocols."
          />
        </div>
        <div className="highlights min-h-screen py-24">
          <Highlight
            title="Our Vision"
            text="We aim to create cutting-edge aerospace solutions that redefine innovation."
            img={D1}
            reverse={false}
          />

          <Highlight
            title="Our Mission"
            text="Engineering a safer, smarter, and more connected future."
            img={D2}
            reverse={true}
          />
          <Highlight
            title="Our Story"
            text="Designing mission-ready UAV platforms built for reliability, autonomy, and operational excellence."
            img={D3}
            reverse={false}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
