import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
