import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Clients from "./components/Clients";
import Quality from "./components/Quality";
import Team from "./components/Team";
import FutureContact from "./components/FutureContact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <Services />
        <Process />
        <WhyUs />
        <Clients />
        <Quality />
        <Team />
        <FutureContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
