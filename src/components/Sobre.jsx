import { CheckCircle2, Clock, HeartHandshake, MapPinned, Scale, ShieldCheck } from 'lucide-react';

function Sobre() {
  const estatisticas = [
    { numero: '23', label: 'anos de experiência' },
    { numero: '+35k', label: 'clientes confiaram no escritório' },
    { numero: '+5', label: 'localidades estratégicas' },
    { numero: '3', label: 'especialidades principais' },
  ];

  const valores = [
    { icon: ShieldCheck, title: 'Transparência total', text: 'Clareza sobre possibilidades, riscos e próximos passos.' },
    { icon: Scale, title: 'Ética na estratégia', text: 'Conduta técnica com foco na melhor solução para o cliente.' },
    { icon: HeartHandshake, title: 'Empatia no atendimento', text: 'Escuta ativa para entender o impacto real de cada demanda.' },
  ];

  return (
    <section id="sobre" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a17a20]">
            Quem somos
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071521] md:text-4xl">
            Um escritório construído sobre responsabilidade social, técnica e proximidade.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            O Fábio Ribeiro Advogados atua desde 2003 com uma proposta de advocacia humanizada e acessível. A equipe reúne especialistas em Direito Previdenciário, Trabalhista e Cível, com atendimento pensado para orientar pessoas em decisões jurídicas importantes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {valores.map((valor) => (
              <div key={valor.title} className="rounded-lg border border-slate-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5b15f]/50 hover:bg-white hover:shadow-lg">
                <valor.icon className="size-6 text-[#a17a20]" />
                <h3 className="mt-4 font-semibold text-[#071521]">{valor.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{valor.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-700 sm:flex-row">
            <span className="inline-flex items-center gap-2 rounded-lg bg-[#0f3b52]/10 px-3 py-2">
              <MapPinned className="size-4 text-[#0f3b52]" />
              Rua Duque de Caxias, 188, Aracaju - SE
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-[#0f3b52]/10 px-3 py-2">
              <Clock className="size-4 text-[#0f3b52]" />
              Segunda a sexta, 8h às 18h
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {estatisticas.map((item, index) => (
            <div key={item.label} className="rounded-lg border border-slate-200 bg-[#071521] p-5 text-white shadow-lg shadow-slate-950/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-3">
                <span className="text-4xl font-semibold text-[#d5b15f]">{item.numero}</span>
                <CheckCircle2 className="size-5 text-[#d5b15f]" />
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-200">{item.label}</p>
              <div className="mt-5 h-1 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#d5b15f]" style={{ width: `${70 + index * 8}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
