"use client";

import { ReactNode } from "react";
import posthog from "posthog-js";

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
      onClick={() => posthog.capture(event, { url: href, ...properties })}
    >
      {children}
    </a>
  );
}
