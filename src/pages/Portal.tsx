import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Award, FileText,
  Github,
  Handshake, Lightbulb,
  Linkedin,
  Target,
  Twitter,
  Users, Zap
} from "lucide-react";
import { useEffect, useState } from "react"; // Imported useState and useEffect
import { Link } from "react-router-dom";

const Portal = () => {
  const projects = [
    // ... (project data remains the same)
    {
      title: "Educação Amazônica",
      description: "Programa de capacitação digital para comunidades ribeirinhas",
      status: "Em andamento",
      impact: "500+ pessoas beneficiadas"
    },
    {
      title: "Sustentabilidade Digital",
      description: "Soluções tecnológicas para ONGs ambientais",
      status: "Concluído",
      impact: "15 organizações atendidas"
    },
    {
      title: "Intercâmbio Cultural",
      description: "Ponte entre saberes tradicionais e inovação",
      status: "Planejamento",
      impact: "Fase de captação"
    }
  ];

  const getStatusBadgeClass = (status) => {
    // ... (getStatusBadgeClass function remains the same)
    switch (status) {
      case "Em andamento":
        return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 backdrop-blur-sm";
      case "Concluído":
        return "bg-green-500/10 text-green-400 border border-green-500/30 backdrop-blur-sm";
      case "Planejamento":
        return "bg-sky-500/10 text-sky-400 border border-sky-500/30 backdrop-blur-sm";
      default:
        return "bg-gray-600/20 text-gray-300 border border-gray-500/30 backdrop-blur-sm";
    }
  };

  // Hero Background Image Carousel Logic
  const heroImages = [
    "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg", // Aerial Amazon
    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg", // Abstract tech / coding
    "https://images.pexels.com/photos/7098035/pexels-photo-7098035.jpeg", // Solar panels in green field
    "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"   // Misty forest path
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [heroImages.length]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-200 selection:bg-emerald-500 selection:text-white">
      {/* Header - Glassmorphic */}
      <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50 transition-all duration-300">
        {/* ... (header content remains the same) ... */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-emerald-400" />
              <div>
                <h1 className="text-xl font-bold text-gray-100">Portal Ripiiaia</h1>
                <p className="text-sm text-gray-400">ONG e Startup Colaborativa</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Dark Theme with Image Carousel */}
      <section className="py-28 px-4 relative overflow-hidden bg-slate-800"> {/* Fallback bg for clarity */}
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <img
              key={index} // Using index as key is okay here as the array is static
              src={src}
              alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              // Preload images for smoother transitions if desired, though this can impact initial load.
              // For critical images, consider <link rel="preload"> in your HTML head.
            />
          ))}
        </div>

        {/* Overlay to ensure text readability over images */}
        <div className="absolute inset-0 bg-black/60 z-1"></div>

        {/* Hero Content */}
        <div className="container mx-auto text-center max-w-4xl relative z-10"> {/* z-10 ensures content is on top */}
          <Badge 
            variant="outline" 
            className="mb-8 border-emerald-500/50 bg-emerald-800/20 text-emerald-300 px-6 py-2 text-sm backdrop-blur-md shadow-lg hover:border-emerald-400/70 transition-all"
          >
            🌍 Transformação Social pela Inovação
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 drop-shadow-md">
            Tecnologia e Natureza: <br/>Um Futuro Sustentável
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-sm"> {/* Lightened text for better contrast */}
            Somos uma equipe multidisciplinar dedicada a projetos que conectam tecnologia, 
            sustentabilidade e desenvolvimento humano, com raízes na sabedoria amazônica e olhos no futuro digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-lg shadow-lg hover:shadow-emerald-500/30 focus:ring-2 focus:ring-emerald-400 transition-all transform hover:scale-105"
            >
              <Users className="mr-2 w-5 h-5" />
              Conhecer Equipe
            </Button>
            <a href="#projetos-modernos" className="inline-block">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 rounded-lg shadow-md hover:shadow-emerald-500/20 focus:ring-2 focus:ring-emerald-400 transition-all transform hover:scale-105 backdrop-blur-sm bg-slate-700/10" // Added subtle bg for pop
              >
                <Target className="mr-2 w-5 h-5" />
                Nossos Projetos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque - Glassmorphic Dark Cards */}
      <section id="projetos" className="py-20 px-4 bg-gray-900/30">
        {/* ... (Projetos em Destaque content remains the same) ... */}
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/60 rounded-xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 ease-in-out flex flex-col overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-emerald-400">{project.title}</h4>
                    <Badge className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                </div>
                <div className="p-6 border-t border-gray-700/60 bg-gray-800/30 mt-auto">
                  <div className="flex items-center text-sm text-emerald-400 font-medium">
                    <Award className="w-5 h-5 mr-2 flex-shrink-0 text-emerald-500" />
                    <span>{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Modernos - Glassmorphic Dark Cards with Images */}
      <section id="projetos-modernos" className="py-20 px-4 bg-slate-900">
        {/* ... (Projetos Modernos content remains the same) ... */}
         <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Lightbulb className="w-10 h-10 text-emerald-400" />
            <h2 className="text-4xl font-bold text-gray-100">Inovações em Andamento</h2>
          </div>
          <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            Mergulhe nas iniciativas que estamos desenvolvendo para catalisar a transformação social e a preservação ambiental.
          </p>
          <div className="grid gap-12">
            {/* Projeto 1 */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-emerald-500/30 transform hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img src="https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg" alt="Preservação da Floresta" className="w-full h-72 md:h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="md:w-3/5 p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/50">Ambiental</span>
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass("Em andamento")}`}>Em andamento</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-emerald-400 mb-5">Preservação da Floresta Inteligente</h3>
                  <p className="text-gray-300 mb-8 text-base leading-relaxed">Projeto de conservação e manejo sustentável da floresta amazônica, utilizando tecnologias de monitoramento e engajamento comunitário.</p>
                  <Button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105 focus:ring-2 focus:ring-emerald-400">Saiba mais</Button>
                </div>
              </div>
            </div>
            {/* Add other modern projects here with similar styling */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-emerald-500/30 transform hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Educação Digital" className="w-full h-72 md:h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="md:w-3/5 p-10">
                   <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/50">Educação</span>
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass("Em andamento")}`}>Em andamento</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-emerald-400 mb-5">Educação Digital Inclusiva</h3>
                  <p className="text-gray-300 mb-8 text-base leading-relaxed">Capacitação em tecnologia e habilidades digitais para comunidades tradicionais, abrindo portas para novas oportunidades.</p>
                   <Button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105 focus:ring-2 focus:ring-emerald-400">Saiba mais</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias - Dark Theme */}
      <section id="parcerias" className="py-20 px-4 bg-gray-900/50">
        {/* ... (Parcerias content remains the same) ... */}
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Handshake className="w-10 h-10 text-emerald-400" />
            <h2 className="text-4xl font-bold text-gray-100">Nossas Parcerias Estratégicas</h2>
          </div>
          <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            Unimos forças com organizações visionárias para multiplicar nosso impacto e tecer uma rede robusta de inovação social.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parceria Card Example */}
            {[
              { name: "Instituto Amazônia Viva", type: "ONG Ambiental", img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", desc: "Conservação e desenvolvimento sustentável na vanguarda da Amazônia." },
              { name: "Fundação Cultura Ancestral", type: "Instituição Cultural", img: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg", desc: "Preservação e difusão da rica herança cultural amazônica." },
              { name: "Nexus Tech Solutions", type: "Empresa de Tecnologia", img: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg", desc: "Inovação digital e soluções tecnológicas para o bem social." }
            ].map(partner => (
              <div key={partner.name} className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/60 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:shadow-emerald-500/20">
                <img src={partner.img} alt={partner.name} className="w-28 h-28 object-cover rounded-full mb-6 border-4 border-emerald-500/40 shadow-lg" />
                <h3 className="text-2xl font-semibold text-emerald-400 mb-2">{partner.name}</h3>
                <p className="text-emerald-500 font-medium mb-4 text-sm">{partner.type}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência - Dark Tech Theme */}
      <section id="transparencia" className="py-20 px-4 bg-slate-900">
        {/* ... (Transparência content remains the same) ... */}
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <FileText className="w-10 h-10 text-emerald-400" />
            <h2 className="text-4xl font-bold text-gray-100">Compromisso com a Transparência</h2>
          </div>
          <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            Nossa responsabilidade é com a clareza. Acesse relatórios e dados que demonstram a integridade de nossas ações.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Report Card Example */}
            {[
              { year: "2023", projects: "12", impacted: "5000+", investment: "R$500K", desc: "Resultados detalhados e prestação de contas dos projetos de 2023." },
              { year: "2022", projects: "10", impacted: "4000+", investment: "R$400K", desc: "Análise dos marcos e impacto gerado pelos projetos de 2022." }
            ].map(report => (
            <div key={report.year} className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-emerald-500/30 hover:border-emerald-500/30">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-emerald-400 mb-3">Relatório Anual - {report.year}</h3>
                <p className="text-gray-300">{report.desc}</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-emerald-700/20 border border-emerald-600/30 rounded-lg p-5 text-center transition-all hover:bg-emerald-600/30">
                  <p className="text-sm text-emerald-300 mb-1 font-medium">Projetos Realizados</p>
                  <p className="text-4xl font-bold text-emerald-400">{report.projects}</p>
                </div>
                <div className="bg-emerald-700/20 border border-emerald-600/30 rounded-lg p-5 text-center transition-all hover:bg-emerald-600/30">
                  <p className="text-sm text-emerald-300 mb-1 font-medium">Pessoas Impactadas</p>
                  <p className="text-4xl font-bold text-emerald-400">{report.impacted}</p>
                </div>
                <div className="bg-emerald-700/20 border border-emerald-600/30 rounded-lg p-5 text-center transition-all hover:bg-emerald-600/30">
                  <p className="text-sm text-emerald-300 mb-1 font-medium">Investimento Total</p>
                  <p className="text-4xl font-bold text-emerald-400">{report.investment}</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105 focus:ring-2 focus:ring-emerald-400 text-base">
                Baixar Relatório Completo ({report.year})
              </Button>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe - Revamped for Dark Theme */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-black">
        {/* ... (Equipe content remains the same as your last detailed version, adapted for dark theme) ... */}
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <Users className="w-12 h-12 text-emerald-400" />
            <h3 className="text-4xl font-bold text-gray-100">Conheça Nosso Time Visionário</h3>
          </div>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Apaixonados por impacto, inovação e sustentabilidade, nosso time multidisciplinar une experiência e criatividade para transformar realidades.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member Card Adapted for Dark Theme */}
            {[
              { name: "Ana Silva", role: "Diretora Executiva", img: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg", desc: "Especialista em gestão de projetos sociais com mais de 15 anos de experiência.", social: {linkedin: "#", github: "#"} },
              { name: "João Santos", role: "Coordenador de Projetos", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", desc: "Engenheiro ambiental focado em sustentabilidade e desenvolvimento comunitário.", social: {linkedin: "#", twitter: "#"} },
              { name: "Maria Oliveira", role: "Líder de Comunicação", img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg", desc: "Jornalista especializada em comunicação social e projetos culturais.", social: {linkedin: "#"} }
            ].map(member => (
            <div 
              key={member.name}
              className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center group transition-all duration-300 hover:shadow-emerald-500/30 transform hover:scale-[1.03]"
            >
              <div className="relative w-full h-52 flex items-center justify-center bg-gradient-to-tr from-emerald-700/20 to-green-800/20 overflow-hidden">
                 {/* Optional: abstract pattern for banner */}
                <div className="absolute inset-0 bg-repeat opacity-5" style={{backgroundImage: "url('/path-to-subtle-pattern.svg')"}}></div>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-emerald-500/70 shadow-xl absolute left-1/2 -translate-x-1/2 bottom-4 group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300 ease-in-out bg-gray-900"
                  style={{objectPosition: 'center center'}}
                />
              </div>
              <div className="pt-20 pb-8 px-6 flex-1 flex flex-col text-center w-full">
                <h4 className="text-2xl font-bold text-emerald-400 mb-1">{member.name}</h4>
                <span className="text-emerald-500 font-semibold mb-3 text-sm">{member.role}</span>
                <p className="text-gray-300 text-sm mb-6 flex-grow">{member.desc}</p>
                <div className="flex gap-4 justify-center mt-auto">
                  {member.social.linkedin && <a href={member.social.linkedin} aria-label={`${member.name} on LinkedIn`} className="text-gray-400 hover:text-emerald-400 transition-colors"><Linkedin size={22} /></a>}
                  {member.social.github && <a href={member.social.github} aria-label={`${member.name} on GitHub`} className="text-gray-400 hover:text-emerald-400 transition-colors"><Github size={22} /></a>}
                  {member.social.twitter && <a href={member.social.twitter} aria-label={`${member.name} on Twitter`} className="text-gray-400 hover:text-emerald-400 transition-colors"><Twitter size={22} /></a>}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Dark Theme */}
      <footer className="py-16 bg-gray-900 border-t border-gray-700/50 text-gray-400 text-center">
        {/* ... (Footer content remains the same) ... */}
        <div className="container mx-auto px-4">
          <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Portal Ripiiaia.</p>
          <p className="text-sm">Conectando inovação, natureza e impacto social.</p>
          <div className="mt-6 flex justify-center space-x-6">
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Política de Privacidade</Link>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">Termos de Uso</Link>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portal;