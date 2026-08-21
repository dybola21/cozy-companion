import { createFileRoute } from "@tanstack/react-router";
import { 
  Globe, 
  Rocket, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Layout, 
  Search,
  Monitor
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Venda seu Site Completo | Soluções Digitais Profissionais",
    meta: [
      { name: "description", content: "Criamos e vendemos sites completos, prontos para o seu negócio. Performance, SEO e design moderno em um só lugar." },
      { property: "og:title", content: "Venda seu Site Completo | Soluções Digitais" },
      { property: "og:description", content: "Sua presença online começa aqui com sites profissionais de alta conversão." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  })
});

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">SiteCompleto</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Recursos</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Soluções</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 font-semibold">
              Começar Agora
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-wider uppercase border border-primary/20"
            >
              <Zap className="w-3 h-3 fill-current" />
              Lançamento Especial 2026
            </motion.div>
            <motion.h1 
              {...fadeIn}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
            >
              Quero um site completo para <span className="text-primary italic">vender site completo</span>
            </motion.h1>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Desenvolvemos ecossistemas digitais prontos para lucrar. Design premium, infraestrutura robusta e SEO de elite para o seu negócio escalar.
            </motion.p>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-bold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 group">
                Ver Portfólio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl text-lg font-bold border hover:bg-muted transition-colors">
                Falar com Especialista
              </button>
            </motion.div>
            
            {/* Hero Image / UI Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 relative mx-auto max-w-5xl group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden aspect-video flex items-center justify-center border-white/10">
                <div className="w-full h-full bg-muted rounded-2xl flex flex-col overflow-hidden">
                  <div className="h-8 bg-background/50 border-b flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
                    <Layout className="w-16 h-16 text-primary/40 mb-4" />
                    <div className="h-4 w-48 bg-primary/10 rounded-full mb-2" />
                    <div className="h-4 w-32 bg-primary/5 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Por que escolher o SiteCompleto?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nossa metodologia foca no essencial: converter visitantes em clientes recorrentes.
            </p>
          </div>
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Rocket className="w-8 h-8 text-primary" />}
              title="Velocidade Extrema"
              description="Nossos sites são otimizados para carregar em menos de 1 segundo, garantindo a melhor experiência."
            />
            <FeatureCard 
              icon={<Search className="w-8 h-8 text-primary" />}
              title="SEO de Elite"
              description="Estrutura semântica planejada para você dominar as buscas orgânicas e economizar em anúncios."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Segurança Máxima"
              description="Backups diários, criptografia SSL e proteção contra ataques DDoS integrados nativamente."
            />
          </div>
        </section>

        {/* Solutions / Process Section */}
        <section id="solutions" className="py-24 border-t">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8">Tudo o que você precisa em um único pacote</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-2xl h-fit">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Design Responsivo</h3>
                    <p className="text-muted-foreground">Seu site perfeito em qualquer tela: do smartphone ao desktop 4K.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-2xl h-fit">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
                    <p className="text-muted-foreground">Nossa equipe está sempre pronta para ajudar você a crescer.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-2xl h-fit">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gestão de Conteúdo</h3>
                    <p className="text-muted-foreground">Painel administrativo intuitivo para você ter total controle do seu site.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden">
                   <div className="w-24 h-2 bg-primary/20 rounded-full" />
                </div>
                <div className="aspect-[3/4] rounded-3xl bg-muted border flex items-center justify-center p-8">
                   <Zap className="w-full h-full text-primary/10" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl bg-muted border flex items-center justify-center p-8">
                   <Globe className="w-full h-full text-primary/10" />
                </div>
                <div className="aspect-square rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">Pronto para ter seu site completo?</h2>
            <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Junte-se a centenas de empreendedores que já profissionalizaram sua presença digital.
            </p>
            <button className="bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20">
              Quero meu Orçamento Grátis
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">SiteCompleto</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SiteCompleto Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-medium">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-card border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col items-center text-center group"
    >
      <div className="mb-6 p-4 rounded-2xl bg-muted group-hover:bg-primary/5 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
