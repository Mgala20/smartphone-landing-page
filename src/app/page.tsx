import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}