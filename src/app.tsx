import { useEffect, useState } from "react";

const navLinks = [
  { text: "School", to: "#school" },
  { text: "Landmarks", to: "#landmarks" },
  { text: "Food", to: "#food" },
  { text: "Conclusion", to: "#conclusion" },
  { text: "Sources", to: "#sources" },
];

const heroImages = {
  nrw:
    "https://images.pexels.com/photos/28079669/pexels-photo-28079669.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1400",
  uk:
    "https://images.pexels.com/photos/19630201/pexels-photo-19630201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1400",
};

const schoolData = [
  {
    place: "NRW schools",
    short: "Many routes, early choices and usually no uniform.",
    pros: [
      "Students can choose between Gymnasium, Realschule, Gesamtschule and vocational paths.",
      "Many schools are close to home, so meeting friends after school is easier.",
      "The Abitur and Berufskolleg give strong ways into university or apprenticeships.",
    ],
    cons: [
      "Choosing a secondary school after grade 4 can feel too early.",
      "Different finishing times can make hobbies and buses stressful.",
      "Written tests and grading pressure can feel heavy.",
    ],
  },
  {
    place: "UK schools",
    short: "Clear year groups, uniforms and big exam stages.",
    pros: [
      "Uniforms can make mornings simple and reduce fashion pressure.",
      "Houses, clubs and assemblies can create a strong school identity.",
      "GCSEs and A-levels give clear goals and subject choices.",
    ],
    cons: [
      "Uniform rules can feel strict and not very personal.",
      "Long school days, detentions and many rules can be annoying.",
      "GCSE and A-level exam pressure is very high.",
    ],
  },
];

const reviews = [
  {
    name: "Tom Blake",
    place: "NRW student",
    stars: "4/5",
    text: "I like that my school is near my house and I can ride my bike there. In NRW, many students know people from the same town, so school feels connected to normal life. The problem is that tests come really often, so sometimes the week feels full before it starts. I would like more project work because then school feels less like only grades.",
  },
  {
    name: "Lucy Green",
    place: "UK student",
    stars: "3.5/5",
    text: "The clubs after school are cool and the house system makes competitions fun. I think uniforms make everybody look equal, but sometimes the rules are too strict. I do not love that one wrong shoe can become a whole discussion. Still, the school community feels strong because everyone has the same colours and events.",
  },
  {
    name: "Ben Taylor",
    place: "NRW student",
    stars: "3/5",
    text: "I think choosing a school type in grade 4 is too early. Some students get better later, so it can feel unfair when people already decide so much. But I like that there are different paths, because not everybody wants the same future. For me, Gesamtschule sounds good because it keeps more options open.",
  },
  {
    name: "Emma Wilson",
    place: "UK student",
    stars: "4/5",
    text: "Our school day is long, but the structure helps me. I know exactly when lessons, lunch and clubs happen, and that makes planning easier. The hardest part is thinking about GCSEs, because everyone talks about grades all the time. I like choosing subjects, but I also feel pressure because the choices seem important for my future.",
  },
  {
    name: "Jack Miller",
    place: "UK student",
    stars: "3/5",
    text: "I like that teachers in my school push us to speak and present in front of the class. That is useful because it makes students more confident. But sometimes the discipline system feels too much, especially when small mistakes become detentions. In my opinion, UK schools are good for structure, but they could give students more freedom.",
  },
  {
    name: "Sophie Brown",
    place: "NRW student",
    stars: "4/5",
    text: "What I like about NRW is that many schools finish earlier than in the UK. That gives time for sports, music or just meeting friends in the afternoon. The negative side is that homework can move the stress from school to home. I think school would be better if homework was shorter but more useful.",
  },
  {
    name: "Oliver Smith",
    place: "UK student",
    stars: "4.5/5",
    text: "My favourite thing is that there are many clubs, like football, drama and debate. This makes school more than only lessons. The uniform is not my favourite, but it saves time in the morning and nobody needs expensive clothes. For me, the UK system feels strict, but also very organised.",
  },
  {
    name: "Mia Johnson",
    place: "NRW student",
    stars: "3.5/5",
    text: "I like that students in NRW can later choose vocational training or Abitur. That is good because practical jobs are respected too. But the system can be confusing because there are many school names and different paths. I think the best part is that students do not all have to do the same thing.",
  },
];

