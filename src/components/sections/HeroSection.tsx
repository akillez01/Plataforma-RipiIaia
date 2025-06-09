import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="outline" className="mb-6 border-emerald-200 text-emerald-700 bg-emerald-50/50 dark:border-emerald-800 dark:text-emerald-300 dark:bg-emerald-950/30">
          🌐 Bem-vindos à Ripiiaia
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight animate-fade-in">
          Conexão, Crescimento e Intercâmbio de Saberes
        </h2>
        <p className="text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in stagger-1">
          Uma plataforma multifacetada que une cultura, inovação social e serviços profissionais. 
          Cada espaço com sua missão única, unidos pelo propósito de promover harmonia, inclusão e desenvolvimento humano.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-2">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <Link to="/portal">
              Explorar Espaços
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 shadow-md hover:shadow-lg transition-all duration-300" asChild>
            <Link to="/sobre">Nossa História</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
