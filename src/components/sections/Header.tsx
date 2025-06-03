import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 soft-shadow">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex flex-col items-start gap-0"
          >
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold gradient-text">
              <Leaf className="h-6 w-6 text-emerald-600 dark:text-white transition-colors" />
              <span className="block text-emerald-700 dark:text-white transition-colors">Ripi Iaiá</span>
            </div>
            <span className="text-xs font-serif text-emerald-600 dark:text-white/80 ml-8 -mt-1 transition-colors">Plataforma</span>
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <Link to="/portal#sobre" className="text-foreground/80 hover:text-emerald-600 transition-colors duration-200 font-medium">Sobre</Link>
              <Link to="/portal#espacos" className="text-foreground/80 hover:text-emerald-600 transition-colors duration-200 font-medium">Espaços</Link>
              <Link to="/portal#valores" className="text-foreground/80 hover:text-emerald-600 transition-colors duration-200 font-medium">Valores</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;