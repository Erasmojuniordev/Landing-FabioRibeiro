import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, mensagem });
    // futuramente aqui vai a integração com e-mail ou backend
  }

  return (
    <section id="contato" className="bg-light py-20 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">Entre em Contato</h2>
          <p className="text-gray-500 mt-2">
            Preencha o formulário e entraremos em contato em até 24h.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              placeholder="Descreva brevemente seu caso..."
              className="min-h-32"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="bg-primary hover:bg-blue-900 text-white font-semibold py-6"
          >
            Enviar mensagem
          </Button>
        </form>

      </div>
    </section>
  );
}

export default Contato;