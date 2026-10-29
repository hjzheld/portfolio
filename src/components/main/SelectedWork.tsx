import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import styled from 'styled-components';
import projects from '@/data/project';
import categories from '@/data/categry';
import ClayCompanion from '@/components/common/ClayCompanion';
const Section = styled.section`
  .collection-note { display:inline-block; color:var(--sage); font-family:var(--font-editorial); font-size:1.1rem; font-style:italic; margin-bottom:.75rem; }

  max-width:1200px; margin:2rem auto 4rem; padding:0 1rem;
  h2 { font-size:clamp(1.6rem,4vw,2.4rem); color:var(--gray-100); margin-bottom:1rem; letter-spacing:-.04em; }
  p { line-height:1.8; color:var(--gray-400); }
  nav { display:flex; gap:.5rem; flex-wrap:wrap; margin:2rem 0 1rem; }
  button { cursor:pointer; padding:.65rem 1.15rem; border:1px solid #dfe5d5; border-radius:50px; color:#64736b; background:rgba(255, 251, 253,.5); transition:background .2s; }
  button[aria-pressed=true] { background:var(--clay-mint); border-color:#afc6aa; color:var(--ink); box-shadow:inset 2px 2px 4px rgba(255,255,255,.5); }
  .count { margin-bottom:1.5rem; font-size:.8rem; letter-spacing:.04em; }
`;
const Grid = styled.div`
  display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:2.75rem 2.25rem;
  @media(max-width:700px) { grid-template-columns:1fr; gap:1.25rem; }
`;
const Card = styled(Link)`
  .card-title { display:flex; align-items:center; justify-content:space-between; gap:.7rem; }
  && { padding:12px; border:var(--clay-border); border-radius:32px; background:var(--surface-neutral); box-shadow:var(--clay-shadow); }
  &&:nth-child(4n+2) { background:#e1ece5; }
  &&:nth-child(4n+3) { background:#f5ded4; }
  &&:nth-child(4n+4) { background:#dfedf0; }
  && .visual { border-radius:23px; background:#d4e4da; height:230px; box-shadow:inset 3px 3px 8px rgba(94,114,98,.10); }
  && .body { padding:1.5rem .8rem .7rem; }
  && .identity { border-radius:23px; background:transparent; width:100%; }
  && .identity strong { background:var(--surface-neutral); border:var(--clay-border); border-radius:30px; width:82px; height:82px; padding:0; display:grid; place-items:center; box-shadow:var(--clay-shadow); font-family:var(--font-en); font-size:2rem; }
  && .tag { background:rgba(255,250,240,.7); color:#596e61; box-shadow:inset 1px 1px 2px rgba(255,255,255,.8); }
  && .arrow { border:0; background:var(--clay-mint); box-shadow:2px 3px 6px rgba(90,96,78,.12),inset 1px 1px 2px rgba(255,255,255,.8); }

  display:flex; flex-direction:column; min-width:0; overflow:hidden; border:1px solid #dfe5d5;
  border-radius:28px; background:rgba(255, 251, 253,.75); box-shadow:0 10px 35px rgba(78, 81, 85,.04);
  .visual { height:260px; position:relative; overflow:hidden; background:var(--jet-stream); border:0; border-radius:25px 25px 60px 0; }
  .visual::after { display:none; content:''; position:absolute; top:0; right:12px; width:62px; height:23px; background:rgba(220, 236, 248,.7); transform:rotate(7deg); pointer-events:none; }
  &:nth-child(4n+1) { background:#e4eddd; }
  &:nth-child(4n+2) { background:#f7edda; }
  &:nth-child(4n+3) { background:#f7e4dc; }
  &:nth-child(4n+4) { background:#e3eef0; }
  &:nth-child(3n+2) .visual { border-color:#f5e6c8; }

  &:nth-child(3n) .visual { border-color:#e0ead9; }

  img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform .4s; }
  .identity { border-radius:50% 50% 25% 25%; margin:0 auto; width:90%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:1rem; background:var(--mauve); color:var(--ink); }
  .identity strong { font-family:var(--font-editorial); font-size:3rem; letter-spacing:-.06em; padding:.2rem 1rem; background:var(--lemon-paper); border:1px solid var(--vanilla); }
  .identity span { font-size:.7rem; letter-spacing:.2em; }
  .body { padding:1.6rem; display:flex; flex-direction:column; flex:1; }
  .kind { color:#64736b; font-size:.73rem; letter-spacing:.06em; }
  h3 { color:#3e5149; font-size:1.35rem; margin:.7rem 0; line-height:1.5; letter-spacing:-.035em; }
  .tags { display:flex; flex-wrap:wrap; gap:.4rem; margin:1.25rem 0; }
  .tag { padding:.3rem .6rem; border-radius:50px; background:#e3eef0; color:#64736b; font-size:.72rem; }
  .action { display:flex; justify-content:space-between; align-items:center; padding-top:1rem; margin-top:auto; border-top:1px solid #e7e3d7; color:#3e5149; font-size:.8rem; font-weight:600; }
  .arrow { display:grid; place-items:center; width:30px; height:30px; border:1px solid #dfe5d5; border-radius:50%; }
  &:hover { border-color:#b68172; }
  &:hover img { transform:scale(1.025); }
  @media(max-width:700px) { .visual { height:200px; } .body { padding:1.25rem; } }
`;
const personal = projects
  .filter(project => project.kind === '개인' || project.kind === '개인·팀')
  .sort((a,b) => Number(b.mainTab === 'fullstack') - Number(a.mainTab === 'fullstack'))
  .map(project => ({
    ...project,
    summary:project.content,
    image:project.detail.image.find(media => media.type === 'image')?.src,
  }));
