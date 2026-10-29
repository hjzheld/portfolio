# Visual direction

사용자가 제공한 새 팔레트: #858185, #6C6B6F, #9D959B, #4E5155, #C5ADBC, #E6D0DD, #B98292.
기존 녹색·바닐라 대신 모브·베리·차콜을 사용합니다. 넓은 여백, 아치형 사진, 비대칭 실제 프로젝트 카드와 둥근 프레임을 적용합니다. GSAP 기존 로직과 첫 방문 전환 규칙을 유지합니다.

## Main visual

Built-in image_gen으로 생성한 장식용 작업 공간 이미지입니다. 실제 작업실이나 프로젝트 화면으로 소개하지 않습니다.
파일: src/assets/images/main/mauve-workspace.png

Prompt: Use case: photorealistic-natural. Create a premium editorial photograph to use as the hero image of a frontend developer portfolio. Portrait composition 4:5. A quiet thoughtfully arranged creative developer workspace: an open silver laptop with a softly blurred blank pale screen (no fake code, no text), a sculptural ceramic vase with a few delicate pale pink cherry blossom branches, a closed mauve notebook and a plum charcoal ceramic cup on a warm light gray stone desk. Soft natural window light from the left, subtle long shadows, tactile paper and ceramic materials. Restrained exact palette: dusty mauve #C5ADBC, light pink #E6D0DD, muted berry #B98292, warm gray #858185, plum charcoal #6C6B6F and #4E5155. Airy off-white surroundings. Elegant asymmetrical still life with generous breathing room. Sophisticated authentic photographic feeling, soft focus background, sharp believable materials. No lettering, logos, watermarks, UI mockup, border, people or hands. This is a decorative conceptual workspace, not a screenshot of an actual project.

세로 스트라이프는 모두 제거했습니다. 그라데이션 표면은 #E6D0DD·#C5ADBC 중심으로 구성하고 차콜은 글자와 윤곽에 사용합니다. 그라데이션 버튼의 글자는 어두운 색으로 바꿔 밝은 바탕에서도 읽히게 했습니다.

## Latest revision

사용자 요청으로 메인 생성 이미지와 겹쳐 놓은 스크린샷을 제거했습니다. 메인은 텍스트와 실제 담당 역할을 담은 패널로 구성합니다. 연두 #E3EFC9, 노랑 #FFF0BA, 분홍 #F9DCE5, 파랑 #DCECF8을 밝은 크림색 바탕에 사용합니다. 기존 생성 파일은 화면에서 사용하지 않습니다.

## Clay bus revision

References 1/2/3 supply the warm cream #FFF3E3, peach #F3C7B6, blush #F2D1CC, sage #AFC6AA, mint #BFD9CD and powder blue #C3DDE1 palette. All card surfaces use soft edge highlights and restrained shadows. Title overlines were removed. Existing GSAP timelines retain their timings; removed overline steps preserve their time slots. A small code-native two-eye companion is decorative only.

Bus asset: `src/assets/images/main/clay-bus.png`, generated with built-in image_gen, transparent background. It is a decorative illustration, not a project screenshot.

Prompt: Create ONE isolated decorative 3D clay illustration, transparent background, wide horizontal composition, no text. A charming small retro camper bus inspired by soft pastel clay UI art. Side three-quarter view facing left, peach-pink rounded body, warm cream roof with small rounded roof rack, four deep mint glass windows with soft green reflections, sage mint door, cream bumpers, two chunky mint wheels with peach hubcaps. Handcrafted tactile matte ceramic/clay material, soft realistic studio shading, no glossy plastic. A few minimal mint leaves and a tiny peach rounded cactus at the far right of bus, part of this compact sculpture. Palette is tightly restricted to warm cream #FFF3E3, peach #F3C7B6, blush #F2D1CC, sage #AFC6AA, mint #BFD9CD, powder blue #C3DDE1; darkest green #456B5B only for window recesses and wheel recesses. Camera nearly orthographic, polished friendly sculptural illustration. Ground contact shadow very soft and small. Bus fills 85% of image width, centered with comfortable transparent padding. No humans, no photographs, no lettering, no logos, no UI mockup, no surrounding card or page. This asset will be placed below centered intro text on a frontend developer portfolio. Do not create a website screenshot.

## Career, characters and interaction refinement

경력 전환은 기존 파도 형태와 첫 방문 재생 조건을 유지하며 블루·민트 뒷면, 피치·블러시 앞면으로 바꿨습니다. 기본 카드 면은 연노랑 대신 뉴트럴·민트·블루·피치를 번갈아 사용합니다. 캐릭터는 민트·피치·블루 변형으로 경력 소개, 대표 작업, 기술 카드에 배치합니다.

헤더·푸터 로고는 두 개의 둥근 캐릭터 조각으로 통일하고 GSAP으로 등장·호버 인사와 눈 깜박임을 구현했습니다. reduced-motion에서는 움직임을 생략합니다. 버튼의 반복 그라데이션 이동을 제거하고 호버 확대를 1.025배로 낮췄습니다. 입장 애니메이션과 경력·포트폴리오 첫 방문 전환 조건은 유지합니다.
