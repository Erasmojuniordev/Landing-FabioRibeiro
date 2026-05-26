import { Facebook, Instagram, MapPin, Phone, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 text-slate-600 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.8fr_1fr] md:items-start">
        <div>
          <span className="text-lg font-semibold text-[#071521]">Fábio Ribeiro Advogados</span>
          <p className="mt-2 max-w-sm text-sm leading-6">
            Advocacia em Aracaju com foco em Direito Previdenciário, Trabalhista e Cível.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <a href="#servicos" className="hover:text-[#a17a20] transition-colors">Especialidades</a>
          <a href="#sobre" className="hover:text-[#a17a20] transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-[#a17a20] transition-colors">Contato</a>
        </nav>

        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2">
            <Phone className="size-4 text-[#a17a20]" />
            (79) 99198-0824
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[#a17a20]" />
            Rua Duque de Caxias, 188, São José, Aracaju - SE
          </p>
          <div className="flex gap-2 pt-2">
            {[Instagram, Facebook, Youtube].map((Icon, index) => (
              <span key={index} className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-[#071521]">
                <Icon className="size-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} Fábio Ribeiro Advogados. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
