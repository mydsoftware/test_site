import { promises as fs } from 'node:fs';import path from 'node:path';
export type ConsultationRequest={id:string;name:string;phone:string;email:string;projectType:string;budget:string;start:string;message:string;createdAt:string};
const file=path.join(process.cwd(),'data','requests.json');
export async function readRequests():Promise<ConsultationRequest[]>{return JSON.parse(await fs.readFile(file,'utf8')) as ConsultationRequest[]}
export async function writeRequests(items:ConsultationRequest[]){await fs.writeFile(file,JSON.stringify(items,null,2)+'\n','utf8')}
