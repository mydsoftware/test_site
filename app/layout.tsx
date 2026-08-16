import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";

export const metadata: Metadata = {
  title: "آرمان سازه | ساختن آینده، با مهندسی امروز",
  description: "شرکت مهندسی و ساختمان‌سازی آرمان سازه؛ طراحی، اجرا و مدیریت پروژه‌های ساختمانی و عمرانی.",
  openGraph: { title: "آرمان سازه", description: "ساختن آینده، با مهندسی امروز", type: "website" }
};

const nav = [
  ["خانه", "/"], ["خدمات", "/services"], ["پروژه‌ها", "/projects"], ["درباره ما", "/about"], ["گالری", "/gallery"], ["تماس با ما", "/contact"]
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>
    <header className="header"><div className="container nav-wrap">
      <Link className="brand" href="/"><span className="brand-mark">AS</span><span>آرمان سازه</span></Link>
      <nav className="nav" aria-label="منوی اصلی">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="desktop-cta"><Link className="header-cta" href="/contact">درخواست مشاوره</Link></div>
      <MobileMenu />
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="container footer-grid">
      <div><div className="brand footer-brand"><span className="brand-mark">AS</span><span>آرمان سازه</span></div><p>طراحی، اجرا و مدیریت پروژه‌های ساختمانی با رویکردی مهندسی و آینده‌نگر.</p></div>
      <div><h4>دسترسی سریع</h4><Link href="/projects">پروژه‌ها</Link><Link href="/services">خدمات</Link><Link href="/about">درباره ما</Link></div>
      <div><h4>ارتباط با ما</h4><span>۰۲۱-۱۲۳۴۵۶۷۸</span><span>info@armansazeh.ir</span><span>تهران، خیابان ولیعصر</span></div>
    </div><div className="copyright">© ۱۴۰۵ آرمان سازه — تمامی حقوق محفوظ است.</div></footer>
  </body></html>;
}
