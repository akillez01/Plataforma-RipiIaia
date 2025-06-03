import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Daime = () => {
  const plataformas = [
    {
      title: "Cânticos da Floresta Online",
      description: "Portal de hinários, músicas e saberes da floresta.",
      url: "https://akillez01.github.io/canticos-da-floresta-online/",
      type: "Hinários"
    },
    {
      title: "Ripi Iaiá - Universo Daime",
      description: "Conteúdo, cultura e espiritualidade do Daime e medicinas da floresta.",
      url: "https://akillez01.github.io/Ripi-Iaia/",
      type: "Portal"
    },
    {
      title: "Ripiiaia Platform",
      description: "Plataforma multifacetada de espiritualidade, cultura e inovação social.",
      url: "https://akillez01.github.io/ripiiaia-platform-/",
      type: "Plataforma"
    },
    {
      title: "Igreja do Culto Eclético da Fluente Luz Universal Patrono Sebastião (ICEFLU)",
      description: "Organização internacional do Daime.",
      url: "https://iceflu.org/",
      type: "Igreja"
    },
    {
      title: "Barquinha (Alto Santo)",
      description: "Tradição Barquinha do Daime, Acre.",
      url: "https://barquinha.org/",
      type: "Tradição"
    },
    {
      title: "União do Vegetal (UDV)",
      description: "Centro de estudos do vegetal e espiritualidade.",
      url: "https://udv.org.br/",
      type: "Centro"
    },
    {
      title: "Ayahuasca.com",
      description: "Portal internacional sobre Ayahuasca, ciência e cultura.",
      url: "https://www.ayahuasca.com/",
      type: "Portal"
    },
    {
      title: "Santo Daime Internacional",
      description: "Rede global de informações sobre o Santo Daime.",
      url: "https://www.santodaime.org/",
      type: "Portal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700">
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-amber-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Universo Daime</h1>
                <p className="text-sm text-gray-600">Espiritualidade e Tradição</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-2xl text-amber-700"><span role="img" aria-label="estrela">🌟</span></span>
            <span className="text-base font-serif text-amber-700">Portais do Sagrado e da Diversidade</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Plataformas, Centros e Comunidades
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Explore portais, centros, tradições e comunidades que fazem parte do universo do Daime, Ayahuasca, Umbanda e linhas afins. Conheça, conecte-se e acesse conteúdos, saberes e redes de espiritualidade.
          </p>
        </div>
      </section>

      {/* Plataformas e Portais */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Portais e Plataformas Associadas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plataformas.map((plataforma, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-amber-600 transition-colors">
                      {plataforma.title}
                    </CardTitle>
                    <Badge variant="secondary">{plataforma.type}</Badge>
                  </div>
                  <CardDescription className="text-amber-700 font-medium">
                    {plataforma.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <a href={plataforma.url} target="_blank" rel="noopener noreferrer">Acessar Portal</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tradições */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h3 className="text-3xl font-bold mb-6">Tradições Respeitadas</h3>
          <p className="text-xl mb-8 opacity-90">
            Honramos todas as expressões da doutrina e das medicinas da floresta, preservando a diversidade e riqueza dos ensinamentos espirituais.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {["Alto Santo", "Barquinha", "CEFLURIS", "Umbanda", "Ayahuasca", "Outras Linhas"].map((tradicao, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">{tradicao}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Daime;
