import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Ícones mais temáticos e para a UI
import {
  Bot,
  Leaf,
  Sprout
} from "lucide-react";

// --- Dados (sem alterações) ---
const plataformas = [
    {
      title: "Ripi Iaiá - Universo Daime",
      description: "Conteúdo, cultura e espiritualidade do Daime e medicinas da floresta.",
      url: "https://akillez01.github.io/Ripi-Iaia/",
      type: "Portal"
    },
    {
    title: "5000",
    description: "Rede de conexões e projetos colaborativos.",
    url: "#",
    type: "Comunidade"
  },
    {
    title: "Daime TV",
    description: "Canal de vídeos, transmissões e cultura audiovisual.",
    url: "#",
    type: "Mídia"
  },
  
    {
      title: "Cânticos da Floresta Online",
      description: "Portal de hinários, músicas e saberes da floresta.",
      url: "https://akillez01.github.io/canticos-da-floresta-online/",
      type: "Hinários"
    },
    
    
    
    {
      title: "Santo Daime Internacional",
      description: "Rede global de informações sobre o Santo Daime.",
      url: "https://www.santodaime.org/",
      type: "Portal"
    },
    {
    title: "Landing Page - Emílio",
    description: "Página pessoal de Emílio.",
    url: "#",
    type: "Landing Page"
  },
  {
    title: "Landing Page - Yara Prates",
    description: "Página pessoal de Yara Prates.",
    url: "#",
    type: "Landing Page"
  },
  {
    title: "Landing Page - Yara",
    description: "Página pessoal de Yara.",
    url: "#",
    type: "Landing Page"
  },
  {
    title: "Landing Page - Tiago",
    description: "Página pessoal de Tiago.",
    url: "#",
    type: "Landing Page"
  },
  {
    title: "Landing Page - Rafael",
    description: "Página pessoal de Rafael.",
    url: "#",
    type: "Landing Page"
  },
  {
    title: "Landing Page - Ricardo",
    description: "Página pessoal de Ricardo.",
    url: "#",
    type: "Landing Page"
  },
  {
    title: "Landing Page - Otavio",
    description: "Página pessoal de Otavio.",
    url: "#",
    type: "Landing Page"
  }
];

const tradicoes = ["Alto Santo", "Barquinha", "CEFLURIS", "Umbanda", "Ayahuasca", "Outras Linhas"];

