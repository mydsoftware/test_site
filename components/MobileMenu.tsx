"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  ["خانه", "/"],
  ["خدمات", "/services"],
  ["پروژه‌ها", "/projects"],
  ["درباره ما", "/about"],
  ["گالری", "/gallery"],
  ["تماس با ما", "/contact"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <button className="menu-toggle" type="button" aria-label="باز کردن منو" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      {open && (
        <div className="mobile-panel">
          {items.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="mobile-panel-cta" href="/contact" onClick={() => setOpen(false)}>درخواست مشاوره</Link>
        </div>
      )}
    </div>
  );
}
