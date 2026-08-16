import Link from 'next/link';

const items=[['پروژه‌ها','۳ پروژه','/admin/projects'],['خدمات','۸ خدمت','/services'],['درخواست‌های مشاوره','۰ درخواست','/admin/requests'],['محتوای سایت','مدیریت محتوا','/admin/content']];
export default function Admin(){return <main><section className="page-hero"><div className="container"><span className="eyebrow">مدیریت سایت</span><h1>پنل مدیریت آرمان سازه</h1><p>مرکز کنترل پروژه‌ها، خدمات و درخواست‌های مشتریان.</p></div></section><section className="section"><div className="container"><div className="grid-3">{items.map(([title,meta,href])=><Link className="card" href={href} key={title}><span className="service-icon">◆</span><h3>{title}</h3><p>{meta}</p><span className="btn" style={{marginTop:20}}>ورود</span></Link>)}</div></div></section></main>}
