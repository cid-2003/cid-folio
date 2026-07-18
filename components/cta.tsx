import Link from "next/link";

export function CTA() {
  return (
    <section className="mb-8 p-6 rounded-lg border border-foreground/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-background/20" />
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-medium text-base tracking-tight mb-1">
            Disponible pour de nouvelles opportunités.
          </h3>
          <p className="text-sm text-foreground/60 max-w-md">
            Que vous recherchiez un développeur Backend, un développeur Full Stack 
            ou un collaborateur freelance, je serais ravi d'échanger avec vous.
          </p>
        </div>
        <Link
          href="mailto:cedrickemmanuel69@gmail.com"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-0 py-0 text-foreground/60 hover:text-foreground transition-colors shrink-0 no-underline!"
        >
          Me contacter
          <span className="text-foreground/30 hover:text-foreground/50 transition-colors">→</span>
        </Link>
      </div>
    </section>
  );
}
