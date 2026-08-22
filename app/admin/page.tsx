import Link from 'next/link';

const items=[['نمونه‌کارها','مدیریت نمونه‌کارهای تایپ‌نو','/admin/projects'],['خدمات','مدیریت خدمات تایپ‌نو','/services'],['درخواست‌های سفارش','مدیریت درخواست‌های مشتریان','/admin/requests'],['محتوای سایت','تولید و مدیریت محتوای فارسی','/admin/content']];

export default function Admin(){return <main><section className="page-hero"><div className="container"><span className="eyebrow">مدیریت تایپ‌نو</span><h1>پنل مدیریت تایپ‌نو</h1><p>مرکز کنترل نمونه‌کارها، خدمات، درخواست‌های مشتریان و محتوای سایت تایپ‌نو.</p></div></section><section className="section"><div className="container"><div className="grid-3">{items.map(([title,meta,href])=><Link className="card" href={href} key={title}><span className="service-icon">◆</span><h3>{title}</h3><p>{meta}</p><span className="btn" style={{marginTop:20}}>ورود</span></Link>)}</div></div></section></main>}
