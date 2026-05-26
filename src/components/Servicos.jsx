import { BriefcaseBusiness, FileText, Landmark, Scale, ShieldCheck, UsersRound } from 'lucide-react';
import CardServico from './CardServico';

const servicos = [
  {
    icone: Landmark,
    titulo: 'Direito Previdenciário',
    descricao: 'Planejamento, revisões, aposentadorias, benefícios por incapacidade, BPC/LOAS e demandas contra o INSS.',
  },
  {
    icone: BriefcaseBusiness,
    titulo: 'Direito Trabalhista',
    descricao: 'Atuação em verbas rescisórias, vínculos, acidentes, assédio, defesa empresarial e negociação estratégica.',
  },
  {
    icone: Scale,
    titulo: 'Direito Cível',
    descricao: 'Contratos, responsabilidade civil, família, sucessões, posse, cobranças e conflitos patrimoniais.',
  },
];

function Servicos() {
  return (
    <section id="servicos" className="bg-stone-50 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a17a20]">
              Especialidades
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071521] md:text-4xl">
              Soluções jurídicas para momentos que exigem precisão.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Uma primeira conversa bem conduzida ajuda a organizar documentos, riscos, prazos e caminhos possíveis antes da tomada de decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {servicos.map((servico, index) => (
            <div key={servico.titulo} className="animate-in fade-in slide-in-from-bottom-3 duration-500" style={{ animationDelay: `${index * 120}ms` }}>
              <CardServico
                icone={servico.icone}
                titulo={servico.titulo}
                descricao={servico.descricao}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Triagem responsável', text: 'Análise inicial do cenário, documentos e urgência.' },
            { icon: FileText, title: 'Documentação organizada', text: 'Orientação objetiva sobre o que fortalece o caso.' },
            { icon: UsersRound, title: 'Comunicação próxima', text: 'Acompanhamento com linguagem clara e sem ruído técnico.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 rounded-lg p-3 transition-colors hover:bg-stone-50">
              <item.icon className="mt-1 size-5 shrink-0 text-[#a17a20]" />
              <div>
                <h3 className="font-semibold text-[#071521]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
