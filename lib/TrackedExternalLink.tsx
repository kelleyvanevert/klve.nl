"use client";

import { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  event: string;
  properties?: Record<string, unknown>;
  children?: ReactNode;
};

export function TrackedExternalLink({
  href,
  className,
  target,
  rel,
  event,
  properties,
  children,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      // onClick={() => trackEvent(event, { url: href, ...properties })}
    >
      {children}
    </a>
  );
}
