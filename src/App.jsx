import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Layers3,
  Cpu,
  FileText,
  Sparkles,
  ShieldCheck,
  Play,
  Maximize2,
  Lock,
  Mail,
} from "lucide-react";

const RED = "#FF0508";
const INK = "#33373B";
const ACCESS_PASSWORD = "0406";

const sections = [
  {
    id: "01",
    eyebrow: "СИГМА · AI NATIVE",
    title: "Сигма AI Native",
    subtitle: "Как дизайн-система становится рабочим стандартом для продуктов",
    formula: "Sigma Core + продуктовый md-слой + AI-агенты / skills = проверяемый интерфейс",
    points: ["единое ядро", "продуктовый контекст", "AI-проверка", "человек валидирует"],
    visual: "platform",
  },
  {
    id: "02",
    eyebrow: "ПРОБЛЕМА",
    title: "Документация больше не успевает за продуктами",
    subtitle:
      "Ручная дизайн-система плохо масштабируется, если продукты и интерфейсы развиваются быстрее, чем документация и контроль качества.",
    points: [
      "правила есть, но их сложно применять одинаково",
      "документация быстро устаревает",
      "макет и фронт могут расходиться",
      "каждый продукт интерпретирует систему по-своему",
    ],
    visual: "break",
  },
  {
    id: "03",
    eyebrow: "ИТОГ ПРОБЛЕМЫ",
    title: "Когда правила живут отдельно",
    subtitle:
      "Система может работать, но эффект теряется, когда правила, контекст продукта и документация живут в разных местах.",
    problemCards: [
      { title: "Правила отдельно", text: "Компоненты, гайды, макеты и фронт требуют ручного перевода." },
      { title: "Контекст теряется", text: "Общие правила ДС не учитывают специфику продукта." },
      { title: "Документация догоняет", text: "Правила обновляются медленнее продуктовых задач." },
    ],
    conclusion:
      "Ценность дизайн-системы ограничена, если правила каждый раз нужно заново объяснять и собирать вручную.",
    callout:
      "Задача Сигмы — стать машинно-читаемым стандартом для проектирования, проверки и интеграции.",
    visual: "insight",
  },
  {
    id: "04",
    eyebrow: "СДВИГ",
    title: "Сигма становится языком, который понимает AI",
    subtitle:
      "Сигма перестаёт быть только библиотекой компонентов и становится набором правил, которые читают люди, фронтенд и AI.",
    beforeAfter: {
      before: ["компоненты", "макеты", "ручная проверка", "ручная документация"],
      after: ["правила в md", "AI читает контекст", "проверяет и документирует", "человек валидирует"],
    },
    visual: "transform",
  },
  {
    id: "05",
    eyebrow: "ВНУТРЕННЕЕ УСТРОЙСТВО",
    title: "Так выглядит Sigma изнутри",
    subtitle:
      "AI получает токены, правила и продуктовый контекст — не абстрактную просьбу «сделай красиво».",
    formula: "Core tokens + Product rules = управляемый AI-результат",
    visual: "codefiles",
  },
  {
    id: "06",
    eyebrow: "АРХИТЕКТУРА",
    title: "Sigma Core → Product Layer → AI Skills → Проверяемый UI",
    subtitle:
      "Главное изменение: AI не «помощник сбоку», а часть рабочего контура. Он читает правила Сигмы, учитывает продуктовый слой и помогает быстрее получить проверяемое решение.",
    cards: [
      { icon: Layers3, name: "Sigma Core", text: "принципы, токены, компоненты и правила поведения интерфейса" },
      { icon: FileText, name: "Product Layer", text: "пользователи, сценарии, ограничения и специфика продукта" },
      { icon: Cpu, name: "AI Skills / Agents", text: "генерация, ревью, документация и помощь фронту" },
      { icon: ShieldCheck, name: "Проверяемый UI", text: "прототип, рекомендации и кодовые заготовки" },
    ],
    visual: "stack",
  },
  {
    id: "07",
    eyebrow: "КЕЙС / БЕНЧМАРК",
    title: "Process Garden / MPG",
    subtitle:
      "MPG / Process Garden — контур для сложных внутренних процессов: заявки, согласования, маршруты и ответственные. На примере закупки проверяем, как Sigma делает такой сценарий понятнее.",
    points: [
      "закупочный процесс",
      "маршрут заявки",
      "роли и действия",
      "benchmark: идёт сборка",
    ],
    proof: {
      name: "Вячеслав Подгорнов",
      image: "/avatars/podgornov-v.png",
    },
    caseComparison: {
      before: "/cases/process-garden-before.png",
      after: "/cases/process-garden-after.png",
    },
    visual: "case-comparison",
  },
  {
    id: "08",
    eyebrow: "КЕЙС / АПРОБАЦИЯ",
    title: "Orbit",
    subtitle:
      "Orbit — внутренний контур управления целями, инициативами, задачами и ресурсами команды. Кейс показывает переход от Sigma Core без продуктового слоя к рабочей продуктовой модели.",
    points: [
      "цели и ресурсы",
      "управленческий контур",
      "Sigma Core + product layer",
      "апробация на реальном продукте",
    ],
    proof: [
      { name: "Андрей Бурилов", image: "/avatars/burilov-a.png" },
      { name: "Алексей Яковенко", image: "/avatars/yakovenko-a.png" },
    ],
    caseComparison: {
      before: "/cases/orbit-before.png",
      after: "/cases/orbit-after.png",
    },
    visual: "case-comparison",
  },
  {
    id: "09",
    eyebrow: "КЕЙС / ВНУТРЕННИЕ СЕРВИСЫ",
    title: "Развитие внутренних сервисов",
    subtitle:
      "Кейс быстрой пересборки презентации в фирменном шаблоне: стабильная структура без ручной сборки с нуля.",
    points: [
      "презентация в фирменном стиле",
      "быстрая сборка в шаблоне",
      "стабильная структура слайдов",
      "меньше ручной сборки с нуля",
    ],
    proof: {
      name: "Анна Колдаева",
      image: "/avatars/koldaeva-a.png",
    },
    visual: "service",
  },
  {
    id: "10",
    eyebrow: "КЕЙС / КОММУНИКАЦИИ",
    title: "По тем же правилам собирается email-дайджест",
    subtitle:
      "На том же принципе мы собрали рассылку для дизайн-студии: единый визуальный язык, повторяемые блоки и быстрая сборка материалов без ручной пересборки с нуля.",
    points: [
      "email-дайджест",
      "модульная сборка",
      "единый визуальный язык",
      "быстрое тиражирование",
    ],
    formula:
      "Sigma помогает собирать не только интерфейсы, но и коммуникационные материалы в едином стиле.",
    visual: "mockup",
  },
  {
    id: "11",
    eyebrow: "РАБОЧИЙ СЦЕНАРИЙ",
    title: "Один запрос превращается в ревью интерфейса",
    subtitle:
      "AI получает задачу, читает правила Сигмы и продуктовый контекст, находит расхождения и отдаёт результат человеку на валидацию.",
    workflow: {
      request: "Проверь экран заявки на соответствие Сигме",
      reads: ["Sigma Core", "Product Layer", "правила компонентов", "контекст продукта"],
      output: ["найдены расхождения с правилами", "предложение исправлений", "черновик документации", "решение остаётся за человеком"],
    },
    visual: "case",
  },
  {
    id: "12",
    eyebrow: "ОПЕРАЦИОННАЯ МОДЕЛЬ",
    title: "AI берёт на себя рутину, человек — решение",
    subtitle: "AI не отдельная фича, а способ сократить ручную работу и держать качество.",
    points: ["документация", "прототипирование", "design review", "интеграция во фронт", "графика и коммуникации"],
    visual: "hub",
  },
  {
    id: "13",
    eyebrow: "ПОДКЛЮЧЕНИЕ ПРОДУКТОВ",
    title: "Два сценария подключения продуктов",
    subtitle:
      "Новые продукты стартуют сразу с единой логики. Существующие подключаются через адаптацию и продуктовый md-слой.",
    columns: [
      { name: "Новые продукты", items: ["UI Framework с первого шага", "Sigma Core как база", "продуктовые правила сразу в контексте", "быстрый путь до кликабельного прототипа"] },
      { name: "Существующие продукты", items: ["адаптация без обещания «перезапуска за неделю»", "Sigma Core + продуктовый md-слой", "AI-агенты для ревью и документации", "меньше ручных трактовок"] },
    ],
    visual: "bridge",
  },
  {
    id: "14",
    eyebrow: "ЦЕННОСТЬ ДЛЯ КОМАНДЫ",
    title: "Что получает продуктовая команда",
    subtitle: "Не просто библиотеку, а понятный способ быстрее двигаться к единому интерфейсу.",
    points: ["быстрее собрать первый прототип", "раньше увидеть расхождения с дизайн-системой", "проще описать специфику продукта", "легче подключить фронт к единым правилам", "меньше ручных трактовок и спорных решений"],
    visual: "review",
  },
  {
    id: "15",
    eyebrow: "ROADMAP",
    title: "Пилоты и постепенное масштабирование",
    subtitle: "Запускаем подход через фокусные сценарии, проверяем эффект и расширяем библиотеку skills.",
    roadmap: [
      { period: "Q3 2026", items: ["быстрое UI-прототипирование", "сокращаем путь от идеи до кликабельного прототипа", "пилотные сценарии design review"] },
      { period: "Q4 2026", items: ["проверка гипотез", "документация по ДС", "шеринг знаний по итогам пилотов"] },
      { period: "2027", items: ["фокусные продукты", "постепенный переход к единым стандартам", "зрелые процессы ревью"] },
      { period: "Постоянно", items: ["ревизия md-файлов", "расширение библиотеки навыков", "уточнение правил Сигмы"] },
    ],
    visual: "roadmap",
  },
  {
    id: "16",
    eyebrow: "ПИЛОТ",
    title: "Запуск пилота — в три шага",
    subtitle: "Если продукту нужно обновление интерфейса, быстрый прототип или переход к единым правилам — можно начать с пилота.",
    pilotSteps: [
      { title: "1. Выбрать пилотную задачу", text: "Обновление интерфейса, новый сценарий, прототип или проверка соответствия Сигме." },
      { title: "2. Описать продуктовый слой", text: "Кто пользователь, какой сценарий, какие ограничения и чем продукт отличается." },
      { title: "3. Проверить результат", text: "Смотрим прототип, ревью, документацию и применимость для фронта." },
    ],
    finalThought: "Сигма AI Native — это способ сделать дизайн-систему рабочим стандартом для людей, продуктов и AI.",
    visual: "portal",
  },
];

