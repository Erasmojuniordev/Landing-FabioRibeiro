function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Texto */}
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
            Quem somos
          </span>
          <h2 className="text-3xl font-bold text-primary">
            Comprometidos com a justiça e seus direitos
          </h2>
          <p className="text-gray-600">
Nosso escritório foi fundado em 2003 por Fábio Corrêa Ribeiro. E graças ao objetivo de tornar a Justiça Federal mais acessível, adotamos uma advocacia humanizada e acessível, buscando uma sociedade mais justa.
Desse modo, rapidamente, nos tornamos referência na advocacia em Aracaju - SE, destacamo-nos pela eficiência, altos índices de sucesso e princípios de empatia e humildade em sua atuação
          </p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>✔️ Atendimento personalizado</li>
            <li>✔️ Equipe multidisciplinar</li>
            <li>✔️ Atuação em todo o território nacional</li>
          </ul>
        </div>

        {/* Números */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {[
            { numero: '10+', label: 'Anos de experiência' },
            { numero: '500+', label: 'Casos resolvidos' },
            { numero: '98%', label: 'Clientes satisfeitos' },
            { numero: '3', label: 'Áreas de atuação' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-light rounded-xl p-6 text-center border border-gray-200"
            >
              <span className="text-4xl font-bold text-secondary">{item.numero}</span>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Sobre;