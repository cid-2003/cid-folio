"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import type { AvailabilityDialogProps } from "@/types";

export function AvailabilityDialog({
  open,
  onOpenChange,
}: AvailabilityDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-xl font-medium tracking-tight mb-2">
            Qui suis-je ?
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed opacity-80">
              Salut, je suis Cédrick Emmanuel <span className="font-medium">Developpeur web spécialisé en </span> <span className="font-medium">Backend</span>. Je conçois des applications web modernes, performantes et évolutives en privilégiants un code propre, une architectures claire et une excellente expérience utilisateur.
            </p>

            <div>
              <p className="text-[15px] font-medium leading-relaxed opacity-90 mb-2">
                Ce que je fais:
              </p>
              <div className="text-[15px] leading-relaxed opacity-75 space-y-1 pl-1">
                <p>• Développement d'applications web avec Next.js, Laravel &amp; React</p>
                <p>• Modélisation et gestion de bases de données avec Prisma, PostgreSQL &amp; MongoDB</p>
                <p>• Déploiement d'applications et utilisation de Docker pour créer des environnements de développement fiables.</p>
                <p>• Veille technologique et apprentissage continu afin de rester à jour sur les meilleures pratiques du développement web.</p>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed opacity-80">
              J'aime relever des défis techniques et transformer des idées en solutions concrètes. Chaque projet est une opportunité d'apprendre, d'améliorer mes compétences et de créer des produits utiles qui répondent à de vrais besoins.
            </p>
          </div>

          <hr className="border-foreground/10" />

          <div className="space-y-4">
            <p className="text-[15px] leading-[22px] opacity-90 font-medium tracking-[-0.6px]">
              Que vous souhaitiez échanger sur un projet, discuter d'une opportunité professionnelle ou simplement parler de développement web, n'hésitez pas à me contacter. Ce sera un plaisir d'échanger avec vous.
            </p>

            <div className="flex flex-col gap-3">
              <Button
                asChild
                className="w-full justify-center gap-2 h-[52px] px-5"
                variant={'fancy'}
              >
                <Link
                  href="mailto:cedrickemmanuel69@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}