function cx(...classes) { return classes.filter(Boolean).join(" "); }

const TITLE_STYLES = {
  hero: "text-[clamp(44px,5.2vw,72px)] leading-[0.95] tracking-[-0.055em]",
  default: "text-[clamp(38px,4.35vw,62px)] leading-[0.96] tracking-[-0.052em]",
  compact: "text-[clamp(34px,3.85vw,52px)] leading-[0.98] tracking-[-0.048em]",
};

function titleVariant(section) {
  if (section.id === "01") return "hero";
  if (section.title.length > 34) return "compact";
  return "default";
}

function Progress({ active, setActive }) {
  return <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 2xl:flex">{sections.map((s, i) => <button key={s.id} onClick={() => setActive(i)} className={cx("group flex h-8 w-8 items-center justify-center rounded-full border text-[10px] transition-all", active === i ? "border-[#FF0508] bg-[#FF0508] text-white" : "border-black/10 bg-white/70 text-black/35 hover:border-black/30")} aria-label={`Перейти к секции ${s.id}`}>{s.id}</button>)}</div>;
}

function Chrome({ active, setActive, presentationMode, setPresentationMode }) {
  const progress = ((active + 1) / sections.length) * 100;
  return <div className={cx("fixed left-0 right-0 top-0 z-40 border-b border-black/5 bg-[#F2F2F2]/80 px-5 py-3 backdrop-blur-xl transition", presentationMode && "translate-y-[-68%] opacity-0 hover:translate-y-0 hover:opacity-100")}><div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="flex h-8 w-14 items-center justify-center rounded-sm bg-[#FF0508] text-[11px] font-bold tracking-tight text-white">MOEX</div><div className="hidden text-sm text-[#33373B]/65 md:block">Сигма AI Native · сайт-презентация</div></div><div className="hidden min-w-[220px] items-center gap-3 md:flex"><span className="text-xs font-black text-[#33373B]/35">{String(active + 1).padStart(2, "0")}</span><div className="h-1 flex-1 overflow-hidden rounded-full bg-black/10"><motion.div className="h-full rounded-full bg-[#FF0508]" animate={{ width: `${progress}%` }} transition={{ duration: 0.35, ease: "easeOut" }} /></div><span className="text-xs font-black text-[#33373B]/35">{String(sections.length).padStart(2, "0")}</span></div><div className="flex items-center gap-2"><button onClick={() => setActive(Math.max(0, active - 1))} className="rounded-full border border-black/10 bg-white/65 px-4 py-2 text-sm text-[#33373B] transition hover:bg-white">Назад</button><button onClick={() => setActive(Math.min(sections.length - 1, active + 1))} className="rounded-full bg-[#33373B] px-4 py-2 text-sm text-white transition hover:bg-black">Далее</button><button onClick={() => setPresentationMode(!presentationMode)} className={cx("hidden rounded-full border p-2 transition md:block", presentationMode ? "border-[#FF0508]/30 bg-[#FF0508] text-white" : "border-black/10 bg-white/65 text-[#33373B] hover:bg-white")} title="Сфокусировать экран"><Maximize2 size={16} /></button></div></div></div>;
}

function Visual({ type }) {
  const isWide = type === "codefiles";
  return (
    <div className="relative hidden h-full min-h-0 w-full items-center justify-center overflow-visible pl-2 pr-12 lg:flex xl:pr-16 2xl:pr-20">
      <div className={cx("relative flex origin-center scale-[0.9] items-center justify-center overflow-visible xl:scale-[0.94] 2xl:scale-100", isWide ? "h-[430px] w-[650px] max-w-[650px]" : "h-[400px] w-[520px] max-w-[520px]")}>
        {type === "platform" && <PlatformVisual />}
        {type === "break" && <BreakVisual />}
        {type === "transform" && <TransformVisual />}
        {type === "stack" && <StackVisual />}
        {type === "case" && <CaseVisual />}
        {type === "hub" && <HubVisual />}
        {type === "bridge" && <BridgeVisual />}
        {type === "review" && <ReviewVisual />}
        {type === "roadmap" && <RoadmapVisual />}
        {type === "portal" && <PortalVisual />}
        {type === "insight" && <InsightVisual />}
        {type === "codefiles" && <CodeFilesVisual />}
        {type === "service" && <ServiceVisual />}
      </div>
    </div>
  );
}


function Float({ children, delay = 0, className = "" }) { return <motion.div className={className} animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay }}>{children}</motion.div>; }
function GlassBlock({ className = "", children }) { return <div className={cx("rounded-[28px] border border-white/70 bg-white/55 shadow-[0_30px_80px_rgba(51,55,59,.12)] backdrop-blur", className)}>{children}</div>; }

