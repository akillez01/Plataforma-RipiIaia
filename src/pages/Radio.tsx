import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mic, Pause, Play, Radio, Volume2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RadioRipiiaia = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const programs = [
    {
      name: "Manhã na Floresta",
      time: "06:00 - 09:00",
      description: "Música espiritual e meditativa para começar o dia",
      host: "Ana Sagrada"
    },
    {
      name: "Raízes Amazônicas",
      time: "14:00 - 16:00",
      description: "Cultura regional e música tradicional",
      host: "João Floresta"
    },
    {
      name: "Noite Estrelada",
      time: "20:00 - 22:00",
      description: "Contemplação e músicas para reflexão",
      host: "Maria Lua"
    }
  ];

  const playlists = [
    {
      name: "Hinários Sagrados",
      count: 85,
      duration: "4h 20min"
    },
    {
      name: "Músicas da Floresta",
      count: 124,
      duration: "6h 15min"
    },
    {
      name: "Contemplação",
      count: 67,
      duration: "3h 45min"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Radio className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Rádio Ripiiaia</h1>
                <p className="text-sm text-gray-600">Música, Jornal, IPTV & Cultura Amazônica</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Player Principal */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            🎵 AO VIVO
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Transmissão 24 Horas</h2>
          <p className="text-lg mb-8 opacity-90">
            Música espiritual, cultura amazônica e conteúdos autorais conectando corações através do som
          </p>
          {/* Player de Rádio */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Manhã na Floresta</h3>
              <p className="opacity-90">Ana Sagrada • Ao vivo</p>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full w-16 h-16"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </Button>
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5" />
                <div className="w-24 h-2 bg-white/20 rounded-full">
                  <div className="w-16 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jornal e IPTV */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jornal */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Mic className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-lg">Jornal Ripiiaia</CardTitle>
                </div>
                <CardDescription>
                  Notícias, entrevistas e reportagens sobre cultura, espiritualidade e sociedade amazônica.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Acessar Jornal
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* IPTV */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Radio className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-lg">IPTV Ripiiaia</CardTitle>
                </div>
                <CardDescription>
                  Canal de vídeos, transmissões ao vivo e conteúdos audiovisuais da floresta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Acessar IPTV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Playlists Especiais</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {playlist.name}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-4">
                    <span>{playlist.count} músicas</span>
                    <span>•</span>
                    <span>{playlist.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Play className="w-4 h-4 mr-2" />
                    Reproduzir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Blog sobre a Plataforma */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Sobre a Plataforma Ripi Iaiá</h3>
          <div className="bg-white/80 rounded-xl shadow p-8 text-gray-700">
            <p className="text-lg mb-4">
              A Ripi Iaiá é uma plataforma multifacetada dedicada à cultura, espiritualidade e inovação social na Amazônia. Nosso objetivo é conectar pessoas, saberes e tradições, promovendo o intercâmbio de experiências e a valorização da diversidade.
            </p>
            <p className="text-lg mb-4">
              Aqui você encontra rádio online, jornal, IPTV, playlists especiais e conteúdos autorais, tudo pensado para fortalecer a identidade amazônica e inspirar transformação coletiva.
            </p>
            <p className="text-lg">
              Junte-se a nós nessa jornada de conexão, aprendizado e celebração da floresta e de seus povos!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RadioRipiiaia;
