'use client';
import { FormEvent, useState } from 'react';

export default function Contact(){
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true)}
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">ارتباط با ما</span><h1>برای پروژه‌تان با ما صحبت کنید.</h1></div></section>
    <section className="section"><div className="container split">
      <div><h2>درخواست مشاوره</h2><p>اطلاعات پروژه را ارسال کنید تا کارشناسان آرمان سازه برای بررسی اولیه با شما تماس بگیرند.</p>
        <div className="feature-list"><div className="feature"><strong>تلفن</strong><br/>۰۲۱-۱۲۳۴۵۶۷۸</div><div className="feature"><strong>ایمیل</strong><br/>info@armansazeh.ir</div><div className="feature"><strong>آدرس</strong><br/>تهران، خیابان ولیعصر</div></div>
      </div>
      <form className="form" onSubmit={submit}>
        <input required name="name" placeholder="نام و نام خانوادگی" aria-label="نام و نام خانوادگی"/>
        <input required pattern="09[0-9]{9}" type="tel" name="phone" placeholder="شماره موبایل (مثلاً ۰۹۱۲۱۲۳۴۵۶۷)" aria-label="شماره موبایل"/>
        <input required type="email" name="email" placeholder="ایمیل" aria-label="ایمیل"/>
        <select required name="projectType" defaultValue="" aria-label="نوع پروژه"><option value="" disabled>نوع پروژه را انتخاب کنید</option><option>مسکونی</option><option>تجاری</option><option>ویلایی</option><option>بازسازی</option><option>عمرانی</option></select>
        <select required name="budget" defaultValue="" aria-label="بودجه تقریبی"><option value="" disabled>بودجه تقریبی را انتخاب کنید</option><option>کمتر از ۵ میلیارد تومان</option><option>۵ تا ۱۵ میلیارد تومان</option><option>۱۵ تا ۳۰ میلیارد تومان</option><option>بیش از ۳۰ میلیارد تومان</option></select>
        <select required name="start" defaultValue="" aria-label="زمان شروع"><option value="" disabled>زمان شروع پروژه</option><option>فوری</option><option>۱ تا ۳ ماه آینده</option><option>۳ تا ۶ ماه آینده</option><option>بیش از ۶ ماه آینده</option></select>
        <textarea required name="message" placeholder="درباره پروژه، متراژ، موقعیت و نیازهای خود بنویسید..." aria-label="توضیحات پروژه"/>
        <button className="btn" type="submit">ارسال درخواست مشاوره</button>
        {sent&&<p role="status">درخواست شما ثبت شد. برای اتصال واقعی به سیستم پیگیری، فرم در مرحله اتصال Backend آماده است.</p>}
      </form>
    </div></section>
  </>
}