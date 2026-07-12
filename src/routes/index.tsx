import { createFileRoute } from "@tanstack/react-router";


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
  Play,
  Users,
  BarChart3,
  Headphones,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
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
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#inicio" className="text-primary">Inicio</a>
            <a href="#caracteristicas" className="transition-colors hover:text-foreground">Características</a>
            <a href="#beneficios" className="transition-colors hover:text-foreground">Beneficios</a>
            <a href="#precios" className="transition-colors hover:text-foreground">Precios</a>
            <a href="#integraciones" className="transition-colors hover:text-foreground">Integraciones</a>
            <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#login" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline">
              Iniciar sesión
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              Solicitar demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.92_0.08_260/0.6),transparent_70%)]" />
        <div className="absolute right-0 top-20 -z-10 hidden h-64 w-64 rounded-full bg-[oklch(0.85_0.12_290)] opacity-20 blur-3xl lg:block" />
        <div className="absolute left-10 top-60 -z-10 hidden h-48 w-48 rounded-full bg-[oklch(0.85_0.15_60)] opacity-20 blur-3xl lg:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-24 lg:grid-cols-2 lg:pt-24">
          {/* Left */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
              <CheckCircle className="h-3.5 w-3.5" /> Compatible con DNIT y SIFEN
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              Facturá desde{" "}
              <span className="text-primary">WhatsApp.</span>
              <br />
              Simple, rápido y seguro.
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Factyble te permite emitir facturas, notas de crédito y consultar
              documentos directamente desde WhatsApp. Todo en segundos, desde
              donde estés.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#trial"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/40"
              >
                Probar gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Perk icon={MessageCircle} title="Desde WhatsApp" sub="Sin apps adicionales" />
              <Perk icon={Lock} title="100% Seguro" sub="Tus datos protegidos" />
              <Perk icon={Zap} title="En segundos" sub="Facturá al instante" />
            </div>
          </div>

          {/* Right: phone mockup */}
          <PhoneMockup />
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Beneficios clave</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Todo lo que necesitás en un solo chat
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sin instalar apps. Sin complicaciones. Solo escribí y facturá.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FileText, color: "primary", title: "Emití facturas", desc: "Generá facturas electrónicas en segundos desde el chat." },
            { icon: Percent, color: "violet", title: "Notas de crédito al instante", desc: "Ajustes y anulaciones respondiendo un mensaje." },
            { icon: Eye, color: "green", title: "Consultá tus documentos", desc: "Buscá y descargá cualquier factura al instante." },
            { icon: ShieldCheck, color: "orange", title: "Seguridad de extremo a extremo", desc: "Cifrado E2E. Tus datos y los de tus clientes, siempre protegidos." },
            { icon: Cloud, color: "primary", title: "Servicio oficial de WhatsApp (Meta)", desc: "Integración certificada por Meta. Confianza y estabilidad garantizadas." },
            { icon: Zap, color: "violet", title: "Automatización total", desc: "Recordatorios, envíos y reportes trabajando por vos." },
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

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-float-in">
      {/* floating cards left */}
      <FloatCard className="absolute -left-4 top-6 sm:-left-16" icon={FileText} title="Emití facturas" sub="en segundos" tint="primary" delay="0s" />
      <FloatCard className="absolute -left-2 top-1/2 -translate-y-1/2 sm:-left-20" icon={Percent} title="Notas de crédito" sub="al instante" tint="violet" delay="0.6s" />
      <FloatCard className="absolute -left-4 bottom-8 sm:-left-16" icon={Eye} title="Consultá tus" sub="documentos" tint="green" delay="1.2s" />

      {/* floating cards right */}
      <FloatCard className="absolute -right-2 top-16 sm:-right-16" icon={ShieldCheck} title="Seguridad" sub="de extremo a extremo" tint="orange" delay="0.3s" />
      <FloatCard className="absolute -right-2 bottom-16 sm:-right-16" icon={Cloud} title="Servicio oficial" sub="de WhatsApp (Meta)" tint="primary" delay="0.9s" />

      {/* halo */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />

      {/* phone frame */}
      <div className="relative mx-auto w-[260px] rounded-[2.5rem] border-[10px] border-[oklch(0.2_0.02_260)] bg-[oklch(0.2_0.02_260)] shadow-2xl shadow-primary/30 sm:w-[300px]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[oklch(0.15_0.02_260)]" />
        <div className="overflow-hidden rounded-[1.8rem] bg-[oklch(0.97_0.005_260)]">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-foreground/80">
            <span>08:59</span>
            <span className="flex items-center gap-1">
              <span>●●●</span>
              <span>📶</span>
            </span>
          </div>
          {/* wa header */}
          <div className="flex items-center gap-3 border-b border-black/5 bg-white px-4 py-3">
            <ArrowRight className="h-4 w-4 rotate-180 text-muted-foreground" />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">F</div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-foreground">Factyble</span>
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[oklch(0.65_0.19_155)] text-[8px] text-white">✓</span>
            </div>
          </div>
          {/* chat */}
          <div className="space-y-3 bg-[oklch(0.96_0.008_100)] px-4 py-5">
            <div className="mx-auto w-fit rounded-md bg-white px-2 py-0.5 text-[10px] text-muted-foreground shadow-sm">Hoy</div>
            <div className="rounded-2xl rounded-tl-sm bg-white p-3 text-[12px] leading-relaxed text-foreground shadow-sm">
              <p>¡Hola! 👋 Bienvenido a Factyble.</p>
              <p className="mt-2">Seleccioná la operación que querés realizar:</p>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[9px] font-bold text-white">1</span> Emitir factura</li>
                <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[9px] font-bold text-white">2</span> Emitir nota de crédito</li>
                <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[9px] font-bold text-white">3</span> Consultar factura</li>
                <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[9px] font-bold text-white">4</span> Consultar nota de crédito</li>
              </ul>
              <p className="mt-2">Respondé con el número de la opción elegida.</p>
              <p className="mt-1 text-right text-[9px] text-muted-foreground">16:47</p>
            </div>
          </div>
          {/* input */}
          <div className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-2.5">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-[oklch(0.96_0.008_260)] px-3 py-1.5 text-[11px] text-muted-foreground">
              <span>🙂</span> Mensaje
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[oklch(0.65_0.19_155)] text-white">
              <MessageCircle className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatCard({
  className,
  icon: Icon,
  title,
  sub,
  tint,
  delay,
}: {
  className: string;
  icon: React.ElementType;
  title: string;
  sub: string;
  tint: string;
  delay: string;
}) {
  const palette: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    violet: "bg-[oklch(0.94_0.06_290)] text-[oklch(0.5_0.22_290)]",
    green: "bg-[oklch(0.94_0.09_155)] text-[oklch(0.5_0.16_155)]",
    orange: "bg-[oklch(0.95_0.09_60)] text-[oklch(0.6_0.18_50)]",
  };
  return (
    <div
      className={`${className} z-10 hidden items-center gap-2.5 rounded-2xl border border-border bg-card px-3 py-2.5 shadow-lg shadow-primary/10 animate-float-y md:flex`}
      style={{ animationDelay: delay }}
    >
      <div className={`flex h-9 w-9 flex-none items-center justify-center rounded-xl ${palette[tint] ?? palette.primary}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold leading-tight">{title}</p>
        <p className="text-[10px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
