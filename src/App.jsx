import CalculateRate from "./components/CalculateRate";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowMuch from "./components/HowMuch";
import StartMining from "./components/StartMining";
import WhyCrappo from "./components/WhyCrappo";
import Header from "./components/Header";

// aos init
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const App = () => {
  return (
    <>
      <div className=" bg-[#0d0d2b] text-white">
        <div className="w-10/12 mx-auto">
          <header
            data-aos="fade-in"
            className="flex h-[20px] pt-14 pb-10 justify-between items-center mb-10 lg:mb-2"
          >
            <Header />
          </header>
          <Hero />
          <WhyCrappo />
          <HowMuch />
        </div>
      </div>
      <CalculateRate />
      <Features />
      <StartMining />
      <Footer />
    </>
  );
};

export default App;