const similarities = [
  "Students learn core subjects like English, maths, science and history.",
  "Both systems use exams and grades to decide the next step.",
  "Schools try to prepare students for university, jobs or apprenticeships.",
];

const differences = [
  "NRW separates pupils into different secondary school types earlier, while UK pupils often stay in broader secondary schools before choosing GCSE subjects.",
  "NRW schools usually have no uniform, while many UK schools use uniforms and strict dress codes.",
  "The main qualifications have different names: Abitur or vocational certificates in NRW, GCSEs and A-levels in the UK.",
];

const landmarks = [
  {
    side: "NRW",
    name: "Cologne Cathedral",
    img: heroImages.nrw,
    alt: "Cologne Cathedral and the Rhine at night",
    facts: ["Location: Cologne", "Type: Gothic cathedral", "Known for: twin towers and the Shrine of the Three Kings"],
    history:
      "Construction started in 1248 and was finally completed in 1880, so the building connects the Middle Ages with modern Germany. It was badly damaged during World War II, restored after the war and became a UNESCO World Heritage Site in 1996.",
  },
  {
    side: "NRW",
    name: "Zollverein Coal Mine",
    img: "https://images.pexels.com/photos/20768180/pexels-photo-20768180.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Zollverein Coal Mine Industrial Complex in Essen",
    facts: ["Location: Essen", "Type: industrial heritage", "Known for: Ruhr area coal and steel culture"],
    history:
      "Zollverein shows how coal mining shaped the Ruhr area and the working life of many families. After production ended, the place changed into a museum and cultural area and was listed by UNESCO in 2001.",
  },
  {
    side: "NRW",
    name: "Drachenfels and Drachenburg",
    img: "https://images.pexels.com/photos/14440435/pexels-photo-14440435.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Schloss Drachenburg in Koenigswinter",
    facts: ["Location: Koenigswinter", "Type: Rhine hill and castle", "Known for: Rhine views and dragon legends"],
    history:
      "The old Drachenfels castle was built in the 12th century and became famous through Rhine romantic stories. Schloss Drachenburg was built in the 19th century, and the railway has carried visitors up the hill since 1883.",
  },
  {
    side: "UK",
    name: "Tower of London",
    img: "https://images.pexels.com/photos/18729270/pexels-photo-18729270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Tower of London fortress in London",
    facts: ["Location: London", "Type: fortress", "Known for: Crown Jewels, ravens and prison history"],
    history:
      "William the Conqueror started the fortress after 1066 to control London. It later became a palace, prison, mint and home of the Crown Jewels, which makes it a symbol of royal power.",
  },
  {
    side: "UK",
    name: "Stonehenge",
    img: "https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Stonehenge with a dramatic sky",
    facts: ["Location: Wiltshire", "Type: prehistoric stone circle", "Known for: solstice alignment and mystery"],
    history:
      "Stonehenge was built in several phases between about 3000 and 1520 BCE. Historians still discuss its exact purpose, but it clearly had religious, burial and seasonal meaning.",
  },
  {
    side: "UK",
    name: "Big Ben and Elizabeth Tower",
    img: "https://images.pexels.com/photos/11567961/pexels-photo-11567961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Big Ben and Westminster at night",
    facts: ["Location: London", "Type: clock tower", "Known for: the bell called Big Ben"],
    history:
      "The tower was built after the 1834 fire destroyed much of the old Palace of Westminster. The famous bell was cast in 1858, and the clock became one of the strongest images of British Parliament.",
  },
];

