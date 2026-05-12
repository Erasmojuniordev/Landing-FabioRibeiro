import { useState } from 'react';
import { Button } from '@/components/ui/button';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <span className="text-xl font-bold text-secondary">
            Fabio Ribeiro Advogados
          </span>
          <p className="text-xs text-gray-300">Advocacia & Consultoria Jurídica</p>
        </div>

        {/* Nav desktop — hidden em mobile, flex em telas md+ */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm hover:text-secondary transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="text-sm hover:text-secondary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm hover:text-secondary transition-colors">
            Contato
          </a>

          <a href="#contato">
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary text-sm"
            >
              Fale Conosco
            </Button>
          </a>  
        </nav>

        {/* Botão hamburguer — visível só em mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-primary border-t border-gray-700 px-6 py-4 flex flex-col gap-4">
          <a href="#servicos" className="text-sm hover:text-secondary">Serviços</a>
          <a href="#sobre" className="text-sm hover:text-secondary">Sobre</a>
          <a href="#contato" className="text-sm hover:text-secondary">Contato</a>
        </div>
      )}
    </header>
  );
}

export default Header;