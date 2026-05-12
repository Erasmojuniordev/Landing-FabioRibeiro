import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Servicos />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;