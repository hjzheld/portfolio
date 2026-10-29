# 공혜진 · 프론트엔드 개발자 포트폴리오

React + TypeScript + Vite 기반 포트폴리오입니다.

- 배포: https://hjzheld.github.io/portfolio/
- 경력: `/personal`
- 실무 상세: `/personal/work/:id`
- 포트폴리오: `/project` — 전체 / 프론트엔드 / 백엔드 / 풀스택
- 했냐옹: `/project/104` — 개인 풀스택 프로젝트

## 실행과 검증

```sh
npm ci
npm run dev
npm run build
npm run lint
```

build는 TypeScript 검사와 프로덕션 빌드를 수행합니다. main push 시 GitHub Actions가 배포합니다. Vite base와 BrowserRouter basename은 `/portfolio/`입니다. Actions는 index.html을 404.html로 복사해 상세 경로 새로고침을 지원합니다.

## 프로젝트 추가·수정

**모든 프로젝트 데이터는 `src/data/project.ts`에서 관리합니다.** 했냐옹과 회사 실무 사례도 같은 배열에 있습니다.

- `src/types/project.d.ts`: 공통 타입. `mainTab`은 `front`, `back`, `fullstack`입니다.
- `src/data/categry.ts`: 목록 필터 정의.
- `src/components/main/SelectedWork.tsx`: project.ts를 읽어 개인·팀 작업과 메인의 대표 실무 작업을 표시합니다.
- `src/pages/portfolio/DetailPage.tsx`: 모든 상세 페이지를 렌더링합니다. 기존 HTML 설명·미디어를 유지하며 `detail.sections`가 있는 프로젝트는 구조화된 상세 화면으로 표시합니다.
- `src/pages/PersonalHistory.tsx`: 회사 경력 요약과 실무 상세 링크.

기존 개인·팀 프로젝트 ID 1~5와 했냐옹 ID 104, 실무 사례 ID는 유지합니다. `kind`가 `개인` 또는 `개인·팀`이면 포트폴리오에, `실무`와 `자동화` 사례는 경력에서 연결합니다. 했냐옹은 `kind: '개인'`, `mainTab: 'fullstack'`입니다.

기능이나 프로젝트를 추가하기 전에 위 기존 파일에 적절한 구조가 있는지 먼저 확인합니다. 기존 데이터·타입·상세 화면을 재사용하며 프로젝트 하나를 위해 별도 데이터 파일이나 전용 상세 페이지를 추가하지 않습니다.

## 콘텐츠 기준

회사 실무 경험과 개인 프로젝트를 구분하고 확인되지 않은 성과·기간·기술을 추가하지 않습니다. 교육 플랫폼에서 결제는 담당하지 않았으며 설계·Git·테스트/운영 환경 연결과 공통 UI 작업을 반영했습니다. 했냐옹의 AI 도구 지원과 본인의 기획·배포·실사용 검증도 구분합니다.

Vue Router 최적화 수치는 사용자가 제공한 별도 Vue 프로젝트의 프로덕션 빌드 비교입니다. 메인 JS 약 77.9% 감소와 전체 JS 합계 증가를 함께 기록하며 실제 LCP·로딩 시간 개선으로 해석하지 않습니다. React 포트폴리오 자체 측정값이 아닙니다.

## 화면·아이콘

경력·포트폴리오의 화면 전체 전환은 탭 세션의 첫 방문에만 재생합니다. 글자·카드 등장 효과는 재방문에도 유지하고 reduced-motion 설정을 존중합니다.

`public/favicon.svg`가 기본 파비콘입니다. 같은 캐릭터의 64px PNG·ICO와 180px Apple touch icon도 제공합니다. 이메일 아이콘은 `src/assets/images/common/email.svg`입니다. 디자인 기록은 `docs/visual-direction.md`에 있습니다.
