import { useState } from "react";
import Icon from "@/components/ui/icon";

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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROJECT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PROJECT_TEXT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .print-page { max-width: 100% !important; margin: 0 !important; padding: 20mm 25mm !important; box-shadow: none !important; border: none !important; }
        }
        @page { margin: 20mm 25mm; size: A4; }
      `}</style>

      <div className="min-h-screen bg-[#f0ede8] py-10 px-4">

        {/* Toolbar */}
        <div className="no-print max-w-[780px] mx-auto mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c8a96e]" />
            <span className="text-sm text-[#6b6259] font-medium" style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Индивидуальный проект · формат A4
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${copied ? "bg-[#2d6a4f] text-white" : "bg-white text-[#3d3530] border border-[#d5cfc8] hover:border-[#c8a96e]"}`}
              style={{ fontFamily: "'Golos Text', sans-serif" }}
            >
              <Icon name={copied ? "Check" : "Copy"} size={15} />
              {copied ? "Скопировано!" : "Копировать текст"}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-[#3d3530] text-[#f0ede8] hover:bg-[#2a2420] transition-all duration-200"
              style={{ fontFamily: "'Golos Text', sans-serif" }}
            >
              <Icon name="Printer" size={15} />
              Печать / PDF
            </button>
          </div>
        </div>

        {/* Hint */}
        <div className="no-print max-w-[780px] mx-auto mb-5 flex items-start gap-3 bg-[#fefcf8] border border-[#e8e0d4] rounded-lg px-4 py-3">
          <Icon name="Info" size={16} className="text-[#c8a96e] mt-0.5 shrink-0" />
          <p className="text-xs text-[#6b6259] leading-relaxed" style={{ fontFamily: "'Golos Text', sans-serif" }}>
            <strong>Способ 1:</strong> нажмите «Копировать текст» → откройте Word → вставьте <kbd className="bg-[#f0ede8] px-1.5 py-0.5 rounded text-[10px] border border-[#d5cfc8]">Ctrl+V</kbd>.{" "}
            <strong>Способ 2:</strong> нажмите «Печать / PDF» → в диалоге выберите «Сохранить как PDF» → откройте PDF в Word.
          </p>
        </div>

        {/* Document */}
        <div
          className="print-page max-w-[780px] mx-auto bg-white shadow-[0_4px_40px_rgba(0,0,0,0.10)] border border-[#e8e0d4]"
          style={{ padding: "60px 72px 72px", fontFamily: "'Golos Text', sans-serif", lineHeight: "1.8", color: "#1a1714" }}
        >
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "48px", borderBottom: "2px solid #1a1714", paddingBottom: "36px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6259", marginBottom: "16px" }}>Индивидуальный проект</p>
            <h1 style={{ fontSize: "19px", fontWeight: "700", lineHeight: "1.45", marginBottom: "30px" }}>
              «Использование облачных технологий<br />для хранения и обработки данных об автомобилях»
            </h1>
            <table style={{ margin: "0 auto", fontSize: "13px", borderCollapse: "collapse" }}>
              <tbody>
                {[["Выполнил", ""], ["Класс / Группа", ""], ["Руководитель", ""], ["Дата", "2026 год"]].map(([label, val]) => (
                  <tr key={label}>
                    <td style={{ color: "#6b6259", paddingRight: "16px", paddingBottom: "6px", whiteSpace: "nowrap" }}>{label}:</td>
                    <td style={{ borderBottom: val ? "none" : "1px solid #bbb", minWidth: "220px", paddingBottom: "6px", color: "#1a1714" }}>{val || "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DS title="Введение">
            <DP>Современный автомобильный рынок генерирует колоссальные объёмы данных: технические характеристики, история обслуживания, телематика, страховые документы, фотоматериалы. Традиционные методы хранения не справляются с растущими требованиями к скорости доступа, надёжности и масштабируемости.</DP>
            <DP><strong>Актуальность:</strong> облачные технологии решают проблему фрагментированности, недоступности и потери данных автопарка.</DP>
            <DP><strong>Цель проекта:</strong> исследовать и разработать концепцию облачной системы для хранения, обработки и анализа данных об автомобилях.</DP>
            <DP><strong>Задачи:</strong></DP>
            <DL ordered items={["Изучить существующие облачные технологии и платформы","Проанализировать потребности автомобильной отрасли в хранении данных","Разработать архитектуру облачной системы","Создать действующий прототип интерфейса","Оценить эффективность и безопасность решения"]} />
          </DS>

          <DS title="Глава 1. Теоретические основы">
            <DH>1.1 Понятие облачных технологий</DH>
            <DP><strong>Облачные вычисления (Cloud Computing)</strong> — модель предоставления вычислительных ресурсов (серверы, хранилище, базы данных, сети, ПО) через интернет по требованию. Согласно классификации NIST, выделяют три модели обслуживания:</DP>
            <DT headers={["Модель","Расшифровка","Примеры"]} rows={[["IaaS","Инфраструктура как услуга","AWS EC2, Yandex Cloud"],["PaaS","Платформа как услуга","Google App Engine, Heroku"],["SaaS","Программное обеспечение как услуга","Salesforce, 1C:Облако"]]} />
            <DH>1.2 Ключевые характеристики</DH>
            <DL items={["Самообслуживание по требованию — ресурсы выделяются автоматически","Широкий сетевой доступ — с любого устройства через стандартные протоколы","Объединение ресурсов — динамическое распределение между пользователями","Гибкое масштабирование — мощности расширяются и сокращаются автоматически","Измеримость услуг — оплата только за фактически используемые ресурсы"]} />
            <DH>1.3 Типы данных об автомобилях</DH>
            <DP><strong>Идентификационные:</strong> VIN-номер, государственный регистрационный знак, ПТС и СТС.</DP>
            <DP><strong>Технические:</strong> марка, модель, год выпуска, характеристики двигателя, пробег.</DP>
            <DP><strong>Эксплуатационные:</strong> история ТО, сведения о ремонтах, расход топлива.</DP>
            <DP><strong>Документальные:</strong> страховые полисы ОСАГО и КАСКО, диагностические карты, договоры.</DP>
            <DP><strong>Телематические:</strong> GPS-треки, данные датчиков OBD-II, стиль вождения.</DP>
          </DS>

          <DS title="Глава 2. Анализ существующих решений">
            <DH>2.1 Обзор облачных платформ</DH>
            <DT headers={["Платформа","Хранилище","СУБД","Преимущества"]} rows={[["Amazon AWS","S3","RDS, DynamoDB","Мировой лидер, 200+ сервисов"],["Yandex Cloud","Object Storage","YDB, PostgreSQL","Локализация данных в РФ"],["Microsoft Azure","Blob Storage","SQL Database","Интеграция с Microsoft 365"],["VK Cloud","S3-совместимое","PostgreSQL","Российские ЦОД"]]} />
            <DH>2.2 Проблемы традиционных подходов</DH>
            <DL items={["Данные хранятся в разрозненных системах (1С, Excel, бумага)","Отсутствие резервного копирования — риск потери данных","Нет возможности удалённого доступа","Ручной ввод данных — источник ошибок","Высокая стоимость собственной IT-инфраструктуры"]} />
            <DP><strong>Вывод:</strong> существует острая потребность в единой облачной платформе для автоданных.</DP>
          </DS>

          <DS title="Глава 3. Архитектура системы">
            <DH>3.1 Концепция решения</DH>
            <DP>Разработанная система <strong>AutoCloud</strong> — облачная платформа с трёхуровневой архитектурой: пользовательский интерфейс (React SPA) → серверные облачные функции (Python) → хранилища данных (PostgreSQL + S3 Object Storage).</DP>
            <DH>3.2 Модули системы</DH>
            <DL ordered items={["Дашборд — сводная статистика, ключевые показатели, лента событий","Каталог автомобилей — реестр, поиск по VIN, фильтрация, детальные карточки","Аналитика — графики, распределения, динамика синхронизации","Документы — облачное хранилище ПТС, ОСАГО, фотографий, истории ТО","Настройки — подключение, синхронизация, уведомления, безопасность"]} />
            <DH>3.3 Технологический стек</DH>
            <DT headers={["Уровень","Технология","Назначение"]} rows={[["Frontend","React + TypeScript","Интерфейс пользователя"],["Стили","Tailwind CSS","Адаптивный дизайн"],["Backend","Python 3.11","Облачные функции"],["База данных","PostgreSQL","Структурированные данные"],["Файловое хранилище","S3 Object Storage","Документы и медиафайлы"],["Шифрование","AES-256-GCM / TLS 1.3","Защита данных"]]} />
          </DS>

          <DS title="Глава 4. Реализация прототипа">
            <DH>4.1 Описание интерфейса</DH>
            <DP>Разработан функциональный прототип веб-приложения AutoCloud. Дизайн выполнен в минималистичном стиле с монохромной палитрой и шрифтом IBM Plex Sans — обеспечивает высокую читаемость профессиональных данных.</DP>
            <DH>4.2 Схема таблицы базы данных</DH>
            <DC>{`CREATE TABLE vehicles (
    id          VARCHAR(10) PRIMARY KEY,   -- AC-001
    brand       VARCHAR(50) NOT NULL,       -- Toyota
    model       VARCHAR(50) NOT NULL,       -- Camry
    year        INTEGER NOT NULL,
    vin         VARCHAR(17) UNIQUE,         -- 17-символьный VIN
    mileage     INTEGER DEFAULT 0,
    fuel_type   VARCHAR(20),
    owner       VARCHAR(100),
    status      VARCHAR(20) DEFAULT 'active',
    updated_at  TIMESTAMP DEFAULT NOW()
);`}</DC>
            <DH>4.3 Безопасность данных</DH>
            <DL ordered items={["Шифрование в хранилище — AES-256-GCM для всех файлов","Шифрование передачи — TLS 1.3 для всех соединений","Аутентификация — двухфакторная (пароль + TOTP)","Авторизация — ролевая модель доступа (RBAC)","Резервное копирование — ежедневно, хранение 30 дней","Аудит — полный лог всех действий с данными"]} />
          </DS>

          <DS title="Глава 5. Экономическая оценка">
            <DH>5.1 Сравнение подходов</DH>
            <DT headers={["Показатель","Локальная система","Облачная система"]} rows={[["Начальные инвестиции","500 000 – 2 000 000 руб.","0 руб."],["Ежемесячные расходы","50 000 – 100 000 руб.","5 000 – 30 000 руб."],["Масштабируемость","Ограниченная","Неограниченная"],["Доступность","95–98%","99,9%"],["Восстановление после сбоя","4–24 часа","15–60 минут"],["IT-персонал","1–3 человека","Не требуется"]]} />
            <DH>5.2 Ожидаемый эффект</DH>
            <DL items={["Снижение затрат на IT — на 60–70% за счёт отказа от собственных серверов","Ускорение поиска данных — с часов до секунд","Исключение потери данных — автоматическое резервное копирование","Мобильный доступ 24/7 из любой точки мира","Соответствие 152-ФЗ — данные на российских серверах"]} />
          </DS>

          <DS title="Заключение">
            <DP>В ходе работы над проектом выполнены все поставленные задачи:</DP>
            <DL ordered items={["Изучены основные концепции облачных вычислений и их применение в автомобильной отрасли.","Проанализированы существующие решения, выявлены их ключевые недостатки.","Разработана трёхуровневая архитектура системы AutoCloud.","Создан функциональный прототип веб-приложения с пятью модулями.","Доказана экономическая эффективность облачного подхода."]} />
            <DP><strong>Главный вывод:</strong> облачные технологии обеспечивают надёжность 99,9%, снижают затраты в 3–5 раз и открывают возможности для аналитики и автоматизации, недостижимые при традиционном подходе.</DP>
            <DP><strong>Перспективы развития:</strong> интеграция с IoT-датчиками (OBD-II), машинное обучение для предиктивного обслуживания, мобильное приложение для водителей.</DP>
          </DS>

          <DS title="Список использованных источников">
            <DL ordered items={["Меллер Р., Голдинг К. «Облачные вычисления. Практическое применение» — М.: Вильямс, 2023.","Официальная документация Amazon Web Services — aws.amazon.com/documentation","Официальная документация Yandex Cloud — cloud.yandex.ru/docs","ГОСТ Р 58811-2020 «Информационные технологии. Облачные вычисления».","Федеральный закон № 152-ФЗ «О персональных данных».","NIST SP 800-145 «The NIST Definition of Cloud Computing».","Тастан Б. «Архитектура облачных приложений» — М.: Питер, 2022."]} />
          </DS>
        </div>

        <div className="no-print max-w-[780px] mx-auto mt-4 text-center text-xs text-[#9c9189]" style={{ fontFamily: "'Golos Text', sans-serif" }}>
          Отформатировано под лист A4
        </div>
      </div>
    </>
  );
}

function DS({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "1px solid #d5cfc8", paddingBottom: "7px", marginBottom: "14px", color: "#1a1714" }}>{title}</h2>
      {children}
    </div>
  );
}