const foodIntro = [
  {
    title: "NRW cuisine",
    text: "NRW food mixes Rhineland, Westphalian and Ruhr area traditions. It is often practical, filling and connected to workers, farms, markets and family Sundays.",
  },
  {
    title: "UK cuisine",
    text: "UK food mixes regional British dishes with influences from migration, empire and city life. It can be simple comfort food, but also very multicultural.",
  },
];

const nrwFood = [
  {
    name: "Rheinischer Sauerbraten",
    img: "https://images.pexels.com/photos/6545671/pexels-photo-6545671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Roast meat with potatoes and vegetables, similar to Sauerbraten",
    history:
      "A sour roast from the Rhineland. The idea comes from old methods of marinating meat in vinegar and wine so it stayed tender and lasted longer.",
  },
  {
    name: "Himmel und Erde",
    img: "https://images.pexels.com/photos/128641/pexels-photo-128641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Sausage with mashed potatoes, similar to Himmel und Erde",
    history:
      "A mix of mashed potatoes, apples and often blood sausage. It has been known since the 18th century, and the name means heaven and earth because apples grow in trees and potatoes grow in the ground.",
  },
  {
    name: "Reibekuchen",
    img: "https://images.pexels.com/photos/7111391/pexels-photo-7111391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Pancakes on a plate, similar to Reibekuchen",
    history:
      "Crispy potato pancakes eaten at markets, fairs and at home. They became common when potatoes spread widely in German everyday cooking.",
  },
  {
    name: "Currywurst",
    img: "https://images.pexels.com/photos/37275061/pexels-photo-37275061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "German sausage platter, similar to Currywurst style street food",
    history:
      "The famous sausage with curry ketchup is linked to post-war Berlin in 1949 and Herta Heuwer. In NRW, especially in the Ruhr area, it became a quick snack for busy city and factory life.",
  },
  {
    name: "Westphalian Pumpernickel",
    img: "https://images.pexels.com/photos/7118921/pexels-photo-7118921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Dark rye bread similar to Westphalian Pumpernickel",
    history:
      "A dark rye bread baked very slowly. It belongs strongly to Westphalia because rye grew well there and the bread stayed edible for a long time.",
  },
];

const ukFood = [
  {
    name: "Fish and chips",
    img: "https://images.pexels.com/photos/10325093/pexels-photo-10325093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Fish and chips on a plate",
    history:
      "Fried fish was influenced by Jewish immigrant communities, and chips became popular in the 19th century. Together they became a cheap working-class meal in industrial Britain.",
  },
  {
    name: "Full English breakfast",
    img: "https://images.pexels.com/photos/8480750/pexels-photo-8480750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Full English breakfast with sausage, eggs and beans",
    history:
      "The full breakfast grew from older country-house and hotel breakfast traditions. Later it became a strong symbol of British comfort food with eggs, bacon, sausage, beans and toast.",
  },
  {
    name: "Sunday roast with Yorkshire pudding",
    img: "https://images.pexels.com/photos/6163332/pexels-photo-6163332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Roasted meal with pudding, similar to a Sunday roast",
    history:
      "Yorkshire pudding began as a batter cooked under roasting meat to catch dripping fat. A recipe for dripping pudding appeared in 1737, before the name Yorkshire pudding became famous.",
  },
  {
    name: "Chicken tikka masala",
    img: "https://images.pexels.com/photos/20446401/pexels-photo-20446401.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Chicken tikka masala with rice and naan",
    history:
      "This curry shows British South Asian influence after World War II. It became popular because restaurants adapted Indian-style chicken tikka to British tastes with a creamy sauce.",
  },
  {
    name: "Shepherd's pie",
    img: "https://images.pexels.com/photos/17872666/pexels-photo-17872666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=700",
    alt: "Lamb with mashed potatoes, similar to shepherd's pie ingredients",
    history:
      "This dish uses minced lamb under mashed potato. It became popular after potatoes became a cheap everyday food and helped families turn leftovers into a new meal.",
  },
];

