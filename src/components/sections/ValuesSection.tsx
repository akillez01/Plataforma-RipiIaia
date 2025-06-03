
import { Leaf, Users, Globe, LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValuesSection = () => {
  const values: Value[] = [
    {
      icon: Leaf,
      title: "Saberes Ancestrais",
      description: "Respeitamos tradições e abrimos diálogos contemporâneos"
    },
    {
      icon: Users,
      title: "Diversidade & Inclusão",
      description: "Acolhemos todas as expressões culturais e espirituais"
    },
    {
      icon: Globe,
      title: "Ação Coletiva",
      description: "Unindo tecnologia, arte e espiritualidade"
    }
  ];

  return (
    <section id="valores" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Nosso Propósito</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Ripiiaia é um mosaico existencial que entrelaça saberes, culturas e tecnologias para um mundo mais conectado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
