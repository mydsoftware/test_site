import { promises as fs } from 'node:fs';
import path from 'node:path';

export type Project={id:string;title:string;category:string;location:string;year:string;status:string;description:string;image:string};
const file=path.join(process.cwd(),'data','projects.json');
export async function readProjects():Promise<Project[]>{return JSON.parse(await fs.readFile(file,'utf8')) as Project[]}
export async function writeProjects(items:Project[]){await fs.writeFile(file,JSON.stringify(items,null,2)+'\n','utf8');return items}
