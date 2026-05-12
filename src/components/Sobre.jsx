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
            Fundado em 2014, o escritório Silva & Associados atua com ética,
            transparência e dedicação em cada caso. Nossa equipe é formada por
            advogados especializados prontos para oferecer a melhor solução jurídica.
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