import styled from 'styled-components';
import ClayCompanion from '@/components/common/ClayCompanion';
const Grid = styled.div`
 display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:2rem;
 h2 { grid-column:1/-1; font-size:2rem; color:var(--gray-100); }
 h3 { display:flex; justify-content:space-between; align-items:center; gap:.7rem; color:var(--gray-100); margin-bottom:.75rem; }
 p { color:var(--gray-400); line-height:1.9; }
 section { border:var(--clay-border); border-radius:26px; padding:1.6rem; background:var(--surface-neutral); box-shadow:var(--clay-shadow); }
 section:nth-of-type(3n+2) { background:#e1ece5; }
 section:nth-of-type(3n) { background:#dfedf0; }
 @media(max-width:640px) { grid-template-columns:1fr; }
`;
const skills = [
 ['실무 프론트엔드', 'Vue·Nuxt·JavaScript·SCSS', '사용자·관리자 서비스, 인증·결제·권한, 반응형 UI와 공통 컴포넌트'],
 ['API와 데이터', 'REST API·WebSocket·TradingView·ZingChart', 'API 응답 가공, 실시간 데이터 화면 반영, 금융 데이터 차트'],
 ['개인 프로젝트에서 확장', 'TypeScript·Nuxt 4·Nitro·Neon PostgreSQL', '했냐옹의 화면·서버·DB와 Slack OAuth·알림 연동. React·TypeScript는 이 포트폴리오에 사용'],
 ['백엔드와 운영 경험', 'Python·Django·FastAPI / Docker·Nginx·Crontab', 'Django·FastAPI는 개인·팀 프로젝트, Python 데이터 가공·배치와 Docker·Nginx는 실무 경험'],
 ['협업과 검증', 'Figma·Git·GitHub·QA', '디자인 구현, 요구사항 조율, 일정·업무 분배, 오류 재현과 배포 확인'],
];
export const StackCard = () => <Grid><h2>기술과 사용 맥락</h2>{skills.map(([title, names, context], index) => <section key={title}><h3>{title}{index % 2 === 0 && <ClayCompanion tone={index === 0 ? "mint" : "blue"} size={32} />}</h3><p><strong>{names}</strong></p><p>{context}</p></section>)}</Grid>;
