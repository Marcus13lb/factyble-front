import { createFileRoute } from "@tanstack/react-router";
import notebookPhone from "/assets/notebookPhone.png";

import {
  ArrowRight,
  Check,
  FileText,
  Percent,
  Eye,
  ShieldCheck,
  Cloud,
  MessageCircle,
  Lock,
  Zap,
  Users,
  BarChart3,
  Headphones,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Monitor,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Logo() {
  return (
    <div className="flex items-center gap-2">

      <img src="/assets/factybleicon.png" alt="Factyble logo" className="h-6 w-6 object-contain" />

      <span className="text-xl font-extrabold tracking-tight text-foreground">
        Factyble
      </span>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[url('/assets/background.png')] bg-cover bg-center bg-fixed bg-no-repeat">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#inicio" className="text-primary">Inicio</a>
            <a href="#caracteristicas" className="transition-colors hover:text-foreground">Características</a>
            <a href="#beneficios" className="transition-colors hover:text-foreground">Beneficios</a>
            <a href="#precios" className="transition-colors hover:text-foreground">Precios</a>
            <a href="#integraciones" className="transition-colors hover:text-foreground">Integraciones</a>
            <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#login" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline">
              Iniciar sesión
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Solicitar demo <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-16 sm:gap-12 sm:px-6 sm:pt-16 sm:pb-24 lg:grid-cols-2 lg:pt-24">
          {/* Left */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
              <CheckCircle className="h-3.5 w-3.5" /> Compatible con DNIT y SIFEN
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Facturá desde{" "}
              <span className="text-primary">WhatsApp</span> o desde la web.
            </h1>
            <p className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, rápido y seguro.
            </p>


            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Factyble te permite emitir facturas, notas de crédito y consultar
              documentos directamente desde WhatsApp o desde nuestra plataforma
              web. Vos elegís cómo trabajar, nosotros nos encargamos del resto.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#trial"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/40"
              >
                Probar gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#web"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <Monitor className="h-4 w-4 text-primary" />
                Ver versión web
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <Perk icon={MessageCircle} title="Desde WhatsApp" sub="Sin apps adicionales" />
              <Perk icon={Lock} title="100% Seguro" sub="Tus datos protegidos" />
              <Perk icon={Zap} title="En segundos" sub="Facturá al instante" />
            </div>
          </div>

          {/* Right: laptop + phone mockup */}
          <HeroMockup />
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Beneficios clave</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Todo lo que necesitás en un solo chat o en la web
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sin instalar apps. Sin complicaciones. Solo escribís y facturás o gestionás desde la web.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: FileText, color: "primary", title: "Emití facturas", desc: "Enviá facturas electrónicas en segundos, desde donde estés." },
            { icon: Percent, color: "violet", title: "Notas de crédito", desc: "Generá y enviá notas de crédito de forma rápida y segura." },
            { icon: Eye, color: "green", title: "Consultá documentos", desc: "Accedé a tus facturas y documentos emitidos en cualquier momento." },
            { icon: Users, color: "orange", title: "Clientes y productos", desc: "Gestioná tu base de clientes y productos fácilmente." },
            { icon: BarChart3, color: "primary", title: "Reportes en la web", desc: "Visualizá reportes y estadísticas desde nuestra plataforma web." },
          ].map(({ icon: Icon, color, title, desc }) => (
            <BenefitCard key={title} icon={Icon} color={color} title={title} desc={desc} />
          ))}
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="border-t border-border bg-gradient-to-b from-card/40 to-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Todo lo que necesitás</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Gestión de facturación al alcance de tu{" "}
                <span className="text-primary">mano</span>
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Centralizá y simplificá todo el proceso de facturación electrónica para que puedas enfocarte en hacer crecer tu negocio.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Emisión ilimitada de facturas y notas",
                  "Multiempresa y multiusuario",
                  "Reportes en tiempo real",
                  "Integraciones con tu ERP o Excel",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#caracteristicas-todas" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10">
                Conocer todas las características <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MessageCircle, title: "Desde WhatsApp", desc: "Interactuá con Factyble desde el chat de WhatsApp. Fácil y accesible." },
                { icon: Zap, title: "Operaciones rápidas", desc: "Emití facturas, notas y consultá documentos en segundos." },
                { icon: ShieldCheck, title: "Máxima seguridad", desc: "Tus datos y los de tus clientes con cifrado E2E." },
                { icon: BarChart3, title: "Control total", desc: "Gestioná tu negocio y accedé a métricas desde un solo lugar." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <div className="mt-4 h-1 w-8 rounded-full bg-primary/30 transition-all group-hover:w-16 group-hover:bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, value: "+10.000", label: "Empresas confían en nosotros" },
              { icon: FileText, value: "+5M", label: "Facturas emitidas" },
              { icon: ShieldCheck, value: "99.9%", label: "Disponibilidad garantizada" },
              { icon: Headphones, value: "24/7", label: "Soporte especializado" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold tracking-tight">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Precios</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Un plan, todo incluido
            </h2>
            <p className="mt-4 text-muted-foreground">Sin sorpresas. Cancelás cuando quieras.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-primary bg-background p-8 shadow-2xl shadow-primary/15">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Plan Pro</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Más popular</span>
              </div>
              <p className="mt-6">
                <span className="text-5xl font-extrabold tracking-tight">Gs. 165.000</span>
                <span className="text-muted-foreground"> / mes</span>
              </p>
              <p className="text-xs text-muted-foreground">IVA incluido</p>
              <a href="#trial" className="mt-6 block rounded-xl bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Empezar 14 días gratis
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                {["Documentos ilimitados", "Multiempresa", "WhatsApp oficial (Meta)", "Soporte prioritario", "Reportes y exportación"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8">
              <h3 className="text-xl font-bold">Plan Empresa</h3>
              <p className="mt-6">
                <span className="text-5xl font-extrabold tracking-tight">A medida</span>
              </p>
              <p className="text-xs text-muted-foreground">Volúmenes altos e integraciones</p>
              <a href="#contacto" className="mt-6 block rounded-xl border border-border py-3.5 text-center text-sm font-semibold transition-colors hover:bg-accent">
                Contactar ventas
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                {["API REST completa", "Webhooks en tiempo real", "SLA dedicado", "Onboarding personalizado", "Soporte 24/7"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="trial" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.55_0.22_285)] p-10 text-center shadow-2xl shadow-primary/30 sm:p-16">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[oklch(0.85_0.15_60)]/30 blur-2xl" />
            <h2 className="relative text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
              Empezá a facturar desde WhatsApp hoy
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
              14 días gratis. Sin tarjeta. Cancelás cuando quieras.
            </p>
            <a
              href="#signup"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-xl transition-all hover:-translate-y-0.5"
            >
              Crear cuenta gratis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              La forma más simple de facturar electrónicamente desde WhatsApp.
            </p>
          </div>
          <FooterCol title="Producto" links={["Características", "Beneficios", "Precios", "Integraciones"]} />
          <FooterCol title="Empresa" links={["Sobre nosotros", "Blog", "Trabajá con nosotros", "Prensa"]} />
          <div>
            <h4 className="text-sm font-bold">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hola@factyble.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +595 981 000 000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Asunción, Paraguay</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Factyble. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Términos</a>
              <a href="#" className="hover:text-foreground">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Perk({ icon: Icon, title, sub }: { icon: React.ElementType; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function BenefitCard({
  icon: Icon,
  color,
  title,
  desc,
}: {
  icon: React.ElementType;
  color: string;
  title: string;
  desc: string;
}) {
  const palette: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    violet: "bg-[oklch(0.94_0.06_290)] text-[oklch(0.5_0.22_290)]",
    green: "bg-[oklch(0.94_0.09_155)] text-[oklch(0.5_0.16_155)]",
    orange: "bg-[oklch(0.95_0.09_60)] text-[oklch(0.6_0.18_50)]",
  };
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${palette[color] ?? palette.primary} transition-transform group-hover:scale-110`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-foreground">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full flex items-center justify-center lg:-mr-24 xl:-mr-40 object-contain animate-float drop-shadow-2xl">
      <img
        src="/assets/notebookPhone.png"
        alt="Notebook y teléfono mostrando Factyble"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className="relative z-10 w-full h-auto max-w-none object-contain lg:w-[130%] xl:w-[140%] animate-fade-up drop-shadow-2xl"
      />
    </div>
  );
}

