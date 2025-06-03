import { Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CadastroEquipePanel = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [form, setForm] = useState({ nome: "", email: "", funcao: "" });
  const [enviado, setEnviado] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-emerald-600 text-2xl">×</button>
        <h4 className="text-2xl font-bold mb-4 text-emerald-700">Cadastro de Equipe</h4>
        {enviado ? (
          <div className="text-center text-emerald-600 font-semibold py-8">Cadastro enviado com sucesso!</div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={async e => {
              e.preventDefault();
              try {
                const res = await fetch("http://localhost:3001/api/contato", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(form)
                });
                if (res.ok) setEnviado(true);
                else alert("Erro ao enviar. Tente novamente.");
              } catch {
                alert("Erro ao enviar. Tente novamente.");
              }
            }}
          >
            <input
              className="border rounded px-3 py-2"
              placeholder="Nome completo"
              name="Nome"
              value={form.nome}
              onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="E-mail"
              type="email"
              name="Email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Função desejada (ex: Produtor, Músico...)"
              name="Funcao"
              value={form.funcao}
              onChange={e => setForm(f => ({ ...f, funcao: e.target.value }))}
              required
            />
            <textarea
              className="border rounded px-3 py-2 min-h-[80px]"
              placeholder="Conte um pouco sobre você (opcional)"
              name="Sobre"
              value={form.sobre || ''}
              onChange={e => setForm(f => ({ ...f, sobre: e.target.value }))}
            />
            <input
              className="border rounded px-3 py-2"
              type="file"
              name="curriculo"
              accept=".pdf,.doc,.docx,.odt,.txt"
              onChange={e => setForm(f => ({ ...f, curriculo: e.target.files?.[0] }))}
            />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded px-4 py-2 mt-2">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
};

const CallToActionSection = () => {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-950/30">
      <div className="container mx-auto text-center max-w-4xl">
        <h3 className="text-4xl font-bold mb-6 text-foreground">Junte-se a Nós!</h3>
        <p className="text-xl text-muted-foreground mb-12">
          Conheça nosso time multidisciplinar e colabore nessa jornada de transformação coletiva.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* CEO */}
          <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800">Jorge</h4>
            <span className="text-emerald-600 font-medium mb-1">CEO</span>
            <p className="text-gray-600 text-sm">Liderança estratégica, inovação e visão social.</p>
          </div>
          {/* Webmaster */}
          <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <img src="./images/achilles.jpeg" alt="Webmaster" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800">Achillhes Souza</h4>
            <span className="text-emerald-600 font-medium mb-1">Webmaster</span>
            <p className="text-gray-600 text-sm">Desenvolvimento, infraestrutura e tecnologia.</p>
          </div>
          {/* Jornalista */}
          <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Jornalista" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800">Fátima</h4>
            <span className="text-emerald-600 font-medium mb-1">Jornalista</span>
            <p className="text-gray-600 text-sm">Comunicação, conteúdo e cultura.</p>
          </div>
          {/* Produtor */}
          <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Produtor" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800">Lucas Souza</h4>
            <span className="text-emerald-600 font-medium mb-1">Produtor</span>
            <p className="text-gray-600 text-sm">Gestão de projetos e produção cultural.</p>
          </div>
          {/* Produtora */}
          <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Produtora" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800">Ana Paula</h4>
            <span className="text-emerald-600 font-medium mb-1">Produtora</span>
            <p className="text-gray-600 text-sm">Eventos, logística e articulação social.</p>
          </div>
          {/* Músico */}
          <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Músico" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800">Pedro Lima</h4>
            <span className="text-emerald-600 font-medium mb-1">Músico</span>
            <p className="text-gray-600 text-sm">Música, trilhas sonoras e expressão artística.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2"
            onClick={() => setOpenPanel(true)}
          >
            Fazer Parte da Equipe
            <Users className="ml-2 w-5 h-5" />
          </button>
          <CadastroEquipePanel open={openPanel} onClose={() => setOpenPanel(false)} />
          <Link
            to="/portal"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2 border"
          >
            Conhecer Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
