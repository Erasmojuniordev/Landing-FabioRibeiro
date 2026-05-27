import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AnimatedSection from './AnimatedSection';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [area, setArea] = useState('Previdenciário');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, telefone, area, mensagem });
  }

  return (
    <AnimatedSection as="section" id="contato" className="bg-[#071521] px-5 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d5b15f]">
            Atendimento
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Conte seu caso e receba orientação sobre os próximos passos.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Use o formulário para enviar uma descrição inicial. Quanto mais contexto você informar, melhor será a triagem do atendimento.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: Phone, label: '(79) 99198-0824' },
              { icon: Mail, label: 'Atendimento por e-mail' },
              { icon: MapPin, label: 'Aracaju - SE' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <item.icon className="size-5 text-[#d5b15f]" />
                <span className="text-sm text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white p-5 text-slate-900 shadow-2xl shadow-black/20 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-11 border-slate-300 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="telefone">WhatsApp</Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="h-11 border-slate-300 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 border-slate-300 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="area">Área do caso</Label>
              <select
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition-colors focus:border-[#d5b15f] focus:ring-4 focus:ring-[#d5b15f]/20"
              >
                <option>Previdenciário</option>
                <option>Trabalhista</option>
                <option>Cível</option>
                <option>Ainda não sei</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <Label htmlFor="mensagem">Resumo do caso</Label>
              <Textarea
                id="mensagem"
                placeholder="Descreva o que aconteceu, datas importantes, documentos disponíveis e qual resultado você busca."
                className="min-h-36 border-slate-300 bg-white"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0f766e]" />
              Seus dados serão usados apenas para retorno do atendimento.
            </p>

            <Button type="submit" className="h-12 bg-[#071521] px-6 font-semibold text-white hover:bg-[#0f3b52]">
              <Send className="size-4" />
              Enviar mensagem
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}

export default Contato;
