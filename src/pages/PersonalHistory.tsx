import { Link } from "react-router-dom";
import styled from "styled-components";
import ClayCompanion from "@/components/common/ClayCompanion";
import useFirstPageVisit from "@/hooks/useFirstPageVisit";
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* =========================================================
   INTRO OVERLAY
========================================================= */

const ShapeOverlay = styled.svg`
  position: fixed;
  inset: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .shape-overlays__path {
    will-change: d;
  }
`;

const IntroMark = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  color: var(--ink);
  font-family: var(--font-en);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  pointer-events: none;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.64rem;
  }
`;

/* =========================================================
   LAYOUT
========================================================= */

const Page = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5rem 0 7rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.75rem 0 4rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem;
  }
`;

const Section = styled.section`
  padding: 5rem 0 0;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const SectionLine = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 3.5rem;
  background: linear-gradient(
    90deg,
    rgba(249, 220, 229, 0),
    rgba(249, 220, 229, 0.36),
    rgba(249, 220, 229, 0)
  );
  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: end;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const SectionHeaderLeft = styled.div`
  min-width:0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;


const SectionTitle = styled.h2`
  min-width:0; word-break:keep-all; overflow-wrap:anywhere;
  @media(max-width:480px) { && { font-size:clamp(1.5rem,6.2vw,1.9rem); line-height:1.4; } }

  color: var(--gray-100);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.045em;
`;

const SectionDescription = styled.p`
  color: var(--gray-400);
  font-size: 0.9rem;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`;

/* =========================================================
   HERO
========================================================= */

const Hero = styled.section`
  &&&& { background:var(--surface-mint); }
  .career-friends { display:flex; justify-content:flex-end; align-items:flex-end; gap:.7rem; margin-top:1rem; margin-bottom:-.5rem; }

  &&& { background:var(--clay-cream); border:var(--clay-border); border-radius:34px; box-shadow:var(--clay-shadow); }

  && { background:var(--lemon-paper); border:1px solid var(--vanilla); border-radius:28px; box-shadow:0 12px 28px rgba(78, 81, 85,.07); }
  &&::before { border-radius:50%; width:180px; height:180px; top:-60px; right:-30px; background:rgba(220, 236, 248,.3); }
  &&::after { display:none; }

  position: relative;
  width: 100%;
  margin-top: 1.5rem;
  padding: clamp(2rem, 5vw, 4.8rem);
  overflow: hidden;
  border: 1px solid rgba(255, 251, 253, 0.65);
  border-radius: 34px;
  background: linear-gradient(
    135deg,
    rgba(255, 251, 253, 0.7),
    rgba(251, 246, 249, 0.58)
  );
  box-shadow:
    0 24px 60px rgba(99, 99, 99, 0.08),
    0 8px 24px rgba(133, 129, 133, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 320px;
    height: 320px;
    right: -110px;
    top: -130px;
    background: rgba(133, 129, 133, 0.13);
  }

  &::after {
    width: 220px;
    height: 220px;
    left: -90px;
    bottom: -120px;
    background: rgba(220, 236, 248, 0.16);
  }

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    padding: 2.3rem 1.5rem;
    border-radius: 26px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.2rem;
    border-radius: 22px;
  }
`;


const HeroTitle = styled.h1`
  position: relative;
  z-index: 2;
  max-width: 850px;
  color: var(--gray-100);
  font-size: clamp(1.7rem, 3vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
  word-break: keep-all;

  strong {
    color: var(--primary-color);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.35rem, 8.5vw, 4rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.05rem, 10vw, 3rem);
    line-height: 1.13;
  }
`;

const HeroDescription = styled.p`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin-top: 1.6rem;
  color: var(--gray-400);
  font-size: 1rem;
  line-height: 1.9;
  word-break: keep-all;

  strong {
    color: var(--gray-100);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.94rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.25rem;
    font-size: 0.88rem;
    line-height: 1.8;
  }
`;

const SummaryGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 2.2rem;
  }
`;

const SummaryItem = styled.div`
  && { background:var(--surface-neutral); border:var(--clay-border); box-shadow:inset 2px 2px 4px rgba(255,255,255,.65),3px 5px 9px rgba(85,100,90,.05); }
  &&:nth-child(2) { background:var(--surface-peach); }
  &&:nth-child(3) { background:var(--surface-blue); }
  &&:nth-child(4) { background:#f2ead9; }

  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid rgba(133, 129, 133, 0.14);
  border-radius: 18px;
  background: rgba(255, 251, 253, 0.46);
  box-shadow: 0 8px 24px rgba(133, 129, 133, 0.08);

  @media (max-width: 480px) {
    min-height: 96px;
    gap: 1rem;
  }
`;

const SummaryLabel = styled.span`
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.64rem;
  letter-spacing: 0.11em;
`;

const SummaryValue = styled.strong`
  color: var(--gray-100);
  font-size: 1.16rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

/* =========================================================
   KEYWORDS
========================================================= */

const KeywordSection = styled.section`
  padding: 4.5rem 0 0;

  @media (max-width: 768px) {
    padding-top: 3.5rem;
  }
`;

const KeywordTitle = styled.div`
  margin-bottom: 1.2rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.13em;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Keyword = styled.span`
  padding: 0.58rem 0.9rem;
  border: 1px solid rgba(133, 129, 133, 0.12);
  border-radius: 999px;
  background: rgba(255, 251, 253, 0.38);
  color: var(--gray-400);
  font-size: 0.78rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: var(--gray-100);
    border-color: rgba(133, 129, 133, 0.3);
    background: rgba(251, 246, 249, 0.75);
  }
