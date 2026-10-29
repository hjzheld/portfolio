import styled from 'styled-components';
import bus from '@/assets/images/main/clay-bus.png';
import ClayCompanion from '@/components/common/ClayCompanion';
const Scene = styled.div`
  width:min(680px,100%); position:relative; margin:1rem auto 0; isolation:isolate;
  &::before { content:''; position:absolute; inset:20% 4% 1%; z-index:-1; background:var(--clay-mint); opacity:.65; border-radius:48% 52% 40% 60% / 62% 58% 42% 38%; }
  &::after { content:''; position:absolute; width:100px; height:100px; right:3%; top:8%; z-index:-1; background:var(--clay-peach); border-radius:50%; opacity:.6; }
  img { display:block; width:100%; height:auto; filter:drop-shadow(0 15px 13px rgba(84,98,78,.08)); }
  .friend { position:absolute; right:4%; bottom:9%; transform:scale(.85); }
  @media(max-width:600px) { width:100%; margin-top:.75rem; .friend { display:none; } }
`;
export default function BusScene() {
  return <Scene><img src={bus} alt="피치색 차체와 민트색 창문의 둥근 클레이 버스 일러스트" width={1776} height={880} fetchPriority="high" /><span className="friend"><ClayCompanion /></span></Scene>;
}
