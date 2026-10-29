import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Brand = styled.button`
  display:inline-flex; align-items:center; gap:.7rem; padding:0; border:0; background:transparent;
  cursor:pointer; color:var(--ink); font-family:var(--font-en); text-align:left;
  svg { width:49px; height:46px; flex-shrink:0; overflow:visible; }
  .word { font-size:1.4rem; font-weight:700; letter-spacing:-.04em; }
  @media(max-width:480px) { svg { width:43px; height:40px; } .word { font-size:1.25rem; } }
`;
interface LogoProps { onClick?:()=>void; }
function BrandMark({ onClick, label }:LogoProps & {label:string}) {
  const ref=useRef<HTMLButtonElement>(null);
  const navigate=useNavigate();
  const {contextSafe}=useGSAP(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    gsap.from('.brand-pebble',{opacity:0,y:8,scale:.85,rotation:-12,transformOrigin:'50% 65%',duration:.65,stagger:.09,ease:'back.out(1.4)'});
  },{scope:ref});
  const greet=contextSafe(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const pieces=ref.current?.querySelectorAll('.brand-pebble');
    if(!pieces)return;
    gsap.timeline({defaults:{overwrite:'auto'}})
      .to(pieces,{y:-3,rotation:5,duration:.2,stagger:.035,ease:'power2.out'})
      .to(pieces,{y:0,rotation:0,duration:.4,stagger:.035,ease:'back.out(1.8)'})
      .to(ref.current?.querySelectorAll('.brand-eyes') ?? [],{scaleY:.16,transformOrigin:'50% 50%',duration:.08,yoyo:true,repeat:1},0.18);
  });
  return <Brand ref={ref} type="button" aria-label="홈으로 이동" onClick={onClick ?? (()=>navigate('/'))} onPointerEnter={greet} onFocus={greet}>
    <svg viewBox="0 0 54 48" aria-hidden="true" focusable="false">
      <g className="brand-pebble"><path d="M3 26C0 15 6 5 17 4c10-2 18 5 18 16 1 11-7 20-17 20C8 42 4 36 3 26Z" fill="#BFD9CD"/><path d="M7 20C7 12 12 8 19 8" fill="none" stroke="#F5FBF7" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
      <g className="brand-eyes" fill="#3E5149"><ellipse cx="16" cy="24" rx="1.6" ry="2.6"/><ellipse cx="23" cy="24" rx="1.6" ry="2.6"/></g></g>
      <g className="brand-pebble"><path d="M27 17c6-8 18-6 23 3 5 9 2 19-7 23-8 3-18-2-20-10-2-6 0-11 4-16Z" fill="#F3C7B6"/><path d="M30 19c4-4 10-4 14-1" fill="none" stroke="#FFF3E3" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
      <g className="brand-eyes" fill="#3E5149"><ellipse cx="34" cy="29" rx="1.5" ry="2.5"/><ellipse cx="41" cy="29" rx="1.5" ry="2.5"/></g></g>
    </svg><span className="word">{label}</span>
  </Brand>;
}
export default function Logo(props:LogoProps) { return <BrandMark {...props} label="Portfolio" />; }
export function FooterLogo(props:LogoProps) { return <BrandMark {...props} label="Portfolio" />; }
