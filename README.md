# آرمان سازه — وب‌سایت ساختمان‌سازی

وب‌سایت فارسی و RTL یک شرکت ساختمان‌سازی با Next.js، پنل مدیریت، API پروژه‌ها، ثبت درخواست مشاوره و دستیار محتوای هوش مصنوعی.

## امکانات
- صفحه اصلی، خدمات، درباره ما، پروژه‌ها، گالری و تماس
- پروژه‌های داینامیک
- جستجو و فیلتر پروژه‌ها
- پنل مدیریت پروژه‌ها
- CRUD پروژه‌ها از طریق API
- ذخیره دائمی اطلاعات پروژه‌ها در `data/projects.json` برای استقرار Node.js
- ثبت درخواست مشاوره در `data/requests.json`
- داشبورد درخواست‌های مشتری
- API آماده اتصال به سرویس DeepSeek
- تولید محتوای فارسی و SEO با هوش مصنوعی
- RTL و Responsive
- Health Check در `/api/health`
- Dockerfile برای اجرای Production

## اجرا
```bash
npm install
npm run dev
```

## بررسی Production
```bash
npm run typecheck
npm run build
npm start
```

## متغیرهای محیطی
فایل `.env.example` را ببینید. برای فعال‌سازی AI مقدار `DEEPSEEK_API_KEY` را فقط در Secret/Environment مقصد قرار دهید و هرگز آن را داخل Git Commit نکنید.

## نکته استقرار
این نسخه برای Node.js و Docker طراحی شده است، زیرا APIهای CRUD برای ذخیره دائمی به فایل سیستم سرور نیاز دارند. برای استقرار کاملاً Serverless، لایه Store باید به PostgreSQL، D1، Supabase یا سرویس دیتابیس مشابه منتقل شود.

## API
- `GET /api/projects`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/requests`
- `POST /api/requests`
- `POST /api/ai`
- `GET /api/health`
