import Header from './components/MainHeader.jsx';
import Hero from './components/HeroSection.jsx';
import Services from './components/ServicesSection.jsx';
import AboutUs from './components/AboutUsSection.jsx';
import Form from './components/Form.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <Form />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
