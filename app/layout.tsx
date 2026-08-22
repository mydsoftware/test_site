import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";

export const metadata: Metadata = {
  title: "تایپ‌نو | تایپ حرفه‌ای، تبدیل صوت به متن و ورود داده",
  description: "استودیو حرفه‌ای خدمات تایپ، تبدیل صوت به متن، ورود داده، ویراستاری و صفحه‌آرایی.",
  openGraph: { title: "تایپ‌نو | کلمات شما، با دقت ما", description: "خدمات حرفه‌ای تایپ و پردازش اسناد", type: "website" }
};

const nav = [["خانه", "/"], ["خدمات", "/services"], ["نمونه‌کارها", "/gallery"], ["درباره ما", "/about"], ["تماس", "/contact"]];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>
    <header className="header"><div className="container nav-wrap">
      <Link className="brand" href="/"><span className="brand-mark">ت</span><span>تایپ‌نو<span className="brand-dot">.</span></span></Link>
      <nav className="nav" aria-label="منوی اصلی">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="header-cta" href="/contact">ثبت سفارش ↗</Link><MobileMenu />
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">ت</span><span>تایپ‌نو<span className="brand-dot">.</span></span></div><p>خدمات حرفه‌ای تایپ و پردازش اسناد برای کسب‌وکارها، پژوهشگران و تولیدکنندگان محتوا.</p></div><div><h4>دسترسی سریع</h4><Link href="/services">خدمات</Link><Link href="/gallery">نمونه‌کارها</Link><Link href="/about">درباره ما</Link></div><div><h4>ارتباط</h4><span>۰۲۱-۱۲۳۴۵۶۷۸</span><span>hello@typeeno.ir</span><span>پاسخگویی هر روز ۹ تا ۲۱</span></div></div><div className="copyright">© ۱۴۰۵ تایپ‌نو — تمامی حقوق محفوظ است.</div></footer>
  </body></html>;
}
