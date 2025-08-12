import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, BookOpen, PlayCircle, Shield, HeartHandshake, NotebookPen, Leaf, Send } from "lucide-react";

 function MarinaChikaidzeFriendlyYouTubeChannel() {
  const b17Profile = "https://www.b17.ru/id169637/";
  const b17Articles = "https://www.b17.ru/articles/id169637/";
  const whatsapp = "https://wa.me/79197448522"; // основной канал
  const telegram = "https://t.me/MarinaBorisi"; // официальный телеграм-аккаунт
  const phone = "+7 919 744-85-22";
  const tel = "tel:+79197448522";

  // Видео-каналы
  const rutubeChannel = "https://rutube.ru/channel/67862141/";
  const rutubeAllVideos = "https://rutube.ru/channel/67862141/videos/";
  const youtubeChannel = "https://www.youtube.com/@ПсихологОнлайнМаринаЧикаидзе";
  const allVideosLink = rutubeChannel; // основная ссылка в меню/видео/футере

  // Список видео RuTube: вставьте сюда ссылки на страницы видео Rutube, и они автоматически появятся на сайте
  // Пример: "https://rutube.ru/video/AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE/"
  const rutubeVideoUrls: string[] = [
    // Примеры — можно менять/добавлять свои ссылки на страницы видео RuTube
    "https://rutube.ru/video/c72b712a97eb69727af687dbe5f77de0/",
    "https://rutube.ru/video/64dd6d517eabaaefe7d4776a70d8cdc1/",
  ];

  // Список видео YouTube (ID роликов). Можно оставить пустым — тогда покажем ссылки на канал
  const youtubeIds: string[] = [
    "p4fheI59EEM",
    "UO_S-lO_7PY",
    "B9zf1Vw2QjI",
  ];

  // Извлекает идентификатор видео RuTube из URL для использования в embed-плеере
  const getRutubeIdFromUrl = (url: string): string | null => {
    try {
      const u = new URL(url);
      const pathParts = u.pathname.split('/').filter(Boolean);
      const videoIdx = pathParts.indexOf('video');
      if (videoIdx >= 0 && pathParts[videoIdx + 1]) {
        return pathParts[videoIdx + 1];
      }
      const match = url.match(/[0-9a-f-]{20,}/i);
      return match ? match[0] : null;
    } catch {
      return null;
    }
  };

  const rutubeVideoIds: string[] = rutubeVideoUrls
    .map((u) => getRutubeIdFromUrl(u))
    .filter((v): v is string => Boolean(v));

  const articles = [
    { title: "Право на личные границы и здоровые отношения", url: "https://www.b17.ru/article/608521/", tag: "границы" },
    { title: "Как завершить отношения и прекратить страдать. Пять шагов", url: "https://www.b17.ru/article/pyat-shagov-dlya-zaversheniya-otnoshenij/", tag: "расставание" },
    { title: "Жизнь в режиме \"нон-стоп\" и выгорание", url: "https://www.b17.ru/article/693184/", tag: "выгорание" },
    { title: "Я выбираю себя", url: "https://www.b17.ru/article/ya-vybirayu-sebya/", tag: "самоуважение" },
    { title: "Синдром недостатка радости", url: "https://www.b17.ru/article/sindrom-nedostatka-radosti/", tag: "эмоции" },
  ];

  const specialties = [
    { name: "Выгорание", desc: "Мягкое восстановление ресурса и ритма" },
    { name: "Отношения и границы", desc: "Бережно укрепляю ваши правила доступа" },
    { name: "Эмоциональная зависимость", desc: "Помогаю отличать любовь от болезненной привязанности" },
    { name: "Тревожность и прокрастинация", desc: "Стабилизируем состояние и планирование" },
    { name: "Пищевое поведение", desc: "Работа с триггерами, виной и стыдом" },
  ];

  const values = [
    { icon: <Shield className="h-5 w-5" />, title: "Конфиденциальность", text: "Вы решаете, что записывать и хранить" },
    { icon: <HeartHandshake className="h-5 w-5" />, title: "Бережность", text: "Темп подбираю вместе с вами, без давления" },
    { icon: <Leaf className="h-5 w-5" />, title: "Простота", text: "Говорю понятным языком. Конкретные шаги" },
  ];

  const methods = [
    { name: "ИНП", full: "Интегральное нейропрограммирование" },
    { name: "Психоанализ", full: "Осмысление причин повторов" },
    { name: "Коучинг", full: "Фокус на цели и поддержка изменений" },
  ];

  const fade = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
    <section id={id} className="scroll-mt-24 py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">{title}</motion.h2>
        {subtitle ? (<motion.p variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-slate-600 mt-2">{subtitle}</motion.p>) : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );

  // Самопроверки
  useEffect(() => {
    console.assert(rutubeChannel.startsWith("https://rutube.ru/"), "Ожидалась ссылка на RuTube-канал");
    console.assert(youtubeChannel.startsWith("https://www.youtube.com/"), "Ожидалась ссылка на YouTube-канал");
  }, []);

  // Тест-кейсы для ссылок статей: латинский slug без кириллицы
  useEffect(() => {
    const nonAscii = articles.filter((a) => /[А-Яа-яЁё]/.test(a.url));
    if (nonAscii.length) {
      // eslint-disable-next-line no-console
      console.error("Найдены ссылки с кириллицей в slug:", nonAscii);
    } else {
      // eslint-disable-next-line no-console
      console.log("Проверка ссылок статей: OK");
    }
  }, []);

  return (
    <main className="min-h-screen"><style dangerouslySetInnerHTML={{ __html: `html{scroll-behavior:smooth}.clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}` }} />
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold text-slate-800">Марина Чикаидзе</a>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:opacity-80">Обо мне</a>
            <a href="#services" className="hover:opacity-80">Услуги</a>
            <a href="#articles" className="hover:opacity-80">Статьи</a>
          <a href="#videos" className="hover:opacity-80">Видео</a>
          <a href="#pricing" className="hover:opacity-80">Стоимость</a>
            <a href={allVideosLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">RuTube</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contacts" className="hover:opacity-80">Контакты</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm shadow hover:bg-emerald-700">Записаться</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14 grid gap-4 sm:grid-cols-2 items-center">
          <motion.div variants={fade} initial="hidden" animate="show">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Автор на B17 · Онлайн-практика
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-slate-800">Спокойно. Бережно. По делу.</h1>
            <p className="mt-4 text-slate-700">Психолог для взрослых. Отношения и границы, зависимость и выгорание. 60 минут онлайн — <span className="font-semibold">2 000 ₽</span>.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telegram} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-2xl bg-sky-600 text-white shadow hover:bg-sky-700 inline-flex items-center gap-2"><Send className="h-4 w-4" /> Написать в Telegram</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow hover:bg-emerald-700 inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Написать в WhatsApp</a>
              <a href={b17Profile} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 inline-flex items-center gap-2"><NotebookPen className="h-4 w-4" /> Профиль на B17</a>
            </div>
            <div className="mt-3 text-xs text-slate-500">Цена и запись подтверждены в карточке специалиста на B17.</div>
          </motion.div>

          <motion.div variants={fade} initial="hidden" animate="show" className="justify-self-center sm:justify-self-end">
            <div className="h-48 w-48 sm:h-56 sm:w-56 rounded-3xl shadow-xl border border-slate-200 bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-emerald-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Раздел фото удалён по запросу */}

      {/* Values */}
      <Section id="values" title="Как я работаю" subtitle="Три опоры, которые делают процесс спокойным и безопасным">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {values.map((v) => (
            <motion.div key={v.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="inline-flex items-center gap-2 text-emerald-700">{v.icon}<span className="font-semibold">{v.title}</span></div>
              <p className="text-sm text-slate-600 mt-2">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About / Methods */}
      <Section id="about" title="Обо мне" subtitle="Магистр психологии. 15+ лет практики. Методы: психоанализ, коучинг, нейропрограммирование.">
        <div className="grid gap-6 sm:grid-cols-3">
          {methods.map((m) => (
            <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-800">{m.name}</div>
              <p className="text-sm text-slate-600 mt-1">{m.full}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-700 max-w-3xl">
          Московский Финансово‑Промышленный Университет «Синергия», магистр психологии (2018–2021).
          Дополнительно: «Психология управления» — 216 ч (2020); «Организация мотивации персонала. Управление возражениями» — 72 ч (2021).
        </div>
      </Section>

      {/* Experience / Focus */}
      <Section id="focus" title="Чем помогаю" subtitle="Фокус на практических результатах и бережных изменениях">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="font-semibold text-slate-800">Выгорание</div>
            <p className="text-sm text-slate-600 mt-1">Анализ триггеров истощения (перфекционизм, дисбаланс работа/личная жизнь), техники энергоменеджмента.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="font-semibold text-slate-800">Кризисы отношений</div>
            <p className="text-sm text-slate-600 mt-1">Созависимость, детско‑родительские травмы, влияние отцов на сценарии отношений дочерей.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="font-semibold text-slate-800">Зависимости</div>
            <p className="text-sm text-slate-600 mt-1">Лудомания, переедание (связь с тревогой), эмоциональная зависимость.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="font-semibold text-slate-800">Тревожность и прокрастинация</div>
            <p className="text-sm text-slate-600 mt-1">Авторская «Ресурсная практика» для восстановления внутренних сил.</p>
          </div>
        </div>
      </Section>

      {/* Services & Price */}
      <Section id="services" title="Темы и формат" subtitle="Работаю в удобном темпе. Запросы — от кризиса отношений до выгорания">
        <div className="grid gap-4 sm:grid-cols-2">
          {specialties.map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="font-semibold text-slate-800">{s.name}</div>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Запись через B17</div>
            <p className="mt-1 text-sm text-slate-700">Официальный профиль</p>
            <div className="mt-3"><a href={b17Profile} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 bg-white inline-flex items-center gap-2"><BookOpen className="h-4 w-4" /> Перейти на B17</a></div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Телефон / мессенджеры</div>
            <a href={tel} className="block mt-1 font-semibold hover:underline text-slate-800">{phone}</a>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-xl border border-slate-300 bg-white hover:bg-slate-50"><Send className="h-4 w-4" /> Telegram</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-xl border border-slate-300 bg-white hover:bg-slate-50"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
            <div className="text-xs text-slate-500 mt-2">Источник: описания видео RuTube</div>
            <div className="mt-3"><a href={tel} className="inline-flex items-center gap-2 text-sm underline text-slate-700"><Phone className="h-4 w-4" /> Позвонить</a></div>
          </div>
        </div>
      </Section>

      {/* Articles */}
      <Section id="articles" title="Статьи" subtitle="Подборка публикаций на B17 (56+ работ, 2022–2025)">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((a) => (
            <a key={a.url} href={a.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="text-xs uppercase tracking-wide text-slate-500">{a.tag}</div>
              <div className="mt-1 font-semibold group-hover:underline text-slate-800 clamp-2">{a.title}</div>
              <div className="mt-3 text-sm text-slate-600 inline-flex items-center gap-1">Читать на B17 <span aria-hidden>→</span></div>
            </a>
          ))}
        </div>
        <div className="mt-4"><a href={b17Articles} target="_blank" rel="noopener noreferrer" className="text-sm underline text-slate-700">Смотреть все публикации</a></div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Форматы и стоимость" subtitle="Онлайн и очные консультации в Москве">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Онлайн‑сессия</div>
            <div className="mt-1 font-semibold text-slate-800">60 минут · 2 000 ₽</div>
            <div className="text-xs text-slate-500 mt-1">Запись сессии и чек‑лист по итогу.</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Очная консультация · Москва</div>
            <div className="mt-1 font-semibold text-slate-800">80 минут · 4 000 ₽</div>
            <div className="text-xs text-slate-500 mt-1">Кабинет у м. «Красные Ворота».</div>
          </div>
        </div>
      </Section>

      {/* Videos */}
      <Section id="videos" title="Видео" subtitle="Короткие разборы частых запросов">
        {(() => {
          const [tab, setTab] = useState<'rutube' | 'youtube'>("rutube");
          const isRu = tab === 'rutube';
          const channelLink = isRu ? rutubeAllVideos : youtubeChannel;
          return (
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="text-sm text-slate-600">Мои видео на {isRu ? 'RuTube' : 'YouTube'}</div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex rounded-xl border border-slate-300 bg-white p-1" role="tablist" aria-label="Выбор платформы видео">
                    <button onClick={() => setTab('rutube')} className={`px-3 py-1 rounded-lg text-sm ${isRu ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}`} role="tab" aria-selected={isRu}>RuTube</button>
                    <button onClick={() => setTab('youtube')} className={`px-3 py-1 rounded-lg text-sm ${!isRu ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}`} role="tab" aria-selected={!isRu}>YouTube</button>
                  </div>
                  <a href={channelLink} target="_blank" rel="noopener noreferrer" className="text-sm rounded-xl px-3 py-2 border border-slate-300 bg-white hover:bg-slate-50 inline-flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Канал</a>
                </div>
              </div>

              {isRu ? (
                rutubeVideoIds.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {rutubeVideoUrls.map((url) => {
                      const id = getRutubeIdFromUrl(url);
                      if (!id) return null;
                      return (
                        <div key={id} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                          <div className="aspect-video">
                            <iframe
                              className="w-full h-full"
                              src={`https://rutube.ru/play/embed/${id}`}
                              title="Видео Марина Чикаидзе"
                              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="p-4 block text-sm text-slate-700 hover:underline inline-flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Открыть на RuTube</a>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[1, 2].map((n) => (
                      <a key={n} href={rutubeAllVideos} target="_blank" rel="noopener noreferrer" className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                        <div className="aspect-video bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center">
                          <PlayCircle className="h-10 w-10 text-emerald-600" />
                        </div>
                        <div className="p-4 text-sm text-slate-700 inline-flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Смотреть на RuTube</div>
                      </a>
                    ))}
                  </div>
                )
              ) : (
                youtubeIds.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {youtubeIds.map((id) => (
                      <div key={id} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                        <div className="aspect-video">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${id}`}
                            title="Видео Марина Чикаидзе"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                        <div className="p-4 text-sm text-slate-700 inline-flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Смотреть на YouTube</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[1, 2].map((n) => (
                      <a key={n} href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                        <div className="aspect-video bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center">
                          <PlayCircle className="h-10 w-10 text-emerald-600" />
                        </div>
                        <div className="p-4 text-sm text-slate-700 inline-flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Смотреть на YouTube</div>
                      </a>
                    ))}
                  </div>
                )
              )}
            </div>
          );
        })()}
      </Section>

      {/* Contacts */}
      <Section id="contacts" title="Контакты и запись">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Мессенджеры</div>
            <div className="mt-1 flex flex-col gap-1">
              <a href={telegram} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-slate-800 inline-flex items-center gap-2"><Send className="h-4 w-4" /> Telegram</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-800 inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href={tel} className="hover:underline text-slate-800 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {phone}</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Официальный профиль</div>
            <a href={b17Profile} target="_blank" rel="noopener noreferrer" className="block mt-1 font-semibold hover:underline text-slate-800">Профиль на B17</a>
            <a href={b17Articles} target="_blank" rel="noopener noreferrer" className="block hover:underline text-slate-800">Статьи на B17</a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-600">Видео</div>
            <a href={rutubeChannel} target="_blank" rel="noopener noreferrer" className="block mt-1 font-semibold hover:underline text-slate-800">Канал на RuTube</a>
            <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="block hover:underline text-slate-800">Канал на YouTube</a>
            <div className="text-xs text-slate-500 mt-1">Обе ссылки ведут на официальные каналы.</div>
          </div>
        </div>
      </Section>

      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-4 inset-x-0 px-4 sm:hidden">
        <div className="mx-auto max-w-md rounded-2xl shadow-lg bg-emerald-600 text-white flex items-center justify-between p-3">
          <div className="text-sm">Запись онлайн · 2 000 ₽</div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-xl bg-white text-emerald-700 text-sm font-medium">Написать</a>
        </div>
      </div>

      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-5xl mx-auto px-4 text-sm text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Марина Чикаидзе</div>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contacts" className="hover:underline">Контакты</a>
            <a href={allVideosLink} target="_blank" rel="noopener noreferrer" className="hover:underline">RuTube</a>
          </div>
        </div>
      </footer>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Марина Чикаидзе", jobTitle: "Психолог", telephone: [phone], sameAs: [b17Profile], url: b17Profile }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Психолог Марина Чикаидзе", areaServed: "RU", priceRange: "₽₽", url: b17Profile }) }} />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarinaChikaidzeFriendlyYouTubeChannel />
  </React.StrictMode>
);