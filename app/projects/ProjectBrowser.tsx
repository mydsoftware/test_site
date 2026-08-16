'use client';
import Link from 'next/link';
import {useMemo,useState} from 'react';
import {projects} from '@/data/projects';

export default function ProjectBrowser(){
 const [filter,setFilter]=useState('همه');
 const [query,setQuery]=useState('');
 const categories=['همه',...Array.from(new Set(projects.map(p=>p.category)))];
 const filtered=useMemo(()=>projects.filter(p=>(filter==='همه'||p.category===filter)&&`${p.title} ${p.location} ${p.status}`.includes(query)),[filter,query]);
 return <>
  <div className="project-filters"><input aria-label="جستجوی پروژه" placeholder="جستجوی پروژه..." value={query} onChange={e=>setQuery(e.target.value)}/>{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div>
  <div className="grid-3">{filtered.map(p=><Link className="project" key={p.id} href={`/projects/${p.id}`} style={{backgroundImage:`url(${p.image})`}}><div className="project-info"><h3>{p.title}</h3><p>{p.category} · {p.location} · {p.status}</p></div></Link>)}</div>
  {!filtered.length&&<p className="empty-state">پروژه‌ای با این مشخصات پیدا نشد.</p>}
 </>
}