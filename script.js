const T = {
  zh: {
    /* ── nav ── */
    nav_about: "關於我",
    nav_exp: "職涯經歷",
    nav_skills: "技能",
    nav_projects: "作品集",
    nav_contact: "聯絡",

    /* ── hero ── */
    hero_ey: "FRONTEND ENGINEER · TAIWAN",
    hero_role: "Vue / Nuxt · React / Next · 三年開發經驗",
    hero_desc:
      "從切版到串接 API，享受從 0 到 1 的開發過程。對效能、細節與使用者體驗有強烈執著。",
    hero_cta1: "查看作品集",
    hero_cta2: "聯絡我",

    /* ── metrics ── */
    m_yr: "年業界經驗",
    m_pr: "個人作品",
    m_cf: "鐵人賽篇數",

    /* ── about ── */
    ab1: "嗨，我是 <em>Yashien Lin</em>，擁有三年經驗的前端工程師。主力使用 <em>Vue / Nuxt.js</em> 開發產品，並透過個人專案持續深耕 <em>React / Next.js</em>，搭配 Tailwind CSS 或 Bootstrap 實作響應式介面。",
    ab2: "從切版到串接 API，享受從無到有的過程。熟悉 <em>Git</em> 版本控制、<em>Figma</em> 設計協作與 Slack、Trello 等團隊工具，能與設計師、後端工程師及PM緊密合作，在技術挑戰與使用者需求間取得平衡，交付以使用者體驗為核心的功能。",
    ab3: "持續保持好奇與熱情，期待用程式創造更多兼具 <em>功能性與美感</em> 的作品。",

    /* ── philosophy ── */
    ph1t: "Performance First",
    ph1d: "效能是架構決策，不是事後補救。",
    ph3t: "Code as Communication",
    ph3d: "程式碼是寫給下一個人看的。",
    ph4t: "Stay Curious",
    ph4d: "享受學習新技術的過程，保持成長的動力。",

    /* ── experience ── */
    exp1_co: "星醫美學股份有限公司",
    exp1_role: "前端工程師",
    exp1_desc:
      "使用 Vue 2/3 與 Nuxt 開發與維護多個內部系統與網站，並維護 PHP Laravel 專案，實作以 Blade 進行伺服器端渲染的介面，及整合 Vue 的 API 驅動前端，涵蓋 MVC 與 MVVM 架構。",

    exp2_co: "坊和企業有限公司",
    exp2_role: "前端工程師",
    exp2_desc:
      "使用 Vue 3 與 Element Plus 開發並維護遊戲平台後台，透過抽取可重用元件優化前端架構，提升開發效率。在專案管理上，與後端及 PM 緊密合作，並採用 Jira 與 Git 進行的任務管理與團隊協作。",

    exp3_co: "方達科技股份有限公司",
    exp3_role: "程式設計師",
    exp3_desc:
      "負責政府標案與環境工程專案的全端開發，使用 HTML/CSS/JS 搭配 C# ASP.NET 與 MS SQL 實現完整的系統功能。",

    exp4_co: "六角學院 — Vue 作品實戰班",
    exp4_desc:
      "完成 JavaScript 養成班後進入 Vue 作品實戰班，透過實作專案系統學習 Vue 框架，奠定前端工程基礎。",

    exp5_co: "六角學院 — JavaScript養成班",
    exp5_desc:
      "深耕 JavaScript 核心技術，並整合交通部 TDX API、Leaflet 與MapBox開發觀光與自行車道地圖平台，實現全台景點資訊的即時查詢與地圖視覺化呈現。",

    exp6_co: "iThome 鐵人賽 — 技術文章挑戰",
    exp6_desc:
      "自學 HTML、CSS、JavaScript / jQuery 後，為強化能力挑戰連續 30 天發表 JavaScript 技術文章，最終成功完賽。",
    exp6_tag1: "技術寫作",

    exp7_co: "緯育 Tibame — AI / Big Data 養成班",
    exp7_desc:
      "轉職後學習 Python、MySQL、MongoDB、Spark、Azure AI 等技術。在小組專題中負責前後端串接，因此發現對前端開發的濃厚興趣，確立前端工程師的職涯方向。",

    exp8_co: "船務專員",
    exp8_desc:
      "擔任各部門溝通橋樑，協調工廠、德國/美國客戶、PM 及財務，培養跨部門溝通與多工協調能力。深思後決定轉職踏入 IT 領域，重新出發。",
    exp8_tag1: "跨部門協作",
    exp8_tag2: "國際溝通",
    exp8_tag3: "專案協調",

    /* ── skills ── */
    sk1: "前端框架",
    sk2: "樣式 &amp; 介面",
    sk3: "後端 &amp; 資料庫",
    sk4: "工具 &amp; 工作流",

    /* ── projects ── */
    demo: "查看 Demo",
    w1n: "今天吃什麼 AI",
    w1d: "由 AI 驅動的美食推薦應用，使用 Next.js 與 Tailwind CSS 開發。透過 OpenAI API 進行自然語言處理，分析使用者心情與意圖，並整合 Google Places API 提供個人化食譜或餐廳。專案部署於 Vercel，配合自動化 CI/CD 流程。",
    w2n: "律師事務所網站",
    w2d: "前端使用 Nuxt.js 並以 SSG 模式預先生成靜態頁面，提升效能與載入速度。後端整合 Headless CMS Strapi，透過 API 提供內容，實現前後端分離。<br>專案採 Netlify (前端) 與 Railway (後端) 分離部署，提升效能與部署彈性。",
    w3n: "山居別林民宿網站",
    w3d: "與後端工程師共同接案，含房型介紹、景點資訊、即時空房查詢。<br>使用Vue3 + Tailwind + Vite，全程參與從設計、切版到 API 串接，學習到如何從無到有的建立一個專案。",

    /* ── contact ── */
    ct_hl: "Let's connect.",
    ic1l: "目前狀態",
    ic1v: "<span>開放新機會</span>",
    ic2l: "工作地點",
    ic2v: "台灣 · 遠端 / 辦公室皆可",
    ic3l: "語言",

    /* ── footer ── */
    footer: "用 ♥ 與過量咖啡構建",
  },

  en: {
    /* ── nav ── */
    nav_about: "About",
    nav_exp: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    /* ── hero ── */
    hero_ey: "FRONTEND ENGINEER · TAIWAN",
    hero_role: "Vue / Nuxt · React / Next · 3 Years Experience",
    hero_desc:
      "From markup to API integration — I enjoy every step of the build. Obsessed with performance, details, and meaningful user experiences.",
    hero_cta1: "View Projects",
    hero_cta2: "Get in Touch",

    /* ── metrics ── */
    m_yr: "YRS EXP",
    m_pr: "PROJECTS",
    m_cf: "TECHNICAL ARTICLES",

    /* ── about ── */
    ab1: "Hi, I'm <em>Yashien Lin</em>, a frontend engineer with 3 years of experience. I primarily build with <em>Vue / Nuxt.js</em> professionally, and deepen my <em>React / Next.js</em> skills through personal projects, paired with Tailwind CSS or Bootstrap for responsive interfaces.",
    ab2: "I enjoy every part of the development cycle — from markup to API integration. Familiar with <em>Git</em>, <em>Figma</em>, Slack, and Trello, I collaborate closely with designers, backend engineers, and PMs to balance technical challenges with user needs, delivering user-experience-centered features.",
    ab3: "Driven by curiosity and a passion for craft — always building things that are both <em>functional and beautiful</em>.",

    /* ── philosophy ── */
    ph1t: "Performance First",
    ph1d: "Performance is an architectural decision, not an afterthought.",
    ph3t: "Code as Communication",
    ph3d: "Code is written for the next person who reads it.",
    ph4t: "Stay Curious",
    ph4d: "Enjoy the process of learning new technologies and keep growing.",

    /* ── experience ── */
    exp1_co: "STARRY BIOTECHNOLOGY CO., LTD",
    exp1_role: "Frontend Engineer",
    exp1_desc:
      "Developed and maintained multiple internal systems and websites using Vue 2/3 and Nuxt. Also maintained PHP Laravel projects, implementing server-side rendered interfaces with Blade and API-driven frontends with Vue, covering both MVC and MVVM architectures.",

    exp2_co: "Bowa Software Technology Co., Ltd",
    exp2_role: "Frontend Engineer",
    exp2_desc:
      "Developed and maintained a gaming platform admin dashboard using Vue 3 and Element Plus. Optimized frontend architecture by extracting reusable components to improve development efficiency. Collaborated closely with backend engineers and PMs using Jira and Git for task management and team coordination.",

    exp3_co: "Fundot Technology Co., Ltd.",
    exp3_role: "Programmer",
    exp3_desc:
      "Responsible for full-stack development on government tender and environmental engineering projects, using HTML/CSS/JS with C# ASP.NET and MS SQL to deliver complete system functionality.",

    exp4_co: "HexSchool — Vue Project Workshop",
    exp4_desc:
      "After completing the JavaScript Bootcamp, joined the Vue Project Workshop to learn the Vue framework through hands-on project development, establishing a solid frontend engineering foundation.",

    exp5_co: "HexSchool — JavaScript Bootcamp",
    exp5_desc:
      "Deepened core JavaScript skills and integrated the Ministry of Transportation TDX API, Leaflet, and Mapbox to develop a tourism and cycling route map platform, enabling real-time querying and map visualization of attractions across Taiwan.",

    exp6_co: "iThome Ironman —  Technical Writing Challenge",
    exp6_desc:
      "After self-learning HTML, CSS, and JavaScript/jQuery, challenged myself to publish a JavaScript technical article every day for 30 consecutive days to strengthen my skills — and successfully completed the challenge.",
    exp6_tag1: "Technical Writing",

    exp7_co: "Tibame — AI / Big Data Bootcamp",
    exp7_desc:
      "After a career change, learned Python, MySQL, MongoDB, Spark, and Azure AI. Discovered a strong passion for frontend development while handling frontend-backend integration in a group project, which solidified my decision to pursue a career as a frontend engineer.",

    exp8_co: "Shipping Specialist",
    exp8_desc:
      "Served as a communication bridge across departments, coordinating between factories, clients in Germany and the US, PMs, and finance — developing strong cross-functional communication and multitasking skills. After reflection, decided to pivot into the IT industry and start fresh.",
    exp8_tag1: "Cross-functional Collaboration",
    exp8_tag2: "International Communication",
    exp8_tag3: "Project Coordination",

    /* ── skills ── */
    sk1: "Frontend Frameworks",
    sk2: "Styling &amp; UI",
    sk3: "Backend &amp; Database",
    sk4: "Tools &amp; Workflow",

    /* ── projects ── */
    demo: "View Demo",
    w1n: "What to Eat Today — AI",
    w1d: "An AI-powered food recommendation app built with Next.js and Tailwind CSS. Leverages the OpenAI API for natural language processing to analyze user moods and intentions, integrating Google Places API to provide personalized recipes or restaurant suggestions. Deployed on Vercel with an automated CI/CD pipeline.",
    w2n: "Law Firm Website",
    w2d: "Built the frontend using Nuxt.js with SSG to pre-render static pages, enhancing performance and load speed. Integrated Strapi as a Headless CMS to serve content via API, achieving a decoupled frontend-backend architecture.<br>Deployed separately on Netlify (frontend) and Railway (backend) to improve efficiency and deployment flexibility.",
    w3n: "Mountain Villa B&B",
    w3d: "Collaborated with a backend engineer on a client project featuring room type introductions, local attraction info, and real-time availability checks.<br>Built with Vue 3 + Tailwind + Vite, I was involved in the entire process — from design and layout to API integration — learning how to build a project from scratch.",

    /* ── contact ── */
    ct_hl: "Let's connect.",
    ic1l: "Status",
    ic1v: "<span>Open to opportunities</span>",
    ic2l: "Location",
    ic2v: "Taiwan · Remote or On-site",
    ic3l: "Languages",

    /* ── footer ── */
    footer: "Built with ♥ and excessive coffee",
  },
};

