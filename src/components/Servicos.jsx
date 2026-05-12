import CardServico from './CardServico';

const servicos = [
  {
    titulo: 'Direito Civil',
    descricao: 'Assessoria em contratos, responsabilidade civil, família e sucessões.',
  },
  {
    titulo: 'Direito Trabalhista',
    descricao: 'Defesa dos direitos de empregados e empregadores em todas as instâncias.',
  },
  {
    titulo: 'Direito Empresarial',
    descricao: 'Constituição de empresas, contratos societários e consultoria jurídica empresarial.',
  },
];

function Servicos() {
  return (
    <section id="servicos" className="bg-light py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            Áreas de Atuação
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <CardServico
              key={servico.titulo}
              icone={servico.icone}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicos;