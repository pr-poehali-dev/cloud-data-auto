/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  {
    id: 1,
    type: "title",
    label: "Титульный слайд",
    title: "Использование облачных технологий для хранения и обработки данных об автомобилях",
    subtitle: "Индивидуальный проект",
    meta: ["Выполнил: ______________________", "Руководитель: ___________________", "2026 год"],
  },
  {
    id: 2,
    type: "intro",
    label: "Введение",
    heading: "Введение",
    accent: "Актуальность проекта",
    body: "Современный автомобильный рынок генерирует колоссальные объёмы данных: технические характеристики, история обслуживания, телематика, страховые документы, фотоматериалы.",
    points: [
      "Традиционные методы хранения не справляются с требованиями к скорости и надёжности",
      "Данные хранятся разрозненно — в Excel, 1С, бумажных архивах",
      "Потеря данных при сбоях оборудования становится критической проблемой",
      "Отсутствует удалённый доступ и возможность анализа",
    ],
  },
  {
    id: 3,
    type: "goals",
    label: "Цель и задачи",
    heading: "Цель и задачи проекта",
    goal: "Исследовать и разработать концепцию облачной системы для хранения, обработки и анализа данных об автомобилях",
    tasks: [
      "Изучить существующие облачные технологии и платформы",
      "Проанализировать потребности автомобильной отрасли",
      "Разработать архитектуру облачной системы",
      "Создать действующий прототип интерфейса",
      "Оценить эффективность и безопасность решения",
    ],
  },
  {
    id: 4,
    type: "theory",
    label: "Облачные технологии",
    heading: "Что такое облачные технологии?",
    definition: "Облачные вычисления (Cloud Computing) — модель предоставления вычислительных ресурсов через интернет по требованию.",
    models: [
      { name: "IaaS", full: "Инфраструктура как услуга", example: "AWS EC2, Yandex Cloud" },
      { name: "PaaS", full: "Платформа как услуга", example: "Google App Engine" },
      { name: "SaaS", full: "ПО как услуга", example: "Salesforce, 1C:Облако" },
    ],
  },
  {
    id: 5,
    type: "features",
    label: "Характеристики облака",
    heading: "5 ключевых характеристик облака",
    features: [
      { icon: "Zap", title: "Самообслуживание", desc: "Ресурсы выделяются автоматически без участия провайдера" },
      { icon: "Globe", title: "Сетевой доступ", desc: "Доступ с любого устройства через стандартные протоколы" },
      { icon: "Layers", title: "Объединение ресурсов", desc: "Динамическое распределение между пользователями" },
      { icon: "TrendingUp", title: "Масштабируемость", desc: "Мощности расширяются и сокращаются автоматически" },
      { icon: "BarChart2", title: "Измеримость", desc: "Оплата только за фактически используемые ресурсы" },
    ],
  },
  {
    id: 6,
    type: "data-types",
    label: "Типы данных",
    heading: "Типы данных об автомобилях",
    types: [
      { emoji: "🪪", name: "Идентификационные", items: ["VIN-номер", "Госномер", "ПТС и СТС"] },
      { emoji: "⚙️", name: "Технические", items: ["Марка, модель, год", "Двигатель, КПП", "Пробег"] },
      { emoji: "🔧", name: "Эксплуатационные", items: ["История ТО", "Ремонты", "Расход топлива"] },
      { emoji: "📄", name: "Документальные", items: ["ОСАГО, КАСКО", "Диагностика", "Договоры"] },
      { emoji: "📡", name: "Телематические", items: ["GPS-треки", "OBD-II данные", "Стиль вождения"] },
    ],
  },
  {
    id: 7,
    type: "platforms",
    label: "Облачные платформы",
    heading: "Обзор облачных платформ",
    platforms: [
      { name: "Amazon AWS", storage: "S3", db: "RDS, DynamoDB", note: "Мировой лидер, 200+ сервисов", color: "#FF9900" },
      { name: "Yandex Cloud", storage: "Object Storage", db: "YDB, PostgreSQL", note: "Локализация данных в РФ", color: "#FC3F1D" },
      { name: "Microsoft Azure", storage: "Blob Storage", db: "SQL Database", note: "Интеграция с Microsoft 365", color: "#0078D4" },
      { name: "VK Cloud", storage: "S3-совместимое", db: "PostgreSQL", note: "Российские ЦОД", color: "#0077FF" },
    ],
  },
  {
    id: 8,
    type: "problems",
    label: "Проблемы",
    heading: "Проблемы традиционного подхода",
    problems: [
      { icon: "FolderOpen", title: "Разрозненность данных", desc: "1С, Excel, бумага — разные системы без связи между собой" },
      { icon: "AlertTriangle", title: "Риск потери данных", desc: "Сбой оборудования = потеря всего архива без возможности восстановления" },
      { icon: "WifiOff", title: "Нет удалённого доступа", desc: "Данные доступны только в офисе, невозможна мобильная работа" },
      { icon: "UserX", title: "Человеческий фактор", desc: "Ручной ввод данных — постоянный источник ошибок и опечаток" },
      { icon: "DollarSign", title: "Высокие расходы", desc: "Сервера, ПО, IT-специалисты требуют значительных вложений" },
    ],
  },
  {
    id: 9,
    type: "architecture",
    label: "Архитектура системы",
    heading: "Архитектура системы AutoCloud",
    layers: [
      { level: "01", name: "Пользователь", desc: "Браузер / Мобильное приложение", icon: "Monitor" },
      { level: "02", name: "Frontend", desc: "React SPA — Дашборд, Каталог, Аналитика", icon: "Layout" },
      { level: "03", name: "Backend", desc: "Python Cloud Functions — логика и обработка", icon: "Server" },
      { level: "04", name: "Хранилище", desc: "PostgreSQL + S3 Object Storage", icon: "Database" },
    ],
  },
  {
    id: 10,
    type: "modules",
    label: "Модули системы",
    heading: "5 модулей системы AutoCloud",
    modules: [
      { num: "01", name: "Дашборд", desc: "Сводная статистика, KPI, лента событий и статус облака в реальном времени" },
      { num: "02", name: "Каталог", desc: "Полный реестр автомобилей с поиском по VIN, фильтрацией и детальными карточками" },
      { num: "03", name: "Аналитика", desc: "Графики, распределения по статусам, топливу, пробегу и динамика синхронизации" },
      { num: "04", name: "Документы", desc: "Облачное хранилище ПТС, ОСАГО, фотографий и истории технического обслуживания" },
      { num: "05", name: "Настройки", desc: "Конфигурация подключения, синхронизации, уведомлений и параметров безопасности" },
    ],
  },
  {
    id: 11,
    type: "stack",
    label: "Технологии",
    heading: "Технологический стек",
    stack: [
      { layer: "Frontend", tech: "React + TypeScript", purpose: "Интерфейс пользователя", color: "#61DAFB" },
      { layer: "Стили", tech: "Tailwind CSS", purpose: "Адаптивный дизайн", color: "#38BDF8" },
      { layer: "Backend", tech: "Python 3.11", purpose: "Облачные функции", color: "#3776AB" },
      { layer: "База данных", tech: "PostgreSQL", purpose: "Структурированные данные", color: "#336791" },
      { layer: "Файлы", tech: "S3 Object Storage", purpose: "Документы и медиафайлы", color: "#FF9900" },
      { layer: "Шифрование", tech: "AES-256-GCM / TLS 1.3", purpose: "Защита данных", color: "#2D9A4E" },
    ],
  },
  {
    id: 12,
    type: "security",
    label: "Безопасность",
    heading: "Многоуровневая защита данных",
    levels: [
      { num: "1", title: "Шифрование хранилища", desc: "AES-256-GCM для всех файлов в облаке" },
      { num: "2", title: "Шифрование передачи", desc: "TLS 1.3 для всех соединений" },
      { num: "3", title: "Двухфакторная аутентификация", desc: "Пароль + TOTP (Google Authenticator)" },
      { num: "4", title: "Ролевая модель доступа", desc: "RBAC — каждый пользователь видит только своё" },
      { num: "5", title: "Резервное копирование", desc: "Ежедневно, хранение 30 дней" },
      { num: "6", title: "Журнал аудита", desc: "Полный лог всех действий с данными" },
    ],
  },
  {
    id: 13,
    type: "economics",
    label: "Экономика",
    heading: "Экономическое сравнение",
    comparison: [
      { param: "Начальные инвестиции", local: "500 000 – 2 000 000 ₽", cloud: "0 ₽" },
      { param: "Ежемесячные расходы", local: "50 000 – 100 000 ₽", cloud: "5 000 – 30 000 ₽" },
      { param: "Масштабируемость", local: "Ограниченная", cloud: "Неограниченная" },
      { param: "Доступность", local: "95–98%", cloud: "99,9%" },
      { param: "Восстановление", local: "4–24 часа", cloud: "15–60 минут" },
      { param: "IT-персонал", local: "1–3 чел.", cloud: "Не требуется" },
    ],
  },
  {
    id: 14,
    type: "results",
    label: "Результаты",
    heading: "Результаты проекта",
    results: [
      { icon: "BookOpen", text: "Изучены концепции облачных вычислений и их применение в автомобильной отрасли" },
      { icon: "Search", text: "Проанализированы существующие решения, выявлены ключевые недостатки" },
      { icon: "GitBranch", text: "Разработана трёхуровневая архитектура системы AutoCloud" },
      { icon: "Monitor", text: "Создан функциональный прототип с пятью модулями" },
      { icon: "TrendingUp", text: "Доказана экономическая эффективность: снижение затрат на 60–70%" },
    ],
    conclusion: "Облачные технологии обеспечивают надёжность 99,9% и снижают затраты в 3–5 раз",
  },
  {
    id: 15,
    type: "final",
    label: "Заключение",
    heading: "Выводы и перспективы",
    mainConclusion: "Облачная система AutoCloud — оптимальное решение для управления данными автомобильного парка",
    pros: [
      "Надёжность 99,9% и автоматическое резервное копирование",
      "Снижение затрат в 3–5 раз по сравнению с локальной инфраструктурой",
      "Доступ из любой точки мира 24/7 с любого устройства",
      "Соответствие 152-ФЗ — данные на российских серверах",
    ],
    future: [
      "Интеграция с IoT-датчиками и OBD-II",
      "Машинное обучение для предиктивного ТО",
      "Мобильное приложение для водителей",
    ],
  },
];

