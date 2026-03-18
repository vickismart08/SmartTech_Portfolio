import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WhatIDo from './components/WhatIDo';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <WhatIDo />
        <Portfolio />
        <Resume />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
