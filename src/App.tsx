import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Info />
      </main>
      <Footer />
    </div>
  );
}
