import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import Daime from "./pages/Daime";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portal from "./pages/Portal";
import RadioRipiiaia from "./pages/Radio";
import Servicos from "./pages/Servicos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="ripiiaia-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/daime" element={<Daime />} />
            <Route path="/radio" element={<RadioRipiiaia />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
