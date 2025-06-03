import { Building, Heart, Radio, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubdomainsSection = () => {
  // Imagens de fundo para o carrossel (IA/tech/natureza)
  const bgImages = [
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
  ];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  const subdomains = [
    {
      title: "Portal Ripi Iaiá",
      subtitle: "A Plataforma Profissional",
      description: "ONG e startup colaborativa com equipe multidisciplinar. Projetos sociais, parcerias institucionais e transparência organizacional.",
      url: "portal.ripiiaia.org",
      route: "/portal",
      icon: Building,
      color: "from-cyan-500 via-emerald-400 to-green-400",
      features: ["Projetos Sociais", "Equipe Multidisciplinar", "Parcerias Globais", "Transparência"]
    },
    {
      title: "Comunidades",
      subtitle: "Espiritualidade e Tradição",
      description: "Espaço sagrado dedicado aos ensinamentos do Mestre Irineu e da doutrina do Daime. Hinários, acervo histórico e musicalidade sagrada.",
      url: "daime.ripiiaia.org",
      route: "/daime",
      icon: Heart,
      color: "from-amber-400 via-yellow-300 to-amber-200",
      features: ["Hinários Sagrados", "Acervo Histórico", "Vídeos & Áudios", "Memória Viva"]
    },
    {
      title: "Comunicação",
      subtitle: "Música e Cultura Amazônica",
      description: "Rádio online com programação voltada à música espiritual, cultura amazônica e conteúdos autorais. Conectando corações através do som.",
      url: "radio.ripiiaia.org",
      route: "/radio",
      icon: Radio,
      color: "from-sky-400 via-blue-400 to-indigo-400",
      features: ["Música Espiritual", "Cultura Amazônica", "Programação Autoral", "Transmissão 24h"]
    },
    {
      title: "Serviços",
      subtitle: "Soluções Tecnológicas",
      description: "Braço comercial oferecendo serviços profissionais: hospedagem, domínios, criação de sites e suporte técnico especializado.",
      url: "ripiiaia.com.br",
      route: "/servicos",
      icon: Wrench,
      color: "from-slate-500 via-slate-400 to-slate-300",
      features: ["Hospedagem Web", "Registro de Domínios", "Desenvolvimento", "Suporte Técnico"]
    }
  ];

  return (
    <section id="espacos" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-200 relative overflow-hidden">
      {/* Imagem de fundo carrossel IA/tech */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Fundo IA/Tech"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === bgIndex ? 'opacity-40' : 'opacity-0'}`}
            style={{filter: 'blur(2px)'}}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-emerald-900/40 to-transparent z-10" />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-400">Nossos Espaços</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça as áreas que compõem a plataforma Ripi Iaiá: tecnologia, tradição, cultura e serviços para um ecossistema inovador e colaborativo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {subdomains.map((subdomain, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-2xl border-0 overflow-hidden flex flex-col items-stretch group transition-all duration-300 bg-gradient-to-br ${subdomain.color} hover:scale-[1.03]`}
            >
              <div className="flex items-center gap-4 p-8 border-b border-white/10 bg-black/10">
                <span className="rounded-full p-3 bg-black/20">
                  {subdomain.icon && <subdomain.icon className="w-8 h-8 text-white" />}
                </span>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-1 text-white drop-shadow-lg">{subdomain.title}</h3>
                  <span className="text-cyan-200 text-sm font-medium">{subdomain.subtitle}</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between p-8">
                <p className="mb-6 text-lg text-white/90">{subdomain.description}</p>
                <ul className="mb-6 grid grid-cols-2 gap-2 text-sm">
                  {subdomain.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-cyan-100">
                      <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={subdomain.route}
                  className="inline-block mt-auto px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow-lg transition-all text-center"
                >
                  Acessar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubdomainsSection;
