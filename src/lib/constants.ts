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
    hook: 'AI nie zastąpi Twojej wiedzy. Zwielokrotni ją.',
    pain: 'Czytasz, że AI pisze umowy, analizuje dane, stawia wstępne diagnozy. Nie wiesz, czy to zagrożenie czy szansa. I wolisz nie sprawdzać — bo co jeśli okaże się, że robi to lepiej? (Spoiler: nie robi. Ale robi to szybciej.)',
    effect: 'Twoje 20-30 lat wiedzy branżowej to SILNIK. AI to turbo. Analizujesz dokumenty w ułamku czasu, wyłapujesz rzeczy które przegapiłbyś po 30 stronach, i masz czas na to co naprawdę wymaga Twojej głowy.',
    socialProof: 'Jeśli jesteś prawnikiem, księgową, lekarzem, inżynierem — Twoja ekspertyza + AI to kombinacja, której "juniorzy" nie mają.',
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
      'Uczysz się zadawać pytania tak, żeby dostawać dobre odpowiedzi. Koniec z „AI nie działa". Po tym tygodniu rozumiesz DLACZEGO jedni dostają genialne odpowiedzi, a inni bełkot. (Podpowiedź: to zależy od tego, jak pytasz — nie od tego, jakiego narzędzia używasz.)',
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
      'Automatyzujesz tworzenie dokumentów, planów, analiz — wszystko dopasowane do Twojej pracy. Budujesz prostego agenta, który robi to za Ciebie. Pokazujesz efekt. Sobie i innym.',
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
      'Dwie sesje live w tygodniu (60 min + Q&A każda). Plus krótkie materiały przed sesją i zadanie domowe w Twoim tempie. Łącznie 3-4 godziny tygodniowo. Mniej niż jeden sezon serialu.',
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
      'AI to narzędzie uniwersalne — jak Excel. Ale na kursie pracujesz na SWOICH zadaniach z TWOJEJ branży. Nie na generycznych przykładach. Dlatego na kursie są prawnicy, księgowi, handlowcy, lekarze, inżynierowie. Każdy buduje narzędzia pod siebie.',
  },
]

export const FRAMEWORK_LEVELS = [
  { level: 'I', name: 'Student', description: 'Pierwszy kontakt z AI', active: true },
  { level: 'II', name: 'Praktykant', description: 'Rozumiesz podstawy', active: true },
  { level: 'III', name: 'Czeladnik', description: 'Samodzielnie pracujesz z AI', active: true },
  { level: 'IV', name: 'Ekspert', description: 'Automatyzacja i systemy', active: false },
  { level: 'V', name: 'Mistrz', description: 'Tworzysz nowatorskie rozwiązania', active: false },
]

export const CTA_URL = '#quiz'
export const CTA_TEXT = 'Sprawdź swój poziom AI'

export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ziarkowskicezary@gmail.com'

