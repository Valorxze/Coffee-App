import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menus";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Menu />
      <OurStory />
      <Footer />
    </div>
  );
}
