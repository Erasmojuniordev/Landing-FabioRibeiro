import { ArrowRight, Building2, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-65px)] overflow-hidden bg-[#071521] text-white">
      <img
        src="https://fabioribeiroadvogados.com.br/wp-content/uploads/2025/08/Img-4-home-Fabio-Ribeiro-Advogados-em-Aracaju-SE-683x1024.webp"
        alt="Fábio Ribeiro Advogados em Aracaju"
        className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-40 md:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,33,0.98)_0%,rgba(7,21,33,0.86)_45%,rgba(7,21,33,0.42)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-65px)] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#d5b15f]/30 bg-[#d5b15f]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e4c979]">
            <MapPin className="size-4" />
            Escritório de advocacia em Aracaju - SE
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Advocacia humanizada para proteger seus direitos com estratégia e transparência.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Atendimento especializado em Direito Previdenciário, Trabalhista e Cível, com análise cuidadosa do seu caso e comunicação clara em cada etapa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato">
              <Button className="h-12 w-full bg-[#d5b15f] px-6 text-sm font-semibold text-[#071521] shadow-lg shadow-[#d5b15f]/20 hover:bg-[#e4c979] sm:w-auto">
                Agendar avaliação
                <ArrowRight className="size-4" />
              </Button>
            </a>

            <a href="#servicos">
              <Button
                variant="outline"
                className="h-12 w-full border-white/25 bg-white/5 px-6 text-sm text-white backdrop-blur hover:bg-white hover:text-[#071521] sm:w-auto"
              >
                Ver especialidades
              </Button>
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Building2, text: 'Sede e cinco filiais' },
              { icon: CheckCircle2, text: '23 anos de atuação' },
              { icon: CheckCircle2, text: 'Atendimento personalizado' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-3 text-sm text-slate-100 backdrop-blur">
                <item.icon className="size-4 text-[#d5b15f]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
