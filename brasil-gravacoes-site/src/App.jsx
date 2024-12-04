import Header from './components/MainHeader.jsx';
import Hero from "./components/HeroSection.jsx";
import Services from './components/ServicesSection.jsx';

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <Services />
            </main>
        </>
    )
}

export default App