let lang = "zh";
function applyLang(l) {
  lang = l;
  const t = T[l];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll("#langBtn,#langBtnMobile").forEach((b) => {
    b.textContent = l === "zh" ? "EN" : "中文";
  });
  document.documentElement.lang = l === "zh" ? "zh-TW" : "en";
}
document
  .getElementById("langBtn")
  .addEventListener("click", () => applyLang(lang === "zh" ? "en" : "zh"));
document
  .getElementById("langBtnMobile")
  .addEventListener("click", () => applyLang(lang === "zh" ? "en" : "zh"));

/* hamburger */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
hamburger.addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobileNav.classList.remove("open")),
  );

/* mobile lang btn */
const langBtnMobile = document.getElementById("langBtnMobile");
function checkMobile() {
  langBtnMobile.style.display = window.innerWidth <= 960 ? "block" : "none";
}
checkMobile();
window.addEventListener("resize", checkMobile);

/* typing animation */
const nameEl = document.getElementById("typedName");
const fullName = "Yashien Lin";
let charIdx = 0;
function typeChar() {
  if (charIdx <= fullName.length) {
    nameEl.textContent = fullName.slice(0, charIdx);
    charIdx++;
    setTimeout(typeChar, charIdx === 1 ? 700 : 72 + Math.random() * 32);
  }
}
typeChar();

/* scroll reveal */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (idx % 4) * 0.08 + "s";
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
