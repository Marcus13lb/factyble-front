import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  FileText,
  Receipt,
  Truck,
  Zap,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  Download,
  Building2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
        F
      </div>
      <span className="text-lg font-semibold tracking-tight">Factyble</span>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Funcionalidades</a>
            <a href="#docs" className="hover:text-foreground">Documentos</a>
            <a href="#pricing" className="hover:text-foreground">Precios</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#login" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">
              Iniciar sesión
            </a>
            <a
              href="#trial"
              className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Probar gratis
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Homologado DNIT · SIFEN
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Facturación electrónica <span className="text-primary">simple</span> para Paraguay
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Emití facturas, notas de crédito, autofacturas y remisiones validadas por SIFEN en segundos.
            Sin instalaciones, sin complicaciones.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#trial"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Probar 30 días gratis <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-accent"
            >
              Ver demo
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Sin tarjeta de crédito · Soporte local</p>

          {/* Mock invoice preview */}
          <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <div className="rounded-xl bg-background p-6 text-left">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Factura electrónica</p>
                  <p className="mt-1 font-mono text-sm">001-001-0000123</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Check className="h-3 w-3" /> Aprobado SIFEN
                </span>
              </div>
              <div className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-xs text-muted-foreground">Cliente</p>
                  <p className="font-medium">Comercial Aurora S.A.</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">RUC</p>
                  <p className="font-mono">80012345-6</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="font-semibold">Gs. 2.450.000</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between"><span>Servicio de consultoría</span><span>Gs. 1.500.000</span></div>
                <div className="flex justify-between"><span>Licencia mensual</span><span>Gs. 950.000</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="docs" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Documentos electrónicos</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Todo lo que tu negocio necesita emitir
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: "Factura electrónica", desc: "Emitida y validada online por SIFEN." },
              { icon: Receipt, title: "Nota de crédito / débito", desc: "Ajustes y anulaciones en un clic." },
              { icon: Users, title: "Autofactura", desc: "Compras a no contribuyentes." },
              { icon: Receipt, title: "Recibo electrónico", desc: "Cobros formales con validación." },
              { icon: Truck, title: "Nota de remisión", desc: "Traslados de mercadería certificados." },
              { icon: Download, title: "Exportá todo", desc: "Excel, CSV, PDF y KUDE listos." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-background p-6 transition hover:border-primary/40">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-medium">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Funcionalidades</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pensado para PYMES, contadores y gestorías
          </h2>
          <p className="mt-4 text-muted-foreground">
            Una plataforma completa para gestionar la facturación de todos tus clientes desde un solo lugar.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { icon: Building2, title: "Multiempresa", desc: "Administrá varias empresas o sucursales desde una misma cuenta." },
            { icon: BarChart3, title: "Dashboard en tiempo real", desc: "Ventas, IVA, cuentas por cobrar y más, siempre a mano." },
            { icon: Shield, title: "Validación SIFEN online", desc: "Cada documento se aprueba automáticamente al emitirse." },
            { icon: Smartphone, title: "A4, ticket o WhatsApp", desc: "Enviá al cliente en el formato que prefiera." },
            { icon: Zap, title: "Rápido y sin instalar", desc: "Todo en la nube, funciona en cualquier dispositivo." },
            { icon: Users, title: "Soporte local", desc: "Equipo en Paraguay que entiende tu negocio." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-primary">Precios</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Un solo plan. Todo incluido.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sin sorpresas, sin límites artificiales. Cancelás cuando quieras.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-primary bg-background p-8 shadow-lg shadow-primary/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Plan Único</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Más popular</span>
              </div>
              <p className="mt-4">
                <span className="text-4xl font-semibold">Gs. 165.000</span>
                <span className="text-muted-foreground"> / mes</span>
              </p>
              <p className="text-xs text-muted-foreground">IVA incluido</p>
              <a href="#trial" className="mt-6 block rounded-lg bg-primary py-3 text-center text-sm font-medium text-primary-foreground hover:opacity-90">
                Empezá gratis 30 días
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Documentos electrónicos ilimitados",
                  "Multiempresa y multiusuario",
                  "Validación SIFEN online",
                  "Formatos A4, ticket y WhatsApp",
                  "Exportación Excel / CSV",
                  "Soporte local por WhatsApp",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="text-xl font-semibold">Plan Empresa</h3>
              <p className="mt-4">
                <span className="text-4xl font-semibold">A medida</span>
              </p>
              <p className="text-xs text-muted-foreground">Para volúmenes altos e integraciones</p>
              <a href="#contact" className="mt-6 block rounded-lg border border-border py-3 text-center text-sm font-medium hover:bg-accent">
                Contactar ventas
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "API REST completa",
                  "Webhooks en tiempo real",
                  "SLA dedicado",
                  "Onboarding personalizado",
                  "Facturación anual",
                  "Soporte prioritario",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {[
            {
              q: "¿Factyble está homologado por la DNIT?",
              a: "Sí. Somos proveedores autorizados y todos los documentos se validan online contra SIFEN al momento de emitirse.",
            },
            {
              q: "¿Necesito instalar algo?",
              a: "No. Factyble funciona 100% en la nube desde cualquier navegador, computadora o celular.",
            },
            {
              q: "¿Puedo migrar mis datos actuales?",
              a: "Sí, te ayudamos a importar clientes, productos y numeraciones desde Excel o desde tu sistema anterior.",
            },
            {
              q: "¿Qué pasa después de los 30 días?",
              a: "Si te gusta, activás el plan por Gs. 165.000/mes. Si no, no pagás nada. No pedimos tarjeta al inicio.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between font-medium">
                {q}
                <span className="ml-4 text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="trial" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Empezá a facturar hoy mismo
          </h2>
          <p className="mt-4 text-muted-foreground">
            30 días gratis. Sin tarjeta. Cancelás cuando quieras.
          </p>
          <a
            href="#signup"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Crear cuenta gratis <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Factyble · Facturación electrónica Paraguay</p>
        </div>
      </footer>
    </div>
  );
}
