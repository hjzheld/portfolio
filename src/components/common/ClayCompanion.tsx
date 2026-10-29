import styled from 'styled-components';
type Tone = 'mint' | 'peach' | 'blue' | 'cream';
const colours = { mint:'var(--clay-mint)', peach:'var(--clay-peach)', blue:'var(--clay-blue)', cream:'var(--clay-cream)' };
const Friend = styled.span<{ $tone:Tone; $size:number; $round:boolean }>`
  display:inline-block; position:relative; width:${({$size})=>$size}px; height:${({$size})=>$size*.84}px;
  background:${({$tone})=>colours[$tone]};
  border-radius:${({$round})=>$round ? '50% 50% 45% 55% / 55% 45% 55% 45%' : '46% 54% 60% 40% / 56% 46% 54% 44%'};
  box-shadow:inset 3px 4px 7px rgba(255,255,255,.65), 3px 5px 9px rgba(85,107,91,.08);
  transform:rotate(-8deg); flex-shrink:0;
  &::before, &::after { content:''; position:absolute; width:7%; height:15%; background:var(--ink); border-radius:50%; top:44%; }
  &::before { left:40%; } &::after { left:56%; }
`;
export default function ClayCompanion({ tone='mint', size=68, round=false }: {tone?:Tone;size?:number;round?:boolean}) {
  return <Friend $tone={tone} $size={size} $round={round} aria-hidden="true" />;
}
