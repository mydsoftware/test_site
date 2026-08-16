import { NextResponse } from 'next/server';
import { readProjects, writeProjects } from '@/lib/project-store';
export const runtime='nodejs';
export async function PUT(req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const patch=await req.json();const items=await readProjects();const index=items.findIndex(p=>p.id===id);if(index<0)return NextResponse.json({error:'پروژه پیدا نشد'},{status:404});items[index]={...items[index],...patch,id};await writeProjects(items);return NextResponse.json(items[index])}
export async function DELETE(_req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const items=await readProjects();const next=items.filter(p=>p.id!==id);if(next.length===items.length)return NextResponse.json({error:'پروژه پیدا نشد'},{status:404});await writeProjects(next);return NextResponse.json({ok:true})}
