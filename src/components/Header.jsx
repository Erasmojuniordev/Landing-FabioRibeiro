import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navItems = [
    { href: '#servicos', label: 'Especialidades' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071521]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#" className="group inline-flex items-center gap-3" aria-label="Fábio Ribeiro Advogados">
          <span className="flex size-10 items-center justify-center rounded-lg border border-[#d5b15f]/50 bg-[#d5b15f]/10 text-sm font-bold text-[#d5b15f]">
            FR
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-wide text-white transition-colors group-hover:text-[#d5b15f]">
              Fábio Ribeiro
            </span>
            <span className="block text-xs text-slate-300">Advogados</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-200 transition-colors hover:text-[#d5b15f]">
              {item.label}
            </a>
          ))}

          <a href="#contato">
            <Button
              variant="outline"
              className="h-10 border-[#d5b15f]/70 bg-transparent px-4 text-sm text-[#d5b15f] hover:bg-[#d5b15f] hover:text-[#071521]"
            >
              <Phone className="size-4" />
              Fale conosco
            </Button>
          </a>  
        </nav>

        <button
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuAberto && (
        <div className="animate-in slide-in-from-top-2 md:hidden border-t border-white/10 bg-[#071521] px-5 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-[#d5b15f]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
