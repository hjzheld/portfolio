import styled from 'styled-components';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Container from '@/components/common/Container';
import SelectedWork from '@/components/main/SelectedWork';
import useFirstPageVisit from '@/hooks/useFirstPageVisit';

gsap.registerPlugin(useGSAP);

const Page = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: visible;
`;

const ProjectContent =
  styled.div`
    position: relative;

    width: 100%;

    /*
     * 프로젝트 화면이
     * transition보다 먼저 보이는 것 방지
     */
    visibility: hidden;

    clip-path:
      circle(
        0%
        at
        50%
        50%
      );

    will-change:
      clip-path;
  `;

const PageTransition =
  styled.div`
    position: fixed;

    inset: 0;

    z-index: 5000;

    overflow: hidden;

    pointer-events: none;
  `;

const TransitionPanel =
  styled.div`
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    will-change:
      transform;
  `;

const BluePanel = styled(
  TransitionPanel,
)`
  z-index: 1;

  background:
    var(
      --project-transition-blue
    );
`;

const LavenderPanel = styled(
  TransitionPanel,
)`
  z-index: 2;

  background:
    var(
      --project-transition-lavender
    );
`;

const MistPanel = styled(
  TransitionPanel,
)`
  z-index: 3;

  background:
    var(
      --project-transition-mist
    );
`;

const TransitionDecoration =
  styled.div`
    position: absolute;

    inset: 0;

    z-index: 4;

    pointer-events: none;
  `;

const TransitionCircle =
  styled.div`
    position: absolute;

    left: 50%;
    top: 50%;

    width: min(
      44vw,
      520px
    );

    aspect-ratio: 1;

    transform:
      translate(
        -50%,
        -50%
      );

    border:
      1px solid
      var(
        --project-transition-line
      );

    border-radius: 50%;

    opacity: 0.75;

    box-shadow:
      0
      20px
      60px
      var(
        --project-transition-shadow
      );

    &::before {
      content: "";

      position: absolute;

      inset: 12%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.7;
    }

    &::after {
      content: "";

      position: absolute;

      inset: 27%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.5;
    }

    @media (
      max-width:
      768px
    ) {
      width: 72vw;
    }

    @media (
      max-width:
      480px
    ) {
      width: 86vw;
    }
  `;

const TransitionContent =
  styled.div`
    position: absolute;

    left: 50%;
    top: 50%;

    z-index: 5;

    transform:
      translate(
        -50%,
        -50%
      );

    display: flex;

    flex-direction: column;

    align-items:
      center;

    text-align:
      center;

    pointer-events:
      none;
  `;

const TransitionLabel =
  styled.span`
    margin-bottom:
      0.75rem;

    color:
      var(
        --project-transition-text
      );

    font-family:
      var(--font-en);

    font-size:
      0.67rem;

    font-weight:
      500;

    letter-spacing:
      0.2em;
  `;

const TransitionTitle =
  styled.strong`
    color:
      var(--gray-100);

    font-family:
      var(--font-en);

    font-size:
      clamp(
        2.8rem,
        7vw,
        6rem
      );

    font-weight:
      600;

    line-height:
      0.95;

    letter-spacing:
      -0.06em;

    white-space:
      nowrap;

    @media (
      max-width:
      480px
    ) {
      font-size:
        clamp(
          2.3rem,
          15vw,
          4rem
        );
    }
  `;

const TransitionLine =
  styled.div`
    width: 52px;
    height: 1px;

    margin-top:
      1.2rem;

    background:
      var(
        --primary-color
      );

    transform-origin:
      center;
  `;

const Header = styled.header`
  &&& { border:var(--clay-border); border-radius:32px; background:var(--surface-neutral); box-shadow:var(--clay-shadow); }

  && { border-radius:32px 32px 90px 32px; padding:3rem 2.5rem; border:1px solid var(--vanilla); background:linear-gradient(0deg,var(--lemon-paper),var(--lemon-paper)) padding-box; position:relative; }
  &&::before { content:''; display:none; height:30px; margin:-2.5rem -2rem 2rem; border-bottom:1px solid var(--vanilla); background:var(--mauve); }
  && span { font-family:var(--font-editorial); font-style:italic; }

  max-width: 1200px; margin: 2.5rem auto 0; padding: 0 1rem;
  span { font-size: .8rem; letter-spacing: .12em; color: var(--gray-400); }
  h1 { margin: .75rem 0 1rem; font-size: clamp(2rem,5vw,3.5rem); line-height: 1.3; }
  p { max-width: 680px; line-height: 1.8; color: var(--gray-400); word-break: keep-all; }
