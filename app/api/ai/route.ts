import {NextResponse} from 'next/server';

export const runtime='nodejs';

export async function POST(req:Request){
  try{
    const {type='seo',title='',text=''}=await req.json();
    const prompt=`برای برند «تایپ‌نو»، یک کسب‌وکار حرفه‌ای خدمات تایپ و پردازش اسناد، ${type==='seo'?'عنوان و توضیحات متای SEO':'متن حرفه‌ای برای صفحه یا خدمت'} تولید کن. موضوع: ${title}\nاطلاعات خام: ${text}`;
    const key=process.env.DEEPSEEK_API_KEY;
    const base=process.env.AI_API_URL||'https://api.deepseek.com/chat/completions';
    if(!key)return NextResponse.json({configured:false,message:'هوش مصنوعی فعال نشده است. متغیر DEEPSEEK_API_KEY را در Secrets تنظیم کنید.'});
    const r=await fetch(base,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`},body:JSON.stringify({model:process.env.AI_MODEL||'deepseek-chat',messages:[{role:'system',content:'پاسخ را فقط به زبان فارسی و حرفه‌ای تولید کن. موضوع محتوا باید کاملاً مرتبط با خدمات تایپ‌نو، تایپ، تبدیل صوت به متن، ورود داده، ویراستاری، صفحه‌آرایی و پردازش اسناد باشد. درباره ساخت‌وساز، عمران یا شرکت‌های نامرتبط محتوا تولید نکن.'},{role:'user',content:prompt}],temperature:.7})});
    if(!r.ok)return NextResponse.json({error:'سرویس هوش مصنوعی پاسخ نداد'},{status:502});
    const data=await r.json();
    return NextResponse.json({configured:true,result:data?.choices?.[0]?.message?.content||''});
  }catch{return NextResponse.json({error:'در پردازش درخواست خطایی رخ داد'},{status:400});}
}
