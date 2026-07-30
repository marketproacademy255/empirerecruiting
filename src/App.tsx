import { useState } from "react";
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
import ApplicationModal from "./components/ApplicationModal";

function App() {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <>
      <Header onApply={() => setApplyOpen(true)} />
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
        <FutureContact onApply={() => setApplyOpen(true)} />
      </main>
      <Footer />
      <ApplicationModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </>
  );
}

export default App;
