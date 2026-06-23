# Sigma AI Native — структура презентации

> Презентационный сайт: `/Users/igorsemenov/Documents/projects/sigma-ai-native-site/`
> Ветка: `preview/sigma-ai-native-visuals`

## Общая информация

- **Всего слайдов:** 16
- **Фреймворк:** React 19 + Vite + Tailwind CSS
- **Точка входа:** `src/App.jsx`
- **Основной визуальный стиль:** MOEX Sigma Core (токены, цвета, типографика)

## Структура слайдов

| # | Раздел | Тип визуала | Примечание |
|---|--------|-------------|------------|
| 01 | Сигма AI Native | `platform` | Hero-слайд |
| 02 | Проблема | `break` | Документация не успевает |
| 03 | Итог проблемы | `insight` | Правила отдельно |
| 04 | Сдвиг | `transform` | Before / After |
| 05 | Внутреннее устройство | `codefiles` | MD-файлы |
| 06 | Архитектура | `stack` | Core → Product Layer → Skills |
| **07** | **Process Garden / MPG** | **`case-comparison`** | **Real before/after screenshots** |
| **08** | **Orbit** | **`case-comparison`** | **Real before/after screenshots** |
| 09 | Внутренние сервисы | `service` | Презентация в шаблоне |
| **10** | **Email-дайджест** | **`mockup` → custom** | **Scrollable local HTML preview** |
| 11 | Рабочий сценарий | `case` | Workflow: запрос → ревью |
| 12 | Операционная модель | `hub` | AI берёт рутину |
| 13 | Подключение продуктов | `bridge` | Два сценария |
| 14 | Ценность для команды | `review` | Что получает команда |
| 15 | Roadmap | `roadmap` | Пилоты и масштабирование |
| 16 | Пилот | `portal` | Запуск в три шага |

## Специфические слайды

### Слайд 07 — Process Garden / MPG

- **Тип:** CaseComparisonSlide (кастомный full-width layout)
- **Визуал:** `public/cases/process-garden-before.png` + `public/cases/process-garden-after.png`
- **Proof:** Вячеслав Подгорнов
- **Статус:** benchmark, идёт сборка
- **Метка на слайде:** `пилот · идёт сборка` (через CSS, не в данных)

### Слайд 08 — Orbit

- **Тип:** CaseComparisonSlide (кастомный full-width layout)
- **Визуал:** `public/cases/orbit-before.png` + `public/cases/orbit-after.png`
- **Proof:** Андрей Бурилов, Алексей Яковенко
- **Смысл:** был Sigma Core без product layer → стал Sigma Core + Orbit product layer

### Слайд 10 — Email-дайджест

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
| `process-garden-before.png` | 1360×873 | 07 |
| `process-garden-after.png` | 1354×898 | 07 |
| `orbit-before.png` | 1354×908 | 08 |
| `orbit-after.png` | 1354×908 | 08 |
| `design-digest-email-preview.html` | — | 10 |
| `design-digest-email-mockup-cropped.png` | 990×1287 | 10 (fallback) |

## Комментарии по разработке

- Слайды 07–08 не используют стандартный `Visual` — у них отдельные `CaseComparisonSlide`.
- Слайд 10 не использует стандартный `Visual` — у него `CommunicationCaseSlide`.
- Визуалы для остальных слайдов работают через компонент `Visual` с map `type → component`.
- При добавлении нового слайда нужно добавить его в массив `sections[]` и перенумеровать последующие.
- При добавлении нового типа визуала — добавить компонент в `Visual` switch.
