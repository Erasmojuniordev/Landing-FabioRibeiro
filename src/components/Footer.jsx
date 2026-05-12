function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <span className="text-secondary font-bold text-lg">Fabio Ribeiro Advogados</span>
          <p className="text-xs mt-1">Advocacia & Consultoria Jurídica</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-secondary transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-secondary transition-colors">Contato</a>
        </nav>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Fabio Ribeiro Advogados. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;