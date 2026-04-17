import {
  Briefcase,
  Building2,
  Scale,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

export interface Segment {
  id: string
  icon: LucideIcon
  name: string
  hook: string
  pain: string
  effect: string
  socialProof: string
}

export const SEGMENTS: Segment[] = [
  {
    id: 'manager',
    icon: Building2,
    name: 'Menedżer / Prezes',
    hook: 'Inni już to robią. Ty jeszcze nie.',
    pain: 'Na spotkaniach padają skróty, których nie znasz. Inni w firmie już używają AI — a Ty udajesz, że to nie Twój temat. I czujesz, że z każdym tygodniem tracisz kawałek autorytetu, który budowałeś latami.',
    effect: 'Wyobraź sobie: poniedziałek rano, spotkanie zarządu. Ktoś pyta o analizę rynku. Ty mówisz: „Zrobiłem ją z AI w 15 minut". Cisza. I to Ty pokazujesz zespołowi jak to działa. Nie nadganiasz — prowadzisz.',
    socialProof: 'Ten kurs jest dla Ciebie, jeśli masz doświadczenie w zarządzaniu, ale AI to dla Ciebie wciąż wyzwanie.',
  },
  {
    id: 'entrepreneur',
    icon: Briefcase,
    name: 'Przedsiębiorca',
    hook: 'Nie masz czasu się uczyć, bo nie masz czasu.',
    pain: 'Robisz wszystko sam. Maile, oferty, dokumenty, faktury. Każdy dzień to gaszenie pożarów. Na „uczenie się nowych rzeczy" nie ma miejsca w kalendarzu. Paradoks? Owszem. Ale prawdziwy.',
    effect: 'Po kursie masz 3-5 zadań które AI robi za Ciebie. Oferty w 2 minuty zamiast pół godziny. Maile follow-up — automatycznie. Odzyskujesz godziny tygodniowo. I wreszcie masz czas na to, co naprawdę buduje firmę.',
    socialProof: 'Idealny kurs, jeśli prowadzisz firmę i masz wrażenie że doba jest za krótka. (Jest. Ale AI ją wydłuża.)',
  },
  {
    id: 'specialist',
    icon: Scale,
    name: 'Specjalista branżowy',
    hook: 'AI nie zastąpi Twojej wiedzy. Wzmocni ją.',
    pain: 'Czytasz, że AI pisze umowy, analizuje dane, stawia wstępne diagnozy. Nie wiesz, czy to zagrożenie czy szansa. I wolisz nie sprawdzać — bo co jeśli okaże się, że robi to lepiej? (Spoiler: nie robi. Ale robi to szybciej.)',
    effect: 'Twoje wieloletnie doświadczenie branżowe to SILNIK. AI to turbo. Analizujesz dokumenty w ułamku czasu, wyłapujesz rzeczy które przegapiłbyś po 30 stronach, i masz czas na to co naprawdę wymaga Twojej uwagi.',
    socialProof: 'Jeśli jesteś prawnikiem, księgową, lekarzem, inżynierem — Twoja ekspertyza + AI to kombinacja, której "juniorzy" nie mają.',
  },
  {
    id: 'sales',
    icon: TrendingUp,
    name: 'Handlowiec',
    hook: '20 maili dziennie ręcznie? Jest lepszy sposób.',
    pain: '20 maili dziennie. Oferty po godzinach. Follow-upy które zapominasz wysłać. Spędzasz więcej czasu przy klawiaturze niż z klientami. A to z klientami zarabiasz.',
    effect: 'AI pisze za Ciebie maile, oferty i follow-upy. Spersonalizowane, w Twoim stylu — nie w stylu robota. Ty skupiasz się na relacjach. Tam, gdzie naprawdę jesteś niezastąpiony.',
    socialProof: 'Dla Ciebie, jeśli sprzedajesz i wiesz że czas to pieniądz. Dosłownie.',
  },
  {
    id: 'corporate',
    icon: Users,
    name: 'Pracownik korporacji',
    hook: 'Szef mówi „AI". Nikt nie wie od czego zacząć.',
    pain: 'Szef mówi „AI". HR rozsyła linki do webinarów. Na Teams pojawia się Copilot. Ale nikt nie tłumaczy jak z tego korzystać. A Ty nie chcesz pytać — bo „wszyscy już to umieją". (Nie umieją. Też udają.)',
    effect: 'Wracasz do biura z konkretnymi umiejętnościami. Raporty, prezentacje, analizy — szybciej i lepiej niż ktokolwiek w Twoim dziale. I to Ciebie pytają: „jak to zrobiłeś?"',
    socialProof: 'Dla Ciebie, jeśli w korporacji mówią o AI, ale nikt nie pokazał Ci jak z tego korzystać.',
  },
]

export const COURSE_WEEKS = [
  {
    week: 1,
    title: 'Podstawy — „jak rozmawiać z maszyną"',
    description:
      'Zaczynamy od zera: skąd wziąć narzędzia, jak je ustawić, czego im nie dawać. Uczysz się rozmawiać z AI tak, żeby dostawać to, czego potrzebujesz — nie losowe odpowiedzi. I od pierwszego dnia wiesz, jak robić to bezpiecznie: co AI może widzieć, czego nie powinno, i jak mieć nad tym kontrolę.',
  },
  {
    week: 2,
    title: 'Praktyka — budujesz swój warsztat',
    description:
      'Koniec z kopiowaniem cudzych przykładów. Pracujesz na swoich zadaniach — maile, raporty, analizy, dokumenty — i budujesz narzędzia, które pasują do Twojej pracy. Co działa, zostawiasz. Co nie — poprawiamy razem. Po tym tygodniu masz swój zestaw, z którym zaczynasz prawdziwą pracę z AI.',
  },
  {
    week: 3,
    title: 'Twoja praca × AI',
    description:
      'Nie pojedyncze zadania, a całe procesy. Budujesz powtarzalne systemy — raz inwestujesz czas, potem korzystasz wielokrotnie. Efekt kuli śnieżnej: rozwiązanie z jednego projektu zaczyna działać w następnych.',
  },
  {
    week: 4,
    title: 'Projekt — dowód że umiesz',
    description:
      'Budujesz coś kompletnego — od pomysłu do działającego rozwiązania dopasowanego do Twojej pracy. Pokazujesz efekt sobie i innym. I widzisz, dokąd ta droga prowadzi dalej.',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Czy muszę mieć doświadczenie z AI?',
    answer:
      'Nie. Startujemy od podstaw, ale szybko idziemy dalej. Kurs jest również dla osób, które nigdy nie korzystały z AI lub spróbowały raz-dwa i nie wiedziały co dalej. Jakiś czas temu sam byłem w tym miejscu.',
  },
  {
    question: 'Ile czasu tygodniowo muszę poświęcić?',
    answer:
      'Dwie sesje live w tygodniu (90 min każda). Plus krótkie materiały przed sesją i zadanie domowe w Twoim tempie. Łącznie 4-5 godzin tygodniowo. Mniej niż jeden sezon serialu.',
  },
  {
    question: 'Czy to kolejny kurs, z którego nic nie wyniosę?',
    answer:
      'Sesje live to warsztaty — pracujesz w swoim środowisku, z moją pomocą na bieżąco. Po sesji masz nagrania i materiały dostępne przez rok. Między sesjami — zamknięta grupa, gdzie dopytasz mnie i innych uczestników. A jeśli potrzebujesz indywidualnej pomocy — masz godzinę konsultacji 1:1 ze mną. Reszta zależy od Ciebie.',
  },
  {
    question: 'Czy potrzebuję płatnych narzędzi?',
    answer:
      'Na pierwszych dwóch poziomach nie — wszystko robimy na darmowych wersjach. Jeśli chcesz wejść na poziom trzeci, tam potrzebujesz płatnej subskrypcji Claude. Ale to Twoja decyzja i nie musisz jej podejmować od razu.',
  },
  {
    question: 'Co jeśli nie dam rady nadążyć?',
    answer:
      'Materiały i nagrania zostają z Tobą przez rok — wracasz kiedy chcesz. Sesje live mają Q&A właśnie po to, żebyś nie zostawał z pytaniami. A jeśli potrzebujesz dodatkowej pomocy — masz godzinę konsultacji 1:1 ze mną w cenie kursu.',
  },
  {
    question: 'Co jeśli kurs będzie dla mnie za prosty?',
    answer:
      'Zrób test diagnostyczny — za darmo sprawdzisz swój poziom. Jeśli jesteś na poziomie Czeladnika lub wyżej — to faktycznie nie jest dla Ciebie.',
  },
  {
    question: 'Czy to zadziała w mojej branży?',
    answer:
      'AI to narzędzie uniwersalne — jak Excel. Dlatego na kursie pracujesz na swoich zadaniach. Są prawnicy, księgowi, handlowcy, lekarze, inżynierowie. Każdy buduje narzędzia pod siebie.',
  },
]

export const FRAMEWORK_LEVELS = [
  { level: 'I', name: 'Student', description: 'Pierwszy kontakt z AI', active: true },
  { level: 'II', name: 'Praktykant', description: 'Rozumiesz podstawy', active: true },
  { level: 'III', name: 'Czeladnik', description: 'Samodzielnie pracujesz z AI', active: false },
  { level: 'IV', name: 'Ekspert', description: 'Automatyzacja i systemy', active: false },
  { level: 'V', name: 'Mistrz', description: 'Tworzysz nowatorskie rozwiązania', active: false },
]

export const CTA_URL = '#quiz'
export const CTA_TEXT = 'Sprawdź swój poziom AI'
export const SPOTS_TOTAL = 20
export const SPOTS_LEFT = 17

// Google Apps Script web app URL — zastąp TWOJ_SCRIPT_ID swoim ID po konfiguracji
// Instrukcja: (1) Utwórz Google Sheet z nagłówkami: Data, Imię, Email, Poziom, Wynik, Kwalifikacja, Status
// (2) Extensions → Apps Script → wklej kod doPost z README → Deploy → Web app → Anyone → skopiuj URL
export const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzVls1xTaaFWjmpe8qI8a1z5dsq15aXn5ur2d9vuU4d_Uqn8AKtjjaOBbGjZdDJpuCk/exec'

export interface QuizQuestion {
  id: number
  scenario: string
  answers: { text: string; points: number }[]
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario:
      'Jak często używasz narzędzi AI (ChatGPT, Claude, Gemini)?',
    answers: [
      { text: 'Nie używam; próbowałem kilka razy', points: 0 },
      { text: 'Kilka razy w miesiącu, jak mi się przypomni', points: 1 },
      { text: 'Kilka razy w tygodniu, mam swoje zastosowania', points: 2 },
      { text: 'Codziennie — to część mojego sposobu pracy', points: 3 },
    ],
  },
  {
    id: 2,
    scenario:
      'Jak wyglądają Twoje typowe polecenia do AI?',
    answers: [
      { text: 'Krótkie pytania, jak w Google: „jak napisać mail do klienta"', points: 0 },
      { text: 'Kilka zdań z opisem sytuacji', points: 1 },
      { text: 'Podaję kontekst, cel, ton, format — strukturyzuję polecenie', points: 2 },
      { text: 'Używam technik: role, przykłady, ograniczenia', points: 3 },
    ],
  },
  {
    id: 3,
    scenario:
      'Czy wgrywałeś plik (PDF, Word, zdjęcie) do AI, żeby go przeanalizować?',
    answers: [
      { text: 'Nie, nie wiedziałem że to możliwe', points: 0 },
      { text: 'Słyszałem o tym, ale nie próbowałem', points: 1 },
      { text: 'Tak, zdarzyło mi się kilka razy', points: 2 },
      { text: 'Tak, regularnie pracuję z AI na swoich dokumentach', points: 3 },
    ],
  },
  {
    id: 4,
    scenario:
      'Czy masz skonfigurowane „instrukcje użytkownika" lub „pamięć" w jakimkolwiek narzędziu AI?',
    answers: [
      { text: 'Nie wiem co to jest', points: 0 },
      { text: 'Widziałem tę opcję, ale nie ustawiałem', points: 1 },
      { text: 'Tak, mam ustawione podstawowe informacje o sobie', points: 2 },
      { text: 'Tak, i aktywnie je aktualizuję pod różne zastosowania', points: 3 },
    ],
  },
  {
    id: 5,
    scenario:
      'Czy korzystałeś z „Projektów" w Claude, ChatGPT, lub podobnych funkcji dających AI stały kontekst Twojej pracy?',
    answers: [
      { text: 'Nie wiem co to jest', points: 0 },
      { text: 'Widziałem, ale nie korzystałem', points: 1 },
      { text: 'Próbowałem stworzyć projekt, ale nie korzystam regularnie z takich opcji', points: 2 },
      { text: 'Mam aktywne projekty, których używam regularnie', points: 3 },
    ],
  },
  {
    id: 6,
    scenario:
      'Z ilu narzędzi AI faktycznie korzystałeś (nie tylko słyszałeś o nich)?',
    answers: [
      { text: 'Żadnego; jednego (np. tylko ChatGPT)', points: 0 },
      { text: 'Dwóch (np. ChatGPT + Claude lub Gemini)', points: 1 },
      { text: 'Trzech-czterech, do różnych rzeczy', points: 2 },
      { text: 'Pięciu lub więcej — dobieram narzędzie do zadania', points: 3 },
    ],
  },
  {
    id: 7,
    scenario:
      'Czy kiedykolwiek użyłeś AI przez terminal, API lub narzędzie automatyzacji (np. Claude Code, Zapier, Make, n8n)?',
    answers: [
      { text: 'Nie wiem co to jest', points: 0 },
      { text: 'Słyszałem, ale nie próbowałem', points: 1 },
      { text: 'Próbowałem kilka razy, ale to jest zbyt trudne', points: 2 },
      { text: 'Używam regularnie — to część mojej pracy', points: 3 },
    ],
  },
]

