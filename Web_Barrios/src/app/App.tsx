import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventHighlights } from "./components/EventHighlights";
import { About } from "./components/About";
import { Journey } from "./components/Journey";
import { Schedule } from "./components/Schedule";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <EventHighlights />
      <About />
      <Journey />
      <Schedule />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}