function PlatformVisual() {
  return (
    <div className="relative flex h-[420px] w-[560px] flex-col items-center justify-center overflow-visible">
      <motion.div
        className="absolute left-1/2 top-[54%] z-0 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-[#FF0508]/80 shadow-[0_22px_80px_rgba(255,5,8,.14)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-[70%] h-20 w-[360px] -translate-x-1/2 rounded-[50%] bg-black/[0.07] blur-2xl"
        animate={{ scale: [0.96, 1.03, 0.96], opacity: [0.34, 0.5, 0.34] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-20 mb-6 flex h-[54px] min-w-[136px] items-center justify-center rounded-[20px] border border-white/90 bg-[#EEE7DC]/96 px-6 text-[15px] font-black text-[#33373B] shadow-[0_12px_26px_rgba(51,55,59,.08)]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        правила
      </motion.div>

      <div className="relative z-10 grid w-[500px] grid-cols-[140px_220px_140px] items-center justify-center gap-[18px]">
        <motion.div
          className="relative z-20 flex h-[54px] items-center justify-center rounded-[20px] border border-white bg-white/95 px-5 text-[15px] font-black text-[#33373B] shadow-[0_14px_32px_rgba(51,55,59,.12)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        >
          компоненты
        </motion.div>

        <motion.div
          className="flex h-[220px] w-[220px] items-center justify-center rounded-[44px] border border-white bg-[linear-gradient(145deg,#ffffff,#e9e3da)] shadow-[inset_0_2px_0_rgba(255,255,255,.9),inset_0_-18px_32px_rgba(51,55,59,.08),0_34px_70px_rgba(51,55,59,.16)]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[96px] font-black leading-none text-[#33373B] drop-shadow-sm">Σ</span>
        </motion.div>

        <motion.div
          className="relative z-20 flex h-[54px] items-center justify-center rounded-[20px] border border-white bg-white/95 px-5 text-[15px] font-black text-[#33373B] shadow-[0_14px_32px_rgba(51,55,59,.12)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
        >
          токены
        </motion.div>
      </div>
    </div>
  );
}

function BreakVisual() { return <div className="relative h-[360px] w-[560px]"><motion.div className="absolute left-1/2 top-[66%] h-20 w-[420px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ opacity: [0.45, 0.7, 0.45] }} transition={{ duration: 4.5, repeat: Infinity }} /><Float className="absolute left-12 top-20 h-60 w-56 rotate-[-9deg] rounded-[38px] bg-[linear-gradient(145deg,#ffffff,#e9e3da)] p-5 shadow-[inset_0_2px_0_rgba(255,255,255,.85),0_35px_80px_rgba(51,55,59,.18)]"><div className="mb-5 h-8 w-28 rounded-full bg-[#EEE7DC]" /><div className="space-y-3"><div className="h-4 rounded bg-black/10" /><div className="h-4 w-3/4 rounded bg-black/10" /><div className="h-24 rounded-[24px] bg-[#F2F2F2] shadow-[inset_0_1px_8px_rgba(51,55,59,.06)]" /></div></Float><Float delay={0.4} className="absolute right-12 top-28 h-60 w-56 rotate-[9deg] rounded-[38px] bg-[linear-gradient(145deg,#ffffff,#e8e8e8)] p-5 shadow-[inset_0_2px_0_rgba(255,255,255,.85),0_35px_80px_rgba(51,55,59,.18)]"><div className="mb-5 h-8 w-24 rounded-full bg-[#EEE7DC]" /><div className="space-y-3"><div className="h-4 rounded bg-black/10" /><div className="h-4 w-2/3 rounded bg-black/10" /><div className="h-24 rounded-[24px] bg-[#F2F2F2] shadow-[inset_0_1px_8px_rgba(51,55,59,.06)]" /></div></Float><motion.div className="absolute left-1/2 top-1/2 h-72 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF0508] shadow-[0_0_34px_rgba(255,5,8,.38)]" animate={{ scaleY: [0.72, 1, 0.72], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} /></div>; }
function InsightVisual() {
  return (
    <div className="relative flex h-[420px] w-[560px] flex-col items-center justify-center overflow-visible">
      <motion.div
        className="absolute left-1/2 top-[72%] h-20 w-[390px] -translate-x-1/2 rounded-[50%] bg-black/[0.07] blur-2xl"
        animate={{ opacity: [0.3, 0.48, 0.3], scale: [0.96, 1.02, 0.96] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-20 mb-7 flex h-[54px] min-w-[140px] items-center justify-center rounded-[20px] border border-white/90 bg-[#EEE7DC]/96 px-6 text-[15px] font-black text-[#33373B] shadow-[0_12px_26px_rgba(51,55,59,.08)]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        правила
      </motion.div>

      <div className="relative z-10 grid w-[520px] grid-cols-[150px_220px_150px] items-center justify-center gap-[24px]">
        <motion.div
          className="flex h-[54px] items-center justify-center rounded-[20px] border border-white/90 bg-[#EEE7DC]/96 px-5 text-[15px] font-black text-[#33373B] shadow-[0_12px_26px_rgba(51,55,59,.08)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        >
          документация
        </motion.div>

        <motion.div
          className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-[44px] border border-white/90 bg-[linear-gradient(145deg,#ffffff,#ebe6dd)] shadow-[inset_0_2px_0_rgba(255,255,255,.92),inset_0_-18px_32px_rgba(51,55,59,.06),0_30px_66px_rgba(51,55,59,.14)]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0508] shadow-[0_16px_34px_rgba(255,5,8,.22)]">
            <FileText className="h-7 w-7 text-white" strokeWidth={2.4} />
          </div>
          <div className="text-[56px] font-black leading-none tracking-[-0.06em] text-[#33373B]">md</div>
          <div className="mt-3 text-[13px] font-bold uppercase tracking-[0.26em] text-[#33373B]/35">
            стандарт
          </div>
        </motion.div>

        <motion.div
          className="flex h-[54px] items-center justify-center rounded-[20px] border border-white/90 bg-[#EEE7DC]/96 px-5 text-[15px] font-black text-[#33373B] shadow-[0_12px_26px_rgba(51,55,59,.08)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
        >
          контекст
        </motion.div>
      </div>
    </div>
  );
}

function CodeFilesVisual() {
  const coreLines = [
    { t: 'h1', v: '## 3. Design tokens' },
    { t: 'h2', v: '### 3.1. Роль токенов' },
    { t: 'txt', v: 'Sigma design tokens — источник' },
    { t: 'txt', v: 'системных значений для цветов,' },
    { t: 'txt', v: 'типографики, spacing, radius.' },
    { t: 'spc', v: '' },
    { t: 'h2', v: '### 3.3. Color tokens' },
    { t: 'tok', v: 'colors.brand.cta', val: '#FF0508' },
    { t: 'tok', v: 'colors.canvas', val: '{t.bg.canvas}' },
    { t: 'tok', v: 'colors.surface', val: '{t.bg.surface}' },
    { t: 'tok', v: 'colors.border-default', val: '{t.br.default}' },
    { t: 'tok', v: 'colors.border-soft', val: '{t.br.soft}' },
    { t: 'spc', v: '' },
    { t: 'h2', v: '### 3.7. Component tokens' },
    { t: 'key', v: 'button-cta:' },
    { t: 'sub', v: '  backgroundColor: {c.brand.cta}' },
    { t: 'sub', v: '  rounded: {rounded.md}' },
    { t: 'sub', v: '  height: 40px' },
    { t: 'spc', v: '' },
    { t: 'key', v: 'text-input:' },
    { t: 'sub', v: '  backgroundColor: {c.input-bg}' },
    { t: 'sub', v: '  rounded: {rounded.md}' },
    { t: 'sub', v: '  height: 40px' },
    { t: 'spc', v: '' },
    { t: 'h2', v: '### 3.8. Typography tokens' },
    { t: 'txt', v: 'typography.heading-md:' },
    { t: 'txt', v: '  Inter / 28px / 400 / 36px' },
    { t: 'txt', v: 'typography.body-md:' },
    { t: 'txt', v: '  Inter / 16px / 400 / 1.5' },
  ];
  const orbitLines = [
    { t: 'h1', v: '## 3. Принцип двух слоёв' },
    { t: 'h2', v: '### 3.1. Core layer' },
    { t: 'txt', v: 'docs/core-sigma.md' },
    { t: 'txt', v: 'Содержит универсальные правила' },
    { t: 'txt', v: 'Sigma/MOEX: цвета, типографика,' },
    { t: 'txt', v: 'таблицы, CTA, drawer.' },
    { t: 'spc', v: '' },
    { t: 'h2', v: '### 3.2. Product layer' },
    { t: 'txt', v: 'docs/orbit-sigma.md' },
    { t: 'txt', v: 'Содержит продуктовые правила' },
    { t: 'txt', v: 'Orbit: разделы, сценарии,' },
    { t: 'txt', v: 'сущности, навигация, drawer,' },
    { t: 'txt', v: 'CTA, анти-паттерны.' },
    { t: 'spc', v: '' },
    { t: 'h2', v: '## 22. Анти-паттерны Orbit' },
    { t: 'bull', v: 'не перегружать главную дашбордом' },
    { t: 'bull', v: 'не делать статусы тревожными' },
    { t: 'bull', v: 'не смешивать фильтр и вид' },
    { t: 'bull', v: 'drawer — не для многошаговых сценариев' },
    { t: 'bull', v: 'не создавать разделы без сущности' },
    { t: 'spc', v: '' },
    { t: 'h2', v: '## 5. Основные сущности' },
    { t: 'txt', v: 'задача · событие · цель' },
    { t: 'txt', v: 'обещание · инсайт · отчёт' },
    { t: 'txt', v: 'инициатива · программа' },
    { t: 'txt', v: 'подразделение · сотрудник' },
  ];
  function renderLine(l, i) {
    if (l.t === 'spc') return <div key={i} className="h-[1.1em]" />;
    if (l.t === 'h1') return <div key={i} className="font-black text-[#FF0508]">{l.v}</div>;
    if (l.t === 'h2') return <div key={i} className="font-bold text-[#33373B]/55">{l.v}</div>;
    if (l.t === 'tok') return <div key={i} className="whitespace-pre"><span className="text-[#324ABD]">{l.v}</span>  <span className="font-bold text-[#FF0508]">{l.val}</span></div>;
    if (l.t === 'key') return <div key={i} className="text-[#1B6403]">{l.v}</div>;
    if (l.t === 'sub') return <div key={i} className="text-[#33373B]/75">{l.v}</div>;
    if (l.t === 'bull') return <div key={i} className="text-[#33373B]/80"><span className="text-[#D70000]">• </span>{l.v}</div>;
    return <div key={i} className="text-[#33373B]/80">{l.v}</div>;
  }
  const windowBase = "font-mono text-[8.8px] leading-[1.42]";
  const mdWindow = (title, lines, delay = 0) => (
    <motion.div
      className="relative flex h-[372px] w-[288px] flex-col overflow-hidden rounded-[16px] border border-black/8 bg-white shadow-[0_20px_48px_rgba(51,55,59,.10)]"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-black/5 bg-[#F5F5F5] px-4 py-[11px]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F5A]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBE2E]" />
        <span className="h-3 w-3 rounded-full bg-[#2ACA44]" />
        <span className="ml-2.5 text-[11px] font-bold tracking-tight text-[#33373B]/40">{title}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-3.5 py-3">
        <div className={windowBase}>{lines.map((l, i) => renderLine(l, i))}</div>
      </div>
    </motion.div>
  );
  return <div className="relative flex h-[420px] w-[610px] items-center justify-center gap-4 overflow-visible">{mdWindow("core-sigma.md", coreLines)}{mdWindow("orbit-sigma.md", orbitLines, 0.3)}</div>;
}

function TransformVisual() { return <div className="relative flex h-[380px] w-[560px] items-center justify-center overflow-visible"><motion.div className="absolute left-1/2 top-[74%] h-20 w-[420px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ opacity: [0.32, 0.52, 0.32] }} transition={{ duration: 5.4, repeat: Infinity }} /><div className="relative z-10 grid w-[520px] grid-cols-[1fr_72px_1fr] items-center gap-5"><Float className="h-[238px] rounded-[30px] border border-white/80 bg-white/72 p-5 shadow-[0_28px_62px_rgba(51,55,59,.14)]"><div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#33373B]/35">было</div><div className="space-y-3"><div className="h-5 w-28 rounded-full bg-[#EEE7DC]" /><div className="h-4 rounded bg-black/10" /><div className="h-4 w-3/4 rounded bg-black/10" /><div className="h-20 rounded-[18px] border border-black/5 bg-[#F2F2F2]" /><div className="h-8 w-28 rounded-[14px] bg-[#33373B]/18" /></div></Float><motion.div className="flex h-14 w-14 items-center justify-center justify-self-center rounded-full bg-[#FF0508] text-white shadow-[0_16px_34px_rgba(255,5,8,.22)]" animate={{ x: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><ArrowRight size={28} /></motion.div><Float delay={0.35} className="h-[278px] rounded-[32px] border border-white bg-[linear-gradient(145deg,#ffffff,#e9e3da)] p-5 shadow-[0_32px_70px_rgba(51,55,59,.16)]"><div className="mb-4 flex items-center justify-between"><span className="rounded-full bg-[#FF0508] px-3 py-1 text-xs font-bold text-white">стало</span><Cpu size={24} color={INK} /></div><div className="space-y-3"><div className="h-4 rounded bg-[#EEE7DC]" /><div className="h-4 w-4/5 rounded bg-[#EEE7DC]" /><div className="h-24 rounded-[22px] border border-black/5 bg-[#F2F2F2]" /><div className="grid grid-cols-2 gap-2"><div className="h-8 rounded-xl bg-[#33373B]" /><div className="h-8 rounded-xl bg-[#FF0508]" /></div></div></Float></div></div>; }

function StackVisual() { return <div className="relative h-[360px] w-[520px] overflow-visible"><motion.div className="absolute left-1/2 top-[74%] h-20 w-[360px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ scale: [0.94, 1.04, 0.94] }} transition={{ duration: 6, repeat: Infinity }} />{[{ label: "Sigma Core", y: "bottom-10", bg: "bg-[linear-gradient(145deg,#EEE7DC,#d9d1c4)]", color: "text-[#33373B]" },{ label: "Product Layer", y: "bottom-[112px]", bg: "bg-[linear-gradient(145deg,#ffffff,#ececec)]", color: "text-[#33373B]" },{ label: "AI Skills", y: "bottom-[194px]", bg: "bg-[linear-gradient(145deg,#4b5055,#25282b)]", color: "text-white" }].map((layer, i) => <motion.div key={layer.label} className={cx("absolute left-1/2 h-20 w-[330px] -translate-x-1/2 rounded-[28px] border border-white/70 shadow-[inset_0_2px_0_rgba(255,255,255,.55),0_26px_58px_rgba(51,55,59,.14)]", layer.y, layer.bg)} animate={{ y: [0, -6, 0] }} transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}><div className={cx("px-7 py-6 text-lg font-black tracking-[-0.03em]", layer.color)}>{layer.label}</div></motion.div>)}<motion.div className="absolute right-[58px] top-20 flex h-24 w-24 items-center justify-center rounded-full bg-[#FF0508] text-white shadow-[0_22px_52px_rgba(255,5,8,.26)]" animate={{ scale: [1, 1.05, 1], rotate: [0, 4, 0] }} transition={{ duration: 3.8, repeat: Infinity }}><Sparkles size={34} /></motion.div></div>; }
function CaseVisual() { return <div className="relative h-[380px] w-[560px]"><motion.div className="absolute left-1/2 top-[78%] h-20 w-[420px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ opacity: [0.34, 0.54, 0.34] }} transition={{ duration: 5.2, repeat: Infinity }} /><Float className="absolute left-0 top-[76px] w-44 rounded-[28px] bg-[linear-gradient(145deg,#ffffff,#e9e3da)] p-5 shadow-[0_28px_64px_rgba(51,55,59,.15)]"><div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#33373B]/35">запрос</div><div className="text-lg font-black leading-tight text-[#33373B]">Проверь экран заявки</div><div className="mt-5 h-2 w-full rounded-full bg-[#FF0508]" /></Float><Float delay={0.2} className="absolute left-[196px] top-8 flex h-44 w-44 items-center justify-center rounded-[44px] bg-[linear-gradient(145deg,#4b5055,#25282b)] text-white shadow-[0_30px_72px_rgba(51,55,59,.24)]"><div className="text-center"><Cpu className="mx-auto mb-3" size={34}/><div className="text-3xl font-black">AI</div><div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">review</div></div></Float><Float delay={0.45} className="absolute right-0 top-[76px] h-56 w-52 rounded-[30px] bg-[linear-gradient(145deg,#ffffff,#e9e3da)] p-5 shadow-[0_30px_68px_rgba(51,55,59,.16)]"><div className="mb-4 flex items-center justify-between"><div className="text-xs font-black uppercase tracking-[0.18em] text-[#33373B]/35">результат</div><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0508] text-white"><Check size={17}/></div></div><div className="space-y-3"><div className="rounded-2xl bg-[#F2F2F2] p-3"><div className="mb-2 h-2 w-20 rounded bg-[#FF0508]" /><div className="h-2 rounded bg-black/10" /></div><div className="rounded-2xl bg-[#F2F2F2] p-3"><div className="mb-2 h-2 w-16 rounded bg-[#FF0508]" /><div className="h-2 w-4/5 rounded bg-black/10" /></div><div className="text-sm font-black text-[#FF0508]">review готов</div></div></Float><div className="absolute bottom-4 left-1/2 grid w-[500px] -translate-x-1/2 grid-cols-4 gap-3">{["Core","Product.md","tokens","components"].map((item, i) => <motion.div key={item} className="rounded-2xl border border-white/70 bg-[#EEE7DC]/90 px-3 py-3 text-center text-xs font-bold text-[#33373B] shadow-[0_12px_24px_rgba(51,55,59,.09)]" animate={{ y: [0, -4, 0] }} transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}>{item}</motion.div>)}</div></div>; }
function HubVisual() {
  const topItems = [
    {
      label: "вход",
      title: (
        <>
          правила /
          <br />
          контекст
        </>
      ),
    },
    { label: "AI", title: "AI", isCore: true },
    {
      label: "выход",
      title: (
        <>
          результат /
          <br />
          ревью
        </>
      ),
    },
  ];

  const bottomItems = ["документация", "ревью", "прототип"];

  return (
    <div className="relative flex h-[420px] w-[560px] flex-col items-center justify-center">
      <motion.div
        className="absolute left-1/2 top-[76%] h-20 w-[390px] -translate-x-1/2 rounded-[50%] bg-black/[0.07] blur-2xl"
        animate={{ opacity: [0.28, 0.44, 0.28], scale: [0.96, 1.02, 0.96] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 grid w-[520px] grid-cols-[160px_140px_160px] items-center justify-center gap-[30px]">
        {topItems.map((item, i) => {
          if (item.isCore) {
            return (
              <motion.div
                key={item.label}
                className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-[34px] bg-[linear-gradient(145deg,#4A4F57,#2F3339)] text-white shadow-[0_28px_58px_rgba(51,55,59,.15)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Cpu size={34} className="mb-3 opacity-95" />
                <div className="text-[40px] font-black leading-none tracking-[-0.06em]">AI</div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={item.label}
              className="flex h-[140px] w-[160px] flex-col justify-center rounded-[26px] border border-white/90 bg-white/96 px-6 shadow-[0_20px_44px_rgba(51,55,59,.10)]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-3 text-[12px] font-black uppercase tracking-[0.22em] text-[#33373B]/35">
                {item.label}
              </div>
              <div className="text-[21px] font-black leading-[1.08] tracking-[-0.045em] text-[#33373B]">
                {item.title}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 mt-12 grid w-[520px] grid-cols-3 gap-4">
        {bottomItems.map((label, i) => (
          <motion.div
            key={label}
            className="flex h-[56px] items-center justify-center rounded-[20px] border border-white/90 bg-[#EEE7DC]/96 px-4 text-[15px] font-black text-[#33373B] shadow-[0_12px_26px_rgba(51,55,59,.08)]"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5.8 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BridgeVisual() {
  const nodes = [
    { title: "Новый продукт", lines: ["Sigma Core", "UI Framework", "md-слой"] },
    { title: "Существующий", lines: ["адаптация", "product rules", "AI review"] },
  ];
  return (
    <div className="relative flex h-[390px] w-[560px] flex-col items-center justify-center overflow-visible">
      <motion.div className="absolute left-1/2 top-[76%] h-20 w-[420px] -translate-x-1/2 rounded-[50%] bg-black/[0.07] blur-2xl" animate={{ opacity: [0.3, 0.48, 0.3], scale: [0.96, 1.02, 0.96] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} />
      <div className="relative z-10 grid w-[520px] grid-cols-[1fr_68px_1fr] items-center gap-5">
        {nodes.map((node, i) => (
          <Float key={node.title} delay={i * 0.35} className={cx("h-[250px] rounded-[30px] border border-white/90 bg-white/88 p-5 shadow-[0_28px_62px_rgba(51,55,59,.13)]", i === 1 && "col-start-3")}>
            <div className="mb-5 flex items-center justify-between">
              <div className="text-[13px] font-black uppercase tracking-[0.12em] text-[#33373B]/45">{node.title}</div>
              <span className={cx("h-4 w-4 rounded-full", i === 0 ? "bg-[#33373B]" : "bg-[#FF0508]")} />
            </div>
            <div className="space-y-3">
              {node.lines.map((line, idx) => (
                <div key={line} className="flex items-center gap-3 rounded-2xl bg-[#F2F2F2] px-4 py-3">
                  <span className="text-xs font-black text-[#FF0508]">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-bold text-[#33373B]/72">{line}</span>
                </div>
              ))}
            </div>
          </Float>
        ))}
        <motion.div className="col-start-2 row-start-1 flex h-14 w-14 items-center justify-center justify-self-center rounded-full bg-[#FF0508] text-white shadow-[0_16px_34px_rgba(255,5,8,.22)]" animate={{ x: [-4, 4, -4] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowRight size={26} />
        </motion.div>
      </div>
    </div>
  );
}

function ReviewVisual() { return <div className="relative h-[360px] w-[520px] overflow-visible"><motion.div className="absolute left-1/2 top-[74%] h-20 w-[350px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ opacity: [0.34, 0.54, 0.34] }} transition={{ duration: 5.5, repeat: Infinity }} /><Float className="absolute left-1/2 top-7 h-64 w-[320px] -translate-x-1/2 rounded-[34px] bg-[linear-gradient(145deg,#ffffff,#e9e3da)] p-5 shadow-[0_30px_70px_rgba(51,55,59,.17)]"><div className="mb-5 flex gap-2"><div className="h-3 w-3 rounded-full bg-[#FF0508]"/><div className="h-3 w-3 rounded-full bg-black/10"/><div className="h-3 w-3 rounded-full bg-black/10"/></div><div className="grid grid-cols-2 gap-4"><div className="h-36 rounded-[24px] bg-[#EEE7DC]" /><div className="space-y-3"><div className="h-5 rounded bg-black/10"/><div className="h-5 rounded bg-black/10"/><div className="h-16 rounded-[18px] border border-black/5 bg-[#F2F2F2]"/></div></div></Float><motion.div className="absolute bottom-9 right-16 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF0508] text-white shadow-[0_22px_60px_rgba(255,5,8,.28)]" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity }}><Check size={40}/></motion.div></div>; }
function RoadmapVisual() { return <div className="relative h-[360px] w-[540px]"><motion.div className="absolute left-1/2 top-[72%] h-20 w-[410px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ opacity: [0.34, 0.54, 0.34] }} transition={{ duration: 6, repeat: Infinity }} /><div className="absolute left-12 top-[170px] h-3 w-[430px] rounded-full bg-[#33373B]/12" /><motion.div className="absolute left-12 top-[170px] h-3 w-[430px] origin-left rounded-full bg-[#FF0508] shadow-[0_12px_34px_rgba(255,5,8,.18)]" animate={{ scaleX: [0.12, 1, 0.12] }} transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }} />{[{ p: "Q3", label: "пилоты", c: "left-4 top-[114px]" },{ p: "Q4", label: "документация", c: "left-[204px] top-[80px]" },{ p: "2027", label: "масштаб", c: "right-4 top-[114px]" }].map((item, i) => <Float key={item.p} delay={i * 0.5} className={cx("absolute flex h-[120px] w-36 flex-col items-center justify-center rounded-[28px] bg-[linear-gradient(145deg,#ffffff,#e9e3da)] px-4 text-center shadow-[0_28px_62px_rgba(51,55,59,.15)]", item.c)}><div className="text-2xl font-black text-[#33373B]">{item.p}</div><div className="mt-2 text-[11px] font-black uppercase leading-tight tracking-[0.08em] text-[#FF0508]">{item.label}</div></Float>)}</div>; }
function PortalVisual() { return <div className="relative h-[380px] w-[560px]"><motion.div className="absolute left-1/2 top-[70%] h-24 w-[410px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ scale: [0.95, 1.04, 0.95], opacity: [0.42, 0.62, 0.42] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} /><motion.div className="absolute left-1/2 top-[46%] flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[64px] border-[18px] border-[#FF0508] bg-white/20 shadow-[0_30px_80px_rgba(255,5,8,.14)]" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><div className="h-40 w-52 rounded-[34px] bg-[linear-gradient(145deg,#ffffff,#e9e3da)] p-5 shadow-[inset_0_2px_0_rgba(255,255,255,.85),0_28px_58px_rgba(51,55,59,.13)]"><div className="mb-4 flex items-center gap-3"><span className="h-4 w-4 rounded-full bg-[#FF0508]" /><div className="h-4 flex-1 rounded bg-[#EEE7DC]" /></div><div className="h-16 rounded-[22px] bg-[#F2F2F2] shadow-[inset_0_1px_8px_rgba(51,55,59,.06)]" /></div></motion.div><div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#33373B] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(51,55,59,.16)]"><span className="h-2.5 w-2.5 rounded-full bg-[#FF0508]" />пилот готов к запуску</div></div>; }

function CaseComparisonVisual({ before, after }) {
  const dot = "h-2.5 w-2.5 rounded-full";
  return (
    <div className="flex items-center justify-center gap-4 xl:gap-6">
      {/* Before */}
      <div className="flex flex-col items-center gap-2">
        <span className="rounded-full bg-[#33373B]/55 px-3 py-0.5 text-[11px] font-black uppercase tracking-[0.14em] text-white">Было</span>
        <div className="overflow-hidden rounded-[10px] border border-black/8 bg-white shadow-[0_12px_36px_rgba(51,55,59,.12)]">
          <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-[#F2F2F2]/60 px-3">
            <span className={cx(dot, "bg-[#FF5F57]")} />
            <span className={cx(dot, "bg-[#FEBC2E]")} />
            <span className={cx(dot, "bg-[#28C840]")} />
            <div className="ml-5 flex-1" />
          </div>
          <img src={before} alt="Было" className="block w-full object-contain" />
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF0508] text-white shadow-[0_3px_10px_rgba(255,5,8,.16)]"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight size={14} />
      </motion.div>

      {/* After */}
      <div className="flex flex-col items-center gap-2">
        <span className="rounded-full bg-[#FF0508] px-3 py-0.5 text-[11px] font-black uppercase tracking-[0.14em] text-white">Стало</span>
        <div className="overflow-hidden rounded-[10px] border border-black/8 bg-white shadow-[0_12px_36px_rgba(51,55,59,.12)]">
          <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-[#F2F2F2]/60 px-3">
            <span className={cx(dot, "bg-[#FF5F57]")} />
            <span className={cx(dot, "bg-[#FEBC2E]")} />
            <span className={cx(dot, "bg-[#28C840]")} />
            <div className="ml-5 flex-1" />
          </div>
          <img src={after} alt="Стало" className="block w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

function CaseComparisonSlide({ section }) {
  const { before, after } = section.caseComparison;
  return (
    <motion.section
      key={section.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.34, ease: "easeOut" }}
      className="relative z-10 mx-auto flex h-[100svh] max-h-[100svh] max-w-[1440px] flex-col gap-0 overflow-visible px-5 pb-5 pt-14 md:px-8 lg:pt-14 xl:px-10"
    >
      {/* Top zone: compact header */}
      <div className="shrink-0">
        <div className="mb-2 flex items-center gap-4">
          <span className="rounded-full bg-[#FF0508] px-3 py-1 text-xs font-black tracking-widest text-white">{section.id}</span>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#33373B]/45">{section.eyebrow}</span>
        </div>
        <h1 className={cx("max-w-[700px] font-black text-[#33373B]", TITLE_STYLES[titleVariant(section)])}>{section.title}</h1>
        <p className="mt-1 max-w-[620px] text-[clamp(14px,1.1vw,17px)] leading-[1.3] tracking-[-0.02em] text-[#33373B]/65">{section.subtitle}</p>
        {section.points && (
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {section.points.map((p) => (
              <span key={p} className="rounded-full border border-black/5 bg-white/65 px-2.5 py-0.5 text-[12px] font-medium text-[#33373B]/65">{p}</span>
            ))}
          </div>
        )}
      </div>

      {/* Main zone: case images + proof caption */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-1">
        <CaseComparisonVisual before={before} after={after} />
        <div className="mt-3 shrink-0">
          {section.proof && <ProofBlock data={section.proof} />}
        </div>
      </div>
    </motion.section>
  );
}

function ScrollableEmailPreview() {
  const stopPreviewScroll = (event) => event.stopPropagation();

  return (
    <div className="relative z-50 w-full max-w-[880px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_26px_80px_rgba(51,55,59,.16)] pointer-events-auto">
      <div className="border-b border-black/5 bg-white px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[15px] font-black leading-tight text-[#33373B]">Центр дизайна MOEX</div>
            <div className="mt-1 text-[12px] font-medium leading-tight text-[#33373B]/48">design@moex.com</div>
          </div>
          <div className="shrink-0 text-right text-[12px] font-medium leading-tight text-[#33373B]/46">
            <div>23 мая 2025 г.</div>
            <div className="mt-1">Кому: подписчикам</div>
          </div>
        </div>
      </div>
      <div
        className="relative z-50 h-[min(620px,70vh)] overflow-hidden bg-[#f3f3f2] pointer-events-auto"
        onWheelCapture={stopPreviewScroll}
        onWheel={stopPreviewScroll}
        onTouchMove={stopPreviewScroll}
        tabIndex={0}
      >
        {/* Subtle bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#f3f3f2]/60 to-transparent" />
        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 -translate-x-1/2 text-[11px] font-medium tracking-[0.06em] text-[#33373B]/20">
          прокрутите письмо ↓
        </div>
        <iframe
          title="Email дайджест Центра дизайна MOEX"
          src="/cases/design-digest-email-preview.html"
          className="h-full w-full border-0 pointer-events-auto"
        />
      </div>
    </div>
  );
}

function CommunicationCaseSlide({ section }) {
  return (
    <motion.section
      key={section.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.34, ease: "easeOut" }}
      className="relative mx-auto grid h-[100svh] max-h-[100svh] max-w-[1440px] grid-cols-1 gap-6 overflow-visible px-5 pb-10 pt-20 md:px-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-center lg:pt-20 xl:px-10"
    >
      {/* Left zone: content */}
      <div className="flex flex-col justify-center">
        <div className="mb-4 flex items-center gap-4">
          <span className="rounded-full bg-[#FF0508] px-3 py-1 text-xs font-black tracking-widest text-white">{section.id}</span>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#33373B]/45">{section.eyebrow}</span>
        </div>
        <h1 className={cx("max-w-[540px] font-black text-[#33373B]", TITLE_STYLES[titleVariant(section)])}>{section.title}</h1>
        <p className="mt-4 max-w-[520px] text-[clamp(15px,1.2vw,18px)] leading-[1.3] tracking-[-0.02em] text-[#33373B]/72">{section.subtitle}</p>

        {/* Chips */}
        {section.points && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {section.points.map((p) => (
              <span key={p} className="rounded-full border border-black/5 bg-white/65 px-2.5 py-0.5 text-[12px] font-medium text-[#33373B]/65">{p}</span>
            ))}
          </div>
        )}

        {/* Supporting text */}
        {section.formula && (
          <div className="mt-4 max-w-[480px] text-[15px] leading-snug text-[#33373B]/55">
            {section.formula}
          </div>
        )}
      </div>

      {/* Right zone: email preview */}
      <div className="relative z-50 flex h-full min-h-0 w-full items-center justify-center overflow-visible pr-4 pointer-events-auto">
        <ScrollableEmailPreview />
      </div>
    </motion.section>
  );
}

function ServiceVisual() { return <div className="relative h-[380px] w-[500px]"><motion.div className="absolute left-[42%] top-[78%] h-20 w-[340px] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5.6, repeat: Infinity }} /><Float className="absolute left-[42%] top-8 h-[286px] w-[360px] -translate-x-1/2 rounded-[32px] border border-white bg-white/92 p-5 shadow-[0_30px_70px_rgba(51,55,59,.15)]"><div className="mb-5 flex items-center justify-between"><div className="text-xs font-black uppercase tracking-[0.18em] text-[#33373B]/42">фирменный шаблон</div><div className="h-7 w-14 rounded-sm bg-[#FF0508]" /></div><div className="grid grid-cols-[1fr_72px] gap-3"><div className="space-y-3"><div className="h-10 rounded-[18px] bg-[#33373B]" /><div className="h-20 rounded-[22px] bg-[#F2F2F2]" /><div className="grid grid-cols-3 gap-2"><div className="h-16 rounded-2xl bg-[#EEE7DC]" /><div className="h-16 rounded-2xl bg-[#F2F2F2]" /><div className="h-16 rounded-2xl bg-[#FF0508]/90" /></div></div><div className="space-y-2">{[0,1,2,3].map((i) => <div key={i} className={cx("h-12 rounded-2xl border border-black/5", i === 1 ? "bg-[#FF0508]/12" : "bg-[#F2F2F2]")} />)}</div></div></Float><div className="absolute bottom-6 left-[42%] -translate-x-1/2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#33373B]/55 shadow-sm">презентация собрана в шаблоне</div></div>; }

function ContentBlock({ section }) {
  const titleClass = TITLE_STYLES[titleVariant(section)];
  return <div className="flex h-full min-h-0 flex-col justify-center overflow-visible"><div className="mb-5 flex items-center gap-4"><span className="rounded-full bg-[#FF0508] px-3 py-1 text-xs font-black tracking-widest text-white">{section.id}</span><span className="text-xs font-bold uppercase tracking-[0.22em] text-[#33373B]/45">{section.eyebrow}</span></div><h1 className={cx("max-w-[780px] font-black text-[#33373B]", titleClass)}>{section.title}</h1><p className="mt-4 max-w-[700px] text-[clamp(17px,1.45vw,20px)] leading-[1.3] tracking-[-0.02em] text-[#33373B]/72">{section.subtitle}</p>{section.formula && <div className="mt-7 max-w-[620px] rounded-[28px] border border-black/5 bg-white/70 p-5 text-lg font-bold leading-tight text-[#33373B] shadow-sm">{section.formula}</div>}{section.points && <div className="mt-5 grid max-w-[780px] gap-3 md:grid-cols-2">{section.points.map((p) => <div key={p} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/55 p-3 text-[15px] font-medium text-[#33373B]/80"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF0508] text-white"><Check size={14}/></span><span>{p}</span></div>)}</div>}{section.proof && <ProofBlock data={section.proof} />}{section.beforeAfter && <BeforeAfter data={section.beforeAfter} />}{section.cards && <Cards cards={section.cards} />}{section.columns && <Columns columns={section.columns} />}{section.roadmap && <Roadmap roadmap={section.roadmap} />}{section.workflow && <Workflow data={section.workflow} />}{section.problemCards && <ProblemInsight section={section} />}{section.pilotSteps && <PilotSteps section={section} />}</div>;
}
function ProofBlock({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return <div className="mt-7 flex flex-wrap items-center gap-3">{
    items.map((p) => <div key={p.name} className="flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-2 shadow-sm"><img src={p.image} alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-black/5" /><div><div className="text-sm font-bold text-[#33373B]">{p.name}</div></div></div>)
  }</div>;
}
function ProblemInsight({ section }) { return <div className="mt-4 max-w-[900px]"><div className="grid gap-3 md:grid-cols-3">{section.problemCards.map((card) => <div key={card.title} className="rounded-[20px] border border-black/5 bg-white/60 p-3.5 shadow-sm"><div className="mb-2 min-h-[44px] border-l-[5px] border-[#FF0508] pl-3 text-[17px] font-black leading-tight text-[#33373B]">{card.title}</div><div className="text-[14px] leading-snug text-[#33373B]/70">{card.text}</div></div>)}</div><div className="mt-3 flex gap-4"><div className="pt-1 text-base font-black text-[#FF0508]">Итог</div><div className="text-[clamp(18px,1.6vw,22px)] font-black leading-[1.08] tracking-[-0.03em] text-[#33373B]">{section.conclusion}</div></div><div className="mt-3 rounded-[20px] bg-[#E9E9E9] p-3.5 text-[clamp(15px,1.2vw,17px)] font-medium leading-snug tracking-[-0.02em] text-[#33373B]/86">{section.callout}</div></div>; }
function PilotSteps({ section }) { return <div className="mt-5 max-w-[940px]"><div className="grid gap-3 md:grid-cols-3">{section.pilotSteps.map((step) => <div key={step.title} className="rounded-[22px] border border-black/5 bg-white/60 p-4 shadow-sm"><div className="mb-3 border-l-[5px] border-[#FF0508] pl-4 text-[19px] font-black leading-tight text-[#33373B]">{step.title}</div><div className="text-[15px] leading-snug text-[#33373B]/70">{step.text}</div></div>)}</div><div className="mt-5 text-[clamp(22px,2.2vw,28px)] font-black leading-[1.08] tracking-[-0.04em] text-[#33373B]">{section.finalThought}</div></div>; }
function Workflow({ data }) { return <div className="mt-5 grid max-w-[900px] gap-3 md:grid-cols-[1fr_1fr]"><div className="rounded-[24px] border border-[#FF0508]/20 bg-white/70 p-4 shadow-sm md:col-span-2"><div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#FF0508]">запрос</div><div className="text-lg font-black text-[#33373B]">{data.request}</div></div><div className="rounded-[24px] border border-black/5 bg-white/55 p-4"><div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#33373B]/40">AI читает</div><div className="space-y-2">{data.reads.map((item) => <div key={item} className="flex gap-3 text-[15px] font-medium leading-snug text-[#33373B]/75"><span className="font-black text-[#FF0508]">→</span>{item}</div>)}</div></div><div className="rounded-[24px] border border-black/5 bg-white/55 p-4"><div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#33373B]/40">на выходе</div><div className="space-y-2">{data.output.map((item) => <div key={item} className="flex gap-3 text-[15px] font-medium leading-snug text-[#33373B]/75"><span className="font-black text-[#FF0508]">✓</span>{item}</div>)}</div></div></div>; }
function BeforeAfter({ data }) { return <div className="mt-6 grid max-w-[840px] gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch"><Comparison title="Было" items={data.before} muted /><div className="hidden items-center justify-center md:flex"><ArrowRight color={RED} size={36}/></div><Comparison title="Стало" items={data.after} /></div>; }
function Comparison({ title, items, muted }) { return <div className={cx("rounded-[28px] border p-5", muted ? "border-black/5 bg-white/40" : "border-[#FF0508]/25 bg-white/75 shadow-sm")}><div className={cx("mb-4 text-sm font-black uppercase tracking-[0.2em]", muted ? "text-[#33373B]/40" : "text-[#FF0508]")}>{title}</div><div className="space-y-3">{items.map((item, i) => <div key={item} className="flex gap-3 text-base font-medium text-[#33373B]/75"><span className="text-[#33373B]/30">0{i+1}</span>{item}</div>)}</div></div>; }
function Cards({ cards }) { return <div className="mt-4 grid max-w-[860px] gap-3 md:grid-cols-2">{cards.map(({ icon: Icon, name, text }) => <div key={name} className="rounded-[20px] border border-black/5 bg-white/60 p-3.5 shadow-sm"><Icon className="mb-2 text-[#FF0508]" size={22}/><div className="text-[17px] font-black text-[#33373B]">{name}</div><div className="mt-1 text-[14px] leading-snug text-[#33373B]/66">{text}</div></div>)}</div>; }
function Columns({ columns }) { return <div className="mt-5 grid max-w-[860px] gap-3 md:grid-cols-2">{columns.map((col) => <div key={col.name} className="rounded-[22px] border border-black/5 bg-white/60 p-4 shadow-sm"><div className="mb-4 text-[22px] font-black leading-tight text-[#33373B]">{col.name}</div><div className="space-y-2.5">{col.items.map((item, i) => <div key={item} className="flex gap-3 text-[15px] leading-snug text-[#33373B]/72"><span className="font-black text-[#FF0508]">{String(i+1).padStart(2,"0")}</span>{item}</div>)}</div></div>)}</div>; }
function Roadmap({ roadmap }) { return <div className="mt-5 grid max-w-[980px] gap-3 md:grid-cols-4">{roadmap.map((r) => <div key={r.period} className="rounded-[22px] border border-black/5 bg-white/60 px-4 py-4 shadow-sm"><div className="mb-3 text-[20px] font-black leading-tight text-[#FF0508]">{r.period}</div><div className="space-y-2">{r.items.map((item) => <div key={item} className="text-[14px] leading-snug text-[#33373B]/72">— {item}</div>)}</div></div>)}</div>; }
function Slide({ section }) { return section.caseComparison ? <CaseComparisonSlide section={section} /> : section.visual === "mockup" ? <CommunicationCaseSlide section={section} /> : <motion.section key={section.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.34, ease: "easeOut" }} className="relative z-10 mx-auto grid h-[100svh] max-h-[100svh] max-w-[1440px] grid-cols-1 gap-8 overflow-visible px-5 pb-10 pt-20 md:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,.88fr)] lg:items-center lg:pt-20 xl:px-10"><ContentBlock section={section} /><Visual type={section.visual} /></motion.section>; }
function SlideCounter({ active }) {
  return (
    <div className="pointer-events-none fixed bottom-9 right-9 z-[25] flex items-end gap-2 select-none">
      <div className="text-[56px] font-black leading-none tracking-[-0.08em] text-[#33373B]/10 md:text-[74px]">
        {String(active + 1).padStart(2, "0")}
      </div>
      <div className="pb-2 text-xs font-black text-[#33373B]/32 md:pb-3">
        / {String(sections.length).padStart(2, "0")}
      </div>
    </div>
  );
}

function ClickZones({ active, setActive }) { return <div className="fixed inset-0 z-20 hidden md:block" aria-hidden="true"><button tabIndex={-1} className="absolute left-0 top-20 h-[calc(100%-80px)] w-[22%] cursor-w-resize opacity-0" onClick={() => setActive(Math.max(0, active - 1))} /><button tabIndex={-1} className="absolute right-0 top-20 h-[calc(100%-80px)] w-[22%] cursor-e-resize opacity-0" onClick={() => setActive(Math.min(sections.length - 1, active + 1))} /></div>; }
function Strip({ presentationMode }) { if (presentationMode) return null; return <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 hidden overflow-hidden border-t border-black/5 bg-white/20 py-2 backdrop-blur-xl md:block"><motion.div className="flex whitespace-nowrap text-xs font-black uppercase tracking-[0.28em] text-[#33373B]/20" animate={{ x: [0, -600] }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }}>{Array.from({ length: 8 }).map((_, i) => <span key={i} className="mx-8">Sigma Core · Product Layer · AI Skills · Проверяемый интерфейс</span>)}</motion.div></div>; }

function AccessBackground() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden"><motion.div className="absolute inset-0 bg-center bg-cover lg:bg-[center_right_18%]" style={{ backgroundImage: "url('/auth-bg.png')" }} animate={{ scale: [1, 1.035, 1], x: [0, -12, 0], y: [0, 10, 0] }} transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }} /><div className="absolute inset-0 bg-[#F2F2F2]/56" /><div className="absolute inset-y-0 left-0 w-[54%] bg-gradient-to-r from-white/78 via-white/42 to-transparent" /><div className="absolute inset-y-0 right-0 w-[34%] bg-gradient-to-l from-[#F2F2F2]/28 via-transparent to-transparent" /></div>;
}
function AccessScreen({ onUnlock }) {
  const [password, setPassword] = useState(""); const [error, setError] = useState(false);
  const submit = (e) => { e.preventDefault(); if (password.trim() === ACCESS_PASSWORD) { sessionStorage.setItem("sigma-ai-native-access", "granted"); onUnlock(); return; } setError(true); };
  return <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#F2F2F2] px-6 font-[Arial] text-[#33373B] lg:justify-start lg:px-20 xl:px-28"><AccessBackground /><section className="relative z-10 w-full max-w-[520px] rounded-[40px] border border-white bg-[#F7F7F7]/95 p-8 shadow-[0_34px_90px_rgba(51,55,59,.12)] md:p-10 lg:ml-0 xl:ml-4"><div className="mb-8 flex items-center justify-between"><div className="flex items-center gap-2 text-sm font-black tracking-[-0.02em] text-[#33373B]"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0508] text-lg leading-none text-white">Σ</span><span>Sigma MOEX</span></div><div className="flex items-center gap-2 rounded-full bg-[#33373B]/7 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#33373B]/45"><Lock size={14} /> закрытый просмотр</div></div><h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#33373B] md:text-6xl">Сигма AI Native</h1><p className="mt-5 text-xl leading-snug tracking-[-0.03em] text-[#33373B]/70">Введите пароль, чтобы перейти к презентационной части.</p><form onSubmit={submit} className="mt-8 space-y-4"><label className="block"><span className="mb-2 block text-sm font-black uppercase tracking-[0.18em] text-[#33373B]/35">пароль</span><input value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} type="password" inputMode="numeric" autoFocus placeholder="Введите пароль" className={cx("h-16 w-full rounded-2xl border bg-white px-5 text-xl font-bold text-[#33373B] outline-none transition placeholder:text-[#33373B]/25", error ? "border-[#FF0508] shadow-[0_0_0_4px_rgba(255,5,8,.12)]" : "border-black/10 focus:border-[#FF0508]/40 focus:shadow-[0_0_0_4px_rgba(255,5,8,.08)]")} /></label>{error && <div className="text-sm font-bold text-[#FF0508]">Пароль не подошёл. Проверьте ввод или запросите пароль у Игоря.</div>}<button className="flex h-16 w-full items-center justify-center rounded-2xl bg-[#33373B] text-lg font-black text-white transition hover:bg-black">Открыть презентацию</button></form><div className="mt-8 rounded-[24px] bg-[#ECECEC] p-5 text-base leading-snug text-[#33373B]/72">Чтобы получить пароль, напишите Семёнову Игорю:<br /><a href="mailto:igor.semenov@moex.com" className="mt-2 inline-flex items-center gap-2 font-black text-[#33373B] underline decoration-[#FF0508]/40 underline-offset-4"><Mail size={16} /> igor.semenov@moex.com</a></div></section></main>;
}

export default function SigmaAINativeSite() {
  const [active, setActive] = useState(0); const [presentationMode, setPresentationMode] = useState(false); const [unlocked, setUnlocked] = useState(false); const section = sections[active];
  React.useEffect(() => { if (sessionStorage.getItem("sigma-ai-native-access") === "granted") setUnlocked(true); }, []);
  React.useEffect(() => { if (!unlocked) return; const onKey = (e) => { const navKeys = ["ArrowRight", "ArrowLeft", "PageDown", "PageUp", "Home", "End", " "]; if (navKeys.includes(e.key)) e.preventDefault(); if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") setActive((v) => Math.min(sections.length - 1, v + 1)); if (e.key === "ArrowLeft" || e.key === "PageUp") setActive((v) => Math.max(0, v - 1)); if (e.key === "Home") setActive(0); if (e.key === "End") setActive(sections.length - 1); if (e.key.toLowerCase() === "f") setPresentationMode((v) => !v); if (/^[1-9]$/.test(e.key)) setActive(Math.min(Number(e.key) - 1, sections.length - 1)); if (e.key === "0") setActive(Math.min(9, sections.length - 1)); if (e.key === "-" || e.key === "=") setActive(sections.length - 1); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [unlocked]);
  if (!unlocked) return <AccessScreen onUnlock={() => setUnlocked(true)} />;
  return <main className="relative isolate min-h-screen overflow-hidden bg-[#F2F2F2] font-[Arial] text-[#33373B]"><div className="pointer-events-none fixed inset-0 -z-10 bg-[#F2F2F2]" /><div className="pointer-events-none fixed right-[-160px] top-[-120px] -z-10 h-[520px] w-[520px] rounded-full bg-[#EEE7DC]/35 blur-3xl" /><div className="pointer-events-none fixed left-[-180px] bottom-[-180px] -z-10 h-[520px] w-[520px] rounded-full bg-white/45 blur-3xl" /><Chrome active={active} setActive={setActive} presentationMode={presentationMode} setPresentationMode={setPresentationMode} /><Progress active={active} setActive={setActive} /><SlideCounter active={active} /><ClickZones active={active} setActive={setActive} /><AnimatePresence mode="wait"><Slide section={section} /></AnimatePresence><Strip presentationMode={presentationMode} />{!presentationMode && <div className="fixed bottom-4 left-5 z-50 hidden items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-bold text-[#33373B]/45 backdrop-blur md:flex"><Play size={13} /> Управление: ← → / Space · 1–0 · = финал · F — фокус</div>}</main>;
}
