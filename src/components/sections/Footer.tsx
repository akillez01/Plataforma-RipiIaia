
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Ripi Iaiá</span>
            </div>
            <p className="text-gray-400 text-sm">
              Plataforma multifacetada unindo espiritualidade, cultura e inovação social.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Nossos Espaços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/portal" className="hover:text-white transition-colors">Portal Ripiiaia</Link></li>
              <li><Link to="/daime" className="hover:text-white transition-colors">Universo Daime</Link></li>
              <li><Link to="/radio" className="hover:text-white transition-colors">Rádio Ripiiaia</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sobre</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#valores" className="hover:text-white transition-colors">Nossa Missão</a></li>
              <li><Link to="/portal" className="hover:text-white transition-colors">Equipe</Link></li>
              <li><Link to="/portal" className="hover:text-white transition-colors">Transparência</Link></li>
              <li><Link to="/portal" className="hover:text-white transition-colors">Parcerias</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🌿 ripiiaia.org</li>
              <li>📧 contato@ripiiaia.org</li>
              <li>🌍 Manaus, Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Ripiiaia. Todos os direitos reservados. Feito com 💚 na Floresta Amazônica.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
