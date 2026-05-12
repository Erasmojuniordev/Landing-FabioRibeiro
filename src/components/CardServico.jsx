import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function CardServico({ icone, titulo, descricao }) {
  return (
    <Card className="border-t-4 border-t-secondary hover:shadow-lg transition-shadow">
      <CardHeader>
        <span className="text-4xl">{icone}</span>
        <CardTitle className="text-primary mt-2">{titulo}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{descricao}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <a href="#contato">
            <Button variant="outline" className="border-secondary text-primary hover:bg-secondary hover:text-primary text-sm">
                Falar com um advogado
            </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default CardServico;