const conclusionPoints = [
  {
    label: "Similarity",
    text: "Both NRW and the UK show that history is not only kings and dates. It is also schools, workers, families, food and the buildings people keep using.",
  },
  {
    label: "Similarity",
    text: "Industry shaped both places. The Ruhr area grew through coal and steel, while British industrial cities also changed through factories, railways and working-class culture.",
  },
  {
    label: "Difference",
    text: "NRW history feels more regional: Rhineland cities, Westphalian traditions and Ruhr industry stand next to each other. UK history feels more national because monarchy, Parliament and empire are visible everywhere.",
  },
  {
    label: "Difference",
    text: "NRW landmarks often tell stories of religion and industrial change, while UK landmarks jump from prehistoric Stonehenge to royal castles and Parliament.",
  },
  {
    label: "Our opinion",
    text: "In the end, NRW and the UK are different, but both prove that history is still alive in normal life: in what students learn, what people eat and what tourists visit.",
  },
];

const textSources = [
  { label: "NRW school system, Familienportal NRW", url: "https://www.familienportal.nrw/en/6-10-years/care-education/types-school-nrw" },
  { label: "UK education system, UK Government PDF", url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/219167/v01-2012ukes.pdf" },
  { label: "Cologne Cathedral, UNESCO", url: "https://whc.unesco.org/en/list/292/" },
  { label: "Zollverein Coal Mine, UNESCO", url: "https://whc.unesco.org/en/list/975/" },
  { label: "Drachenfels, Drachenfelsbahn", url: "https://www.drachenfelsbahn.de/en/drachenfels" },
  { label: "Tower of London, Britannica", url: "https://www.britannica.com/topic/Tower-of-London" },
  { label: "Stonehenge, Britannica", url: "https://www.britannica.com/topic/Stonehenge" },
  { label: "Big Ben and Elizabeth Tower, UK Parliament", url: "https://www.parliament.uk/about/living-heritage/building/palace/big-ben/building-clock-tower/key-dates-/" },
  { label: "Currywurst history, German Patent and Trade Mark Office", url: "https://www.dpma.de/english/our_office/publications/background/food-drink/spirit-currywurst/index.html" },
  { label: "Himmel und Erde, TasteAtlas", url: "https://www.tasteatlas.com/himmel-und-erde" },
  { label: "Yorkshire pudding notes, Food Timeline", url: "https://www.foodtimeline.org/foodpuddings.html" },
];

const photoSources = [
  { label: "Cologne Cathedral photo by Pham Ngoc Anh on Pexels", url: "https://www.pexels.com/photo/cologne-cathedral-at-night-with-the-river-and-bridge-in-the-background-28079669/" },
  { label: "Tower Bridge photo by SP Chaurasiya on Pexels", url: "https://www.pexels.com/photo/tower-bridge-on-thames-river-at-night-19630201/" },
  { label: "Tower of London photo by AXP Photography on Pexels", url: "https://www.pexels.com/photo/facade-of-the-tower-of-london-london-england-uk-18729270/" },
  { label: "Zollverein photo by Wolfgang Weiser on Pexels", url: "https://www.pexels.com/photo/zollverein-coal-mine-industrial-complex-museum-in-essen-in-germany-20768180/" },
  { label: "Drachenburg photo by Julien GAROT on Pexels", url: "https://www.pexels.com/photo/castle-with-a-garden-14440435/" },
  { label: "Stonehenge photo by John Nail on Pexels", url: "https://www.pexels.com/photo/stonehenge-england-1448136/" },
  { label: "Big Ben photo by Arnold Nagy on Pexels", url: "https://www.pexels.com/photo/big-ben-london-during-night-time-11567961/" },
  { label: "German food photo by cami on Pexels", url: "https://www.pexels.com/photo/traditional-german-sausage-platter-with-sauerkraut-37275053/" },
  { label: "Sauerbraten-style roast photo by Thiago Reboucas on Pexels", url: "https://www.pexels.com/photo/meat-and-fruit-on-plate-6545671/" },
  { label: "Himmel-und-Erde-style photo by Paula on Pexels", url: "https://www.pexels.com/photo/sausage-and-egg-on-plate-128641/" },
  { label: "Reibekuchen-style pancake photo by Piotr Arnoldes on Pexels", url: "https://www.pexels.com/photo/food-on-the-plate-7111391/" },
  { label: "Currywurst-style German sausage photo by cami on Pexels", url: "https://www.pexels.com/photo/traditional-german-cuisine-with-sausage-and-sauerkraut-37275061/" },
  { label: "Pumpernickel-style dark bread photo by Ivan S on Pexels", url: "https://www.pexels.com/photo/hands-of-a-person-breaking-bread-7118921/" },
  { label: "Fish and chips photo by Olga Lioncat on Pexels", url: "https://www.pexels.com/photo/fish-and-chips-and-corona-beer-10325093/" },
  { label: "Full English breakfast photo by Sergey Meshkov on Pexels", url: "https://www.pexels.com/photo/a-person-cutting-a-sausage-8480750/" },
  { label: "Sunday roast-style photo by Maksim Goncharenok on Pexels", url: "https://www.pexels.com/photo/roasted-chicken-beside-pudding-on-glass-tray-and-bowl-of-fruits-6163332/" },
  { label: "Chicken tikka masala photo by Jack Baghel on Pexels", url: "https://www.pexels.com/photo/traditional-indian-dish-on-a-grey-table-with-spices-20446401/" },
  { label: "Shepherds-pie-style lamb and mash photo by Connor Scott McManus on Pexels", url: "https://www.pexels.com/photo/delicious-oriental-meal-17872666/" },
];

function SectionTitle({ number, kicker, title, text }: { number: string; kicker: string; title: string; text: string }) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-[120px_1fr] md:gap-8">
      <p className="text-6xl font-black leading-none text-white/10 md:text-8xl">{number}</p>
      <div className="max-w-4xl border-t border-white/15 pt-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-cyan-300">{kicker}</p>
        <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{text}</p>
      </div>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNav = () => setIsScrolled(window.scrollY > 40);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-slate-100 selection:bg-cyan-300 selection:text-black">
      <header
        className={`fixed left-0 right-0 top-0 z-[70] px-4 py-4 transition-all duration-300 md:px-8 ${
          isScrolled ? "border-b border-white/10 bg-black/90 shadow-[0_18px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
          <a href="#top" className="tracking-[0.4em] text-white transition hover:text-cyan-200">
            NRW x UK
          </a>
          <div className="flex flex-wrap justify-end gap-x-5 gap-y-2">
            {navLinks.map((item) => (
              <a key={item.text} href={item.to} className="transition hover:text-cyan-200">
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen bg-black">
        <div className="absolute inset-0 grid md:grid-cols-2">
          <img
            src={heroImages.nrw}
            alt="Cologne Cathedral at night"
            className="hero-photo h-full w-full object-cover opacity-80"
          />
          <img
            src={heroImages.uk}
            alt="London Tower Bridge at night"
            className="hero-photo hero-photo-delay hidden h-full w-full object-cover opacity-75 md:block"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.2),transparent_35%),linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.34),rgba(0,0,0,0.86))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05060a] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-5 py-28 md:px-8">
          <div className="fade-up max-w-5xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.6em] text-cyan-200 md:text-base">
              English project
            </p>
            <h1 className="text-[clamp(4.6rem,17vw,13rem)] font-black leading-[0.78] tracking-[-0.09em] text-white">
              NRW <span className="text-cyan-300">x</span> UK
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-semibold leading-8 text-slate-100 md:text-3xl md:leading-10">
              Schools, landmarks, food and history in one dark comparison.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              A student-made website comparing North Rhine-Westphalia and the United Kingdom with quick facts, reviews and sources.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#school"
                className="border border-cyan-200 bg-cyan-200 px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-black transition hover:bg-white"
              >
                Start comparison
              </a>
              <a
                href="#sources"
                className="border border-white/30 px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Sources
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-line absolute bottom-8 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-white/40 md:block" />
      </section>

      <section id="school" className="relative px-5 py-24 md:px-8 md:py-32">
        <div className="absolute left-0 top-14 -z-0 text-[18vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
          SCHOOL
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            number="01"
            kicker="School life"
            title="Different routes, same pressure"
            text="Both school systems want students to build a future. The big difference is how early choices are made and how strict the school culture feels."
          />

          <div className="grid gap-10 lg:grid-cols-2">
            {schoolData.map((school) => (
              <article key={school.place} className="border-t border-white/15 pt-6">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-black text-white md:text-4xl">{school.place}</h3>
                    <p className="mt-2 text-slate-400">{school.short}</p>
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">review</span>
                </div>
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-emerald-300">Pros</p>
                    <ul className="space-y-3 text-slate-300">
                      {school.pros.map((item) => (
                        <li key={item} className="border-l border-emerald-300/50 pl-4 leading-7">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-rose-300">Cons</p>
                    <ul className="space-y-3 text-slate-300">
                      {school.cons.map((item) => (
                        <li key={item} className="border-l border-rose-300/50 pl-4 leading-7">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-y border-white/15 py-8">
            <h3 className="mb-7 text-3xl font-black text-white md:text-4xl">Student opinions</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {reviews.map((review) => (
                <blockquote key={review.name} className="border-l border-cyan-300/60 pl-5">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em]">
                    <span className="font-black text-white">{review.name}</span>
                    <span className="text-cyan-300">{review.place}</span>
                    <span className="text-white/60">{review.stars}</span>
                  </div>
                  <p className="leading-7 text-slate-300">"{review.text}"</p>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="border-t border-white/15 pt-6">
              <h3 className="text-3xl font-black text-white">Similarities</h3>
              <ol className="mt-6 space-y-5">
                {similarities.map((item, index) => (
                  <li key={item} className="grid grid-cols-[48px_1fr] gap-4 text-slate-300">
                    <span className="font-black text-cyan-300">0{index + 1}</span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-white/15 pt-6">
              <h3 className="text-3xl font-black text-white">Differences</h3>
              <ol className="mt-6 space-y-5">
                {differences.map((item, index) => (
                  <li key={item} className="grid grid-cols-[48px_1fr] gap-4 text-slate-300">
                    <span className="font-black text-cyan-300">0{index + 1}</span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="landmarks" className="relative px-5 py-24 md:px-8 md:py-32">
        <div className="absolute right-0 top-10 -z-0 text-[15vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
          PLACES
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            number="02"
            kicker="Sightseeing"
            title="Landmarks that tell stories"
            text="The landmarks are not just nice photos. They show religion, power, work, old myths and national identity."
          />

          <div className="space-y-14">
            {landmarks.map((place, index) => (
              <article key={place.name} className="grid gap-6 border-t border-white/15 pt-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={place.img} alt={place.alt} loading="lazy" className="h-72 w-full object-cover md:h-96" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-cyan-300">{place.side}</p>
                  <h3 className="text-3xl font-black text-white md:text-5xl">{place.name}</h3>
                  <dl className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                    {place.facts.map((fact) => {
                      const [label, value] = fact.split(": ");
                      return (
                        <div key={fact} className="border-t border-white/15 pt-3">
                          <dt className="font-black uppercase tracking-[0.25em] text-white/50">{label}</dt>
                          <dd className="mt-2 leading-6">{value}</dd>
                        </div>
                      );
                    })}
                  </dl>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{place.history}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="relative px-5 py-24 md:px-8 md:py-32">
        <div className="absolute left-0 top-10 -z-0 text-[17vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
          FOOD
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            number="03"
            kicker="Cuisine"
            title="Food shows everyday history"
            text="The best dishes are simple, but their stories are bigger than they look. They show migration, industry, farming and family traditions."
          />

          <div className="mb-14 grid gap-4 md:grid-cols-3">
            <img
              src="https://images.pexels.com/photos/37275053/pexels-photo-37275053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="German sausages with sauerkraut and potatoes"
              loading="lazy"
              className="h-64 w-full object-cover md:h-80"
            />
            <img
              src="https://images.pexels.com/photos/10325093/pexels-photo-10325093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Fish and chips on a plate"
              loading="lazy"
              className="h-64 w-full object-cover md:h-80"
            />
            <img
              src="https://images.pexels.com/photos/8480750/pexels-photo-8480750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Full English breakfast"
              loading="lazy"
              className="h-64 w-full object-cover md:h-80"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {foodIntro.map((food) => (
              <div key={food.title} className="border-t border-white/15 pt-6">
                <h3 className="text-3xl font-black text-white">{food.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{food.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="border-b border-white/15 pb-5 text-3xl font-black text-white">Top 5 NRW dishes</h3>
              <ol className="divide-y divide-white/10">
                {nrwFood.map((dish, index) => (
                  <li key={dish.name} className="grid gap-4 py-6 sm:grid-cols-[150px_52px_1fr] sm:items-start">
                    <img src={dish.img} alt={dish.alt} loading="lazy" className="h-36 w-full object-cover sm:h-24" />
                    <span className="text-4xl font-black text-cyan-300/70">{index + 1}</span>
                    <div>
                      <h4 className="text-xl font-black text-white">{dish.name}</h4>
                      <p className="mt-2 leading-7 text-slate-300">{dish.history}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="border-b border-white/15 pb-5 text-3xl font-black text-white">Top 5 UK dishes</h3>
              <ol className="divide-y divide-white/10">
                {ukFood.map((dish, index) => (
                  <li key={dish.name} className="grid gap-4 py-6 sm:grid-cols-[150px_52px_1fr] sm:items-start">
                    <img src={dish.img} alt={dish.alt} loading="lazy" className="h-36 w-full object-cover sm:h-24" />
                    <span className="text-4xl font-black text-cyan-300/70">{index + 1}</span>
                    <div>
                      <h4 className="text-xl font-black text-white">{dish.name}</h4>
                      <p className="mt-2 leading-7 text-slate-300">{dish.history}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion" className="relative px-5 py-24 md:px-8 md:py-32">
        <div className="absolute right-0 top-10 -z-0 text-[15vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
          FINAL
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            number="04"
            kicker="Conclusion"
            title="Similar history, different style"
            text="Our final idea: NRW and the UK both carry history into daily life, but the focus is different."
          />

          <div className="border-y border-white/15">
            {conclusionPoints.map((point) => (
              <div key={point.text} className="grid gap-4 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[180px_1fr]">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">{point.label}</p>
                <p className="max-w-4xl text-lg leading-8 text-slate-300">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-white/50">final line</p>
            <p className="mt-4 text-4xl font-black tracking-tight text-white md:text-7xl">
              Presented By Vishnu, Ergin and Tim
            </p>
          </div>
        </div>
      </section>

      <section id="sources" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/15 pt-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-cyan-300">Sources</p>
              <h2 className="mt-4 text-4xl font-black text-white">No random facts.</h2>
              <p className="mt-4 leading-7 text-slate-400">
                We used public information pages and royalty-free Pexels photos. Access date: 2026.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-black text-white">Text sources</h3>
              <ul className="space-y-3 text-sm leading-6 text-slate-300">
                {textSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-cyan-300/50 underline-offset-4 transition hover:text-cyan-200">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-black text-white">Photo sources</h3>
              <ul className="space-y-3 text-sm leading-6 text-slate-300">
                {photoSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-cyan-300/50 underline-offset-4 transition hover:text-cyan-200">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