const subdominios = [
  {
      title: "ICEFLU",
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
    
  
  
  
  
];

// Imagens de prévia para cada portal/subdomínio
const previewImages: Record<string, string> = {
  "Cânticos da Floresta Online": "/images/img1.png",
  "Ripi Iaiá - Universo Daime": "/favicon.ico",
  "Ripiiaia Platform": "/images/achilles.jpeg",
  "ICEFLU": "/images/img1.png",
  "Barquinha (Alto Santo)": "/images/img2.png",
  "União do Vegetal (UDV)": "/images/img1.png",
  "Ayahuasca.com": "/images/img2.png",
  "Santo Daime Internacional": "/images/img1.png",
  "EMS": "/images/img2.png",
  "Daime TV": "/images/img1.png",
  "5000": "/images/img2.png",
  "Landing Page - Emílio": "/images/img1.png",
  "Landing Page - Yara Prates": "/images/img2.png",
  "Landing Page - Yara": "/images/img1.png",
  "Landing Page - Tiago": "/images/img2.png",
  "Landing Page - Rafael": "/images/img1.png",
  "Landing Page - Ricardo": "/images/img2.png",
  "Landing Page - Otavio": "/images/img1.png",
};

// --- Header Organizado ---
const Header = () => (
  <header className="w-full bg-slate-900/90 backdrop-blur-md border-b border-emerald-900/30 sticky top-0 z-40 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <Leaf className="w-7 h-7 text-emerald-400" />
        <span className="font-bold text-lg md:text-xl text-emerald-400">Universo Daime</span>
      </div>
      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
        <Bot className="w-5 h-5" /> Assistente
      </Button>
    </div>
  </header>
);

// --- Footer Moderno ---
const Footer = () => (
  <footer className="w-full bg-slate-900 border-t border-emerald-900/30 text-gray-400 text-center py-8 mt-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 justify-center mb-2 md:mb-0">
        <Leaf className="w-5 h-5 text-emerald-500" />
        <span className="font-semibold">Universo Daime &copy; {new Date().getFullYear()}</span>
      </div>
      <div className="flex gap-6 justify-center">
        <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacidade</Link>
        <Link to="/terms" className="hover:text-emerald-400 transition-colors">Termos</Link>
        <a href="#plataformas" className="hover:text-emerald-400 transition-colors">Plataformas</a>
        <a href="#tradicoes" className="hover:text-emerald-400 transition-colors">Tradições</a>
      </div>
    </div>
  </footer>
);

// --- Hero Section ---
const HeroSection = () => (
  <section className="py-14 md:py-20 text-center bg-gradient-to-b from-green-950/80 via-slate-900/80 to-green-950/90">
    <div className="container mx-auto max-w-3xl flex flex-col items-center gap-6">
      <Leaf className="w-16 h-16 text-emerald-400 mb-2" />
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-2">
        Bem-vindo ao Universo Daime
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-4">
        Conecte-se com portais, tradições e pessoas da floresta. Descubra saberes, cultura e inovação espiritual.
      </p>
      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl shadow-lg text-lg">
        Explorar Portais
      </Button>
    </div>
  </section>
);

// Lista de artistas/músicos/produtores
const artistas = [
  {
    title: "Landing Page - Emílio",
    description: "Página pessoal de Emílio.",
    url: "#",
    type: "Músico/Produtor"
  },
  {
    title: "Landing Page - Yara Prates",
    description: "Página pessoal de Yara Prates.",
    url: "#",
    type: "Músico/Produtor"
  },
  {
    title: "Landing Page - Yara",
    description: "Página pessoal de Yara.",
    url: "#",
    type: "Músico/Produtor"
  },
  {
    title: "Landing Page - Tiago",
    description: "Página pessoal de Tiago.",
    url: "#",
    type: "Músico/Produtor"
  },
  {
    title: "Landing Page - Rafael",
    description: "Página pessoal de Rafael.",
    url: "#",
    type: "Músico/Produtor"
  },
  {
    title: "Landing Page - Ricardo",
    description: "Página pessoal de Ricardo.",
    url: "#",
    type: "Músico/Produtor"
  },
  {
    title: "Landing Page - Otavio",
    description: "Página pessoal de Otavio.",
    url: "#",
    type: "Músico/Produtor"
  }
];

// Carrossel de Artistas/Músicos/Produtores (verde, automático)
import { useEffect, useRef, useState } from "react";

const ArtistasCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const interval = 3500; // tempo em ms

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % artistas.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-emerald-400">Músicos & Produtores em Destaque</h2>
        <div className="flex justify-center">
          {artistas.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 pointer-events-none absolute'} min-w-[280px] max-w-xs w-full flex-shrink-0 relative`}
              style={{ position: index === current ? 'relative' : 'absolute' }}
            >
              <Card className="bg-emerald-900/60 border-emerald-700 ring-2 ring-emerald-700/80 shadow-emerald-700/30 shadow-lg group overflow-hidden relative">
                <div className="absolute inset-0 w-full h-40 bg-center bg-cover opacity-70 group-hover:opacity-90 transition-all duration-300" style={{ backgroundImage: `url(${previewImages[item.title] || '/images/placeholder.svg'})` }} />
                <div className="relative z-10 pt-36 px-4 pb-4 flex flex-col h-full">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg text-emerald-300 font-extrabold drop-shadow mb-1">{item.title.replace('Landing Page - ', '')}</CardTitle>
                    <Badge className="bg-emerald-700 text-white border-emerald-400 mb-2">{item.type}</Badge>
                    <CardDescription className="text-emerald-100 font-medium">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-auto">
                    <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">Acessar</a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Grid de Cards Unificado ---
const artistasNomes = [
  "Emílio", "Yara Prates", "Yara", "Tiago", "Rafael", "Ricardo", "Otavio"
];

const PortalGrid = () => (
  <section className="py-10 md:py-16">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-emerald-400">Portais, Subdomínios & Landing Pages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[...plataformas, ...subdominios].map((item, index) => (
          <Card key={index} className={"bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-emerald-700 transition-all duration-300 group overflow-hidden relative"}>
            {/* Imagem de fundo */}
            <div className="absolute inset-0 w-full h-40 md:h-44 bg-center bg-cover opacity-60 group-hover:opacity-80 transition-all duration-300" style={{ backgroundImage: `url(${previewImages[item.title] || '/images/placeholder.svg'})` }} />
            <div className="relative z-10 pt-36 md:pt-40 px-4 pb-4 flex flex-col h-full">
              <CardHeader className="p-0 mb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base md:text-lg group-hover:text-emerald-300 transition-colors text-emerald-400">{item.title}</CardTitle>
                  <Badge className="bg-emerald-900 text-emerald-300 border-emerald-700">{item.type}</Badge>
                </div>
                <CardDescription className="text-gray-400 font-medium">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto">
                <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-600 text-white">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">Acessar</a>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// --- Tradições (carrossel/grid menor) ---
const TradicoesSection = () => (
  <section id="tradicoes" className="py-12 md:py-16 bg-slate-900/60 rounded-xl border border-slate-800 mt-10 md:mt-16">
    <div className="container mx-auto text-center max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-400">Tradições Respeitadas</h3>
      <p className="text-base md:text-lg mb-10 text-gray-400 opacity-90">
        Honramos todas as expressões da doutrina e das medicinas da floresta, preservando a diversidade e a riqueza dos ensinamentos.
      </p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {tradicoes.map((tradicao) => (
          <div key={tradicao} className="flex flex-col items-center text-center group w-28 md:w-32">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-slate-700 group-hover:border-emerald-500 transition-colors duration-300">
              <Sprout className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 group-hover:text-emerald-400 transition-colors" />
            </div>
            <h4 className="font-semibold text-gray-300 text-sm md:text-base">{tradicao}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Componente Principal da Página ---
const DaimeAmazonico = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-950 via-slate-900 to-green-950 font-sans text-gray-300">
      <Header />
      <HeroSection />
      <PortalGrid />
      <ArtistasCarousel />
      <TradicoesSection />
      <Footer />
    </div>
  );
};

export default DaimeAmazonico;