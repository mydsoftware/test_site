import { NextResponse } from 'next/server';
import { readProjects, writeProjects, type Project } from '@/lib/project-store';
export const runtime='nodejs';
export async function GET(){return NextResponse.json(await readProjects())}
export async function POST(req:Request){const body=await req.json() as Partial<Project>;if(!body.title||!body.category)return NextResponse.json({error:'عنوان و دسته‌بندی الزامی است'},{status:400});const items=await readProjects();const item:Project={id:body.id||crypto.randomUUID(),title:body.title,category:body.category,location:body.location||'',year:body.year||'',status:body.status||'برنامه‌ریزی‌شده',description:body.description||'',image:body.image||''};items.push(item);await writeProjects(items);return NextResponse.json(item,{status:201})}