export interface QuizQuestion {
  id: number
  scenario: string
  answers: { text: string; points: number }[]
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario:
      'Musisz napisać ważnego maila do wymagającego klienta. Zależy Ci na tonie i precyzji. Co robisz?',
    answers: [
      { text: 'Piszę sam, jak zawsze — mail to mail', points: 0 },
      { text: 'Piszę sam, ale przychodzi mi do głowy że AI mógłby pomóc. Nie wiem jak', points: 1 },
      { text: 'Wrzucam do ChatGPT „napisz maila do klienta" i poprawiam co wyjdzie', points: 2 },
      { text: 'Daję AI kontekst sytuacji, ton jaki chcę, cel maila — i wybieram najlepszą wersję', points: 3 },
    ],
  },
  {
    id: 2,
    scenario:
      'Na biurku ląduje 40-stronicowy raport. Musisz wyciągnąć z niego kluczowe wnioski do jutra rana. Co robisz?',
    answers: [
      { text: 'Siadam, czytam, robię notatki — nie ma drogi na skróty', points: 0 },
      { text: 'Skanuję po nagłówkach, szukam podsumowania. Jeśli nie ma — czytam', points: 1 },
      { text: 'Słyszałem że AI potrafi streszczać dokumenty, ale nie wiem jak mu to podać', points: 2 },
      { text: 'Wrzucam do AI, proszę o streszczenie, kluczowe liczby i punkty wymagające mojej uwagi', points: 3 },
    ],
  },
  {
    id: 3,
    scenario:
      'Za 2 godziny masz spotkanie z potencjalnym partnerem biznesowym. Niewiele wiesz o jego firmie. Jak się przygotowujesz?',
    answers: [
      { text: 'Google, strona firmy, LinkedIn — klasyka', points: 0 },
      { text: 'Przygotowuję się klasycznie, ale zastanawiam się czy AI mógłby mi jakoś pomóc — nie wiem tylko jak', points: 1 },
      { text: 'Pomyślałbym o AI, ale co mu właściwie napisać? „Powiedz mi o firmie X"?', points: 2 },
      { text: 'Proszę AI o analizę firmy, branży, potencjalnych punktów styku i listę pytań na spotkanie', points: 3 },
    ],
  },
  {
    id: 4,
    scenario:
      'Prosisz AI o pomoc z czymś ważnym. Wynik jest słaby — ogólnikowy, nie na temat, bezużyteczny. Twoja reakcja?',
    answers: [
      { text: '„Wiedziałem. To jeszcze nie działa wystarczająco dobrze."', points: 0 },
      { text: 'Próbuję zapytać inaczej, ale po 2-3 próbach się poddaję', points: 1 },
      { text: 'Wiem że to kwestia mojego pytania — dodaję kontekst, przykłady, precyzuję', points: 2 },
      { text: 'Analizuję co poszło nie tak, przebudowuję prompt krok po kroku, testuję warianty', points: 3 },
    ],
  },
  {
    id: 5,
    scenario:
      'Co tydzień robisz to samo: zbierasz dane, wypełniasz tabelkę, piszesz krótki raport. Zajmuje to 2 godziny. Co myślisz?',
    answers: [
      { text: 'Tak jest od lat, działa, po co zmieniać', points: 0 },
      { text: 'Irytuje mnie to, ale nie wiem jak to przyspieszyć', points: 1 },
      { text: 'Zastanawiam się czy AI mógłby przejąć część tej roboty', points: 2 },
      { text: 'Już to robię — AI generuje mi draft raportu, ja tylko weryfikuję i poprawiam', points: 3 },
    ],
  },
  {
    id: 6,
    scenario:
      'Musisz szybko zrozumieć temat, o którym niewiele wiesz — np. nowe przepisy, technologię, rynek. Jak się za to zabierasz?',
    answers: [
      { text: 'Google, artykuły, pytam znajomych', points: 0 },
      { text: 'Klasycznie szukam w internecie, ale mam świadomość że AI mógłby to przyspieszyć — jeszcze tego nie próbowałem', points: 1 },
      { text: 'Proszę AI żeby wytłumaczył mi temat prosto, potem dopytam o szczegóły', points: 2 },
      { text: 'Buduję z AI sesję nauki: „jesteś ekspertem od X, wyjaśnij mi to jak komuś kto zna Y ale nie zna X"', points: 3 },
    ],
  },
  {
    id: 7,
    scenario:
      'AI przygotował Ci analizę, która wygląda świetnie. Ale coś Ci nie gra — Twoje doświadczenie podpowiada, że jeden wniosek jest nietrafiony. Co robisz?',
    answers: [
      { text: 'Ufam AI — pewnie wie lepiej ode mnie, to w końcu technologia', points: 0 },
      { text: 'Czuję że coś nie tak, ale nie wiem jak to zweryfikować', points: 1 },
      { text: 'Ufam swojemu doświadczeniu — sprawdzam ten konkretny punkt i poprawiam', points: 2 },
      { text: 'Proszę AI o pokazanie rozumowania, konfrontuję ze swoją wiedzą i decyduję na podstawie obu', points: 3 },
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
      'Jesteś na początku drogi z AI — i to jest dokładnie właściwe miejsce, żeby zacząć. Masz coś, czego żaden kurs AI nie nauczy: lata doświadczenia w swojej dziedzinie. Brakuje Ci jednego narzędzia, żeby to doświadczenie zwielokrotnić.',
    qualifies: true,
    ctaText: 'Zapisz się na darmowe spotkanie',
  },
  praktykant: {
    key: 'praktykant',
    level: 'II',
    name: 'Praktykant',
    description:
      'Wiesz że AI istnieje i mogłoby Ci pomóc — to więcej niż większość ludzi. Ale między „wiem że mogę" a „robię to codziennie" jest przepaść. Kurs ARCA pomaga ją przeskoczyć.',
    qualifies: true,
    ctaText: 'Zapisz się na darmowe spotkanie',
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
