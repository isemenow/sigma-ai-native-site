# Sigma AI Native — структура презентации

> Презентационный сайт: `/Users/igorsemenov/Documents/projects/sigma-ai-native-site/`
> Ветка: `preview/sigma-ai-native-visuals`

## Общая информация

- **Всего слайдов:** 17
- **Фреймворк:** React 19 + Vite + Tailwind CSS
- **Точка входа:** `src/App.jsx`
- **Основной визуальный стиль:** MOEX Sigma Core (токены, цвета, типографика)

## Структура слайдов

| # | Раздел | Тип визуала | Примечание |
|---|--------|-------------|------------|
| 01 | План встречи | `agenda` | Участники и темы по порядку |
| 02 | Sigma AI Native | `platform` | Hero-слайд |
| 03 | Проблема | `break` | Документация не успевает |
| 04 | Итог проблемы | `insight` | Правила отдельно |
| 05 | Сдвиг | `transform` | Before / After |
| 06 | Внутреннее устройство | `codefiles` | `Так выглядит<br>Sigma изнутри` |
| 07 | Архитектура | `stack` | Core → Product Layer → Skills |
| **08** | **Process Garden / MPG** | **`case-comparison`** | **Real before/after screenshots** |
| **09** | **Orbit** | **`case-comparison`** | **Real before/after screenshots** |
| 10 | Внутренние сервисы | `service` | Презентация в шаблоне |
| **11** | **Email-дайджест** | **`mockup` → custom** | **Scrollable local HTML preview** |
| 12 | Рабочий сценарий | `case` | Запрос → ревью интерфейса |
| 13 | Операционная модель | `hub` | AI берёт рутину |
| 14 | Подключение продуктов | `bridge` | Два сценария |
| 15 | Ценность для команды | `review` | Что получает команда |
| 16 | Roadmap | `roadmap` | Пилоты и масштабирование |
| 17 | Пилот | `portal` | Запуск пилота: три шага |

## Специфические слайды

### Слайд 01 — План встречи

- **Тип:** `AgendaVisual` (code-based, кастомный)
- **Визуал:** вертикальный список из 5 карточек с номерами, аватарами и полным текстом без обрезания
- **Участники:** Василий Акулов, Игорь Семёнов, Владислав Асламов, Андрей Миренков, Константин Афанасьев (в порядке выступления)

### Слайд 03 — Проблема

- **Тип:** `BreakVisual` (code-based, кастомный)
- **Визуал:** code-based схема расхождения версий без внешних PNG.
- **Композиция:**
  - Слева: `DOCS / V1` — карточка с правилами («правила зафиксированы»)
  - В центре: разорванный коннектор (`×` в красном круге) и пунктирные линии — sync gap
  - Справа сверху: `PRODUCT / V3`
  - Справа снизу: `PRODUCT / V4`
- **Смысл:** документация (V1) и продукты (V3, V4) живут отдельно, синхронизация нарушена.

### Слайд 08 — Process Garden / MPG

- **Тип:** CaseComparisonSlide (кастомный full-width layout)
- **Визуал:** `public/cases/process-garden-before.png` + `public/cases/process-garden-after.png`
- **Proof:** Вячеслав Подгорнов
- **Статус:** benchmark, идёт сборка
- **Метка на слайде:** `пилот · идёт сборка` (через CSS, не в данных)

### Слайд 09 — Orbit

- **Тип:** CaseComparisonSlide (кастомный full-width layout)
- **Визуал:** `public/cases/orbit-before.png` + `public/cases/orbit-after.png`
- **Proof:** Андрей Бурилов, Алексей Яковенко, Владимир Суровцев
- **Смысл:** был Sigma Core без product layer → стал Sigma Core + Orbit product layer

### Слайд 11 — Email-дайджест

- **Тип:** CommunicationCaseSlide (кастомный двухколоночный layout, 0.6fr / 1.4fr)
- **Компонент:** `ScrollableEmailPreview` — кодовый mail-frame с письмом внутри

#### Architecture scrollable preview

Для длинных коммуникационных артефактов в презентации используется **локальный scrollable HTML preview** внутри кодового mail-frame. Это предпочтительнее, чем:

- мыльные длинные PNG;
- live iframe на внешний Vercel / хостинг.

#### Источники

- **Актуальный дайджест (источник верстки):** `/Users/igorsemenov/Documents/projects/moex-design-digest/src/App.jsx`
- **Не использовать:** `src/emailHtml.js` в `moex-design-digest` — там старая версия.
- **Preview-файл:** `public/cases/design-digest-email-preview.html`
- **Assets (изображения письма):** `public/cases/design-digest-assets/`
- **Fallback (статичный mockup):** `public/cases/design-digest-email-mockup-cropped.png`

#### Компоненты

- `ScrollableEmailPreview` — mail-frame с email-шапкой (отправитель, дата, «Кому») + scrollable viewport с iframe;
- `CommunicationCaseSlide` — layout слайда: текст слева (~30%) + preview справа (~70%);
- Нижний fade-градиент и подсказка «прокрутите письмо ↓» для указания на скролл.

> **Паттерн:** Для длинных коммуникационных артефактов (email-рассылки, дайджесты, презентации) — использовать локальный scrollable HTML preview внутри кодового mail-frame. Не использовать мыльные длинные PNG. Не использовать live iframe на внешний сервис как финальное решение.

## Лейауты

| Тип | Компонент | Описание |
|-----|-----------|----------|
| Стандартный | `ContentBlock` + `Visual` | Текст слева, визуал справа (scale 0.9) |
| Case comparison | `CaseComparisonSlide` | Full-width: хедер (top) + 2 скриншота (center) + proof (bottom) |
| Communication | `CommunicationCaseSlide` | 0.6fr / 1.4fr: компактный текст слева, крупный preview справа |

## Assets

### Кейсовые скриншоты (public/cases/)

| Файл | Разрешение | Слайд |
|------|------------|-------|
| `process-garden-before.png` | 1360×873 | 08 |
| `process-garden-after.png` | 1354×898 | 08 |
| `orbit-before.png` | 1354×908 | 09 |
| `orbit-after.png` | 1354×908 | 09 |
| `design-digest-email-preview.html` | — | 11 |
| `design-digest-email-mockup-cropped.png` | 990×1287 | 11 (fallback) |

## Комментарии по разработке

- Слайды 07–08 не используют стандартный `Visual` — у них отдельные `CaseComparisonSlide`.
- Слайд 10 не использует стандартный `Visual` — у него `CommunicationCaseSlide`.
- Визуалы для остальных слайдов работают через компонент `Visual` с map `type → component`.
- При добавлении нового слайда нужно добавить его в массив `sections[]` и перенумеровать последующие.
- При добавлении нового типа визуала — добавить компонент в `Visual` switch.