`;

/* =========================================================
   SHARED CARD
========================================================= */

const GlassCard = styled(motion.article)`
  min-width:0; max-width:100%; overflow-wrap:anywhere;
  && { border:var(--clay-border); border-radius:28px; background:var(--surface-neutral); box-shadow:var(--clay-shadow); backdrop-filter:none; }

  border: 1px solid rgba(255, 251, 253, 0.72);
  border-radius: 24px;
  background: linear-gradient(
    145deg,
    rgba(255, 251, 253, 0.66),
    rgba(251, 246, 249, 0.46)
  );
  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 4px 14px rgba(133, 129, 133, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`;


const CardTitle = styled.h3`
  overflow-wrap:anywhere;
  @media(max-width:480px) { && { font-size:1.08rem; line-height:1.55; } }

  color: var(--gray-100);
  font-size: 1.22rem;
  line-height: 1.45;
  letter-spacing: -0.03em;
  word-break: keep-all;
`;

const CardText = styled.p`
  margin-top: 0.75rem;
  color: var(--gray-400);
  font-size: 0.86rem;
  line-height: 1.75;
  word-break: keep-all;
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 1rem;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1rem;
  color: var(--gray-100);
  font-size: 0.84rem;
  line-height: 1.7;
  word-break: keep-all;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.68rem;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(133, 129, 133, 0.9);
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.2rem;
`;

const Tag = styled.span`
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(133, 129, 133, 0.13);
  border-radius: 999px;
  background: rgba(255, 251, 253, 0.45);
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.67rem;
`;

/* =========================================================
   CORE COMPETENCY
========================================================= */

const CompetencyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const CompetencyCard = styled(GlassCard)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  min-height: 235px;
  padding: 1.5rem;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(133, 129, 133, 0.28);
  }
`;

const CompetencyIndex = styled.span`
  display: block;
  margin-bottom: 2rem;
  color: var(--primary-color);
  font-family: var(--font-en);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

const CompetencyName = styled.h3`
  color: var(--gray-100);
  font-family: var(--font-en);
  font-size: 1rem;
  font-weight: 600;
`;

const CompetencyDescription = styled.p`
  margin-top: 0.55rem;
  color: var(--gray-400);
  font-size: 0.85rem;
  line-height: 1.75;
  word-break: keep-all;
`;

/* =========================================================
   CAREER SUMMARY
========================================================= */

const CareerSummaryCard = styled(GlassCard)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  padding: 2.2rem;

  @media (max-width: 560px) {
    padding: 1.4rem;
  }
`;

const CareerSummaryHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(133, 129, 133, 0.15);

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
`;

const CareerCompany = styled.h3`
  color: var(--gray-100);
  font-size: clamp(1.55rem, 3vw, 2rem);
  letter-spacing: -0.04em;
`;

const CareerRole = styled.p`
  margin-top: 0.45rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.82rem;
`;

const CareerDate = styled.div`
  text-align: right;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.8rem;

  span {
    display: inline-flex;
    margin-top: 0.65rem;
    padding: 0.35rem 0.62rem;
    border-radius: 999px;
    background: rgba(133, 129, 133, 0.1);
    color: var(--primary-color);
    font-size: 0.64rem;
    font-weight: 600;
  }

  @media (max-width: 650px) {
    text-align: left;
  }
`;

const CareerSummaryBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
`;

const CareerSummaryLead = styled.p`
  color: var(--gray-100);
  font-size: 0.95rem;
  line-height: 1.85;
  word-break: keep-all;
`;

const MiniMetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
`;

const MiniMetric = styled.div`
  padding: 0.9rem;
  border: 1px solid rgba(133, 129, 133, 0.11);
  border-radius: 14px;
  background: rgba(255, 251, 253, 0.4);

  span {
    display: block;
    color: var(--gray-400);
    font-family: var(--font-en);
    font-size: 0.6rem;
    letter-spacing: 0.07em;
  }

  strong {
    display: block;
    margin-top: 0.4rem;
    color: var(--gray-100);
    font-size: 0.86rem;
    line-height: 1.45;
  }
`;

/* =========================================================
   SELECTED PROJECTS
========================================================= */

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const DetailAction = styled(Link)`
  min-width:0; line-height:1.6; overflow-wrap:anywhere;
  span { flex-shrink:0; }
  @media(max-width:480px) { &&& { padding:.85rem; font-size:.8rem; } }

  &&& { background:var(--clay-cream); border:var(--clay-border); border-radius:18px; box-shadow:inset 2px 2px 5px rgba(255,255,255,.9),3px 4px 9px rgba(90,96,78,.08); color:var(--ink); }
  &&& span { background:var(--clay-mint); border-radius:50%; box-shadow:inset 1px 1px 3px rgba(255,255,255,.6); }

  && { border-radius:12px; border:1px solid var(--sage); background:transparent; color:var(--ink); }
  &&:hover { background:var(--jet-stream); }
  && span { background:var(--jet-stream); border-radius:3px; }

  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  margin-top: 1.5rem; padding: 1rem 1.1rem; border: 1px solid rgba(133, 129, 133,.35);
  border-radius: 12px; background: rgba(255, 251, 253,.6); color: #3e5149;
  font-size: .85rem; font-weight: 600; transition: background .2s, border-color .2s;
  span { display:grid; place-items:center; width:30px; height:30px; border-radius:50%; background:#f3d3c9; font-size:1.15rem; }
  &:hover { background:#f5e6c8; border-color:#64736b; }
`;

const SelectedProjectCard = styled(GlassCard)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(4n+2) { background:var(--surface-mint); }
  &&&&:nth-child(4n+3) { background:var(--surface-peach); }
  &&&&:nth-child(4n+4) { background:var(--surface-neutral); }

  &&& { border:var(--clay-border); border-radius:28px; box-shadow:var(--clay-shadow); background:var(--clay-cream); }
  &&&:nth-child(4n+2) { background:#e1ece5; }
  &&&:nth-child(4n+3) { background:#f5ded4; }
  &&&:nth-child(4n+4) { background:#dfedf0; }

  && { border-radius:24px; border:1px solid var(--vanilla); background:var(--paper); box-shadow:0 10px 20px rgba(78, 81, 85,.06); }
  &:nth-child(4n+1) { background:#e4eddd; }
  &:nth-child(4n+2) { background:#f7edda; }
  &:nth-child(4n+3) { background:#f7e4dc; }
  &:nth-child(4n+4) { background:#e3eef0; }

  position: relative;
  padding: 1.7rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1.4rem;
    bottom: 1.4rem;
    width: 2px;
    background: rgba(133, 129, 133, 0.72);
    border-radius: 999px;
  }
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const ProjectNumber = styled.span`
  display:flex; align-items:center; gap:.5rem;
  flex-shrink: 0;
  color: rgba(133, 129, 133, 0.55);
  font-family: var(--font-en);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
`;

const ProjectHighlight = styled.div`
  margin-top: 1.25rem;
  padding: 0.95rem 1rem;
  border: 1px solid rgba(133, 129, 133, 0.12);
  border-radius: 14px;
  background: rgba(133, 129, 133, 0.06);
  color: var(--gray-100);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.6;
`;

/* =========================================================
   OTHER EXPERIENCE
========================================================= */

const OtherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const OtherCard = styled(GlassCard)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(4n+2) { background:var(--surface-mint); }
  &&&&:nth-child(4n+3) { background:var(--surface-peach); }
  &&&&:nth-child(4n+4) { background:var(--surface-neutral); }

  &&& { border:var(--clay-border); border-radius:28px; box-shadow:var(--clay-shadow); background:var(--clay-cream); }
  &&&:nth-child(4n+2) { background:#e1ece5; }
  &&&:nth-child(4n+3) { background:#f5ded4; }
  &&&:nth-child(4n+4) { background:#dfedf0; }

  && { border-radius:24px; border:1px solid var(--vanilla); background:var(--paper); }

  padding: 1.35rem;
`;

/* =========================================================
   SUPPORTING EXPERIENCE
========================================================= */

const SupportingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const SupportingCard = styled(GlassCard)<{ $wide?: boolean }>`
  @media(max-width:480px) { && { padding:1.25rem; } }

  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};
  padding: 1.7rem;

  @media (max-width: 800px) {
    grid-column: auto;
  }
`;

const FlowList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.2rem;
`;

const FlowStep = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--gray-100);
  font-size: 0.76rem;

  &:not(:last-child)::after {
    content: "→";
    color: rgba(133, 129, 133, 0.65);
  }
`;

/* =========================================================
   PREVIOUS EXPERIENCE
========================================================= */

const PreviousGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const PreviousCard = styled(GlassCard)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  padding: 1.5rem;
`;

const PreviousMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.72rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

/* =========================================================
   BOTTOM
========================================================= */

const BottomMessage = styled.div`
  position: relative;
  margin-top: 5rem;
  padding: 3rem;
  overflow: hidden;
  border: 1px solid rgba(255, 251, 253, 0.65);
  border-radius: 26px;
  background: linear-gradient(
    135deg,
    rgba(255, 251, 253, 0.54),
    rgba(249, 220, 229, 0.58)
  );
  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 5px 18px rgba(133, 129, 133, 0.09);

  &::after {
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    right: -70px;
    top: -100px;
    border-radius: 50%;
    background: rgba(133, 129, 133, 0.12);
  }

  h2,
  p {
    position: relative;
    z-index: 2;
  }

  h2 {
    margin-bottom: 0.8rem;
    color: var(--gray-100);
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    letter-spacing: -0.04em;
  }

  p {
    max-width: 780px;
    color: var(--gray-400);
    font-size: 0.9rem;
    line-height: 1.8;
    word-break: keep-all;
  }

  @media (max-width: 480px) {
    margin-top: 3.5rem;
    padding: 1.8rem 1.35rem;
    border-radius: 20px;
  }
`;

/* =========================================================
   DATA
========================================================= */

const summaryStats = [
  ["EXPERIENCE", "2024.01 ~ ing [2+ Years]"],
  ["MAIN ROLE", "Frontend"],
  ["SCOPE", "Full-cycle"],
  ["TEAM", "Lead · QA"],
];

const keywords = [
  "Vue.js",
  "Nuxt.js",
  "React",
  "TypeScript",
  "REST API",
  "WebSocket",
  "TradingView",
  "ZingChart",
  "Android WebView",
  "Figma",
  "Payment / Subscription",
  "Authorization",
  "Docker",
  "Nginx",
  "Team Lead",
  "QA",
];

const coreCompetencies = [
  {
    name: "Frontend Architecture",
    description:
      "신규 프로젝트의 라우팅·인증·API 연동 구조와 공통 컴포넌트를 설계하고, 유지보수와 재사용을 고려해 초기 프론트엔드 구조를 구성합니다.",
  },
  {
    name: "Business Logic",
    description:
      "인증·결제·구독·할인·권한처럼 사용자 상태와 서비스 정책이 맞물리는 핵심 비즈니스 로직을 화면과 API 흐름에 연결합니다.",
  },
  {
    name: "Legacy & Refactoring",
    description:
      "외주·기존 프로젝트를 인수해 코드를 분석하고 신규 기능을 안정적으로 추가하며, 복잡한 구조를 기능별 책임으로 분리해 개선합니다.",
  },
  {
    name: "Data & Visualization",
    description:
      "REST API·WebSocket 데이터를 화면에 연결하고 TradingView·ZingChart 등을 활용해 실시간·금융 데이터를 시각화합니다.",
  },
  {
    name: "UI Implementation",
    description:
      "별도 퍼블리셔 없이 Figma 시안을 기반으로 직접 UI를 구현하고 PC·Mobile·Android WebView 환경에 맞춰 반응형으로 대응합니다.",
  },
  {
    name: "Team Lead & QA",
    description:
      "프론트엔드 업무 분배·일정 조율·지연 이슈 대응을 진행하고, 기능 오류와 예외 상황을 직접 확인하며 자체 QA까지 수행합니다.",
  },
  {
    name: "Problem Solving & Ownership",
    description:
      "문제가 발생했을 때 화면 코드에 한정하지 않고 상태 관리·라우팅·인증·API·데이터 흐름·렌더링 및 개발 환경까지 범위를 넓혀 원인을 추적합니다. 병목과 기능 책임을 구분해 적절한 해결 방법을 선택하고, 필요한 경우 공통 구조 개선과 성능 최적화까지 연결합니다.",
  },
];

const careerSummaryBullets = [
  "Vue.js·Nuxt.js 기반 사용자 및 관리자 페이지 개발",
  "신규 기능 개발 시 상태 관리·라우팅·API 흐름까지 고려해 기능 구조 설계",
  "프로젝트별 초기 구조 설계, Git 저장소 연결과 테스트·운영 환경 구성",
  "버튼·카드·모달 등 재사용 가능한 공통 컴포넌트 설계·구현",
  "결제·구독·할인·사용자 권한 및 접근 제어 로직 구현",
  "REST API·WebSocket 연동 및 금융 데이터 시각화",
  "외주·운영 서비스 인수, 리팩토링, 컨버팅 및 전면 리뉴얼",
  "별도 퍼블리셔 없이 Figma 기반 UI 직접 구현",
  "사용자 로딩 성능과 개발 환경의 병목을 구분해 성능·빌드 환경 개선",
  "Docker·Nginx 기반 빌드·배포와 운영 환경 대응",
  "팀 업무 분배·일정 관리·오류 분석·자체 QA",
];

const selectedProjects = [
  {
    title: "Nuxt 기반 가상자산 서비스 인수 및 구조 개선",
    projectId: 102,
    subtitle: "외주 프로젝트 인수 · 인증 · 결제 · 권한 · 운영",
    bullets: [
      "외주 업체가 개발하던 대규모 Nuxt 프로젝트를 인수해 기존 코드와 실행 구조 분석",
      "Access Token 만료 시 Refresh Token 재발급 후 기존 요청을 재처리하는 인증 흐름 구현",
      "패키지·구독·할인·결제 API 및 결제 완료 이후 상태 처리 개발",
      "사용자 구독 상태·권한 유효기간에 따른 페이지 및 기능 접근 제어 구현",
      "Docker·Nginx 기반 빌드 및 배포 버전 관리",
    ],
    tags: ["Nuxt", "Vue", "Auth", "Payment", "Docker", "Nginx"],
    highlight:
      "기존 코드를 빠르게 파악해 운영 중인 서비스에 신규 기능을 안정적으로 연결한 경험",
  },
  {
    title: "교육 플랫폼 신규 구축 및 프론트엔드 구조 설계",
    projectId: 101,
    subtitle: "프로젝트 설계 · Git · 테스트/운영 환경 · 공통 UI",
    bullets: [
      "로그인·회원가입·수강신청·마이페이지 및 관리자 기수·출석 화면 개발",
      "프로젝트 설계부터 Git 저장소 연결, 테스트 서버·운영 서버 연결까지 담당",
      "초기 라우터·로그인 상태·API 연동 구조와 버튼·카드·모달 공통 컴포넌트 구현",
      "별도 퍼블리셔 없이 Figma 디자인 시안을 기준으로 UI 직접 구현",
      "Access/Refresh Token 인증 흐름 및 로그인 상태별 라우터 접근 제어 구성",
      "코드 컨벤션과 Oxfmt 포맷팅 환경을 도입해 코드 작성 기준 정리",
    ],
    tags: ["Vue", "프로젝트 설계", "Git", "공통 컴포넌트", "REST API", "배포 환경"],
    highlight:
      "설계·저장소·테스트/운영 환경 연결부터 공통 UI와 서비스 화면까지 구축",
  },
  {
    title: "가상자산 데이터 시각화 대시보드 개발",
    projectId: 103,
    subtitle: "TradingView · ZingChart · Responsive Data UI",
    bullets: [
      "TradingView·ZingChart를 활용해 총 8개의 차트와 2개의 데이터 리스트 구현",
      "API 데이터 구조를 화면 요구사항에 맞춰 가공하고 각 차트에 연결",
      "PC와 모바일 환경을 고려한 반응형 데이터 UI 구성",
      "짧은 일정 안에서 라이브러리 실제 사용 코드를 분석해 필요한 기능을 적용",
    ],
    tags: ["TradingView", "ZingChart", "REST API", "Responsive", "Data"],
    highlight: "Chart 8 · Data List 2 — 결과물이 수치로 명확하게 남는 데이터 시각화 프로젝트",
  },
  {
    title: "운영 서비스 전면 리뉴얼 및 권한·결제 구조 개선",
    projectId: 107,
    subtitle: "Refactoring · State Flow · Authorization · Payment",
    bullets: [
      "기존 서비스의 권한 및 결제 시스템을 변경된 정책 기준으로 전면 재검토",
      "사용자 구독 상태·권한 기한에 따른 접근 제어 구조 재정비",
      "패키지·결제 시스템의 데이터 흐름과 상태 관리 구조 변경",
      "복잡하게 연결된 권한·결제 로직과 컴포넌트 책임을 분리해 유지보수성 개선",
    ],
    tags: ["Nuxt", "Refactoring", "Authorization", "Payment", "State"],
    highlight:
      "신규 개발보다 더 어려운 운영 코드의 구조를 분석하고 정책 변경에 대응하기 쉬운 형태로 개선",
  },
];

selectedProjects.unshift(...selectedProjects.splice(1, 1));

const otherExperiences = [
  {
    title: "Android WebView 서비스",
    projectId: 106,
    bullets: [
      "알림 활성화·수신 항목 등록 기능 개발",
      "Vue I18n 기반 다국어 환경 구성",
      "구독·권한 상태별 페이지 및 기능 접근 제어",
    ],
  },
  {
    title: "관리자 조직도 기능",
    projectId: 108,
    bullets: [
      "회원 추천·조직 구조 관리 기능 개발",
      "상위 회원 변경 시 하위 조직 이동 로직 적용",
      "검색·선택 노드 강조·자동 확대를 통해 관리자 사용성 개선",
    ],
  },
  {
    title: "서비스 컨버팅",
    projectId: 109,
    bullets: [
      "기존 Nuxt 서비스 구조와 기능을 새로운 서비스 정책에 맞게 변환",
      "공통 코드는 재사용하고 UI·권한·결제 정책 차이는 분리",
      "두 서비스를 각각 유지보수할 수 있도록 구조화",
    ],
  },
  {
    title: "공통 컴포넌트 리팩토링",
    projectId: 110,
    bullets: [
      "운영 중 확인된 중복 코드와 유지보수가 어려운 구조 개선",
      "공통 컴포넌트를 세분화하고 재사용 범위를 확대",
      "화면 간 일관성과 이후 개발 효율 향상",
    ],
  },
];

const yummyYagiFlow = [
  "User Flow",
  "Process Flow",
  "Figma",
  "ERD",
  "API Design",
  "Back-end",
  "Front-end",
  "QA",
  "User Feedback",
  "Improvement",
];

const OptimizationResults = styled.div`
  margin-top: 1.5rem;
  h3 { margin-bottom: 1rem; color: var(--gray-100); font-size: 1.1rem; }
  .table-scroll { width:100%; max-width:100%; min-width:0; overflow-x:auto; }
  table { width: 100%; min-width: 340px; border-collapse: collapse; font-size: .85rem; color: var(--gray-100); }
  th, td { text-align: left; padding: .8rem .6rem; border-bottom: 1px solid rgba(99,99,99,.2); line-height: 1.6; }
  th { font-weight: 700; }
  p { margin-top: 1rem; color: var(--gray-400); font-size: .85rem; line-height: 1.9; }
`;

const supportingExperiences = [
  {
    key: "backend",
    wide: true,
    eyebrow: "PRACTICAL BACK-END EXPERIENCE",
    title: "실무에서 직접 개발한 Back-end & System Integration",
    text: "프론트엔드를 주 업무로 하면서도 서비스 운영과 외부 시스템 연동에 필요한 백엔드 기능을 실무에서 직접 개발했습니다. 화면에서 끝나는 개발이 아니라 DB부터 외부 API, 자동화 작업까지 이어지는 데이터 흐름을 함께 이해하고 대응할 수 있습니다.",
    bullets: [
      "DB 데이터를 조회·가공해 외부 업체에서 사용할 수 있는 데이터 구조로 변환",
      "민감한 사용자 정보를 암호화해 외부 시스템으로 전달하는 연동 로직 구현",
      "Crontab 기반 정기 데이터 전송 작업 자동화 및 실행 결과 로그 관리",
      "외부 API에서 전달받은 암호화 데이터를 서버에서 복호화하고 프론트엔드용 데이터로 가공",
      "프론트엔드 API 연동 과정에서 필요한 백엔드 기능 수정 및 오류 원인 분석",
      "Front-end와 Back-end 양쪽 흐름을 확인하며 API·데이터 연동 문제 대응",
    ],
    tags: [
      "Back-end",
      "DB",
      "API Integration",
      "Encryption",
      "Crontab",
      "Troubleshooting",
    ],
  },
  {
    key: "yummyyagi",
    eyebrow: "SUB EXPERIENCE / YUMMYYAGI",
    title: "설계부터 Front-end · Back-end · QA까지 경험한 Full-cycle Project",
    text: "AI 기반 동화 생성 서비스 ‘야미야기’에서는 서비스 기획·설계부터 Front-end와 Back-end 구현, QA와 사용자 피드백 반영까지 전체 개발 사이클을 경험했습니다. 현업 개발자가 참여한 최종 프로젝트 평가에서 1위를 기록했습니다.",
    bullets: [
      "사용자 행동과 화면 이동을 기준으로 User Flow 설계",
      "기능별 처리 과정과 시스템 동작을 정리한 Process Flow 설계",
      "Figma 기반 화면 구조와 기능 흐름 구체화",
      "서비스 데이터 구조 정의 및 ERD 설계",
      "Front-end와 Back-end 데이터 흐름을 고려한 REST API 설계",
      "Python·Django 기반 Back-end와 Front-end 개발 모두 참여",
      "Google OAuth 라이브러리 오류를 분석하고 별도 로직으로 소셜 로그인 구현",
      "기능 QA·예외 상황 검증 후 실제 사용자 피드백을 수집하고 개선 사항 반영",
    ],
    tags: [
      "User Flow",
      "Process Flow",
      "ERD",
      "API Design",
      "Python",
      "Django",
      "QA",
    ],
  },
  {
    key: "performance",
    eyebrow: "PERFORMANCE & OPTIMIZATION",
    title: "Vue Router Lazy Loading으로 메인 JS 번들 약 77.9% 감소",
    text: "Vue 3·Vite 프로젝트에서 500KB 초과 청크 경고를 분석했습니다. 페이지 컴포넌트의 정적 import를 Dynamic Import로 바꾸고, 54개 페이지 및 하위 화면에 Route-level Lazy Loading을 적용해 메인 JS를 1,414.26KB에서 약 312KB로 분리했습니다.",
    bullets: [
      "Vue Router 페이지 컴포넌트를 () => import(...) 방식으로 변경해 페이지 접근 시 필요한 코드를 비동기 로드",
      "54개 페이지·하위 화면을 코드 분할해 78개 청크로 구성하고 기존 라우팅 경로·리다이렉트·인증 로직 유지",
      "프로덕션 빌드 기준 메인 JS 약 77.9% 감소, 메인 gzip 336.68KB → 75.19KB, 500KB 초과 경고 해소",
      "초기 화면 렌더링에 필요한 핵심 이미지는 우선 로드하고, 즉시 필요하지 않은 이미지는 Lazy Loading으로 분리해 초기 로딩 부담 감소",
      "CRA 기반 프로젝트를 Vite로 전환해 개발 서버 구동과 HMR 환경을 개선하고 반복 개발 시 발생하는 대기 시간 감소",
      "node_modules·.git·빌드 산출물 등 개발에 불필요한 경로를 파일 감시 대상에서 제외해 개발 환경의 리소스 사용 감소",
      "Production Build에서 불필요한 console 코드를 제거해 운영 빌드에 개발용 로그가 포함되지 않도록 정리",
      "단순히 최적화 기법을 적용하는 데 그치지 않고 사용자 로딩과 개발 환경의 병목을 구분한 뒤 각 문제에 맞는 개선 방법 적용",
    ],
    tags: [
      "Vue 3",
      "Vue Router",
      "Dynamic Import",
      "Code Splitting",
      "Lazy Loading",
      "Vite",
      "HMR",
      "Build Optimization",
      "Performance",
      "Troubleshooting",
    ],
  },
  {
    key: "qa",
    eyebrow: "QA & USER FEEDBACK",
    title: "구현 이후 실제 사용성을 다시 검증",
    text: "기능 구현을 완료로 보지 않고 실제 사용자 흐름에서 오류와 불편을 확인한 뒤 개선까지 연결하는 과정을 경험했습니다.",
    bullets: [
      "기능 QA 및 예외 상황 검증",
      "주요 사용자 흐름과 사용성 직접 확인",
      "사용자 테스트 및 피드백 수집",
      "피드백을 바탕으로 기능·UI 개선 항목을 정리하고 반영",
      "수정 이후 재검증을 통해 정상 동작과 개선 여부 확인",
    ],
    tags: ["QA", "User Test", "Feedback", "UX Improvement", "Iteration"],
  },
];

const previousExperiences = [
  {
    company: "내일배움캠프",
    role: "Web Development Bootcamp",
    date: "2023.08 ~ 2023.12",
    text: "Python·Django를 중심으로 웹 개발을 학습하고 개인·팀 프로젝트를 통해 Figma, ERD, API 설계, Front-end·Back-end 개발까지 웹 서비스 개발 전 과정을 경험했습니다.",
  },
  {
    company: "씨인스원보험컨설팅 주식회사",
    role: "Insurance Administration",
    date: "2022.01 ~ 2023.04",
    text: "보험 해지 환급 관련 업무를 담당했습니다.",
  },
];

/* =========================================================
   MOTION
========================================================= */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const isKakaoInApp =
  typeof navigator !== "undefined" && /KAKAOTALK/i.test(navigator.userAgent);

const motionProps = {
  variants: cardVariants,
  initial: "hidden" as const,
  animate: isKakaoInApp ? ("visible" as const) : undefined,
  whileInView: !isKakaoInApp ? ("visible" as const) : undefined,
  viewport: {
    once: true,
    amount: 0.1,
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export const PersonalHistory = () => {
  const firstVisit = useFirstPageVisit("career");
  const pageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<SVGSVGElement>(null);
  const overlayPathRefs = useRef<Array<SVGPathElement | null>>([]);
  const introMarkRef = useRef<HTMLDivElement>(null);
  const pageMotionProps = motionProps;


  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const overlay = overlayRef.current;
      const overlayPaths = overlayPathRefs.current.filter(
        (path): path is SVGPathElement => Boolean(path),
      );

      if (reducedMotion) {
        if (overlay) gsap.set(overlay, { autoAlpha: 0 });
        if (introMarkRef.current) {
          gsap.set(introMarkRef.current, { autoAlpha: 0 });
        }
        return;
      }

      const originalBodyOverflow = document.body.style.overflow;
      if (!firstVisit) {
        if (overlay) gsap.set(overlay, { autoAlpha: 0 });
        if (introMarkRef.current) gsap.set(introMarkRef.current, { autoAlpha: 0 });
      }

      if (firstVisit) {
      document.body.style.overflow = "hidden";

      const numPoints = 10;
      const numPaths = overlayPaths.length;
      const delayPointsMax = 0.18;
      const delayPerPath = 0.12;
      const waveDuration = 0.82;

      const allPoints = Array.from({ length: numPaths }, () =>
        Array.from({ length: numPoints }, () => ({ value: 100 })),
      );

      const renderOverlay = () => {
        overlayPaths.forEach((path, pathIndex) => {
          const points = allPoints[pathIndex];
          let d = `M 0 ${points[0].value} C`;

          for (let index = 0; index < numPoints - 1; index += 1) {
            const percentage = ((index + 1) / (numPoints - 1)) * 100;
            const controlPoint = percentage - (100 / (numPoints - 1)) / 2;

            d += ` ${controlPoint} ${points[index].value}`;
            d += ` ${controlPoint} ${points[index + 1].value}`;
            d += ` ${percentage} ${points[index + 1].value}`;
          }

          d += " V 0 H 0";
          path.setAttribute("d", d);
        });
      };

      renderOverlay();

      if (overlay) gsap.set(overlay, { autoAlpha: 1 });
      if (introMarkRef.current) {
        gsap.set(introMarkRef.current, { autoAlpha: 1, y: 0 });
      }

      const pointsDelay = Array.from(
        { length: numPoints },
        () => Math.random() * delayPointsMax,
      );

      const overlayTl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onUpdate: renderOverlay,
        onComplete: () => {
          document.body.style.overflow = originalBodyOverflow;
          if (overlay) gsap.set(overlay, { autoAlpha: 0 });
          ScrollTrigger.refresh();
        },
      });

      if (introMarkRef.current) {
        overlayTl.to(
          introMarkRef.current,
          {
            opacity: 0,
            y: -8,
            duration: 0.28,
            ease: "power2.out",
          },
          0.18,
        );
      }

      allPoints.forEach((points, pathIndex) => {
        const pathDelay = delayPerPath * (numPaths - pathIndex - 1);

        points.forEach((point, pointIndex) => {
          overlayTl.to(
            point,
            {
              value: 0,
              duration: waveDuration,
              ease: "power2.inOut",
            },
            0.28 + pointsDelay[pointIndex] + pathDelay,
          );
        });
      });

      }

      const heroTl = gsap.timeline({
        delay: firstVisit ? 0.82 : 0,
        defaults: { ease: "power3.out" },
      });

      heroTl
        .to({}, { duration: 0.45 })
        .from(
          ".career-title",
          {
            opacity: 0,
            y: 38,
            duration: 0.75,
          },
          "-=0.12",
        )
        .from(
          ".career-description",
          {
            opacity: 0,
            y: 18,
            duration: 0.55,
          },
          "-=0.38",
        )
        .from(
          ".summary-item",
          {
            opacity: 0,
            y: 18,
            scale: 0.98,
            stagger: 0.07,
            duration: 0.45,
          },
          "-=0.28",
        );

      gsap.utils.toArray<HTMLElement>(".section-line").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 92%",
          },
        });
      });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
      };
    },
    { scope: pageRef },
  );

  return (
    <Page ref={pageRef}>
      <IntroMark ref={introMarkRef} aria-hidden="true" style={firstVisit ? undefined : { display: "none" }}>
        <span />
        경력
      </IntroMark>

      <ShapeOverlay
        ref={overlayRef}
        className="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="careerOverlayBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C3DDE1" />
            <stop offset="100%" stopColor="#BFD9CD" />
          </linearGradient>
          <linearGradient id="careerOverlayFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3C7B6" />
            <stop offset="100%" stopColor="#F2D1CC" />
          </linearGradient>
        </defs>

        <path
          ref={(element) => {
            overlayPathRefs.current[0] = element;
          }}
          className="shape-overlays__path"
          fill="url(#careerOverlayBack)"
        />
        <path
          ref={(element) => {
            overlayPathRefs.current[1] = element;
          }}
          className="shape-overlays__path"
          fill="url(#careerOverlayFront)"
        />
      </ShapeOverlay>

      <Inner>
        {/* =================================================
            HERO
        ================================================= */}
        <Hero>


          <HeroTitle className="career-title">
            서비스 전체 흐름을 이해하며
            <br />
            <strong>프론트엔드를 설계하고 개선합니다.</strong>
          </HeroTitle>

          <HeroDescription className="career-description">
            백엔드 개발자로 시작해 프론트엔드로 영역을 확장했고, 현재는 Vue.js·Nuxt.js 기반 서비스 개발을 중심으로 일하고 있습니다.
            단순 화면 구현에 그치지 않고 요구사항과 데이터 흐름을 분석해 <strong>라우팅·인증·상태 관리·API 연동 구조를 설계</strong>하며,
            결제·권한과 같은 비즈니스 로직부터 리팩토링·오류 분석·QA까지 서비스 전체 흐름을 기준으로 문제를 해결합니다.
          </HeroDescription>

          <div className="career-friends"><ClayCompanion tone="blue" size={54} round /><ClayCompanion tone="peach" size={42} /></div>
          <SummaryGrid>
            {summaryStats.map(([label, value]) => (
              <SummaryItem className="summary-item" key={`${label}-${value}`}>
                <SummaryLabel>{label}</SummaryLabel>
                <SummaryValue>{value}</SummaryValue>
              </SummaryItem>
            ))}
          </SummaryGrid>
        </Hero>

        {/* =================================================
            KEY EXPERIENCE
        ================================================= */}
        <KeywordSection>
          <KeywordTitle>사용 기술</KeywordTitle>
          <KeywordList>
            {keywords.map((keyword) => (
              <Keyword key={keyword}>{keyword}</Keyword>
            ))}
          </KeywordList>
        </KeywordSection>

        {/* =================================================
            CORE COMPETENCY
        ================================================= */}
        <Section>
          <SectionLine className="section-line" />
          <SectionHeader>
            <SectionHeaderLeft>

              <SectionTitle>핵심 역량</SectionTitle>
            </SectionHeaderLeft>
            <SectionDescription>
              기술 이름보다 실제 프로젝트에서 반복해서 사용해 온 문제 해결 역량을 중심으로 정리했습니다.
            </SectionDescription>
          </SectionHeader>

          <CompetencyGrid>
            {coreCompetencies.map((item, index) => (
              <CompetencyCard key={item.name} {...pageMotionProps}>
                <CompetencyIndex>{String(index + 1).padStart(2, "0")}</CompetencyIndex>
                <CompetencyName>{item.name}</CompetencyName>
                <CompetencyDescription>{item.description}</CompetencyDescription>
              </CompetencyCard>
            ))}
          </CompetencyGrid>
        </Section>

        {/* =================================================
            CAREER SUMMARY
        ================================================= */}
        <Section>
          <SectionLine className="section-line" />
          <SectionHeader>
            <SectionHeaderLeft>

              <SectionTitle>경력 요약</SectionTitle>
            </SectionHeaderLeft>
            <SectionDescription>
              프로젝트 전반에서 반복해 맡은 설계·공통 UI·개발 환경 구성과 운영 역할을 정리했습니다.
            </SectionDescription>
          </SectionHeader>

          <CareerSummaryCard {...pageMotionProps}>
            <CareerSummaryHeader>
              <div>
                <CareerCompany>블록스퀘어랩스</CareerCompany>
                <CareerRole>Frontend Developer · API Integration · QA</CareerRole>
              </div>
              <CareerDate>
                2024.01.15 ~ 재직중
                <br />
                <span>CURRENT</span>
              </CareerDate>
            </CareerSummaryHeader>

            <CareerSummaryBody>
              <div>
                <CareerSummaryLead>
                  백엔드 개발자로 입사한 뒤 프론트엔드로 역할을 확장했으며, 현재는 Vue.js·Nuxt.js 기반 서비스의 프론트엔드를 주 업무로 담당하고 있습니다.
                  사용자·관리자 화면 구현뿐 아니라 프로젝트 초기 구조, 인증·라우팅·상태 관리·API 연동 방식과 공통 컴포넌트의 책임을 설계하며,
                  결제·구독·권한처럼 여러 상태가 연결되는 비즈니스 로직도 함께 구현합니다. 운영 중 문제가 발생하면 화면 코드에 한정하지 않고
                  API·데이터·백엔드 흐름까지 확인해 원인을 추적하며, 필요한 경우 구조 개선과 QA까지 이어서 처리합니다.
                </CareerSummaryLead>
                <BulletList>
                  {careerSummaryBullets.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>
              </div>

              <MiniMetricGrid>
                <MiniMetric>
                  <span>PROJECT TYPE</span>
                  <strong>신규 구축 · 인수 · 리뉴얼</strong>
                </MiniMetric>
                <MiniMetric>
                  <span>PLATFORM</span>
                  <strong>PC · Mobile · WebView</strong>
                </MiniMetric>
                <MiniMetric>
                  <span>SERVICE LOGIC</span>
                  <strong>Auth · Payment · Permission</strong>
                </MiniMetric>
                <MiniMetric>
                  <span>COLLABORATION</span>
                  <strong>Lead · Schedule · QA</strong>
                </MiniMetric>
              </MiniMetricGrid>
            </CareerSummaryBody>
          </CareerSummaryCard>
        </Section>

        {/* =================================================
            SELECTED PROJECTS
        ================================================= */}
        <Section>
          <SectionLine className="section-line" />
          <SectionHeader>
            <SectionHeaderLeft>

              <SectionTitle>대표 프로젝트</SectionTitle>
            </SectionHeaderLeft>
            <SectionDescription>
              회사에서 담당한 실무 프로젝트의 역할과 핵심 구현입니다. 구체적인 내용은 각 프로젝트 상세에서 확인할 수 있습니다.
            </SectionDescription>
          </SectionHeader>

          <ProjectGrid>
            {selectedProjects.map((project, index) => (
              <SelectedProjectCard key={project.title} {...pageMotionProps}>
                <ProjectTop>
                  <div>

                    <CardTitle>{project.title}</CardTitle>
                    <CardText>{project.subtitle}</CardText>
                  </div>
                  <ProjectNumber><ClayCompanion tone={index % 2 === 0 ? "mint" : "peach"} size={38} />{String(index + 1).padStart(2, "0")}</ProjectNumber>
                </ProjectTop>

                <BulletList>
                  {project.bullets.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>

                <ProjectHighlight>{project.highlight}</ProjectHighlight>
                <DetailAction to={`/personal/work/${project.projectId}`}>구현 내용과 담당 범위<span aria-hidden="true">↗</span></DetailAction>

                <TagList>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagList>
              </SelectedProjectCard>
            ))}
          </ProjectGrid>
        </Section>

        {/* =================================================
            OTHER EXPERIENCE
        ================================================= */}
        <Section>
          <SectionLine className="section-line" />
          <SectionHeader>
            <SectionHeaderLeft>

              <SectionTitle>그 외 실무 경험</SectionTitle>
            </SectionHeaderLeft>
            <SectionDescription>
              대표 프로젝트와 겹치지 않으면서 실무 범위를 보여주는 경험은 짧게 묶었습니다.
            </SectionDescription>
          </SectionHeader>

          <OtherGrid>
            {otherExperiences.map((experience) => (
              <OtherCard key={experience.title} {...pageMotionProps}>
                <CardTitle>{experience.title}</CardTitle>

                <BulletList>
                  {experience.bullets.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>
                <DetailAction to={`/personal/work/${experience.projectId}`}>구현 내용과 담당 범위<span aria-hidden="true">↗</span></DetailAction>
              </OtherCard>
            ))}
          </OtherGrid>
        </Section>

        {/* =================================================
            SUPPORTING EXPERIENCE
        ================================================= */}
        <Section>
          <SectionLine className="section-line" />
          <SectionHeader>
            <SectionHeaderLeft>

              <SectionTitle>Supporting Experience</SectionTitle>
            </SectionHeaderLeft>
            <SectionDescription>
              프론트엔드를 중심으로 일하면서 실무에서 직접 수행한 백엔드 경험을 메인으로, Full-cycle 개발·최적화·QA 경험을 함께 정리했습니다.
            </SectionDescription>
          </SectionHeader>

          <SupportingGrid>
            {supportingExperiences.map((experience) => (
              <SupportingCard
                key={experience.key}
                $wide={experience.wide}
                {...pageMotionProps}
              >

                <CardTitle>{experience.title}</CardTitle>
                <CardText>{experience.text}</CardText>

                <BulletList>
                  {experience.bullets.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>

                {experience.key === "backend" && <DetailAction to="/personal/work/105">데이터 집계·자동화 사례<span aria-hidden="true">↗</span></DetailAction>}

                {experience.key === "performance" && (
                  <OptimizationResults>
                    <h3>페이지 단위 코드 분할 · 빌드 결과 비교</h3>
                    <div className="table-scroll" role="region" aria-label="번들 최적화 결과" tabIndex={0}>
                      <table>
                        <caption style={{ textAlign: "left", marginBottom: ".75rem" }}>동일 프로젝트의 개선 전·후 프로덕션 빌드 기준</caption>
                        <thead><tr><th scope="col">항목</th><th scope="col">개선 전</th><th scope="col">개선 후</th></tr></thead>
                        <tbody>
                          <tr><th scope="row">메인 JS 번들</th><td>1,414.26KB</td><td>약 312KB</td></tr>
                          <tr><th scope="row">메인 gzip</th><td>336.68KB</td><td>75.19KB</td></tr>
                          <tr><th scope="row">전체 JS 합계</th><td>1,414.26KB</td><td>1,452.70KB</td></tr>
                          <tr><th scope="row">청크 구조</th><td>대형 번들 중심</td><td>78개 청크</td></tr>
                          <tr><th scope="row">500KB 초과 경고</th><td>발생</td><td>해소</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p>전체 JavaScript 합계가 감소한 결과가 아닙니다. 메인 번들을 페이지별로 나눠 초기 화면에서 내려받는 코드의 부담을 줄였습니다. 실제 LCP와 로딩 시간 개선 수치는 별도로 측정하지 않았습니다.</p>
                  </OptimizationResults>
                )}

                {experience.key === "yummyyagi" && (
                  <FlowList aria-label="YummyYagi development flow">
                    {yummyYagiFlow.map((step) => (
                      <FlowStep key={step}>{step}</FlowStep>
                    ))}
                  </FlowList>
                )}

                <TagList>
                  {experience.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagList>
              </SupportingCard>
            ))}
          </SupportingGrid>
        </Section>

        {/* =================================================
            PREVIOUS EXPERIENCE
        ================================================= */}
        <Section>
          <SectionLine className="section-line" />
          <SectionHeader>
            <SectionHeaderLeft>

              <SectionTitle>이전 경험</SectionTitle>
            </SectionHeaderLeft>
            <SectionDescription>
              현재 개발 경력으로 이어지기 전의 교육 및 직무 경험은 필요한 내용만 간단히 정리했습니다.
            </SectionDescription>
          </SectionHeader>

          <PreviousGrid>
            {previousExperiences.map((experience) => (
              <PreviousCard key={experience.company} {...pageMotionProps}>
                <PreviousMeta>
                  <span>{experience.role}</span>
                  <span>{experience.date}</span>
                </PreviousMeta>
                <CardTitle>{experience.company}</CardTitle>
                <CardText>{experience.text}</CardText>
              </PreviousCard>
            ))}
          </PreviousGrid>
        </Section>

        <BottomMessage>
          <h2>구현보다 한 단계 더, 문제의 구조와 끝까지 연결되는 흐름을 봅니다.</h2>
          <p>
            주어진 화면을 구현하는 데 그치지 않고 기능이 서비스 안에서 어떻게 동작해야 하는지 판단해 구조를 설계하고, 문제가 발생하면
            상태 관리·라우팅·API·데이터 흐름과 운영 환경까지 범위를 넓혀 원인을 추적합니다. 필요한 경우 공통 구조 개선과 성능 최적화, QA까지
            연결해 같은 문제가 반복되지 않도록 해결하는 개발을 중요하게 생각합니다.
          </p>
        </BottomMessage>
      </Inner>
    </Page>
  );
};
