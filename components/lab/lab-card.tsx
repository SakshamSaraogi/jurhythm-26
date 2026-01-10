"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BorderBeam } from "../magicui/border-beam";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href?: string;
  className?: string;
};

export function LabCard({
  title,
  description,
  imageUrl,
  imageAlt,
  href = "#",
  className,
}: Props) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl overflow-hidden",
        className
      )}
      aria-labelledby={`${title}-title`}
    >
      {/* Glow layer */}

      {/* Card Body */}

        <div className="overflow-hidden rounded-2xl border-2 border-[#ff6b35] bg-black relative z-10">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            width={1280}
            height={720}
            className="h-60 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
           <BorderBeam
                        duration={6}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-[#ff6b35] to-transparent"
                      />
                      <BorderBeam
                        duration={6}
                        delay={3}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-white to-transparent"
                      />
        </div>

      {/* <header>
        <h3
        id={`${title}-title`}
        className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white text-balance"
        >
        {title}
        </h3>
        </header> */}

      <p className="text-sm md:text-base leading-relaxed text-neutral-300">
        {description}
      </p>

      <div>
        <Link
          href={href}
          className="inline-flex font-limelight tracking-widest rounded-full bg-[#ff6b35] px-4 py-2 text-sm font-bold text-black hover:bg-white hover:text-[#ff6b35] border-2 border-[#ff6b35] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] uppercase"
          aria-label={`Read more about ${title}`}
          >
          Read More
        </Link>
      </div>
    </article>
  );
}
