import Header from './components/MainHeader.jsx';
import Hero from './components/HeroSection';
import Services from './components/ServiceSection';
import AboutUs from './components/AboutUsSection.jsx';
import FormSection from './components/forms/FormSection.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <FormSection />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
