"use client";
import { ReactNode } from "react";
import Link from "next/link";

interface FileLinkProps {
  href: string; // e.g. "/files/cv.pdf"
  children: ReactNode;
  forceDownload?: boolean; // true = download, false = open in new tab
  trackName?: string; // e.g. "Download: CV"
  className?: string;
}

export default function FileLink({
  href,
  children,
  forceDownload = false,
  trackName,
  className,
}: FileLinkProps) {
  // If the link starts with '/', prepend the base path.
  // If it's an external link (https://), leave it alone.
  const finalHref = href.startsWith("/") ? `${href}` : href;

  return (
    <Link
      href={finalHref}
      className={className}
      // 'download': if present, tells browser to download instead of navigate
      // 'target="_blank"': opens in new tab (good for PDFs if not downloading)
      download={forceDownload}
      target={forceDownload ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-umami-event={`${trackName} Clicked`}
    >
      {children}
    </Link>
  );
}