export interface QuizResult {
  key: string
  level: string
  name: string
  description: string
  qualifies: boolean
  ctaText: string
}

export const QUIZ_RESULTS: Record<string, QuizResult> = {
  student: {
    key: 'student',
    level: 'I',
    name: 'Student',
    description:
      'Jesteś na początku drogi z AI — i to jest dokładnie właściwe miejsce, żeby zacząć. Masz coś, czego żaden kurs AI nie da: Twoją wiedzę, Twój sposób myślenia, Twoją ciekawość. AI to narzędzie, które wzmocni to, kim już jesteś.',
    qualifies: true,
    ctaText: 'Zapisz się na listę oczekujących',
  },
  praktykant: {
    key: 'praktykant',
    level: 'II',
    name: 'Praktykant',
    description:
      'Wiesz że AI istnieje i mogłoby Ci pomóc — to więcej niż większość ludzi. Ale między „wiem że mogę" a „robię to codziennie" jest przepaść. Kurs ARCA pomaga ją przeskoczyć.',
    qualifies: true,
    ctaText: 'Zapisz się na listę oczekujących',
  },
  czeladnik: {
    key: 'czeladnik',
    level: 'III',
    name: 'Czeladnik',
    description:
      'Masz solidne podstawy — i mówię to szczerze: ten kurs byłby dla Ciebie za prosty. Nie chcę marnować Twojego czasu. Pracuję nad kursem zaawansowanym — automatyzacja, Claude Code, budowanie systemów.',
    qualifies: false,
    ctaText: 'Daj znać gdy kurs zaawansowany będzie gotowy',
  },
}
