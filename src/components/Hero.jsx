import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <section className="bg-primary text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

        <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
          Advocacia de excelência
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Defendendo seus direitos <br />
          <span className="text-secondary">com experiência e dedicação</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl">
          Mais de 10 anos atuando em direito civil, trabalhista e empresarial.
          Seu caso tratado com atenção e comprometimento.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#contato">
            <Button 
              className="bg-secondary text-primary hover:bg-yellow-500 font-semibold px-8"
            >
              Fale com um advogado
            </Button>
          </a>

          <a href="#servicos">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Conheça nossos serviços
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;