const PROJECT_TEXT = `ИНДИВИДУАЛЬНЫЙ ПРОЕКТ

«Использование облачных технологий для хранения и обработки данных об автомобилях»

Выполнил: ___________________________
Класс / Группа: _____________________
Руководитель: _______________________
Дата: 2026 год


ВВЕДЕНИЕ

Современный автомобильный рынок генерирует колоссальные объёмы данных: технические характеристики, история обслуживания, телематика, страховые документы, фотоматериалы. Традиционные методы хранения (локальные базы, бумажные архивы) не справляются с растущими требованиями к скорости доступа, надёжности и масштабируемости.

Актуальность: Переход автобизнеса на цифровые рельсы требует современных инструментов управления данными. Облачные технологии решают проблему фрагментированности, недоступности и потери данных.

Цель проекта: Исследовать и разработать концепцию облачной системы для хранения, обработки и анализа данных об автомобилях.

Задачи:
1. Изучить существующие облачные технологии и платформы
2. Проанализировать потребности автомобильной отрасли в хранении данных
3. Разработать архитектуру облачной системы
4. Создать действующий прототип интерфейса
5. Оценить эффективность и безопасность решения


ГЛАВА 1. ТЕОРЕТИЧЕСКИЕ ОСНОВЫ

1.1 Понятие облачных технологий

Облачные вычисления (Cloud Computing) — модель предоставления вычислительных ресурсов (серверы, хранилище, базы данных, сети, программное обеспечение) через интернет по требованию.

Модели обслуживания (NIST):
— IaaS (Инфраструктура как услуга): AWS EC2, Yandex Cloud
— PaaS (Платформа как услуга): Google App Engine, Heroku
— SaaS (Программное обеспечение как услуга): Salesforce, 1C:Облако

1.2 Ключевые характеристики облачных систем

— Самообслуживание по требованию — ресурсы выделяются автоматически
— Широкий сетевой доступ — доступ с любого устройства
— Объединение ресурсов — динамическое распределение между пользователями
— Гибкое масштабирование — мощности расширяются и сокращаются автоматически
— Измеримость услуг — оплата только за используемые ресурсы

1.3 Типы данных об автомобилях

Идентификационные: VIN-номер, государственный регистрационный знак, ПТС и СТС.
Технические: марка, модель, год выпуска, характеристики двигателя, пробег.
Эксплуатационные: история ТО, ремонты, расход топлива.
Документальные: ОСАГО, КАСКО, диагностические карты, договоры.
Телематические: GPS-треки, данные OBD-II, стиль вождения.


ГЛАВА 2. АНАЛИЗ СУЩЕСТВУЮЩИХ РЕШЕНИЙ

2.1 Обзор облачных платформ

Amazon AWS — S3, RDS, DynamoDB. Мировой лидер, 200+ сервисов.
Yandex Cloud — Object Storage, PostgreSQL. Локализация данных в РФ.
Microsoft Azure — Blob Storage, SQL Database. Интеграция с Microsoft 365.
VK Cloud — S3-совместимое хранилище, PostgreSQL. Российские ЦОД.

2.2 Проблемы традиционных подходов

— Данные хранятся разрозненно (1С, Excel, бумага)
— Нет резервного копирования — риск потери данных
— Нет удалённого доступа
— Ручной ввод — источник ошибок
— Высокая стоимость собственной IT-инфраструктуры

Вывод: необходима единая облачная платформа для автоданных.


ГЛАВА 3. АРХИТЕКТУРА СИСТЕМЫ

3.1 Концепция решения

Система AutoCloud — облачная платформа с трёхуровневой архитектурой:
Уровень 1 — Пользовательский интерфейс (браузер / мобильное приложение)
Уровень 2 — Frontend (React SPA): Дашборд, Каталог, Аналитика
Уровень 3 — Backend (Cloud Functions): Обработка, Валидация, Логика
Уровень 4 — Хранилище: PostgreSQL + S3 Object Storage

3.2 Модули системы

1. Дашборд — сводная статистика, ключевые показатели, лента событий
2. Каталог автомобилей — реестр, поиск по VIN, фильтрация, карточки
3. Аналитика — графики, распределения, динамика синхронизации
4. Документы — ПТС, ОСАГО, фотографии, история ТО
5. Настройки — подключение, синхронизация, уведомления, безопасность

3.3 Технологический стек

— Frontend: React + TypeScript
— Стили: Tailwind CSS
— Backend: Python 3.11
— База данных: PostgreSQL
— Файловое хранилище: S3 Object Storage
— Шифрование: AES-256-GCM + TLS 1.3


ГЛАВА 4. РЕАЛИЗАЦИЯ ПРОТОТИПА

4.1 Описание интерфейса

Разработан функциональный прототип веб-приложения AutoCloud. Дизайн минималистичный, монохромная палитра, шрифт IBM Plex Sans.

4.2 Схема таблицы базы данных

CREATE TABLE vehicles (
    id          VARCHAR(10) PRIMARY KEY,
    brand       VARCHAR(50) NOT NULL,
    model       VARCHAR(50) NOT NULL,
    year        INTEGER NOT NULL,
    vin         VARCHAR(17) UNIQUE,
    mileage     INTEGER DEFAULT 0,
    fuel_type   VARCHAR(20),
    owner       VARCHAR(100),
    status      VARCHAR(20) DEFAULT 'active',
    updated_at  TIMESTAMP DEFAULT NOW()
);

4.3 Безопасность данных

1. Шифрование в хранилище — AES-256-GCM для всех файлов
2. Шифрование передачи — TLS 1.3
3. Аутентификация — двухфакторная (пароль + TOTP)
4. Авторизация — ролевая модель (RBAC)
5. Резервное копирование — ежедневно, хранение 30 дней
6. Аудит — полный лог всех действий


ГЛАВА 5. ЭКОНОМИЧЕСКАЯ ОЦЕНКА

5.1 Сравнение подходов

Локальная система:
— Начальные инвестиции: 500 000 – 2 000 000 руб.
— Ежемесячные расходы: 50 000 – 100 000 руб.
— Масштабируемость: ограниченная
— Доступность: 95–98%
— Восстановление после сбоя: 4–24 часа
— IT-персонал: 1–3 человека

Облачная система:
— Начальные инвестиции: 0 руб.
— Ежемесячные расходы: 5 000 – 30 000 руб.
— Масштабируемость: неограниченная
— Доступность: 99,9%
— Восстановление после сбоя: 15–60 минут
— IT-персонал: не требуется

5.2 Ожидаемый эффект

— Снижение затрат на IT — на 60–70%
— Ускорение поиска данных — с часов до секунд
— Исключение потери данных — автоматическое резервное копирование
— Мобильный доступ 24/7 из любой точки мира
— Соответствие 152-ФЗ — данные на российских серверах


ЗАКЛЮЧЕНИЕ

В ходе работы над проектом:
1. Изучены концепции облачных вычислений и их применение в автомобильной отрасли.
2. Проанализированы существующие решения, выявлены их недостатки.
3. Разработана трёхуровневая архитектура системы AutoCloud.
4. Создан функциональный прототип с пятью модулями.
5. Доказана экономическая эффективность облачного подхода.

Главный вывод: облачные технологии обеспечивают надёжность 99,9%, снижают затраты в 3–5 раз и открывают возможности для аналитики и автоматизации, недостижимые при традиционном подходе.

Перспективы: интеграция с IoT-датчиками (OBD-II), машинное обучение для предиктивного обслуживания, мобильное приложение.


СПИСОК ИСПОЛЬЗОВАННЫХ ИСТОЧНИКОВ

1. Меллер Р., Голдинг К. «Облачные вычисления. Практическое применение» — М.: Вильямс, 2023.
2. Официальная документация Amazon Web Services — aws.amazon.com/documentation
3. Официальная документация Yandex Cloud — cloud.yandex.ru/docs
4. ГОСТ Р 58811-2020 «Информационные технологии. Облачные вычисления».
5. Федеральный закон № 152-ФЗ «О персональных данных».
6. NIST SP 800-145 «The NIST Definition of Cloud Computing».
7. Тастан Б. «Архитектура облачных приложений» — М.: Питер, 2022.`;

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = SLIDES.length;
  const slide = SLIDES[current];

  const go = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 220);
  };
  const prev = () => go(Math.max(0, current - 1));
  const next = () => go(Math.min(total - 1, current + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setAnimating(a => { if (!a) { setTimeout(() => { setCurrent(c => Math.min(total - 1, c + 1)); setAnimating(false); }, 220); return true; } return a; });
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setAnimating(a => { if (!a) { setTimeout(() => { setCurrent(c => Math.max(0, c - 1)); setAnimating(false); }, 220); return true; } return a; });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);

  return (
    <>
      <style>{`
        @keyframes slideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .slide-enter { animation: slideIn 0.28s ease-out forwards; }
        @media print {
          .no-print { display: none !important; }
          .slide-canvas { page-break-after: always; box-shadow: none !important; border: none !important; }
        }
        @page { margin: 10mm; size: A4 landscape; }
      `}</style>

      <div className="min-h-screen bg-[#1a1714] flex flex-col" style={{ fontFamily: "'Golos Text', sans-serif" }}>

        {/* Top bar */}
        <div className="no-print flex items-center justify-between px-6 py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#c8a96e] rounded-sm flex items-center justify-center">
              <Icon name="Cloud" size={13} className="text-[#1a1714]" />
            </div>
            <span className="text-white/90 text-sm font-medium">AutoCloud</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/40 text-xs">Индивидуальный проект · 15 слайдов</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium bg-white/10 text-white/70 hover:bg-white/15 transition-all"
          >
            <Icon name="Printer" size={13} />
            Печать
          </button>
        </div>

        {/* Slide area */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div
            className={`slide-canvas w-full max-w-4xl bg-[#211e1b] border border-white/10 rounded-xl overflow-hidden shadow-2xl ${animating ? "opacity-0" : "slide-enter"}`}
            style={{ minHeight: "520px", aspectRatio: "16/9", display: "flex", flexDirection: "column" }}
          >
            <SlideRenderer slide={slide} />
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-t border-white/10">
          {/* Thumbnails */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                title={s.label}
                className={`shrink-0 w-8 h-5 rounded text-[9px] font-medium transition-all ${i === current ? "bg-[#c8a96e] text-[#1a1714]" : "bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/70"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <span className="text-white/30 text-xs font-mono">{current + 1} / {total}</span>
            <span className="text-white/20 text-xs hidden sm:block">← → для навигации</span>
            <button onClick={prev} disabled={current === 0} className="w-8 h-8 rounded flex items-center justify-center bg-white/10 text-white/60 hover:bg-white/20 disabled:opacity-30 transition-all">
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button onClick={next} disabled={current === total - 1} className="w-8 h-8 rounded flex items-center justify-center bg-[#c8a96e] text-[#1a1714] hover:bg-[#d4b87a] disabled:opacity-30 transition-all">
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

 
function SlideRenderer({ slide }: { slide: typeof SLIDES[0] }) {
   
  const s = slide as Record<string, any>;

  if (s.type === "title") return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #c8a96e 0%, transparent 60%), radial-gradient(circle at 70% 50%, #4a9eff 0%, transparent 60%)" }} />
      <div className="relative z-10">
        <p className="text-[#c8a96e] text-xs tracking-[0.2em] uppercase mb-6 font-medium">{s.subtitle}</p>
        <h1 className="text-white text-2xl font-bold leading-tight mb-10 max-w-2xl">{s.title}</h1>
        <div className="flex flex-col items-center gap-1.5">
          {s.meta.map((m: string, i: number) => (
            <p key={i} className="text-white/40 text-sm">{m}</p>
          ))}
        </div>
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "intro") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-5" />
      <p className="text-white/60 text-sm mb-5 leading-relaxed max-w-xl">{s.body}</p>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {s.points.map((p: string, i: number) => (
          <div key={i} className="flex items-start gap-2.5 bg-white/5 rounded-lg p-3">
            <span className="text-[#c8a96e] text-xs font-bold mt-0.5 shrink-0">0{i+1}</span>
            <span className="text-white/70 text-xs leading-relaxed">{p}</span>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "goals") return (
    <div className="flex-1 flex p-10 gap-8 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <div className="flex-1">
        <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
        <div className="w-10 h-0.5 bg-[#c8a96e] mb-6" />
        <div className="bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-xl p-5 mb-5">
          <p className="text-[#c8a96e] text-xs font-bold uppercase tracking-wider mb-2">Цель проекта</p>
          <p className="text-white text-sm leading-relaxed">{s.goal}</p>
        </div>
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Задачи</p>
        <div className="space-y-2">
          {s.tasks.map((t: string, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#c8a96e]/20 text-[#c8a96e] text-xs font-bold flex items-center justify-center shrink-0">{i+1}</span>
              <span className="text-white/70 text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "theory") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-5" />
      <div className="bg-white/5 rounded-lg p-4 mb-5 border-l-2 border-[#c8a96e]">
        <p className="text-white/80 text-sm leading-relaxed">{s.definition}</p>
      </div>
      <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Модели обслуживания (NIST)</p>
      <div className="grid grid-cols-3 gap-3">
        {s.models.map((m: any) => (
          <div key={m.name} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-[#c8a96e] text-2xl font-bold mb-1">{m.name}</div>
            <div className="text-white text-xs font-medium mb-1">{m.full}</div>
            <div className="text-white/40 text-xs">{m.example}</div>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "features") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-6" />
      <div className="grid grid-cols-5 gap-3 flex-1">
        {s.features.map((f: any, i: number) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 flex flex-col items-center text-center border border-white/8">
            <div className="w-10 h-10 rounded-full bg-[#c8a96e]/15 flex items-center justify-center mb-3">
              <Icon name={f.icon} size={18} className="text-[#c8a96e]" fallback="Star" />
            </div>
            <div className="text-white text-xs font-bold mb-1.5">{f.title}</div>
            <div className="text-white/40 text-xs leading-relaxed">{f.desc}</div>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "data-types") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-6" />
      <div className="grid grid-cols-5 gap-3 flex-1">
        {s.types.map((t: any, i: number) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/8">
            <div className="text-2xl mb-2">{t.emoji}</div>
            <div className="text-white text-xs font-bold mb-2">{t.name}</div>
            <div className="space-y-1">
              {t.items.map((item: string, j: number) => (
                <div key={j} className="text-white/40 text-xs flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#c8a96e]/50 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "platforms") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-6" />
      <div className="grid grid-cols-2 gap-4 flex-1">
        {s.platforms.map((p: any) => (
          <div key={p.name} className="bg-white/5 rounded-xl p-5 border border-white/8 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
              <span className="text-white font-bold text-sm">{p.name}</span>
            </div>
            <div className="flex gap-4">
              <div>
                <p className="text-white/30 text-xs">Хранилище</p>
                <p className="text-white/80 text-xs font-medium">{p.storage}</p>
              </div>
              <div>
                <p className="text-white/30 text-xs">СУБД</p>
                <p className="text-white/80 text-xs font-medium">{p.db}</p>
              </div>
            </div>
            <p className="text-[#c8a96e] text-xs mt-auto">{p.note}</p>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "problems") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-red-500 mb-6" />
      <div className="grid grid-cols-5 gap-3 flex-1">
        {s.problems.map((p: any, i: number) => (
          <div key={i} className="bg-red-500/8 rounded-xl p-4 border border-red-500/20 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center mb-3">
              <Icon name={p.icon} size={15} className="text-red-400" fallback="AlertCircle" />
            </div>
            <div className="text-white text-xs font-bold mb-1.5">{p.title}</div>
            <div className="text-white/40 text-xs leading-relaxed">{p.desc}</div>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "architecture") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-6" />
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {s.layers.map((l: any, i: number) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[#c8a96e]/40 text-xs font-mono w-6">{l.level}</span>
            <div className="flex-1 bg-white/5 rounded-lg p-3.5 border border-white/10 flex items-center gap-4">
              <div className="w-8 h-8 rounded-md bg-[#c8a96e]/15 flex items-center justify-center shrink-0">
                <Icon name={l.icon} size={15} className="text-[#c8a96e]" fallback="Box" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">{l.name}</div>
                <div className="text-white/40 text-xs">{l.desc}</div>
              </div>
            </div>
            {i < s.layers.length - 1 && (
              <div className="absolute left-[68px] mt-16">
                <Icon name="ArrowDown" size={12} className="text-[#c8a96e]/30" />
              </div>
            )}
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "modules") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-5" />
      <div className="grid grid-cols-5 gap-3 flex-1">
        {s.modules.map((m: any) => (
          <div key={m.num} className="bg-white/5 rounded-xl p-4 border border-white/8">
            <div className="text-[#c8a96e] text-xl font-bold mb-2">{m.num}</div>
            <div className="text-white font-bold text-sm mb-1.5">{m.name}</div>
            <div className="text-white/40 text-xs leading-relaxed">{m.desc}</div>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "stack") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-5" />
      <div className="grid grid-cols-3 gap-3 flex-1">
        {s.stack.map((item: any) => (
          <div key={item.layer} className="bg-white/5 rounded-xl p-4 border border-white/8 flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full mt-1 shrink-0" style={{ background: item.color }} />
            <div>
              <div className="text-white/40 text-xs mb-0.5">{item.layer}</div>
              <div className="text-white font-bold text-sm">{item.tech}</div>
              <div className="text-white/50 text-xs mt-1">{item.purpose}</div>
            </div>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "security") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-emerald-500 mb-5" />
      <div className="grid grid-cols-3 gap-3 flex-1">
        {s.levels.map((l: any) => (
          <div key={l.num} className="bg-emerald-500/8 rounded-xl p-4 border border-emerald-500/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">{l.num}</span>
              <span className="text-white font-bold text-xs">{l.title}</span>
            </div>
            <p className="text-white/40 text-xs">{l.desc}</p>
          </div>
        ))}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "economics") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-5" />
      <div className="flex-1 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left text-white/30 text-xs font-medium pb-3 pr-4">Параметр</th>
              <th className="text-left text-white/30 text-xs font-medium pb-3 pr-4">Локальная система</th>
              <th className="text-left text-[#c8a96e] text-xs font-medium pb-3">Облачная система</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {s.comparison.map((row: any, i: number) => (
              <tr key={i}>
                <td className="py-2.5 pr-4 text-white/60 text-xs">{row.param}</td>
                <td className="py-2.5 pr-4 text-red-400/80 text-xs">{row.local}</td>
                <td className="py-2.5 text-emerald-400 text-xs font-medium">{row.cloud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "results") return (
    <div className="flex-1 flex flex-col p-10 relative">
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-5" />
      <div className="space-y-2 flex-1">
        {s.results.map((r: any, i: number) => (
          <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg px-4 py-3">
            <div className="w-7 h-7 rounded-md bg-[#c8a96e]/15 flex items-center justify-center shrink-0">
              <Icon name={r.icon} size={14} className="text-[#c8a96e]" fallback="Check" />
            </div>
            <span className="text-white/70 text-sm leading-relaxed">{r.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-lg px-4 py-3 text-[#c8a96e] text-sm font-medium text-center">
        {s.conclusion}
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  if (s.type === "final") return (
    <div className="flex-1 flex flex-col p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #c8a96e 0%, transparent 50%)" }} />
      <SlideBadge>{s.label}</SlideBadge>
      <h2 className="text-white text-xl font-bold mb-2">{s.heading}</h2>
      <div className="w-10 h-0.5 bg-[#c8a96e] mb-4" />
      <div className="bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-xl p-4 mb-4">
        <p className="text-white text-sm font-medium text-center">{s.mainConclusion}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div>
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Достигнуто</p>
          <div className="space-y-1.5">
            {s.pros.map((p: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-white/60 text-xs">
                <Icon name="Check" size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#c8a96e] text-xs font-bold uppercase tracking-wider mb-2">Перспективы</p>
          <div className="space-y-1.5">
            {s.future.map((f: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-white/60 text-xs">
                <Icon name="ArrowRight" size={12} className="text-[#c8a96e] mt-0.5 shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideNum n={s.id} />
    </div>
  );

  return null;
}

function SlideBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute top-6 right-8 text-[10px] text-white/20 uppercase tracking-widest font-medium">{children}</span>
  );
}

function SlideNum({ n }: { n: number }) {
  return (
    <div className="absolute bottom-5 left-8 text-white/15 text-xs font-mono">{String(n).padStart(2, "0")} / 15</div>
  );
}