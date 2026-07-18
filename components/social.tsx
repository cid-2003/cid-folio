"use client";

import type { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconGithub from "./shared/icons/github";
import IconX from "./shared/icons/x";
import GravatarIcon from "./shared/icons/gravatar";
import CvIcon from "./shared/icons/cv";

import Link from "next/link";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex w-full border border-foreground/10 rounded-lg p-4 no-underline items-center hover:bg-foreground/2 hover:border-foreground/20 transition-all justify-between group"
    >
      {children}
      <div className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <IconArrowRightUp />
      </div>
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <SocialButton href="https://github.com/cid-2003">
        <div className="flex flex-row items-center">
          <IconGithub />
          <span className="ml-3 text-[15px] tracking-tight">Github</span>
        </div>
      </SocialButton>
      <SocialButton href="https://gravatar.com/cedrickdonald29">
        <div className="flex flex-row items-center">
          <GravatarIcon />
          <span className="ml-3 text-[15px] tracking-tight">Gravatar</span>
        </div>
      </SocialButton>
      <SocialButton href="https://flowcv.com/resume/0h3bif9hvngf">
        <div className="flex flex-row items-center">
          <CvIcon />
          <span className="ml-3 text-[15px] tracking-tight">CV</span>
        </div>
      </SocialButton>
    </div>
  );
}