`;

export default function PortfolioPage() {
  const firstVisit = useFirstPageVisit('projects');
  const pageRef = useRef<HTMLDivElement>(null);
  const shouldSkipIntroRef = useRef(!firstVisit);
  const introDoneRef = useRef(false);
    useGSAP(
      () => {
        const content =
          pageRef.current
            ?.querySelector<HTMLElement>(
              ".project-content",
            );

        const overlay =
          pageRef.current
            ?.querySelector<HTMLElement>(
              ".project-transition",
            );

        if (
          !content ||
          !overlay
        ) {
          return;
        }

        const reducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

        const skipIntro =
          shouldSkipIntroRef.current;

        /* =================================================
           상세 → 뒤로가기
        ================================================= */

        if (
          skipIntro ||
          reducedMotion
        ) {
          /* ===============================
             PAGE TRANSITION 제거
          =============================== */

          gsap.set(
            overlay,
            {
              display:
                "none",
            },
          );

          /* ===============================
             실제 페이지 즉시 표시
          =============================== */

          gsap.set(
            content,
            {
              visibility:
                "visible",

              clipPath:
                "none",

              zIndex:
                "auto",
            },
          );

          /* ===============================
             혹시 남은 inline animation 제거
          =============================== */

          gsap.set(
            [
              ".project-page-intro",
              ".project-category",
              ".project-card",
            ],
            {
              clearProps:
                "opacity,transform",
            },
          );

          introDoneRef.current = true;

          // Revisit skips only the full-screen transition. Keep the original
          // title, category and card entrances without waiting for the overlay.
          if (!reducedMotion) {
            const entrance = gsap.timeline();
            entrance
              .fromTo('.project-page-intro',
                { opacity: 0, y: 22 },
                { opacity: 1, y: 0, duration: 0.48, ease: 'power3.out', clearProps: 'transform,opacity' })
              .fromTo('.project-category',
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }, '-=0.25')
              .fromTo('.project-card',
                { opacity: 0, y: 58, scale: 0.94, rotation: (index: number) => index % 2 === 0 ? -3.2 : 3.2, transformOrigin: '50% 100%' },
                { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.72, stagger: { each: 0.075, from: 'start' }, ease: 'back.out(1.55)', clearProps: 'transform,opacity' }, '-=0.12');
            return () => { entrance.kill(); };
          }

          return;
        }

        /* =================================================
           NORMAL PAGE ENTER
        ================================================= */

        introDoneRef.current =
          false;

        /* =================================================
           INTRO 동안 페이지 스크롤 잠금
        ================================================= */

        const prevBodyOverflow =
          document.body.style.overflow;

        const prevHtmlOverflow =
          document.documentElement.style.overflow;

        document.body.style.overflow =
          "hidden";

        document.documentElement.style.overflow =
          "hidden";

        /* =================================================
           ACTUAL CONTENT INITIAL
        ================================================= */

        gsap.set(
          content,
          {
            visibility:
              "hidden",

            clipPath:
              "circle(0% at 50% 50%)",

            zIndex:
              "auto",
          },
        );

        /* ===============================
           PAGE TITLE
        =============================== */

        gsap.set(
          ".project-page-intro",
          {
            opacity:
              0,

            y:
              22,
          },
        );

        /* ===============================
           CATEGORY
        =============================== */

        gsap.set(
          ".project-category",
          {
            opacity:
              0,

            y:
              16,
          },
        );

        /* ===============================
           CARD INITIAL

           홀수 / 짝수마다
           회전 방향 변경
        =============================== */

        gsap.set(
          ".project-card",
          {
            opacity:
              0,

            y:
              58,

            scale:
              0.94,

            rotation: (
              index: number,
            ) =>
              index %
                  2 ===
                0
                ? -3.2
                : 3.2,

            transformOrigin:
              "50% 100%",
          },
        );

        /* =================================================
           PAGE TRANSITION INITIAL
        ================================================= */

        gsap.set(
          overlay,
          {
            display:
              "block",

            visibility:
              "visible",

            opacity:
              1,
          },
        );

        gsap.set(
          ".transition-blue",
          {
            xPercent:
              0,
          },
        );

        gsap.set(
          ".transition-lavender",
          {
            xPercent:
              0,
          },
        );

        gsap.set(
          ".transition-mist",
          {
            xPercent:
              0,
          },
        );

        gsap.set(
          ".transition-circle",
          {
            opacity:
              1,

            scale:
              1,
          },
        );

        gsap.set(
          ".transition-content",
          {
            opacity:
              1,

            scale:
              1,
          },
        );

        /* =================================================
           TIMELINE
        ================================================= */

        const tl =
          gsap.timeline({
            defaults: {
              overwrite:
                "auto",
            },
          });

        /* =================================================
           CIRCLE
        ================================================= */

        tl.from(
          ".transition-circle",
          {
            opacity:
              0,

            scale:
              0.8,

            duration:
              0.65,

            ease:
              "power3.out",
          },
        );

        /* =================================================
           LABEL
        ================================================= */

        tl.from(
          ".transition-label",
          {
            opacity:
              0,

            y:
              8,

            duration:
              0.3,

            ease:
              "power2.out",
          },

          "-=0.38",
        );

        /* =================================================
           PROJECTS
        ================================================= */

        tl.from(
          ".transition-title",
          {
            opacity:
              0,

            y:
              20,

            scale:
              0.96,

            duration:
              0.55,

            ease:
              "power3.out",
          },

          "-=0.25",
        );

        /* =================================================
           LINE
        ================================================= */

        tl.from(
          ".transition-line",
          {
            scaleX:
              0,

            duration:
              0.38,

            ease:
              "power2.out",
          },

          "-=0.25",
        );

        /* =================================================
           PANEL 1
        ================================================= */

        tl.to(
          ".transition-mist",
          {
            xPercent:
              100,

            duration:
              0.58,

            ease:
              "power3.inOut",
          },

          "+=0.08",
        );

        /* =================================================
           PANEL 2
        ================================================= */

        tl.to(
          ".transition-lavender",
          {
            xPercent:
              -100,

            duration:
              0.62,

            ease:
              "power3.inOut",
          },

          "-=0.34",
        );

        /* =================================================
           PANEL 3
        ================================================= */

        tl.to(
          ".transition-blue",
          {
            xPercent:
              100,

            duration:
              0.68,

            ease:
              "power4.inOut",
          },

          "-=0.35",
        );

        /* =================================================
           TEXT OUT
        ================================================= */

        tl.to(
          ".transition-content",
          {
            opacity:
              0,

            scale:
              0.95,

            duration:
              0.3,

            ease:
              "power2.in",
          },

          "-=0.42",
        );

        tl.to(
          ".transition-circle",
          {
            opacity:
              0,

            scale:
              1.15,

            duration:
              0.35,

            ease:
              "power2.in",
          },

          "<",
        );

        /* =================================================
           ACTUAL PAGE 준비
        ================================================= */

        tl.set(
          content,
          {
            visibility:
              "visible",

            zIndex:
              5001,
          },
        );

        /* =================================================
           CIRCLE PAGE REVEAL
        ================================================= */

        tl.to(
          content,
          {
            clipPath:
              "circle(150% at 50% 50%)",

            duration:
              1.05,

            ease:
              "power4.inOut",
          },
        );

        /* =================================================
           TRANSITION 제거
        ================================================= */

        tl.set(
          overlay,
          {
            visibility:
              "hidden",
          },
        );

        tl.set(
          content,
          {
            clipPath:
              "none",

            zIndex:
              "auto",

            visibility:
              "visible",
          },
        );

        /* =================================================
           PROJECT TITLE
        ================================================= */

        tl.to(
          ".project-page-intro",
          {
            opacity:
              1,

            y:
              0,

            duration:
              0.48,

            ease:
              "power3.out",

            clearProps:
              "transform,opacity",
          },
        );

        /* =================================================
           CATEGORY
        ================================================= */

        tl.to(
          ".project-category",
          {
            opacity:
              1,

            y:
              0,

            duration:
              0.4,

            ease:
              "power2.out",

            clearProps:
              "transform,opacity",
          },

          "-=0.25",
        );

        /* =================================================
           PROJECT CARD

           Rotation
           +
           Back Ease
        ================================================= */

        tl.to(
          ".project-card",
          {
            opacity:
              1,

            y:
              0,

            scale:
              1,

            rotation:
              0,

            duration:
              0.72,

            stagger: {
              each:
                0.075,

              from:
                "start",
            },

            ease:
              "back.out(1.55)",

            clearProps:
              "transform,opacity",
          },

          "-=0.12",
        );

        /* =================================================
           DONE
        ================================================= */

        tl.call(
          () => {
            introDoneRef.current =
              true;

            document.body.style.overflow =
              prevBodyOverflow;

            document.documentElement.style.overflow =
              prevHtmlOverflow;
          },
        );

        return () => {
          tl.kill();

          document.body.style.overflow =
            prevBodyOverflow;

          document.documentElement.style.overflow =
            prevHtmlOverflow;
        };
      },

      {
        scope:
          pageRef,
      },
    );


  return <Page ref={pageRef}>
        <PageTransition className="project-transition">
          {/* BASE */}

          <BluePanel className="transition-blue" />

          {/* MIDDLE */}

          <LavenderPanel className="transition-lavender" />

          {/* FRONT */}

          <MistPanel className="transition-mist" />

          {/* CIRCLE */}

          <TransitionDecoration>
            <TransitionCircle className="transition-circle" />
          </TransitionDecoration>

          {/* TEXT */}

          <TransitionContent className="transition-content">
            <TransitionLabel className="transition-label">
              02 / PROJECT
            </TransitionLabel>

            <TransitionTitle className="transition-title">
              PROJECTS
            </TransitionTitle>

            <TransitionLine className="transition-line" />
          </TransitionContent>
        </PageTransition>


    <ProjectContent className="project-content">
      <Container>
        <Header className="project-page-intro"><h1>포트폴리오</h1>
          <p>직접 기획한 서비스와 팀 프로젝트를 모았습니다. 회사에서 담당한 서비스 개발 사례는 경력에서 확인할 수 있습니다.</p>
        </Header>
        <SelectedWork />
      </Container>
    </ProjectContent>
  </Page>;
}
