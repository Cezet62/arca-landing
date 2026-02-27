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
    hook: 'Młodsi już to robią. Ty jeszcze nie.',
    pain: 'Na spotkaniach padają skróty, których nie znasz. Młodsi w firmie już używają AI — a Ty udajesz, że to nie Twój temat. I czujesz, że z każdym tygodniem tracisz kawałek autorytetu, który budowałeś latami.',
    effect: 'Wyobraź sobie: poniedziałek rano, spotkanie zarządu. Ktoś pyta o analizę rynku. Ty mówisz: „Zrobiłem ją z AI w 15 minut". Cisza. I to Ty pokazujesz zespołowi jak to działa. Nie nadganiasz — prowadzisz.',
    socialProof: 'Ten kurs jest dla Ciebie, jeśli masz doświadczenie w zarządzaniu, ale AI to dla Ciebie wciąż czarny koń.',
  },
  {
    id: 'entrepreneur',
    icon: Briefcase,
    name: 'Przedsiębiorca',
    hook: 'Nie masz czasu się uczyć, bo nie masz czasu.',
    pain: 'Robisz wszystko sam. Maile, oferty, dokumenty, fakturki. Każdy dzień to gaszenie pożarów. Na „uczenie się nowych rzeczy" nie ma miejsca w kalendarzu. Paradoks? Owszem. Ale prawdziwy.',
    effect: 'Po kursie masz 3-5 zadań które AI robi za Ciebie. Oferty w 2 minuty zamiast pół godziny. Maile follow-up — automatycznie. Odzyskujesz godziny tygodniowo. I wreszcie masz czas na to, co naprawdę buduje firmę.',
    socialProof: 'Idealny kurs, jeśli prowadzisz firmę i masz wrażenie że doba jest za krótka. (Jest. Ale AI ją wydłuża.)',
  },
  {
    id: 'specialist',
    icon: Scale,
    name: 'Specjalista branżowy',
    hook: 'AI nie zastąpi Twojej wiedzy. Zwielokrotni ją.',
    pain: 'Czytasz, że AI pisze umowy, analizuje dane, stawia wstępne diagnozy. Nie wiesz, czy to zagrożenie czy szansa. I wolisz nie sprawdzać — bo co jeśli okaże się, że robi to lepiej? (Spoiler: nie robi. Ale robi to szybciej.)',
    effect: 'Twoje 20-30 lat wiedzy branżowej to SILNIK. AI to turbo. Analizujesz dokumenty w ułamku czasu, wyłapujesz rzeczy które przegapiłbyś po 30 stronach, i masz czas na to co naprawdę wymaga Twojej głowy.',
    socialProof: 'Jeśli jesteś prawnikiem, księgową, lekarzem, inżynierem — Twoja ekspertyza + AI to kombinacja, której juniorzy nie mają.',
  },
  {
    id: 'sales',
    icon: TrendingUp,
    name: 'Handlowiec',
    hook: '20 maili dziennie ręcznie? Jest lepszy sposób.',
    pain: '20 maili dziennie. Oferty po godzinach. Follow-upy które zapominasz wysłać. Spędzasz więcej czasu przy klawiaturze niż z klientami. A to z klientami zarabiasz.',
    effect: 'AI pisze za Ciebie maile, oferty i follow-upy. Spersonalizowane, w Twoim stylu — nie w stylu robota. Ty skupiasz się na relacjach. Tam, gdzie naprawdę zarabiasz.',
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
      'Uczysz się zadawać pytania tak, żeby dostawać dobre odpowiedzi. Koniec z „AI nie działa". Po tym tygodniu rozumiesz DLACZEGO jedni dostają genialne odpowiedzi, a inni bełkot. (Spoiler: to nie kwestia narzędzia.)',
  },
  {
    week: 2,
    title: 'Praktyka — budujesz swój zestaw narzędzi',
    description:
      'Budujesz swoją bibliotekę promptów do codziennej pracy. Nie wymyślonych. TWOICH. Maile, raporty, analizy, notatki — testujesz na swoich realnych zadaniach. Co działa — zostawiasz. Co nie — poprawiamy.',
  },
  {
    week: 3,
    title: 'AI w Twojej branży — „to działa u mnie"',
    description:
      'Pracujesz na SWOICH zadaniach z pracy. Mega-prompty, szablony branżowe, realne przypadki. Po tym tygodniu mówisz „ja to naprawdę mogę używać" — bo już używasz.',
  },
  {
    week: 4,
    title: 'Projekt — dowód że umiesz',
    description:
      'Tworzysz coś konkretnego od A do Z z pomocą AI. Dokument, plan, analiza — dopasowany do Twojej pracy. Pokazujesz efekt. Sobie i innym.',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Czy muszę mieć doświadczenie z AI?',
    answer:
      'Nie. Zaczynamy od absolutnego zera. Kurs jest dla osób, które nigdy nie korzystały z AI lub spróbowały raz-dwa i nie wiedziały co dalej. Rok temu sam byłem w tym miejscu.',
  },
  {
    question: 'Ile czasu tygodniowo muszę poświęcić?',
    answer:
      'Jedna sesja live w tygodniu (60 min + Q&A). Plus krótkie materiały przed sesją (15-20 min) i zadanie domowe w Twoim tempie. Łącznie 2-3 godziny tygodniowo. Mniej niż jeden dobry film.',
  },
  {
    question: 'Czy to kolejny webinar o ChatGPT?',
    answer:
      'Nie. Nie oglądasz prezentacji i nie robisz notatek, które trafią do szuflady. Budujesz konkretne umiejętności do SWOJEJ pracy. Sesje live to warsztaty — pracujesz na swoich zadaniach, z moją pomocą. Po kursie wychodzisz z umiejętnością pisania promptów, własnym systemem pracy z AI i projektem końcowym.',
  },
  {
    question: 'Czy potrzebuję płatnych narzędzi?',
    answer:
      'Nie. Wszystko robimy na darmowych wersjach ChatGPT, Claude i Gemini. Jeśli masz płatne subskrypcje — super, wykorzystamy je. Ale nie są wymagane.',
  },
  {
    question: 'Co jeśli nie dam rady nadążyć?',
    answer:
      'Materiały zostają z Tobą na zawsze — wracasz kiedy chcesz. A sesje live mają Q&A właśnie po to, żebyś nie zostawał z pytaniami. Tempo dostosowuję do grupy, nie do wyścigu.',
  },
  {
    question: 'Co jeśli kurs będzie dla mnie za prosty?',
    answer:
      'Zrób test diagnostyczny — za darmo sprawdzisz swój poziom. Jeśli jesteś na poziomie Czeladnika lub wyżej, powiem Ci szczerze: ten kurs nie jest dla Ciebie. Bez wciskania.',
  },
  {
    question: 'Czy to zadziała w mojej branży?',
    answer:
      'AI to narzędzie uniwersalne — jak Excel. Ale w kursie pracujesz na SWOICH zadaniach z TWOJEJ branży. Nie na generycznych przykładach. Dlatego na kursie są prawnicy, księgowi, handlowcy, lekarze, inżynierowie. Każdy buduje narzędzia pod siebie.',
  },
]

export const FRAMEWORK_LEVELS = [
  { level: 'I', name: 'Student', description: 'Pierwszy kontakt z AI', active: true },
  { level: 'II', name: 'Praktykant', description: 'Rozumiesz podstawy', active: true },
  { level: 'III', name: 'Czeladnik', description: 'Samodzielny', active: false },
  { level: 'IV', name: 'Ekspert', description: 'Głęboka wiedza', active: false },
  { level: 'V', name: 'Mistrz', description: 'Kompletna wiedza', active: false },
]

export const CTA_URL = '#test'
export const CTA_TEXT = 'Sprawdź swój poziom AI'