function DH({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: "13px", fontWeight: "700", color: "#1a1714", marginTop: "16px", marginBottom: "7px" }}>{children}</h3>;
}

function DP({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "13px", lineHeight: "1.85", color: "#1a1714", marginBottom: "9px", textAlign: "justify" }}>{children}</p>;
}

function DL({ items, ordered }: { items: string[]; ordered?: boolean }) {
  return (
    <div style={{ marginBottom: "9px", paddingLeft: "16px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: "13px", lineHeight: "1.85", color: "#1a1714", display: "flex", gap: "8px" }}>
          <span style={{ color: "#6b6259", flexShrink: 0, minWidth: "18px" }}>{ordered ? `${i + 1}.` : "—"}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function DT({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", marginBottom: "12px", marginTop: "6px" }}>
      <thead>
        <tr>{headers.map(h => <th key={h} style={{ background: "#f0ede8", border: "1px solid #d5cfc8", padding: "6px 10px", textAlign: "left", fontWeight: "700", color: "#3d3530", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#faf8f5" }}>
            {row.map((cell, j) => <td key={j} style={{ border: "1px solid #e8e0d4", padding: "6px 10px", color: "#1a1714", verticalAlign: "top" }}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DC({ children }: { children: React.ReactNode }) {
  return <pre style={{ background: "#f5f3ef", border: "1px solid #e0d9d0", borderLeft: "3px solid #c8a96e", borderRadius: "2px", padding: "12px 16px", fontSize: "11px", lineHeight: "1.7", fontFamily: "'IBM Plex Mono', monospace", color: "#2a2420", overflowX: "auto", marginBottom: "12px", whiteSpace: "pre-wrap" }}>{children}</pre>;
}