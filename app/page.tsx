import Link from "next/link";

const services = [
  ["01", "تایپ فارسی و انگلیسی", "تبدیل فایل‌های صوتی، تصویری، دست‌نویس و اسکن‌شده به متن دقیق و استاندارد."],
  ["02", "تایپ تخصصی", "تایپ پایان‌نامه، مقاله، کتاب، قرارداد، گزارش و اسناد تخصصی با قالب‌بندی حرفه‌ای."],
  ["03", "ورود داده", "ورود اطلاعات، ساخت جدول، پاک‌سازی داده و آماده‌سازی فایل‌های اکسل و سیستم‌های سازمانی."],
  ["04", "ویراستاری و صفحه‌آرایی", "اصلاح نگارشی، یکدست‌سازی متن و آماده‌سازی فایل نهایی برای چاپ یا انتشار دیجیتال."],
];

const works = [
  ["تایپ و صفحه‌آرایی کتاب", "کتاب · ۳۸۰ صفحه", "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=88"],
  ["تبدیل جلسات به متن", "صوت · ۲۴ ساعت فایل", "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=88"],
  ["پروژه دانشگاهی", "پایان‌نامه · فارسی و انگلیسی", "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=88"],
];

export default function Home() {
  return <>
    <section className="hero typing-hero">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">استودیو خدمات تایپ و محتوا · از ۱۴۰۵</span>
          <h1>کلمات شما،<br /><span>با دقت ما</span> جان می‌گیرند.</h1>
          <p>یک تیم حرفه‌ای برای تایپ، تبدیل صوت به متن، ورود داده و آماده‌سازی اسناد؛ سریع، دقیق و کاملاً فارسی.</p>
          <div className="actions"><Link className="btn" href="/contact">ثبت سفارش آنلاین <span>↗</span></Link><Link className="text-link" href="/services">خدمات ما را ببینید ←</Link></div>
          <div className="hero-proof"><span>✓</span> تحویل دقیق و منظم <span>✓</span> محرمانگی اطلاعات <span>✓</span> پشتیبانی انسانی</div>
        </div>
        <div className="hero-visual">
          <div className="typing-card glass"><div className="typing-top"><span>LIVE TRANSCRIPTION</span><i /></div><div className="waveform">{Array.from({ length: 28 }).map((_, i) => <b key={i} style={{ height: `${18 + ((i * 17) % 52)}px` }} />)}</div><p className="mono">متن شما با دقت بالا در حال تبدیل شدن است<span className="cursor">▌</span></p><div className="typing-meta"><span>FA</span><span>98.7% دقت</span><span>در حال پردازش</span></div></div>
          <div className="floating-note glass"><strong>+۱۲,۸۴۰</strong><small>سفارش موفق</small></div><div className="floating-speed glass"><strong>24h</strong><small>تحویل سریع</small></div>
        </div>
      </div>
    </section>
    <section className="ticker"><div>تایپ حرفه‌ای ✦ تبدیل صوت به متن ✦ ورود داده ✦ ویراستاری ✦ صفحه‌آرایی ✦ تایپ حرفه‌ای ✦</div></section>
    <section className="section services-section"><div className="container"><div className="section-head modern-head"><div><span className="eyebrow dark">WHAT WE DO</span><h2>هر فایل، یک خروجی<br /><em>تمیز و آماده استفاده.</em></h2></div><p>فایل را می‌فرستید، ما آن را با دقت انسانی و ابزارهای مدرن پردازش می‌کنیم و خروجی استاندارد تحویل می‌دهیم.</p></div><div className="service-bento">{services.map(([num, title, text]) => <article className="service-card" key={num}><span className="service-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div><span className="arrow">↗</span></article>)}</div></div></section>
    <section className="section dark-section"><div className="container process-grid"><div><span className="eyebrow">THE PROCESS</span><h2>از فایل خام<br />تا خروجی نهایی.</h2><p>بدون پیچیدگی و رفت‌وبرگشت اضافه. هر مرحله قابل پیگیری است و تیم ما تا تحویل نهایی کنار شماست.</p><Link className="btn light-btn" href="/contact">شروع سفارش</Link></div><div className="process-list"><div><b>01</b><span><strong>ارسال فایل</strong><small>فایل صوتی، PDF، عکس، Word یا هر فرمت متداول.</small></span></div><div><b>02</b><span><strong>بررسی و برآورد</strong><small>حجم کار، زمان و نوع خروجی مشخص می‌شود.</small></span></div><div><b>03</b><span><strong>تایپ و کنترل کیفیت</strong><small>تایپ انجام شده و خروجی چندمرحله‌ای بررسی می‌شود.</small></span></div><div><b>04</b><span><strong>تحویل نهایی</strong><small>فایل مرتب، استاندارد و آماده استفاده تحویل شماست.</small></span></div></div></div></section>
    <section className="section works-section"><div className="container"><div className="section-head"><div><span className="eyebrow dark">SELECTED WORK</span><h2>نمونه‌ای از کار ما</h2></div><Link className="text-link dark-link" href="/gallery">مشاهده گالری ←</Link></div><div className="work-grid">{works.map(([title, meta, img]) => <article className="work-card" key={title}><div className="work-image" style={{ backgroundImage: `url(${img})` }}><span>مشاهده پروژه ↗</span></div><div><h3>{title}</h3><p>{meta}</p></div></article>)}</div></div></section>
    <section className="section stats-section"><div className="container stats-grid modern-stats"><div><strong>۱۲K+</strong><span>سفارش انجام‌شده</span></div><div><strong>۹۸.۷٪</strong><span>رضایت مشتریان</span></div><div><strong>۲۴h</strong><span>تحویل سریع</span></div><div><strong>۱۰۰٪</strong><span>محرمانگی</span></div></div></section>
    <section className="cta modern-cta"><div className="container"><span className="eyebrow dark">READY WHEN YOU ARE</span><h2>فایل‌تان آماده است؟<br /><em>بفرستید، شروع کنیم.</em></h2><p>برای دریافت برآورد سریع، فایل یا توضیح پروژه‌تان را ارسال کنید.</p><Link className="btn" href="/contact">ثبت سفارش و دریافت قیمت ↗</Link></div></section>
  </>;
}
