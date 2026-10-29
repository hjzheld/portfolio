// 프로젝트 이미지
import yamiyagi from '@/assets/images/detail/yamiyagi.png';
import hojinMain from '@/assets/images/detail/hojin_main.png';
import hojinDetail from '@/assets/images/detail/hojin_detail.png';
import petmung from '@/assets/images/detail/petmung.png';
import portfolio from '@/assets/images/detail/portfolio.png';
import invitation from '@/assets/images/detail/invitation.png';
import haetnanyong from '@/assets/images/detail/haetnanyong.png';
import hojinVideo from '/public/hojin_video.mp4';


import type { Projects } from '@/types/project';

const projects: Projects[] = [
    {
        id: 1,
        kind: '개인·팀',
        title: '야미야기',
        content: '아이들의 상상력으로 만들어지는 동화 웹사이트',
        mainTab: 'back',
        subTab: 'django',
        tags: ['Python', 'Django', 'PostgreSQL'],
        detail: {
            notion: 'https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a',
            notion_vedio: 'https://teamsparta.notion.site/7a49bd323df7456ebd58e9bb32360a8d',
            blog: [],
            content: `
            아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. 
            <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  
            <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. 
            <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.
            <br /><br /> 총 인원 6명이 참여했습니다.
            <br /> 저는 구글, 카카오톡, 네이버 소셜 로그인을 가장 크게 담당했고,
            <br /> 최근 조회한 목록, 북마크한 내서재, 내가 생성한 동화 목록을 모아보고
            <br /> 프로필 수정이 가능한 마이페이지를 담당했습니다.   
            `,
            image: [{ type:'image', src: yamiyagi }],
            stack: {
                back: ['Python', 'Django', 'DRF(Django REST Framework)', 'Oauth 2.0'],
                front: ['DTL(Django Template Language)', 'JavaScript', 'CSS3'],
                database: ['PostgreSQL'],
                ai: ['ChatGPT API', 'DALL-E API', 'DeePL API', 'Perspective API']
            }
        }
    },
    {
        id: 2,
        kind: '개인·팀',
        title: '펫뭉',
        content: `애완동물 용품 쇼핑몰 RESTful API 서버`,
        mainTab: 'back',
        subTab: 'fastapi',
        tags: ['Python', 'FastAPI', 'MySQL'],
        detail: {
            github: 'https://github.com/Pet-Mung/Back',
            blog: [],
            // site: 'https://typefront.vercel.app/',
            content:  `
            프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트로 저는 백엔드를 맡아 진행했습니다.
            <br/> FastAPI 를 활용하여 로그인, 유저/판매자 구분 회원가입, 상품 crud, 장바구니 및 결제처리를 구현한 사이트입니다.
            <br/> 배포도구로는 Render를 사용했고, DB 는 supabase 를 사용했습니다.
            <br/> Render 설정 조정하여 깃허브 머지 됐을 때 자동으로 빌드되게 설정했습니다.
            `,
            image: [{ type:'image', src: petmung }],
            stack: {
                back: ['Python', 'FastAPI', 'Oauth 2.0'],
                database: ['supabase', 'postgreSQL'],
                build: ['Render']
            }
        }
    },
    {
        id: 3,
        kind: '개인·팀',
        title: '호진일보',
        content: '네이버 연애뉴스 모아보기 웹 사이트',
        mainTab: 'front',
        subTab: 'vue',
        tags: ['Vue', 'Vite', 'JavaScript'],
        detail: {
            github: 'https://github.com/HoJin-s/selenium_practice',
            blog: [],
            content: `
            매일 네이버 뉴스 연애 기사 랭킹 4위까지 가져오는 크롤링 프로젝트입니다. 
            <br/> 프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트입니다.
            <br/> 이 프로젝트에서 저는 프론트엔드 개발을 맡았으며, 백엔드는 Django로 구현했습니다. 
            <br/> Django 템플릿을 Vue로 빌드한 페이지로 연동하여 프론트와 백엔드를 효과적으로 연결했습니다.
            `,
            video: hojinVideo ,
            image: [
                { type:'image', src: hojinMain },
                { type:'image', src: hojinDetail }
             ],
            stack: {
                back: ['Python', 'Django', 'DRF(Django REST Framework)', 'Selenium'],
                front: ['Vue', 'Vite', 'JavaScript', 'CSS3'],
                database: ['supabase', 'postgreSQL'],
                build: ['Render']
            }
        }
    },
    {
        id: 4,
        kind: '개인·팀',
        title: '포트폴리오',
        content: '자기소개 및 프로젝트를 소개하는 사이트',
        mainTab: 'front',
        subTab: 'react',
        tags: ['React', 'Vite', 'TypeScript'],
        detail: {
            github: 'https://github.com/hjzheld/portfolio',
            blog: [],
            content: `
            리액트로 만든 프로젝트입니다.
            <br/> 혼자 진행한 프로젝트입니다.
            <br/> GitHub Actions 기반 CI/CD 파이프라인을 구축하여, 
            <br /> 머지 시 자동 빌드와 실서버 배포가 이루어지도록 배포 프로세스를 자동화했습니다.
            <br /> 자기 소개 및 그동안의 경력, 학력과 프로젝트 기록을 확인할 수 있습니다.
            <br /> 특히 경력에서 자세하게 어떤 업무를 맡았고, 어떤 성장으로 했는지 확인할 수 있습니다.
            `,
            image: [{ type:'image', src: portfolio }],
            stack: {
                front: ['React', 'Vite', 'TypeScript'],
                build: ['Github']
            }
        }
    },
    {
        id: 5,
        kind: '개인·팀',
        title: '팔순잔치 초대장',
        content: '모바일 환경에 최적화된 팔순잔치 초대장 웹사이트',
        mainTab: 'front',
        subTab: 'vue',
        tags: ['Vue', 'Vite', 'JavaScript'],
        detail: {
            site: 'https://hjzheld.github.io/birthday/',
            github: 'https://github.com/hjzheld/birthday',
            blog: [],
            content: `
            팔순잔치를 위해 직접 기획하고 제작한 모바일 초대장 웹사이트입니다.
            <br/> 행사 소개, 초대글, 날짜 및 시간, 장소와 주차 정보를 한 페이지에서 확인할 수 있도록 구성했습니다.
            <br/> 배경음악을 적용하고 사용자가 직접 음악을 재생하거나 중지할 수 있도록 기능을 구현했습니다.
            <br/> Intersection Observer를 활용하여 스크롤 위치에 따라 콘텐츠가 자연스럽게 나타나는 애니메이션을 구현했습니다.
            <br/> 네이버 지도와 카카오 지도를 연동하여 행사 장소와 주차장까지 바로 길찾기가 가능하도록 구현했습니다.
            <br/> 모바일 환경을 중심으로 반응형 UI를 구성하여 다양한 화면 크기에서도 자연스럽게 표시되도록 작업했습니다.
            <br/> GitHub Actions 기반 CI/CD를 구성하여 main 브랜치에 Push하면 자동으로 빌드 후 GitHub Pages에 배포되도록 구현했습니다.
            `,
            image: [
            { type: 'image', src: invitation }
            ],
            stack: {
            front: ['Vue', 'Vite', 'JavaScript', 'CSS3'],
            build: ['GitHub Actions', 'GitHub Pages']
            }
        }
    },

    // 개인 풀스택 및 실무 프로젝트. 상세 내용도 이 배열에서 관리합니다.
{
    id: 101,
    title: "교육 플랫폼 · 사용자와 관리자 흐름 구축",
    content: "프로젝트 설계·Git·환경 연결부터 사용자·관리자 화면과 공통 컴포넌트까지 구축",
    kind: "실무",
    mainTab: "front",
    subTab: "vue",
    tags: [
        "Vue 3",
        "프로젝트 설계",
        "Git",
        "공통 컴포넌트",
        "REST API",
        "반응형 UI"
    ],
    detail: {
        content: "프로젝트 설계·Git·환경 연결부터 사용자·관리자 화면과 공통 컴포넌트까지 구축",
        image: [],
        stack: {},
        sections: [
            [
                "프로젝트 설계와 개발 환경 구성",
                "교육 플랫폼의 프로젝트 설계부터 Git 저장소 연결, 테스트 서버·운영 서버 연결을 직접 담당했습니다. 초기 라우팅·로그인 상태·API 연동 구조를 구성하고 사용자 사이트와 관리자 화면을 개발했습니다."
            ],
            [
                "사용자·관리자 기능 구현",
                "로그인·회원가입·수강 신청·마이페이지와 관리자 기수·출석 관리를 담당했습니다. 기수 상태와 접수·얼리버드·강의 일정, 교시별 출석·지각·결석 및 입실·퇴실 시간을 다뤘습니다."
            ],
            [
                "공통 UI 설계와 구현",
                "Figma 시안을 화면으로 구현하고 버튼·카드·모달 등 여러 화면에서 사용하는 공통 컴포넌트를 작업했습니다. 반복되는 UI와 동작을 재사용할 수 있도록 구성하고 공통 옵션·필터도 정리했습니다."
            ],
            [
                "상태와 데이터 처리",
                "기수 상태와 날짜 조건을 함께 UI에 반영하고 API 응답을 화면 데이터 형태로 정리했습니다. 출석 상태와 실제 저장 시간을 함께 처리했습니다."
            ],
            [
                "배포 환경과 운영",
                "테스트 서버와 운영 서버에 프로젝트를 연결하고 각 환경의 빌드·배포를 점검했습니다. PC·태블릿·모바일 반응형 화면을 구현했습니다."
            ]
        ]
    }
},
{
    id: 102,
    title: "Nuxt 서비스 인수 · 인증·결제·권한 개선",
    content: "기존 코드를 분석하고 운영 기능과 신규 개발을 함께 이어간 경험",
    kind: "실무",
    mainTab: "front",
    subTab: "nuxt",
    tags: [
        "Nuxt",
        "Vue",
        "인증",
        "결제·권한",
        "Docker · Nginx"
    ],
    detail: {
        content: "기존 코드를 분석하고 운영 기능과 신규 개발을 함께 이어간 경험",
        image: [],
        stack: {},
        sections: [
            [
                "배경과 역할",
                "외주 개발 중이던 Nuxt 프로젝트를 인수해 코드·컴포넌트·API·상태 관리와 실행 구조를 분석했습니다. 기존 기능 유지와 신규 개발, QA와 배포를 담당했습니다."
            ],
            [
                "인증과 비즈니스 흐름",
                "Access Token 만료 시 Refresh Token 재발급 후 기존 요청을 재처리하는 흐름을 구현했습니다. 패키지·구독·할인·결제 API와 결제 완료 이후 상태 처리를 연결했습니다."
            ],
            [
                "구조 개선",
                "사용자 구독 상태와 권한 유효기간에 따라 페이지·기능 접근을 제어했습니다. 중복 코드와 UI를 공통 컴포넌트로 분리하고 공통 책임과 서비스별 정책 차이를 정리했습니다."
            ],
            [
                "운영과 검증 범위",
                "Docker·Nginx 기반 빌드와 배포 버전을 관리하고 QA 과정의 오류를 분석했습니다. 동시 요청 제어나 장애 복구에 관해 확인되지 않은 구현 결과는 추가하지 않았습니다."
            ]
        ]
    }
},
{
    id: 103,
    title: "가상자산 데이터 시각화 · 실시간 화면",
    content: "API 데이터 가공부터 차트와 반응형 화면까지 구현",
    kind: "실무",
    mainTab: "front",
    subTab: "vue",
    tags: [
        "Vue · Nuxt",
        "REST API",
        "WebSocket",
        "TradingView",
        "ZingChart"
    ],
    detail: {
        content: "API 데이터 가공부터 차트와 반응형 화면까지 구현",
        image: [],
        stack: {},
        sections: [
            [
                "배경과 담당 범위",
                "가상자산 시세·분석 데이터와 관리자 화면을 개발했습니다. TradingView·ZingChart로 차트 8종과 데이터 리스트 2종을 구현했습니다."
            ],
            [
                "데이터와 화면 연결",
                "REST API 데이터를 화면 요구사항에 맞춰 가공하고 차트에 연결했습니다. 실무 서비스에서 WebSocket 데이터 수신과 화면 반영, 구매 조건·권한에 따른 접근 제어도 담당했습니다."
            ],
            [
                "사용 환경 대응",
                "PC·모바일 반응형 UI, Vue I18n 기반 다국어 처리와 Android WebView 연동·디버깅을 경험했습니다."
            ],
            [
                "검증 범위와 개선 과제",
                "구현 범위와 별개로 처리량·지연 시간·최적화율은 측정 자료가 없어 제시하지 않습니다. 실시간 연결 복구와 데이터 순서의 운영 지표는 추가로 정리할 과제입니다."
            ]
        ]
    }
},
{
    id: 106,
    title: "Android WebView 서비스 · 알림·다국어·권한 UI",
    content: "앱 내 웹 화면의 알림 설정, 다국어와 구독·권한별 접근 제어 구현",
    kind: "실무",
    mainTab: "front",
    subTab: "vue",
    tags: [
        "Android WebView",
        "Vue I18n",
        "알림 설정",
        "접근 제어"
    ],
    detail: {
        content: "앱 내 웹 화면의 알림 설정, 다국어와 구독·권한별 접근 제어 구현",
        image: [],
        stack: {},
        sections: [
            [
                "담당 범위",
                "Android WebView에서 사용하는 서비스의 웹 화면을 개발하고 앱 내 환경에서 연동·디버깅을 수행했습니다."
            ],
            [
                "핵심 구현",
                "알림 활성화와 수신 항목 등록 기능을 개발했습니다. Vue I18n 기반 다국어 환경을 구성하고 구독 상태·사용자 권한에 따라 페이지와 기능 접근을 제어했습니다."
            ],
            [
                "웹과 앱 환경 대응",
                "모바일 화면을 구현하고 Android WebView에서의 동작을 확인하며 오류를 분석했습니다. 이 사례의 담당 범위는 앱 내 웹 화면과 연동·디버깅이며, 네이티브 앱 전체 개발이나 스토어 출시를 수행한 경력으로 기재하지 않습니다."
            ]
        ]
    }
},
{
    id: 104,
    title: "했냐옹 · 개인 일정과 Slack 알림",
    content: "Nuxt·TypeScript로 구현하고 실제 환경에서 검증한 일정 관리 서비스",
    kind: "개인",
    mainTab: "fullstack",
    subTab: "nuxt",
    tags: [
        "Nuxt 4",
        "Vue 3",
        "TypeScript",
        "Nitro",
        "Neon PostgreSQL",
        "Slack API"
    ],
    detail: {
        content: "Nuxt·TypeScript로 구현하고 실제 환경에서 검증한 일정 관리 서비스",
        image: [
            {
                type: "image",
                src: haetnanyong
            }
        ],
        stack: {
            front: [
                "Nuxt 4",
                "Vue 3",
                "TypeScript"
            ],
            back: [
                "Nitro"
            ],
            database: [
                "Neon PostgreSQL"
            ]
        },
        sections: [
            [
                "문제와 구현 범위",
                "여러 프로젝트와 개인 계획에 흩어진 일정·할 일을 한곳에서 관리하기 위해 만들었습니다. 일정·할 일 CRUD, 완료·프로젝트 보관·복원, 홈 요약·월간 캘린더, 계정 관리와 Slack OAuth·알림 예약을 구현했습니다. 팀원 초대·공유 권한은 구현하지 않았습니다."
            ],
            [
                "본인 역할과 AI 활용",
                "기능 범위·화면 방향·우선순위를 정하고 외부 계정 설정, 배포와 실제 사용 확인을 직접 진행했습니다. ChatGPT는 기획·구조 검토에, IDE AI 도구는 화면·API·SQL 구현과 오류 분석·검사에 활용했습니다."
            ],
            [
                "문제 → 판단 → 해결 · 불확실한 알림",
                "예약 결과가 불확실할 때 다시 예약하면 중복될 수 있어 상태를 보존하고 Slack 예약 목록과 재확인하도록 처리했습니다. 예약 접수나 시간 경과를 실제 수신 성공으로 판단하지 않았습니다."
            ],
            [
                "환경별 UI와 실제 수신 검증",
                "특정 PC에서 언어·테마 선택이 닫히기만 하는 문제는 포커스 목적지가 null일 때 닫는 처리를 보완한 뒤 해당 PC의 실제 마우스로 확인했습니다. 수정 전 이벤트 순서는 기록되지 않아 원인 추정과 결과를 구분했습니다. Slack messages_tab_disabled 응답은 앱 설정 수정 후 테스트 DM·예약 메시지 실제 수신으로 검증했습니다."
            ],
            [
                "검증과 한계",
                "저장 실패 시 입력을 보존하고 재시도의 프로젝트 중복 생성을 방지했습니다. 보관 조건은 서버에서도 확인하도록 보완했습니다. README에 기록된 모의 API 검사·타입·빌드 통과는 실제 DB 동시 요청·대량 데이터·Slack 장애 검증과 구분합니다."
            ]
        ],
        site: "https://haetnanyong.vercel.app/",
        github: "https://github.com/hjzheld/haetnanyong"
    }
},
{
    id: 105,
    title: "Python 거래소 데이터 집계 · 운영 자동화",
    content: "날짜 구간과 거래소 데이터를 가공하고 외부 연동을 다룬 경험",
    kind: "자동화",
    mainTab: "back",
    subTab: "python",
    tags: [
        "Python",
        "REST API",
        "Crontab",
        "데이터 가공"
    ],
    detail: {
        content: "날짜 구간과 거래소 데이터를 가공하고 외부 연동을 다룬 경험",
        image: [],
        stack: {},
        sections: [
            [
                "담당 범위",
                "거래소 데이터 조회·가공, 일별 정산 집계·보정과 외부 API 데이터 전송을 수행했습니다. 정기 작업 실행·로그 확인, Slack·Google Sheets 연계 자동화 경험이 있습니다."
            ],
            [
                "주간 집계 로직",
                "OKX·BingX·DeepCoin·Binance·Gateio를 대상으로 한국 시간 기준 전주 월요일부터 일요일까지의 날짜 구간과 데이터 가공을 Python으로 처리했습니다."
            ],
            [
                "경험의 범위",
                "서버 데이터 흐름을 이해하고 업무에 필요한 자동화를 수행한 보조 경험입니다. 주간 집계 운영 배포 여부·DB 연결 방식·장애 복구 완성도는 확인되지 않아 기재하지 않았습니다."
            ]
        ]
    }
},
{
    id: 107,
    title: "운영 서비스 리뉴얼 · 권한·결제 구조 개선",
    content: "서비스 정책 변경에 맞춰 접근 제어와 결제 데이터 흐름을 재정비",
    kind: "실무",
    mainTab: "front",
    subTab: "nuxt",
    tags: [
        "Nuxt",
        "Refactoring",
        "권한·결제",
        "상태 관리"
    ],
    detail: {
        content: "서비스 정책 변경에 맞춰 접근 제어와 결제 데이터 흐름을 재정비",
        image: [],
        stack: {},
        sections: [
            [
                "배경과 담당 범위",
                "운영 중인 서비스의 권한·결제 시스템을 변경된 정책에 맞춰 재검토하고 리뉴얼했습니다."
            ],
            [
                "접근 제어 재정비",
                "사용자 구독 상태와 권한 유효기간에 따른 접근 제어를 정리했습니다. 페이지·기능의 이용 조건이 서비스 정책을 따르도록 구조를 변경했습니다."
            ],
            [
                "결제와 상태 흐름 개선",
                "패키지·결제 시스템의 데이터 흐름과 상태 관리 구조를 변경했습니다. 복잡하게 연결된 권한·결제 로직과 컴포넌트 책임을 분리해 유지보수성을 개선했습니다."
            ],
            [
                "신규 개발과 다른 판단",
                "기존 운영 코드와 정책의 연결을 분석한 뒤 변경 범위를 정했습니다. 신규 서비스 구축과 구분되는 기존 서비스 리뉴얼 경험이며, 별도로 측정하지 않은 성능·매출 개선 수치는 제시하지 않습니다."
            ]
        ]
    }
},
{
    id: 108,
    title: "관리자 조직도 · 회원 관계 관리",
    content: "추천·조직 구조와 노드 탐색 기능 구현",
    kind: "실무",
    mainTab: "front",
    subTab: "vue",
    tags: [
        "관리자 UI",
        "조직도",
        "데이터 관계"
    ],
    detail: {
        content: "추천·조직 구조와 노드 탐색 기능 구현",
        image: [],
        stack: {},
        sections: [
            [
                "담당 범위",
                "회원 추천·조직 구조를 관리하는 관리자 기능을 개발했습니다."
            ],
            [
                "구현 내용",
                "상위 회원 변경 시 하위 조직이 함께 이동하는 로직을 적용했습니다. 검색·선택 노드 강조·자동 확대 기능을 구현해 관리자가 조직 관계와 선택한 노드를 확인할 수 있도록 했습니다."
            ]
        ]
    }
},
{
    id: 109,
    title: "서비스 컨버팅 · 공통 기능과 정책 분리",
    content: "기존 Nuxt 서비스를 새로운 서비스 정책에 맞춰 변환",
    kind: "실무",
    mainTab: "front",
    subTab: "nuxt",
    tags: [
        "Nuxt",
        "컴포넌트 재사용",
        "정책 분리"
    ],
    detail: {
        content: "기존 Nuxt 서비스를 새로운 서비스 정책에 맞춰 변환",
        image: [],
        stack: {},
        sections: [
            [
                "담당 범위",
                "기존 Nuxt 서비스 구조와 기능을 새로운 서비스 정책에 맞게 변환했습니다."
            ],
            [
                "구현 내용",
                "공통 코드는 재사용하고 UI·권한·결제 정책의 차이는 분리했습니다. 두 서비스를 각각 유지보수할 수 있도록 구조를 구성했습니다."
            ]
        ]
    }
},
{
    id: 110,
    title: "공통 컴포넌트 · 중복 코드 리팩터링",
    content: "반복 UI와 기능 책임을 정리해 화면 간 일관성 확보",
    kind: "실무",
    mainTab: "front",
    subTab: "vue",
    tags: [
        "공통 UI",
        "Refactoring",
        "재사용"
    ],
    detail: {
        content: "반복 UI와 기능 책임을 정리해 화면 간 일관성 확보",
        image: [],
        stack: {},
        sections: [
            [
                "담당 범위",
                "여러 프로젝트에서 사용하는 버튼·카드·모달 등의 공통 UI를 작업하고 운영 중인 화면의 중복 코드를 정리했습니다."
            ],
            [
                "구현 내용",
                "유지보수가 어려운 구조를 개선하고 공통 컴포넌트의 책임과 재사용 범위를 정리했습니다. 여러 화면에 반복되는 UI와 동작을 공통으로 관리하도록 구성했습니다."
            ]
        ]
    }
}
]

export default projects;