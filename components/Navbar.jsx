"use client";
import { LINKS } from "@/constant/NavLink";
import React from "react";
import AnimationContainer from "./utils/animation-container";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Icons from "./ui/icons";
import { FileTextIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const DATA = {
    navbar: LINKS,
    contact: {
      social: {
        github: {
          name: "GitHub",
          url: "https://github.com/alwan2398",
          icon: Icons.github,
        },
        linkedin: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/muhamad-alwan-sholeh-66ab7a330?originalSubdomain=id",
          icon: Icons.linkedin,
        },
        instagram: {
          name: "Instagram",
          url: "https://www.instagram.com/alwan.balweel/",
          icon: Icons.instagram,
        },
        resume: {
          name: "Resume",
          url: "pdf/my-resume.pdf",
          icon: FileTextIcon,
        },
      },
    },
  };
  return (
    <header className="z-[999] flex justify-center items-center w-full fixed bottom-6 inset-x-0 cursor-none">
      <div className="w-full h-16 bg-gradient-to-t from-background absolute -bottom-8 inset-x-0 -z-10"></div>

      <AnimationContainer animation="slide-up" delay={0.5}>
        <TooltipProvider delayDuration={0}>
          <Dock direction="middle" className="relative">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 rounded-xl"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10} className="px-2 py-1 text-xs">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon
                key={name}
                className={
                  social.name === "Buy me a coffee"
                    ? "md:!hidden md:w-0"
                    : undefined
                }
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target="_blank"
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-xl"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </AnimationContainer>
    </header>
  );
};

export default Navbar;