export default function SelectedWork({ compact = false }: { compact?:boolean }) {
  const [filter,setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo('.body', { opacity:0, y:14 }, { opacity:1, y:0, duration:.55, stagger:.06, ease:'power2.out', clearProps:'opacity,transform' });
  }, { scope:sectionRef, dependencies:[filter], revertOnUpdate:true });
  const work = projects.filter(p => p.kind === '실무').slice(0,3).map(p => ({...p, summary:p.content, image:p.detail.image.find(media => media.type === 'image')?.src}));
  const visible = compact ? work : personal.filter(p => filter === 'all' || p.mainTab === filter);
  return <Section ref={sectionRef} aria-label={compact ? '대표 실무 경험' : '포트폴리오 작품'}>
    <h2>{compact ? '서비스를 만들고 개선한 경험' : '직접 만들며 쌓아온 경험'}</h2>
    <p>{compact ? '회사에서 담당한 서비스 개발과 문제 해결 사례입니다.' : '개인 서비스와 팀 프로젝트의 구현 과정, 기술 선택과 결과를 소개합니다.'}</p>
    {!compact && <nav className="project-category" aria-label="포트폴리오 분야">{categories.map(category => <button key={category.type} type="button" aria-pressed={filter===category.type} onClick={()=>setFilter(category.type)}>{category.title}</button>)}</nav>}
    <p className="count" aria-live="polite">{visible.length}개 프로젝트</p>
    <Grid>{visible.map((p,index) => <Card className="project-card" key={p.id} to={compact ? `/personal/work/${p.id}` : `/project/${p.id}`}>
      <div className="visual">{p.image ? <img src={p.image} alt={`${p.title} 실제 프로젝트 화면`} loading="lazy" /> : <div className="identity"><ClayCompanion tone={index % 3 === 0 ? 'mint' : index % 3 === 1 ? 'peach' : 'blue'} size={88} round={index % 2 === 0} /><span>{p.tags.slice(0,3).join(' / ')}</span></div>}</div>
      <div className="body"><div className="card-title"><h3>{p.title}</h3>{!compact && index % 3 === 0 && <ClayCompanion tone="peach" size={34} />}</div><p>{p.summary}</p><div className="tags">{p.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div><div className="action">{compact ? '담당 역할과 구현 과정' : '프로젝트 살펴보기'}<span className="arrow" aria-hidden="true">↗</span></div></div>
    </Card>)}</Grid>
    {compact && <Link to="/personal" style={{display:'inline-block',marginTop:'1.5rem',color:'#3e5149',fontWeight:600}}>경력과 전체 실무 경험 보기 →</Link>}
  </Section>;
}
