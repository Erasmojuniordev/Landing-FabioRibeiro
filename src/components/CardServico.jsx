import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function CardServico({ icone, titulo, descricao }) {
  const Icone = icone;

  return (
    <Card className="group rounded-lg border border-slate-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d5b15f]/60 hover:shadow-xl hover:shadow-slate-950/10">
      <CardHeader className="px-6 pt-6">
        <span className="flex size-12 items-center justify-center rounded-lg bg-[#071521] text-[#d5b15f] transition-transform duration-300 group-hover:scale-105">
          <Icone className="size-6" />
        </span>
        <CardTitle className="mt-4 text-xl font-semibold text-[#071521]">{titulo}</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm leading-6 text-slate-600">{descricao}</p>
      </CardContent>
      <CardFooter className="mt-auto border-t border-slate-100 bg-slate-50 px-6 py-4">
        <a href="#contato">
          <Button variant="ghost" className="h-9 px-0 text-sm font-semibold text-[#0f3b52] hover:bg-transparent hover:text-[#071521]">
            Falar com um advogado
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default CardServico;
