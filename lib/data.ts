import type { Copy, NeedId } from "./types";

export const phone = "800-622-6575";
export const phoneHref = "tel:8006226575";

export const links = {
  source: "https://ciocenter.com/",
  portal: "https://34792-1.portal.athenahealth.com/",
  pay: "http://pay.instamed.com/CENTRALINDIANAORTHO",
  billPayPage: "https://ciocenter.com/online-bill-pay/",
  careers: "https://careers.sca.health/jobs?page=1&state=Indiana&tags3=Cntr%20Indiana%20Orthopedics%20LLC%7CCntr%20Indiana%20Ortho%20SC%20LLC%20FS",
  remote: "https://careers.sca.health/jobs?page=1&tags2=Yes",
  orthoalliance: "https://orthoalliance.com/",
  sca: "https://sca.health/",
  facebook: "https://www.facebook.com/CentralINOrtho/",
  instagram: "https://www.instagram.com/centralinortho/",
  youtube: "https://www.youtube.com/channel/UCfGnSXOnbp0kit9mxkPhQ4g",
  x: "https://twitter.com/CentralINOrtho",
  nondiscrimination:
    "https://ciocenter.com/wp-content/uploads/2025/05/Nondiscrimination-Policy-for-Web-Site-Indiana-Offices.pdf",
  privacy: "https://ciocenter.com/privacy-policy/",
  accessibility: "https://ciocenter.com/website-accessibility/",
  referring: "https://ciocenter.com/referring-physician-resources/",
  mako: "https://ciocenter.com/mako/",
  vision: "https://ciocenter.com/vision-mission-and-values/",
};

export const needs: { id: NeedId | "all"; label: Copy }[] = [
  { id: "all", label: { en: "All six clinics", pt: "As seis unidades" } },
  { id: "walkin", label: { en: "Walk-in", pt: "Sem hora marcada" } },
  { id: "joint", label: { en: "Joint replacement", pt: "Prótese articular" } },
  { id: "spine", label: { en: "Spine", pt: "Coluna" } },
  { id: "hand", label: { en: "Hand and wrist", pt: "Mão e punho" } },
  { id: "foot", label: { en: "Foot and ankle", pt: "Pé e tornozelo" } },
  { id: "sports", label: { en: "Sports medicine", pt: "Medicina esportiva" } },
  { id: "imaging", label: { en: "Imaging", pt: "Imagem" } },
  { id: "therapy", label: { en: "Physical therapy", pt: "Fisioterapia" } },
];

export type Location = {
  slug: string;
  name: string;
  image: string;
  address: string[];
  phone: string;
  phoneHref: string;
  lat: number;
  lng: number;
  offers: NeedId[];
  services: string[];
  physicians: string[];
  blurb: Copy;
  walkIn: Copy | null;
  office: Copy;
  fax?: string;
  referring?: string;
  note?: Copy;
};

export const locations: Location[] = [
  {
    slug: "anderson",
    name: "Anderson",
    image: "/media/places/anderson.jpg",
    address: ["2610 Enterprise Drive", "Anderson, IN 46013"],
    phone: "800-622-6575",
    phoneHref: "tel:8006226575",
    lat: 40.0405403,
    lng: -85.7190907,
    offers: ["walkin", "joint", "spine", "hand", "foot", "sports", "imaging", "therapy"],
    services: [
      "Back, Neck, Spine",
      "Elbow",
      "Foot, Ankle, Podiatry",
      "Hand, Wrist",
      "Hip",
      "Imaging Services",
      "Joint Replacement & Joint Revision",
      "Knee",
      "Nonsurgical Pain Management",
      "Pediatric Injuries",
      "Physical Therapy",
      "Regenerative Medicine",
      "Robotic-Assisted Hip & Knee Replacement",
      "Shoulder",
      "Sports Medicine",
      "Team Doctor and Athletic Training Services",
      "Walk-In Clinic",
      "Work-Related Injuries",
    ],
    physicians: [
      "brian-e-camilleri-do",
      "li-chen-md",
      "steven-a-herbst-md",
      "joseph-g-jerman-md",
      "p-jamieson-kay-md",
      "adam-w-lyon-md",
      "john-r-martin-md",
      "nimu-k-surtani-md",
      "stanton-a-wilhite-dpm",
      "william-l-hall-md",
      "warren-g-lawless-do",
    ],
    blurb: {
      en: "Our Anderson office is just off I-69 and serves Anderson plus Pendleton, Lapel, Daleville, Fortville, McCordsville and more. The practice also provides medical support to athletes at Anderson University and local high schools.",
      pt: "A unidade de Anderson fica logo na saída da I-69 e atende Anderson, além de Pendleton, Lapel, Daleville, Fortville, McCordsville e arredores. A prática também dá suporte médico aos atletas da Anderson University e das escolas locais.",
    },
    walkIn: {
      en: "Standing hours published on the location page: Monday–Thursday 8:00 a.m.–4:00 p.m., Friday 8:00 a.m.–3:00 p.m. The walk-in page also posted this weekly schedule for 09/28–10/02: Monday–Thursday 8am–4pm, Friday 8am–3pm. Hours may vary. Call 800-622-6575.",
      pt: "Horário fixo publicado na página da unidade: segunda a quinta, 8h–16h; sexta, 8h–15h. A página do walk-in também publicou a semana de 28/09 a 02/10: segunda a quinta, 8h–16h; sexta, 8h–15h. O horário pode variar. Ligue 800-622-6575.",
    },
    office: {
      en: "Monday–Thursday 8:00 a.m.–5:00 p.m. Friday 8:00 a.m.–4:00 p.m.",
      pt: "Segunda a quinta, 8h–17h. Sexta, 8h–16h.",
    },
    fax: "Main/Medical Records 765-642-7903 · Referring Physician 765-608-3659",
    referring: "765-608-3625",
  },
  {
    slug: "elwood",
    name: "Elwood",
    image: "/media/places/elwood.jpg",
    address: [
      "St. Vincent Mercy Hospital Medical Specialty Suites",
      "1331 South A Street",
      "Elwood, IN 46036",
    ],
    phone: "765-608-3668",
    phoneHref: "tel:7656083668",
    lat: 40.2755091,
    lng: -85.8437681,
    offers: ["joint", "hand", "sports", "imaging"],
    services: [
      "Elbow",
      "Hand, Wrist",
      "Hip",
      "Imaging Services",
      "Joint Replacement & Joint Revision",
      "Knee",
      "Shoulder",
      "Sports Medicine",
      "Work-related Injuries",
    ],
    physicians: ["joseph-g-jerman-md"],
    blurb: {
      en: "Elwood and nearby towns including Frankton, Alexandria, Summitville and Tipton are served from the Medical Specialty Suites at St. Vincent Mercy Hospital. Dr. Joseph Jerman sees patients here. He specializes in general orthopedics, joint replacement and sports medicine. This location is not listed on the walk-in hours page.",
      pt: "Elwood e cidades vizinhas, entre elas Frankton, Alexandria, Summitville e Tipton, são atendidas nas Medical Specialty Suites do St. Vincent Mercy Hospital. O Dr. Joseph Jerman atende aqui. Ele é especializado em ortopedia geral, prótese articular e medicina esportiva. Esta unidade não aparece na página de horários do walk-in.",
    },
    walkIn: null,
    office: {
      en: "Office hours are not printed on the Elwood page. Call 765-608-3668. After hours, the answering service contacts the on-call doctor.",
      pt: "A página de Elwood não publica o horário de consultório. Ligue 765-608-3668. Fora do expediente, a central avisa o médico de plantão.",
    },
  },
  {
    slug: "fishers",
    name: "Fishers",
    image: "/media/places/fishers.jpg",
    address: ["14300 E. 138th Street", "Building B", "Fishers, IN 46037"],
    phone: "800-622-6575",
    phoneHref: "tel:8006226575",
    lat: 39.9886904,
    lng: -85.9144399,
    offers: ["walkin", "joint", "spine", "hand", "foot", "sports", "imaging", "therapy"],
    services: [
      "Back, Neck, Spine",
      "Elbow",
      "Foot, Ankle, Podiatry",
      "Hand, Wrist",
      "Hip",
      "Imaging Services",
      "Joint Replacement & Joint Revision",
      "Knee",
      "Nonsurgical Pain Management",
      "Outpatient Surgery",
      "Pediatric Injuries",
      "Physical Therapy",
      "Regenerative Medicine",
      "Robotic-Assisted Hip & Knee Replacement",
      "Shoulder",
      "Sports Medicine",
      "Walk-In Clinic",
      "Work-Related Injuries",
    ],
    physicians: [
      "brian-l-badman-md",
      "aaron-m-baessler-md",
      "brian-e-camilleri-do",
      "jonathan-s-chae-md",
      "li-chen-md",
      "joseph-c-duncan-md",
      "steven-a-herbst-md",
      "joseph-g-jerman-md",
      "p-jamieson-kay-md",
      "adam-w-lyon-md",
      "john-r-martin-md",
      "nimu-k-surtani-md",
      "stanton-a-wilhite-dpm",
      "kile-j-carter-md",
      "william-l-hall-md",
    ],
    blurb: {
      en: "Adjacent to Ascension St. Vincent Fishers Hospital, the 48,000 sq. ft. Fishers practice offers general and specialty orthopedic care, outpatient surgery, physical and occupational therapy, imaging and Mako SmartRobotics for hip and knee replacement. Nearby communities include Greenfield, McCordsville, Noblesville, Carmel and Indianapolis.",
      pt: "Ao lado do Ascension St. Vincent Fishers Hospital, a unidade de Fishers, com 48 mil pés quadrados, oferece ortopedia geral e especializada, cirurgia ambulatorial, fisioterapia e terapia ocupacional, imagem e Mako SmartRobotics para prótese de quadril e joelho. As comunidades próximas incluem Greenfield, McCordsville, Noblesville, Carmel e Indianápolis.",
    },
    walkIn: {
      en: "Standing hours: Monday–Thursday 8:00 a.m.–4:00 p.m., Friday 8:00 a.m.–3:00 p.m. Weekly schedule posted for 09/28–10/02: Monday–Thursday 8am–4pm, Friday 8am–3pm. Hours may vary. Call 800-622-6575.",
      pt: "Horário fixo: segunda a quinta, 8h–16h; sexta, 8h–15h. Semana publicada de 28/09 a 02/10: segunda a quinta, 8h–16h; sexta, 8h–15h. O horário pode variar. Ligue 800-622-6575.",
    },
    office: {
      en: "Monday–Thursday 8:00 a.m.–5:00 p.m. Friday 8:00 a.m.–4:00 p.m.",
      pt: "Segunda a quinta, 8h–17h. Sexta, 8h–16h.",
    },
    fax: "Main/Medical Records 765-608-3687 · Referring Physician 765-608-3659",
    referring: "765-608-3625",
    note: {
      en: "Fishers traffic update, as published: ongoing road construction at Olio Road and Southeastern Parkway may affect travel, including lane reductions and temporary closures. Allow extra time and check the City of Fishers project updates.",
      pt: "Aviso de trânsito publicado para Fishers: a obra em Olio Road e Southeastern Parkway pode afetar o acesso, com redução de faixas e fechamentos temporários. Reserve tempo extra e confira os avisos da City of Fishers.",
    },
  },
  {
    slug: "marion",
    name: "Marion",
    image: "/media/places/marion.jpg",
    address: ["706 N River Drive", "Marion, IN 46952"],
    phone: "800-622-6575",
    phoneHref: "tel:8006226575",
    lat: 40.5693566,
    lng: -85.6631319,
    offers: ["walkin", "joint", "hand", "foot", "sports", "imaging"],
    services: [
      "Elbow",
      "Foot, Ankle, Podiatry",
      "Hand, Wrist",
      "Hip",
      "Imaging Services",
      "Joint Replacement & Joint Revision",
      "Knee",
      "Robotic-Assisted Hip & Knee Replacement",
      "Shoulder",
      "Sports Medicine",
      "Walk-In Clinic",
      "Work-Related Injuries",
    ],
    physicians: [
      "jonathan-s-chae-md",
      "brent-m-damer-do",
      "ryan-r-jaggers-md",
      "stanton-a-wilhite-dpm",
    ],
    blurb: {
      en: "Marion, at 706 N River Drive, cares for Marion and towns such as Gas City, Fairmount and Upland. The walk-in clinic there is led by Jennifer Hite, NP. For back and neck pain, the practice asks patients to call 800-622-6575 for a spine specialist instead of using walk-in.",
      pt: "Marion, na 706 N River Drive, atende Marion e cidades como Gas City, Fairmount e Upland. O walk-in local é conduzido por Jennifer Hite, NP. Para dor nas costas e no pescoço, a prática pede que o paciente ligue 800-622-6575 para um especialista de coluna, em vez de usar o walk-in.",
    },
    walkIn: {
      en: "Standing hours on the Marion page: Monday–Thursday 8:00 a.m.–4:00 p.m., Friday 8:00 a.m.–11:00 a.m. The 09/28–10/02 walk-in schedule matches that. Hours may vary.",
      pt: "Horário fixo na página de Marion: segunda a quinta, 8h–16h; sexta, 8h–11h. A escala de 28/09 a 02/10 coincide com isso. O horário pode variar.",
    },
    office: {
      en: "Monday–Thursday 8:00 a.m.–5:00 p.m. Friday 8:00 a.m.–12:00 p.m.",
      pt: "Segunda a quinta, 8h–17h. Sexta, 8h–12h.",
    },
    fax: "Main/Medical Records 765-664-3703 · Referring Physician 765-608-3659",
    referring: "765-608-3625",
  },
  {
    slug: "muncie",
    name: "Muncie",
    image: "/media/places/muncie.jpg",
    address: ["3600 West Bethel Avenue", "Muncie, IN 47304"],
    phone: "800-622-6575",
    phoneHref: "tel:8006226575",
    lat: 40.21771,
    lng: -85.428434,
    offers: ["walkin", "joint", "spine", "hand", "foot", "sports", "imaging", "therapy"],
    services: [
      "Back, Neck, Spine",
      "Elbow",
      "Foot, Ankle, Podiatry",
      "Hand, Wrist",
      "Hip",
      "Imaging Services",
      "Joint Replacement & Joint Revision",
      "Knee",
      "Nonsurgical Pain Management",
      "Outpatient Surgery",
      "Pediatric Injuries",
      "Physical Therapy",
      "Regenerative Medicine",
      "Robotic-Assisted Hip & Knee Replacement",
      "Shoulder",
      "Sports Medicine",
      "Team Doctor and Athletic Training Services",
      "Walk-In Clinic",
      "Work-Related Injuries",
    ],
    physicians: [
      "jonathan-s-chae-md",
      "ryan-d-cieply-md",
      "nicholas-j-cook-md",
      "brent-m-damer-do",
      "joseph-c-duncan-md",
      "steven-a-herbst-md",
      "ryan-r-jaggers-md",
      "scott-m-waterman-md",
      "stanton-a-wilhite-dpm",
      "jeremy-j-hunt-md",
    ],
    blurb: {
      en: "Muncie also reaches Yorktown, Gaston, Daleville, Alexandria and others. One location holds general and specialty care, outpatient surgery, physical and occupational therapy, imaging and Mako SmartRobotics for hip and knee replacement.",
      pt: "Muncie também alcança Yorktown, Gaston, Daleville, Alexandria e outras cidades. Na mesma unidade há ortopedia geral e especializada, cirurgia ambulatorial, fisioterapia e terapia ocupacional, imagem e Mako SmartRobotics para prótese de quadril e joelho.",
    },
    walkIn: {
      en: "The location page lists standing walk-in hours Monday–Thursday 8:00 a.m.–4:00 p.m. and Friday 8:00 a.m.–1:00 p.m. The walk-in page’s week of 09/28–10/02 lists Friday as 8am–12pm. Both are published. Call 800-622-6575 before you go.",
      pt: "A página da unidade lista o walk-in fixo de segunda a quinta, 8h–16h, e sexta, 8h–13h. A semana de 28/09 a 02/10 na página do walk-in lista a sexta como 8h–12h. Os dois horários estão publicados. Ligue 800-622-6575 antes de ir.",
    },
    office: {
      en: "Monday–Thursday 8:00 a.m.–5:00 p.m. Friday 8:00 a.m.–4:00 p.m.",
      pt: "Segunda a quinta, 8h–17h. Sexta, 8h–16h.",
    },
    fax: "Main/Medical Records 765-284-4266 · Referring Physician 765-213-3853",
    referring: "765-213-3852",
  },
  {
    slug: "zionsville",
    name: "Zionsville",
    image: "/media/places/zionsville.jpg",
    address: ["625 S Main Street", "Suite 200", "Zionsville, IN 46077"],
    phone: "800-622-6575",
    phoneHref: "tel:8006226575",
    lat: 39.9494259,
    lng: -86.2612928,
    offers: ["walkin", "joint", "hand", "foot", "sports", "imaging"],
    services: [
      "Elbow",
      "Foot, Ankle, Podiatry",
      "Hand, Wrist",
      "Hip",
      "Imaging Services",
      "Joint Replacement & Joint Revision",
      "Knee",
      "Regenerative Medicine",
      "Robotic-Assisted Hip and Knee Replacement",
      "Shoulder",
      "Sports Medicine",
      "Walk-In Clinic",
      "Work-Related Injuries",
    ],
    physicians: [
      "brian-l-badman-md",
      "aaron-m-baessler-md",
      "brian-e-camilleri-do",
      "jonathan-s-chae-md",
      "adam-w-lyon-md",
    ],
    blurb: {
      en: "Zionsville, at 625 S. Main Street, serves Zionsville, Carmel, Westfield, Lebanon and surrounding communities with on-site casting and X-ray, upper and lower extremity care, joint replacement and sports medicine.",
      pt: "Zionsville, na 625 S. Main Street, atende Zionsville, Carmel, Westfield, Lebanon e arredores, com gesso e raio-X no local, cuidado de membros superiores e inferiores, prótese articular e medicina esportiva.",
    },
    walkIn: {
      en: "Standing hours on the Zionsville page: Tuesday–Friday 8:30 a.m.–11:30 a.m. The 09/28–10/02 schedule lists Tuesday–Thursday 8:30am–11:30am and Friday 8:30am–10am. Hours may vary. Call 800-622-6575.",
      pt: "Horário fixo na página de Zionsville: terça a sexta, 8h30–11h30. A escala de 28/09 a 02/10 lista terça a quinta, 8h30–11h30, e sexta, 8h30–10h. O horário pode variar. Ligue 800-622-6575.",
    },
    office: {
      en: "Monday–Thursday 8:00 a.m.–5:00 p.m. Friday 8:00 a.m.–12:00 p.m.",
      pt: "Segunda a quinta, 8h–17h. Sexta, 8h–12h.",
    },
    fax: "Main/Medical Records 463-293-7333 · Referring Physician 765-608-3659",
    referring: "765-608-3625",
    note: {
      en: "Construction update published 10/1: construction is taking place outside the Zionsville office. Allow extra travel time and use caution around crews, vehicles and equipment.",
      pt: "Aviso de obra publicado em 1/10: há construção do lado de fora do consultório de Zionsville. Reserve tempo extra e tenha cuidado com equipes, veículos e equipamentos.",
    },
  },
];

export type Physician = {
  slug: string;
  name: string;
  photo: string;
  specialty: Copy;
  role: "surgeon" | "nonoperative";
  bio: Copy;
};

export const physicians: Physician[] = [
  {
    slug: "brian-l-badman-md",
    name: "Brian L. Badman, M.D.",
    photo: "/media/physicians/brian-l-badman-m-d.jpg",
    specialty: { en: "Shoulder Surgery", pt: "Cirurgia do ombro" },
    role: "surgeon",
    bio: {
      en: "As a board-certified doctor and fellowship-trained orthopedic surgeon, Dr. Badman specializes in sports-related shoulder injuries and degenerative and traumatic conditions of the shoulder. His surgical expertise includes total shoulder replacement, reverse shoulder replacement, arthroscopic rotator cuff repair, arthroscopic labral repair, arthroscopic biceps tenodesis, and fracture-related care of the shoulder. A Hoosier native, he attended Indiana University for undergraduate and medical education, completed orthopedic residency at the University of Florida-Gainesville, and a shoulder and elbow fellowship at the Florida Orthopedic Institute in Tampa.",
      pt: "Médico certificado e cirurgião ortopédico com fellowship, o Dr. Badman é especializado em lesões esportivas do ombro e em condições degenerativas e traumáticas do ombro. Sua prática cirúrgica inclui prótese total e reversa de ombro, reparo artroscópico do manguito rotador, reparo artroscópico do lábio, tenodese artroscópica do bíceps e fraturas do ombro. Nascido em Indiana, estudou na Indiana University, fez residência de ortopedia na University of Florida-Gainesville e fellowship de ombro e cotovelo no Florida Orthopedic Institute, em Tampa.",
    },
  },
  {
    slug: "aaron-m-baessler-md",
    name: "Aaron M. Baessler, M.D.",
    photo: "/media/physicians/aaron-m-baessler-m-d.jpg",
    specialty: {
      en: "Shoulder & Elbow Surgery and Sports Medicine",
      pt: "Cirurgia de ombro e cotovelo e medicina esportiva",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Baessler is a board-certified and fellowship-trained orthopedic surgeon, specializing in sports injuries of the shoulder, elbow, knee, hand and wrist, and degenerative conditions of the shoulder and elbow. His surgical expertise includes complex shoulder and elbow trauma, total shoulder and reverse total shoulder replacements and revisions, fracture care and arthroscopy, including tendon and ligament repair and reconstruction and surgery for instability. He earned his Doctorate in Medicine at the Chicago Medical School at Rosalind Franklin University and completed orthopedic residency at Indiana University School of Medicine.",
      pt: "O Dr. Baessler é cirurgião ortopédico certificado, com fellowship, especializado em lesões esportivas de ombro, cotovelo, joelho, mão e punho, e em condições degenerativas de ombro e cotovelo. Sua prática inclui trauma complexo de ombro e cotovelo, prótese total e reversa de ombro e revisões, fraturas e artroscopia, com reparo e reconstrução de tendões e ligamentos e cirurgia de instabilidade. Formou-se em medicina na Chicago Medical School da Rosalind Franklin University e fez residência de ortopedia na Indiana University School of Medicine.",
    },
  },
  {
    slug: "brian-e-camilleri-do",
    name: "Brian E. Camilleri, D.O.",
    photo: "/media/physicians/brian-e-camilleri-do.jpg",
    specialty: {
      en: "Sports Medicine, Hip Arthroscopy, Knee Replacement and Regenerative Medicine",
      pt: "Medicina esportiva, artroscopia de quadril, prótese de joelho e medicina regenerativa",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Brian Camilleri is a board-certified orthopedic surgeon and is fellowship-trained in sports medicine and hip preservation. He specializes in hip arthroscopy, complex shoulder and knee injuries, knee replacement, and general orthopedics. Originally from Detroit, he trained at Michigan State University, completed orthopedic residency with Ohio University, then fellowships in Indianapolis and Cleveland focused on sports injuries, cartilage restoration and arthroscopic hip surgery. He has served as an assistant team physician with the Indianapolis Colts and the Cleveland Browns and assists with player medical evaluations during the NFL Combine.",
      pt: "O Dr. Brian Camilleri é cirurgião ortopédico certificado, com fellowship em medicina esportiva e preservação do quadril. É especializado em artroscopia de quadril, lesões complexas de ombro e joelho, prótese de joelho e ortopedia geral. Natural de Detroit, formou-se na Michigan State University, fez residência de ortopedia na Ohio University e depois fellowships em Indianápolis e Cleveland, voltados a lesões esportivas, cartilagem e cirurgia artroscópica do quadril. Foi médico assistente dos Indianapolis Colts e dos Cleveland Browns e participa de avaliações no NFL Combine.",
    },
  },
  {
    slug: "kile-j-carter-md",
    name: "Kile J. Carter, M.D.",
    photo: "/media/physicians/kile-j-carter-md.jpg",
    specialty: {
      en: "Primary Care Sports Medicine, Walk-In Clinic",
      pt: "Medicina esportiva de atenção primária, walk-in",
    },
    role: "nonoperative",
    bio: {
      en: "As a primary care sports medicine physician, Dr. Carter specializes in fracture care, sports injuries, work-related injuries, ligament and tendon tears, and sprains, strains and pulled muscles. He earned his medical degree at Indiana University School of Medicine, completed family medicine residency at Franciscan St. Francis Health in Indianapolis, and a primary care sports medicine fellowship at Via Christi Health in Wichita, Kansas. He previously served as team physician for Taylor University and is board-certified by the American Board of Family Medicine.",
      pt: "Médico de medicina esportiva de atenção primária, o Dr. Carter é especializado em fraturas, lesões esportivas, lesões de trabalho, rupturas de ligamento e tendão, entorses, distensões e estiramentos. Formou-se na Indiana University School of Medicine, fez residência de medicina de família no Franciscan St. Francis Health, em Indianápolis, e fellowship de medicina esportiva na Via Christi Health, em Wichita, Kansas. Foi médico da equipe da Taylor University e é certificado pelo American Board of Family Medicine.",
    },
  },
  {
    slug: "jonathan-s-chae-md",
    name: "Jonathan S. Chae, M.D.",
    photo: "/media/physicians/jonathan-s-chae-md.jpg",
    specialty: {
      en: "Sports Medicine & General Orthopedics",
      pt: "Medicina esportiva e ortopedia geral",
    },
    role: "surgeon",
    bio: {
      en: "As a board-certified orthopedic surgeon and fellowship-trained sports medicine physician, Dr. Chae specializes in complex shoulder and knee conditions, management of sports injuries, arthroscopic procedures and shoulder replacements. He earned his medical degree from Wright State University, completed orthopedic residency at the University of Kentucky, and a sports medicine fellowship at William Beaumont Hospital in Royal Oak, Michigan. He has worked with the Detroit Lions and continues to work with coaches, trainers and athletes.",
      pt: "Cirurgião ortopédico certificado e com fellowship em medicina esportiva, o Dr. Chae é especializado em condições complexas de ombro e joelho, lesões esportivas, procedimentos artroscópicos e próteses de ombro. Formou-se na Wright State University, fez residência de ortopedia na University of Kentucky e fellowship de medicina esportiva no William Beaumont Hospital, em Royal Oak, Michigan. Trabalhou com o Detroit Lions e segue junto de técnicos, preparadores e atletas.",
    },
  },
  {
    slug: "li-chen-md",
    name: "Li Chen, M.D.",
    photo: "/media/physicians/li-chen-md.jpg",
    specialty: { en: "Hand, Wrist and Elbow", pt: "Mão, punho e cotovelo" },
    role: "surgeon",
    bio: {
      en: "Dr. Chen earned his medical degree from Baylor College of Medicine in Houston. He completed an internship in general surgery and orthopedic residency at the University of Michigan, then a hand and upper-extremity fellowship at Loma Linda University Medical Center. Board-certified by the American Board of Orthopaedic Surgery, he has been practicing at Central Indiana Orthopedics since 2006.",
      pt: "O Dr. Chen formou-se no Baylor College of Medicine, em Houston. Fez internato em cirurgia geral e residência de ortopedia na University of Michigan, e fellowship de mão e membro superior no Loma Linda University Medical Center. Certificado pelo American Board of Orthopaedic Surgery, atende na Central Indiana Orthopedics desde 2006.",
    },
  },
  {
    slug: "ryan-d-cieply-md",
    name: "Ryan D. Cieply, M.D.",
    photo: "/media/physicians/ryan-d-cieply-md.jpg",
    specialty: {
      en: "Hip & Knee Replacement and Revision",
      pt: "Prótese e revisão de quadril e joelho",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Cieply is a board-certified, fellowship-trained orthopedic surgeon who specializes in hip and knee conditions, primarily arthritis, with joint replacement and revision representing most of his practice. He completed an adult hip and knee reconstruction fellowship at the Florida Orthopaedic Institute in Tampa.",
      pt: "O Dr. Cieply é cirurgião ortopédico certificado, com fellowship, especializado em quadril e joelho, sobretudo artrose. Prótese e revisão articular são a maior parte da sua prática. Fez fellowship de reconstrução de quadril e joelho no adulto no Florida Orthopaedic Institute, em Tampa.",
    },
  },
  {
    slug: "nicholas-j-cook-md",
    name: "Nicholas J. Cook, M.D.",
    photo: "/media/physicians/nicholas-j-cook-md.jpg",
    specialty: { en: "Hand, Wrist and Elbow", pt: "Mão, punho e cotovelo" },
    role: "surgeon",
    bio: {
      en: "Dr. Cook received his medical degree at Indiana University, completed orthopedic residency at Beaumont Health System in Royal Oak, Michigan, and a hand and upper-extremity fellowship at the University of Alabama at Birmingham. He is board-certified by the American Board of Orthopaedic Surgery and the American Board of Orthopaedic Hand Surgery and has practiced at Central Indiana Orthopedics since 2010. His published profile also introduces physician assistant Brittani Sizelove, who works with him.",
      pt: "O Dr. Cook formou-se na Indiana University, fez residência de ortopedia no Beaumont Health System, em Royal Oak, Michigan, e fellowship de mão e membro superior na University of Alabama at Birmingham. É certificado pelo American Board of Orthopaedic Surgery e pelo American Board of Orthopaedic Hand Surgery e atende na Central Indiana Orthopedics desde 2010. O perfil publicado também apresenta a physician assistant Brittani Sizelove, que trabalha com ele.",
    },
  },
  {
    slug: "brent-m-damer-do",
    name: "Brent M. Damer, D.O.",
    photo: "/media/physicians/brent-m-damer-do.jpg",
    specialty: {
      en: "Hip & Knee Replacement and Revision",
      pt: "Prótese e revisão de quadril e joelho",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Brent Damer is a board-certified orthopedic surgeon specializing in hip and knee arthritis. His surgical expertise includes total hip replacement, total and partial knee replacement, complex revision of hips and knees, and related infections. He trained at Des Moines University, Mercy St. Vincent Medical Center in Toledo, and in adult reconstruction at New England Baptist Hospital.",
      pt: "O Dr. Brent Damer é cirurgião ortopédico certificado, especializado em artrose de quadril e joelho. Sua prática inclui prótese total de quadril, prótese total e parcial de joelho, revisão complexa de quadril e joelho e infecções relacionadas. Formou-se na Des Moines University, no Mercy St. Vincent Medical Center em Toledo e em reconstrução do adulto no New England Baptist Hospital.",
    },
  },
  {
    slug: "joseph-c-duncan-md",
    name: "Joseph C. Duncan, M.D.",
    photo: "/media/physicians/joseph-c-duncan-md.jpg",
    specialty: { en: "Back, Neck and Spine Surgeon", pt: "Cirurgião de costas, pescoço e coluna" },
    role: "surgeon",
    bio: {
      en: "Dr. Duncan is a board-certified, fellowship-trained orthopedic surgeon specializing in the back, neck and spine. He recommends surgery when nonsurgical options have been exhausted and uses minimally invasive neck and spine procedures when they fit. He is board-certified by the American Board of Orthopaedic Surgery.",
      pt: "O Dr. Duncan é cirurgião ortopédico certificado, com fellowship, especializado em costas, pescoço e coluna. Indica cirurgia quando as opções não cirúrgicas se esgotam e usa procedimentos minimamente invasivos de pescoço e coluna quando cabem. É certificado pelo American Board of Orthopaedic Surgery.",
    },
  },
  {
    slug: "william-l-hall-md",
    name: "William L. Hall, M.D.",
    photo: "/media/physicians/william-l-hall-md.jpg",
    specialty: {
      en: "Interventional Pain Management and Physical Medicine & Rehabilitation",
      pt: "Tratamento intervencionista da dor e medicina física e reabilitação",
    },
    role: "nonoperative",
    bio: {
      en: "Dr. Hall is board-certified in both interventional pain management and physical medicine and rehabilitation. He completed undergraduate studies at Saint Louis University and his medical degree at Saint Louis University School of Medicine, then internship and residency at the University of Cincinnati. He has practiced at Central Indiana Orthopedics since 2016.",
      pt: "O Dr. Hall é certificado em tratamento intervencionista da dor e em medicina física e reabilitação. Estudou na Saint Louis University e formou-se na Saint Louis University School of Medicine, com internato e residência na University of Cincinnati. Atende na Central Indiana Orthopedics desde 2016.",
    },
  },
  {
    slug: "steven-a-herbst-md",
    name: "Steven A. Herbst, M.D.",
    photo: "/media/physicians/steven-a-herbst-md.jpg",
    specialty: { en: "Foot and Ankle", pt: "Pé e tornozelo" },
    role: "surgeon",
    bio: {
      en: "Dr. Herbst earned his medical degree at Indiana University School of Medicine, completed orthopedic residency at the University of Iowa, and a foot and ankle fellowship at MedStar Union Memorial Hospital in Baltimore. Board-certified by the American Board of Orthopaedic Surgery, he has practiced at Central Indiana Orthopedics since 2002.",
      pt: "O Dr. Herbst formou-se na Indiana University School of Medicine, fez residência de ortopedia na University of Iowa e fellowship de pé e tornozelo no MedStar Union Memorial Hospital, em Baltimore. Certificado pelo American Board of Orthopaedic Surgery, atende na Central Indiana Orthopedics desde 2002.",
    },
  },
  {
    slug: "jeremy-j-hunt-md",
    name: "Jeremy J. Hunt, M.D.",
    photo: "/media/physicians/jeremy-j-hunt-md.jpg",
    specialty: {
      en: "Primary Care Sports Medicine, Walk-In Clinic",
      pt: "Medicina esportiva de atenção primária, walk-in",
    },
    role: "nonoperative",
    bio: {
      en: "Dr. Hunt is a board-certified primary care sports medicine physician specializing in fractures, sports injuries, work-related injuries, ligament and tendon tears, and sprains and strains. He trained at Indiana University School of Medicine, in family practice at Indiana University Health Ball Memorial Hospital in Muncie, and in a sports medicine fellowship at Central Indiana Sports Medicine and IU Health Ball Memorial Hospital.",
      pt: "O Dr. Hunt é médico de medicina esportiva de atenção primária, certificado, especializado em fraturas, lesões esportivas, lesões de trabalho, rupturas de ligamento e tendão, entorses e distensões. Formou-se na Indiana University School of Medicine, fez residência de medicina de família no IU Health Ball Memorial Hospital, em Muncie, e fellowship de medicina esportiva na Central Indiana Sports Medicine e no mesmo hospital.",
    },
  },
  {
    slug: "ryan-r-jaggers-md",
    name: "Ryan R. Jaggers, M.D.",
    photo: "/media/physicians/ryan-r-jaggers-m-d.gif",
    specialty: {
      en: "Sports Medicine & Joint Replacement",
      pt: "Medicina esportiva e prótese articular",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Jaggers is a board-certified orthopedic surgeon and fellowship-trained sports medicine physician. He specializes in arthroscopic knee surgery, meniscal surgery, cartilage restoration, ligament and tendon repair, patellofemoral realignment, arthritis and joint replacement. He sees patients of all ages, from sports injuries to arthritis, and has served as a head team physician.",
      pt: "O Dr. Jaggers é cirurgião ortopédico certificado e médico de medicina esportiva com fellowship. É especializado em cirurgia artroscópica do joelho, menisco, restauração de cartilagem, reparo de ligamento e tendão, realinhamento patelofemoral, artrose e prótese articular. Atende todas as idades, de lesão esportiva a artrose, e já foi médico-chefe de equipe.",
    },
  },
  {
    slug: "joseph-g-jerman-md",
    name: "Joseph G. Jerman, M.D.",
    photo: "/media/physicians/joseph-g-jerman-md.jpg",
    specialty: {
      en: "General Orthopedics, Joint Replacement and Sports Medicine",
      pt: "Ortopedia geral, prótese articular e medicina esportiva",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Jerman earned his medical degree at Indiana University School of Medicine and completed orthopedic residency there. Board-certified by the American Board of Orthopaedic Surgery, he has practiced at Central Indiana Orthopedics since 2003 and is the surgeon published for the Elwood location.",
      pt: "O Dr. Jerman formou-se na Indiana University School of Medicine e fez residência de ortopedia na mesma instituição. Certificado pelo American Board of Orthopaedic Surgery, atende na Central Indiana Orthopedics desde 2003 e é o cirurgião publicado para a unidade de Elwood.",
    },
  },
  {
    slug: "p-jamieson-kay-md",
    name: "P. Jamieson Kay, M.D.",
    photo: "/media/physicians/p-jamieson-kay-md.jpg",
    specialty: {
      en: "General Orthopedics, Joint Replacement and Sports Medicine",
      pt: "Ortopedia geral, prótese articular e medicina esportiva",
    },
    role: "surgeon",
    bio: {
      en: "Dr. Kay graduated from Indiana University School of Medicine and completed orthopedic residency at Indiana University Health in Indianapolis. He previously served as team physician for the Indy Premier Soccer Club Classic. Board-certified by the American Board of Orthopaedic Surgery, he has practiced at Central Indiana Orthopedics since 2001 and is certified in Mako SmartRobotics.",
      pt: "O Dr. Kay formou-se na Indiana University School of Medicine e fez residência de ortopedia na Indiana University Health, em Indianápolis. Foi médico da equipe do Indy Premier Soccer Club Classic. Certificado pelo American Board of Orthopaedic Surgery, atende na Central Indiana Orthopedics desde 2001 e é certificado em Mako SmartRobotics.",
    },
  },
  {
    slug: "warren-g-lawless-do",
    name: "Warren G. Lawless, D.O.",
    photo: "/media/physicians/warren-g-lawless-do.jpg",
    specialty: {
      en: "Primary Care Sports Medicine, Walk-In Clinic",
      pt: "Medicina esportiva de atenção primária, walk-in",
    },
    role: "nonoperative",
    bio: {
      en: "Dr. Lawless is a board-certified primary care sports medicine physician specializing in fractures, sports injuries, work-related injuries, ligament and tendon tears, and sprains and strains. He trained at Marian University College of Osteopathic Medicine, in family medicine at IU Health Ball Memorial, and in a sports medicine fellowship at Community Health Network. The practice publishes him as team physician for Anderson University athletes.",
      pt: "O Dr. Lawless é médico de medicina esportiva de atenção primária, certificado, especializado em fraturas, lesões esportivas, lesões de trabalho, rupturas de ligamento e tendão, entorses e distensões. Formou-se no Marian University College of Osteopathic Medicine, fez residência de medicina de família no IU Health Ball Memorial e fellowship de medicina esportiva na Community Health Network. A prática o publica como médico da equipe dos atletas da Anderson University.",
    },
  },
  {
    slug: "adam-w-lyon-md",
    name: "Adam W. Lyon, M.D.",
    photo: "/media/physicians/adam-w-lyon-md.gif",
    specialty: { en: "Foot & Ankle Surgery", pt: "Cirurgia de pé e tornozelo" },
    role: "surgeon",
    bio: {
      en: "Dr. Lyon is a board-certified, fellowship-trained orthopedic surgeon specializing in the foot and ankle, including trauma, arthritis, sports injuries, sprains, bunions, hammer toes, deformities and flat feet. He trained at Wayne State University, in orthopedic residency in Kalamazoo, and in a foot and ankle fellowship at Grand Rapids Orthopaedic Associates of Michigan.",
      pt: "O Dr. Lyon é cirurgião ortopédico certificado, com fellowship, especializado em pé e tornozelo, incluindo trauma, artrose, lesões esportivas, entorses, joanetes, dedos em martelo, deformidades e pé plano. Formou-se na Wayne State University, fez residência de ortopedia em Kalamazoo e fellowship de pé e tornozelo na Grand Rapids Orthopaedic Associates of Michigan.",
    },
  },
  {
    slug: "john-r-martin-md",
    name: "John R. Martin, M.D.",
    photo: "/media/physicians/john-r-martin-md.jpg",
    specialty: {
      en: "Hip & Knee Replacement and Revision",
      pt: "Prótese e revisão de quadril e joelho",
    },
    role: "surgeon",
    bio: {
      en: "Dr. John Martin is a board-certified, fellowship-trained joint reconstruction surgeon specializing in hip and knee arthritis, including total hip, total knee and partial knee replacement and revision. He offers Mako SmartRobotics and is trained in the direct anterior and direct superior approaches for hip replacement and the muscle-sparing subvastus approach for knee replacement. He earned his medical degree at Indiana University.",
      pt: "O Dr. John Martin é cirurgião de reconstrução articular, certificado e com fellowship, especializado em artrose de quadril e joelho, incluindo prótese total de quadril, total e parcial de joelho, e revisão. Oferece Mako SmartRobotics e é treinado nas vias anterior direta e superior direta do quadril e na via subvasto, que preserva músculo, no joelho. Formou-se em medicina na Indiana University.",
    },
  },
  {
    slug: "nimu-k-surtani-md",
    name: "Nimu K. Surtani, M.D.",
    photo: "/media/physicians/nimu-k-surtani-md.jpg",
    specialty: { en: "Shoulder & Knee Surgery", pt: "Cirurgia de ombro e joelho" },
    role: "surgeon",
    bio: {
      en: "Dr. Surtani earned his medical degree at The University of Texas at San Antonio, completed orthopedic residency at Indiana University, and a sports medicine fellowship at the Center for Athletic Medicine in Chicago. Board-certified by the American Board of Orthopaedic Surgery, he has practiced at Central Indiana Orthopedics since 1998.",
      pt: "O Dr. Surtani formou-se na University of Texas at San Antonio, fez residência de ortopedia na Indiana University e fellowship de medicina esportiva no Center for Athletic Medicine, em Chicago. Certificado pelo American Board of Orthopaedic Surgery, atende na Central Indiana Orthopedics desde 1998.",
    },
  },
  {
    slug: "scott-m-waterman-md",
    name: "Scott M. Waterman, M.D.",
    photo: "/media/physicians/scott-m-waterman-md.jpg",
    specialty: { en: "Sports Medicine", pt: "Medicina esportiva" },
    role: "surgeon",
    bio: {
      en: "Dr. Scott Waterman is a sports-medicine fellowship-trained, board-certified orthopedic surgeon who sees patients at the Muncie office. He treats a wide range of shoulder and knee injuries. He holds a Sports Medicine Subspecialty Certification from the American Board of Orthopaedic Surgery and has practiced at Central Indiana Orthopedics since 2015, after serving in the U.S. Army, including a deployment to Afghanistan.",
      pt: "O Dr. Scott Waterman é cirurgião ortopédico certificado, com fellowship em medicina esportiva, e atende na unidade de Muncie. Trata uma ampla gama de lesões de ombro e joelho. Tem certificação de subespecialidade em medicina esportiva pelo American Board of Orthopaedic Surgery e está na Central Indiana Orthopedics desde 2015, depois de servir no Exército dos Estados Unidos, inclusive em missão no Afeganistão.",
    },
  },
  {
    slug: "stanton-a-wilhite-dpm",
    name: "Stanton A. Wilhite, D.P.M.",
    photo: "/media/physicians/stanton-a-wilhite-dpm.gif",
    specialty: { en: "Foot, Ankle & Podiatry", pt: "Pé, tornozelo e podologia" },
    role: "surgeon",
    bio: {
      en: "Dr. Wilhite is a board-certified foot and ankle surgeon certified by the American Board of Foot and Ankle Surgeons. He specializes in bunions, including minimally invasive bunion surgery, forefoot deformities, sports injuries, Achilles tendon injuries, ankle instability, reconstructive conditions, fractures and wound care. He received his Doctor of Podiatric Medicine from Rosalind Franklin University of Medicine and Science.",
      pt: "O Dr. Wilhite é cirurgião de pé e tornozelo certificado pelo American Board of Foot and Ankle Surgeons. É especializado em joanetes, inclusive cirurgia minimamente invasiva, deformidades do antepé, lesões esportivas, lesões do tendão de Aquiles, instabilidade do tornozelo, reconstruções, fraturas e cuidado de feridas. Recebeu o título de Doctor of Podiatric Medicine na Rosalind Franklin University of Medicine and Science.",
    },
  },
];

export function physicianBySlug(slug: string) {
  return physicians.find((p) => p.slug === slug);
}

export function locationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function physiciansAt(slugs: string[]) {
  return slugs
    .map((slug) => physicians.find((p) => p.slug === slug))
    .filter((p): p is Physician => Boolean(p));
}

export type Service = {
  slug: string;
  title: Copy;
  summary: Copy;
  body: Copy[];
};

export const services: Service[] = [
  {
    slug: "walk-in-clinic",
    title: { en: "Walk-In Clinic", pt: "Clínica sem hora marcada" },
    summary: {
      en: "Same-day orthopedic care for musculoskeletal injuries and pain. No appointment. Anderson, Fishers, Marion, Muncie and Zionsville.",
      pt: "Atendimento ortopédico no mesmo dia para lesões e dor musculoesquelética. Sem hora marcada. Anderson, Fishers, Marion, Muncie e Zionsville.",
    },
    body: [
      {
        en: "Injuries don’t wait for an appointment — and neither should you. The walk-in clinics provide same-day access to orthopedic experts for musculoskeletal injuries and pain.",
        pt: "Lesões não esperam uma consulta — e você também não deveria. As clínicas walk-in dão acesso no mesmo dia a especialistas em ortopedia para lesões e dor musculoesquelética.",
      },
      {
        en: "Published benefits: same-day care with no appointment; no referral unless your insurance requires one; faster and more affordable than the emergency room, with the practice stating an average savings of $2,000; imaging and casting onsite; all ages welcome; staffed by orthopedic experts.",
        pt: "Benefícios publicados: atendimento no mesmo dia, sem hora marcada; sem encaminhamento, salvo se o plano exigir; mais rápido e mais barato que o pronto-socorro, com a prática citando uma economia média de US$ 2.000; imagem e gesso no local; todas as idades; equipe de especialistas em ortopedia.",
      },
      {
        en: "Visit for fractures or broken bones, sprains, strains or pulled muscles, ligament or tendon injuries, sports injuries, work-related injuries, or intense or worsening pain. For back and neck pain, call 800-622-6575 for a spine specialist instead of using walk-in.",
        pt: "Procure a clínica para fraturas, entorses, distensões ou estiramentos, lesões de ligamento ou tendão, lesões esportivas, lesões de trabalho ou dor intensa ou que piora. Para dor nas costas e no pescoço, ligue 800-622-6575 para um especialista de coluna, em vez de usar o walk-in.",
      },
      {
        en: "Care is first-come, first-served, with more severe injuries prioritized. For ongoing concerns, the team may be able to schedule a same-day or next-day appointment depending on provider availability.",
        pt: "O atendimento é por ordem de chegada, com prioridade para lesões mais graves. Para problemas contínuos, a equipe pode conseguir uma consulta no mesmo dia ou no dia seguinte, conforme a agenda.",
      },
    ],
  },
  {
    slug: "surgery-revision",
    title: { en: "Joint Replacement & Joint Revision", pt: "Prótese e revisão articular" },
    summary: {
      en: "Ankle, hip, knee and shoulder replacement and revision, including Mako SmartRobotics for hip and knee at Fishers and Muncie.",
      pt: "Prótese e revisão de tornozelo, quadril, joelho e ombro, inclusive Mako SmartRobotics para quadril e joelho em Fishers e Muncie.",
    },
    body: [
      {
        en: "Whether you need joint replacement or joint revision, procedures are performed by the practice’s board-certified orthopedic surgeons. Ankle, hip, knee (total and partial) and shoulder replacement and revision can be performed at the outpatient surgery centers or local hospitals.",
        pt: "Seja prótese ou revisão, os procedimentos são feitos pelos cirurgiões ortopédicos certificados da prática. Prótese e revisão de tornozelo, quadril, joelho (total e parcial) e ombro podem ser feitas nos centros de cirurgia ambulatorial ou em hospitais locais.",
      },
      {
        en: "The published reasons to talk with a surgeon include severe joint pain, pain that keeps you awake, discomfort that stops recreation, pain that limits stairs or standing, and conservative care — exercise, injections or therapy — that has not helped.",
        pt: "Os motivos publicados para conversar com um cirurgião incluem dor articular intensa, dor que impede o sono, desconforto que interrompe o lazer, dor que limita escadas ou ficar em pé, e tratamento conservador — exercício, infiltração ou terapia — que não ajudou.",
      },
      {
        en: "Central Indiana Orthopedics states it was the first orthopedic practice in the region to use Mako SmartRobotics for total hip and total or partial knee replacement, and that it has helped over 4,500 patients with Mako-assisted surgeries. Mako is available at the Fishers and Muncie outpatient surgery centers, and surgeons can also perform Mako surgery at Ascension St. Vincent Fishers Hospital. Natalie McClintick, a nurse practitioner patient navigator, is published as available for hip and knee replacement patients.",
        pt: "A Central Indiana Orthopedics afirma ter sido a primeira prática ortopédica da região a usar Mako SmartRobotics para prótese total de quadril e prótese total ou parcial de joelho, e que já ajudou mais de 4.500 pacientes com cirurgias assistidas por Mako. O Mako está disponível nos centros ambulatoriais de Fishers e Muncie, e os cirurgiões também podem operar com Mako no Ascension St. Vincent Fishers Hospital. Natalie McClintick, nurse practitioner e navegadora de pacientes, é publicada como apoio aos pacientes de prótese de quadril e joelho.",
      },
      {
        en: "Joint revision may be discussed if an implant loosens, wears or becomes infected, or if a younger patient has asked a great deal of a joint. Published signs include limping and a swollen, painful joint.",
        pt: "A revisão pode ser conversada se o implante soltar, desgastar ou infectar, ou se um paciente mais jovem exigiu muito da articulação. Os sinais publicados incluem mancar e uma articulação inchada e dolorida.",
      },
    ],
  },
  {
    slug: "robotic-assisted-hip-and-knee-replacement",
    title: {
      en: "Robotic-Assisted Hip & Knee Replacement",
      pt: "Prótese de quadril e joelho assistida por robô",
    },
    summary: {
      en: "Mako SmartRobotics for total hip and total or partial knee replacement, with a plan built from each patient’s anatomy.",
      pt: "Mako SmartRobotics para prótese total de quadril e prótese total ou parcial de joelho, com um plano feito a partir da anatomia de cada paciente.",
    },
    body: [
      {
        en: "Mako SmartRobotics is published as a surgical tool for painful arthritis of the knee or hip. The practice describes a personalized plan from a 3D model of the patient’s hip or knee, used to help the surgeon perform a more predictable procedure.",
        pt: "O Mako SmartRobotics é publicado como ferramenta cirúrgica para artrose dolorosa de joelho ou quadril. A prática descreve um plano personalizado a partir de um modelo 3D do quadril ou do joelho do paciente, para ajudar o cirurgião a fazer um procedimento mais previsível.",
      },
    ],
  },
  {
    slug: "back-neck-spine",
    title: { en: "Back, Neck, Spine", pt: "Costas, pescoço e coluna" },
    summary: {
      en: "Care aimed at chronic back, neck and spine pain, from inflammation and overuse to degenerative conditions.",
      pt: "Cuidado voltado à dor crônica de costas, pescoço e coluna, de inflamação e excesso de uso a condições degenerativas.",
    },
    body: [
      {
        en: "The practice writes that many people believe they simply have to live with back, neck and spine pain, and that its goal is to address those chronic issues. It states that most back pain symptoms stem from inflammation after an acute injury or overuse, and that pain can also come from chronic or degenerative conditions.",
        pt: "A prática escreve que muita gente acredita que precisa conviver com dor de costas, pescoço e coluna, e que o objetivo é tratar esses problemas crônicos. Diz que a maioria dos sintomas de dor nas costas vem de inflamação após uma lesão aguda ou excesso de uso, e que a dor também pode vir de condições crônicas ou degenerativas.",
      },
    ],
  },
  {
    slug: "elbow",
    title: { en: "Elbow", pt: "Cotovelo" },
    summary: {
      en: "Elbow pain from injury, sport, a fall, overuse or a condition such as osteoarthritis.",
      pt: "Dor no cotovelo por lesão, esporte, queda, excesso de uso ou uma condição como osteoartrite.",
    },
    body: [
      {
        en: "The published introduction says elbow pain is most often from an injury, frequently sports or a fall, and can also develop over time, as with osteoarthritis. Overuse can inflame the elbow and forearm and make everyday tasks difficult.",
        pt: "A introdução publicada diz que a dor no cotovelo costuma vir de uma lesão, em geral esporte ou queda, e também pode surgir com o tempo, como na osteoartrite. O excesso de uso pode inflamar o cotovelo e o antebraço e dificultar tarefas do dia.",
      },
    ],
  },
  {
    slug: "ankle-foot",
    title: { en: "Foot, Ankle, Podiatry", pt: "Pé, tornozelo e podologia" },
    summary: {
      en: "Sudden or chronic foot and ankle pain, including arthritis and sports-related ankle swelling.",
      pt: "Dor súbita ou crônica no pé e no tornozelo, inclusive artrose e inchaço do tornozelo ligado ao esporte.",
    },
    body: [
      {
        en: "The practice describes foot and ankle pain that can slow a person down, whether sudden or chronic, such as arthritis. It notes that ankle pain and swelling are most often tied to trauma and sports.",
        pt: "A prática descreve dor no pé e no tornozelo que pode atrasar a pessoa, seja súbita ou crônica, como a artrose. Observa que dor e inchaço do tornozelo estão mais ligados a trauma e esporte.",
      },
    ],
  },
  {
    slug: "hand-wrist",
    title: { en: "Hand, Wrist", pt: "Mão e punho" },
    summary: {
      en: "Hand and wrist pain, including conditions that develop over time such as carpal tunnel and arthritis.",
      pt: "Dor na mão e no punho, inclusive condições que surgem com o tempo, como túnel do carpo e artrose.",
    },
    body: [
      {
        en: "The published page ties much of today’s hand and wrist pain to time on computers and phones, and says other causes are common too. It names carpal tunnel syndrome and arthritis among conditions that develop over time, and points patients to a hand or wrist specialist for an accurate diagnosis.",
        pt: "A página publicada liga boa parte da dor atual de mão e punho ao tempo em computadores e telefones, e diz que outras causas também são comuns. Cita a síndrome do túnel do carpo e a artrose entre as condições que surgem com o tempo, e orienta a buscar um especialista de mão ou punho para um diagnóstico preciso.",
      },
    ],
  },
  {
    slug: "hip",
    title: { en: "Hip", pt: "Quadril" },
    summary: {
      en: "Hip pain at any age, from bursitis and arthritis to fracture or dislocation.",
      pt: "Dor no quadril em qualquer idade, de bursite e artrose a fratura ou luxação.",
    },
    body: [
      {
        en: "The practice notes that hip pain is not limited to older adults, especially for people in sports. Causes it names include bursitis, arthritis, fracture and dislocation.",
        pt: "A prática observa que a dor no quadril não se limita a adultos mais velhos, sobretudo em quem pratica esporte. As causas que cita incluem bursite, artrose, fratura e luxação.",
      },
    ],
  },
  {
    slug: "knee",
    title: { en: "Knee", pt: "Joelho" },
    summary: {
      en: "Sudden or long-building knee pain, including sports injury and arthritis that may lead to surgery.",
      pt: "Dor no joelho súbita ou que se acumula, inclusive lesão esportiva e artrose que pode levar à cirurgia.",
    },
    body: [
      {
        en: "Knee pain, the page says, can be sudden or the result of overuse, a condition over time, or a recent sports injury. Arthritis may create enough discomfort that knee surgery becomes an option.",
        pt: "A dor no joelho, diz a página, pode ser súbita ou resultado de excesso de uso, de uma condição ao longo do tempo ou de uma lesão esportiva recente. A artrose pode causar desconforto suficiente para a cirurgia de joelho entrar em conversa.",
      },
    ],
  },
  {
    slug: "shoulder",
    title: { en: "Shoulder", pt: "Ombro" },
    summary: {
      en: "Shoulder pain from inflammation, instability, arthritis or injury.",
      pt: "Dor no ombro por inflamação, instabilidade, artrose ou lesão.",
    },
    body: [
      {
        en: "The practice calls the shoulder the most versatile joint in the body and says that range of motion can lead to pain. It names four main causes: inflammation, instability, arthritis or injury.",
        pt: "A prática chama o ombro de articulação mais versátil do corpo e diz que essa amplitude pode levar à dor. Cita quatro causas principais: inflamação, instabilidade, artrose ou lesão.",
      },
    ],
  },
  {
    slug: "sports-medicine",
    title: { en: "Sports Medicine", pt: "Medicina esportiva" },
    summary: {
      en: "Sports injuries for weekend athletes and for high school, college and professional athletes.",
      pt: "Lesões esportivas para quem joga no fim de semana e para atletas de ensino médio, universidade e esporte profissional.",
    },
    body: [
      {
        en: "The published introduction says sports injuries need specialized treatment, whether the person is a weekend athlete or competes in high school, college or professionally. The stated aim is to help people return to the same level of play.",
        pt: "A introdução publicada diz que lesões esportivas pedem tratamento especializado, seja um atleta de fim de semana ou alguém que compete no ensino médio, na universidade ou no profissional. O objetivo declarado é ajudar a pessoa a voltar ao mesmo nível.",
      },
    ],
  },
  {
    slug: "imaging-service",
    title: { en: "Imaging Services", pt: "Exames de imagem" },
    summary: {
      en: "Digital X-ray at every office, plus MRI when the physician orders it.",
      pt: "Raio-X digital em todas as unidades, e ressonância quando o médico solicita.",
    },
    body: [
      {
        en: "When a physician decides imaging will inform the diagnosis, the practice offers X-ray and MRI. It states that X-ray is available at all offices, using digital sensors rather than traditional film.",
        pt: "Quando o médico decide que a imagem ajuda o diagnóstico, a prática oferece raio-X e ressonância. Informa que o raio-X está em todas as unidades, com sensores digitais em vez de filme tradicional.",
      },
    ],
  },
  {
    slug: "physical-therapy",
    title: { en: "Physical Therapy", pt: "Fisioterapia" },
    summary: {
      en: "On-site orthopedic physical therapy at the Fishers and Muncie offices.",
      pt: "Fisioterapia ortopédica no local, nas unidades de Fishers e Muncie.",
    },
    body: [
      {
        en: "Orthopedic physical therapy is published as on-site at Fishers and Muncie. Licensed physical therapists work in communication with the patient’s provider.",
        pt: "A fisioterapia ortopédica é publicada como serviço no local em Fishers e Muncie. Fisioterapeutas licenciados trabalham em comunicação com o médico do paciente.",
      },
    ],
  },
  {
    slug: "outpatient-surgery",
    title: { en: "Outpatient Surgery", pt: "Cirurgia ambulatorial" },
    summary: {
      en: "Surgery centers built for specialty outpatient procedures, including Mako hip and knee replacement.",
      pt: "Centros cirúrgicos feitos para procedimentos ambulatoriais especializados, inclusive prótese de quadril e joelho com Mako.",
    },
    body: [
      {
        en: "The practice describes outpatient surgery centers designed for specialty procedures, including Mako SmartRobotics for total hip or total and partial knee replacement.",
        pt: "A prática descreve centros de cirurgia ambulatorial desenhados para procedimentos especializados, inclusive Mako SmartRobotics para prótese total de quadril ou prótese total e parcial de joelho.",
      },
    ],
  },
  {
    slug: "nonsurgical-pain-management",
    title: { en: "Nonsurgical Pain Management", pt: "Tratamento não cirúrgico da dor" },
    summary: {
      en: "Nonsurgical options for acute and chronic pain, including radiating neck and back pain.",
      pt: "Opções não cirúrgicas para dor aguda e crônica, inclusive dor irradiada no pescoço e nas costas.",
    },
    body: [
      {
        en: "The nonsurgical pain team is described as treating acute and chronic pain and aiming at the source of pain to ease discomfort, restore function and improve quality of life. Radiating neck and back pain is named among the reasons people come in.",
        pt: "A equipe de dor não cirúrgica é descrita como quem trata dor aguda e crônica e mira a origem da dor para aliviar o desconforto, recuperar função e melhorar a qualidade de vida. Dor irradiada no pescoço e nas costas está entre os motivos de consulta.",
      },
    ],
  },
  {
    slug: "regenerative-medicine",
    title: { en: "Regenerative Medicine", pt: "Medicina regenerativa" },
    summary: {
      en: "Platelet-rich plasma (PRP) and related options using a patient’s own tissues for spine, joint or musculoskeletal pain.",
      pt: "Plasma rico em plaquetas (PRP) e opções relacionadas, com tecidos do próprio paciente, para dor na coluna, nas articulações ou musculoesquelética.",
    },
    body: [
      {
        en: "The practice publishes platelet-rich plasma (PRP) therapy among its regenerative options and describes regenerative medicine as using a patient’s own tissues and cells for pain from the spine, joints or other musculoskeletal problems.",
        pt: "A prática publica a terapia com plasma rico em plaquetas (PRP) entre as opções regenerativas e descreve a medicina regenerativa como o uso dos tecidos e células do próprio paciente para dor na coluna, nas articulações ou em outros problemas musculoesqueléticos.",
      },
    ],
  },
  {
    slug: "pediatric-injuries",
    title: { en: "Pediatric Injuries", pt: "Lesões pediátricas" },
    summary: {
      en: "Orthopedic care for children of all ages, with same-day walk-in access when an injury should not wait.",
      pt: "Cuidado ortopédico para crianças de todas as idades, com walk-in no mesmo dia quando a lesão não pode esperar.",
    },
    body: [
      {
        en: "The practice says it treats children of all ages and that walk-in clinics offer same-day orthopedic care with no appointment, so families can be seen when an injury happens.",
        pt: "A prática diz que atende crianças de todas as idades e que as clínicas walk-in oferecem cuidado ortopédico no mesmo dia, sem hora marcada, para a família ser vista quando a lesão acontece.",
      },
    ],
  },
  {
    slug: "work-related-injuries",
    title: { en: "Work-Related Injuries", pt: "Lesões de trabalho" },
    summary: {
      en: "A workers’ compensation program at every location, including second opinions and independent medical examinations.",
      pt: "Um programa de compensação laboral em todas as unidades, inclusive segunda opinião e exame médico independente.",
    },
    body: [
      {
        en: "All locations offer the workers’ compensation program. The page describes care for immediate treatment, a second opinion or an independent medical examination, with general and subspecialty orthopedic services. The contact page lists work-related injuries at 765-608-3955.",
        pt: "Todas as unidades oferecem o programa de compensação laboral. A página descreve atendimento para tratamento imediato, segunda opinião ou exame médico independente, com ortopedia geral e subespecialidades. A página de contato lista lesões de trabalho no 765-608-3955.",
      },
    ],
  },
  {
    slug: "team-doctor-and-athletic-training-services",
    title: {
      en: "Team Doctor and Athletic Training",
      pt: "Médico de equipe e preparação atlética",
    },
    summary: {
      en: "Team physician and athletic training partnerships. Anderson University is named, with Dr. Warren Lawless as team physician.",
      pt: "Parcerias de médico de equipe e preparação atlética. A Anderson University é citada, com o Dr. Warren Lawless como médico da equipe.",
    },
    body: [
      {
        en: "The practice says it partners with organizations as official team physicians and athletic trainers. The published note on Anderson University says Central Indiana Orthopedics has served those student athletes since 2008, and that Dr. Warren Lawless is the team physician.",
        pt: "A prática diz que faz parceria com organizações como médica oficial de equipe e com preparadores atléticos. A nota publicada sobre a Anderson University diz que a Central Indiana Orthopedics atende esses estudantes-atletas desde 2008, e que o Dr. Warren Lawless é o médico da equipe.",
      },
    ],
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const stories: { title: string; image?: string }[] = [
  { title: "Remo's Comprehensive Care", image: "/media/story-remo.jpg" },
  { title: "Beth's Mako Hip Replacement", image: "/media/story-beth.jpg" },
  { title: "Jim's Four Mako Joint Replacements" },
  { title: "Kimberly's Mako Knee Replacement" },
  { title: "Rodolfo's Mako Knee Replacement" },
  { title: "Steve Grove's Mako Knee Replacement" },
  { title: "Paul's Two Mako Knee Replacements" },
  { title: "Dan's Bicep Tendon Rupture" },
  { title: "Abby's ACL Repair" },
  { title: "Pyper's ACL Injury" },
  { title: "Dennis' Comprehensive Care" },
  { title: "Chris' Work Comp Injury" },
  { title: "Randy's Rotator Cuff Surgery" },
  { title: "Zack's Shoulder Separation" },
  { title: "Dr. Kay's Mako Knee Replacement" },
  { title: "Mike's Reverse Shoulder Replacement" },
  { title: "Zeph’s Sports Injury" },
  { title: "Austin’s Elbow Injury" },
  { title: "Russ’s Hip Scope" },
  { title: "Judy’s PRP Treatment" },
  { title: "A.J.’s Shoulder Surgery" },
  { title: "Tim’s Tendon Transfer" },
  { title: "Ruthie’s Wrist Surgery" },
];

export const posts: { date: string; title: Copy; excerpt: Copy; href: string }[] = [
  {
    date: "2026-09-28",
    title: {
      en: "Dr. Aaron Baessler Recognized as 2026 Arthritis Foundation Medical Honoree; CIO Raises Record-Breaking Support at Bone Bash",
      pt: "Dr. Aaron Baessler é homenageado médico de 2026 da Arthritis Foundation; a CIO arrecada apoio recorde no Bone Bash",
    },
    excerpt: {
      en: "The Arthritis Foundation’s Bone Bash is always a special evening, but this year’s Villains Ball was one for the record books. Central Indiana Orthopedics was proud to celebrate Dr. Aaron…",
      pt: "O Bone Bash da Arthritis Foundation é sempre uma noite especial, mas o Villains Ball deste ano entrou para a história. A Central Indiana Orthopedics celebrou o Dr. Aaron…",
    },
    href: "https://ciocenter.com/dr-aaron-baessler-recognized-as-2026-arthritis-foundation-medical-honoree-cio-raises-record-breaking-support-at-bone-bash/",
  },
  {
    date: "2026-09-25",
    title: {
      en: "Stories That Move Us: Denise Hummer’s Knee Recovery Began With “I’ve Got You, Friend”",
      pt: "Histórias que nos movem: a recuperação do joelho de Denise Hummer começou com “estou com você, amiga”",
    },
    excerpt: {
      en: "For years, Denise Hummer’s knees had a way of making themselves known. They greeted her every morning when she got out of bed, reminded her when she sat too long…",
      pt: "Por anos, os joelhos de Denise Hummer se faziam notar. Cumprimentavam ela toda manhã ao sair da cama e lembravam quando ela sentava por tempo demais…",
    },
    href: "https://ciocenter.com/stories-that-move-us-denise-hummers-knee-recovery-began-with-ive-got-you-friend/",
  },
  {
    date: "2026-09-22",
    title: {
      en: "Sore Muscles vs Injury Pain: How to Tell the Difference and When to Seek Care",
      pt: "Músculo dolorido ou dor de lesão: como distinguir e quando procurar cuidado",
    },
    excerpt: {
      en: "You pushed through a great workout, spent the weekend tackling yard work or finally got back to that pickleball game you’ve been missing. The next day, you’re sore, but how…",
      pt: "Você fez um treino forte, passou o fim de semana no jardim ou voltou àquele jogo de pickleball. No dia seguinte está dolorido, mas como…",
    },
    href: "https://ciocenter.com/sore-muscles-vs-injury-pain-how-to-tell-the-difference-and-when-to-seek-care/",
  },
  {
    date: "2026-08-31",
    title: {
      en: "Stories That Move Us: Lori Whistler’s Journey Back to Running",
      pt: "Histórias que nos movem: a volta de Lori Whistler à corrida",
    },
    excerpt: {
      en: "For Lori Whistler, running has been a constant throughout much of her life. She discovered her love for the sport in sixth grade after joining her middle school track team,…",
      pt: "Para Lori Whistler, correr acompanhou boa parte da vida. Ela descobriu o esporte na sexta série, no time de atletismo da escola…",
    },
    href: "https://ciocenter.com/stories-that-move-us-lori-whistlers-journey-back-to-running/",
  },
  {
    date: "2026-08-12",
    title: {
      en: "Can You Still Move a Broken Bone? What Orthopedic Specialists Want You to Know",
      pt: "Dá para mover um osso quebrado? O que os especialistas em ortopedia querem que você saiba",
    },
    excerpt: {
      en: "After an injury, it’s natural to look for clues about how serious it might be. A common misconception is that if you can still move the injured body part, it…",
      pt: "Depois de uma lesão, é natural procurar pistas de gravidade. Um equívoco comum é achar que, se ainda dá para mover a parte atingida, ela…",
    },
    href: "https://ciocenter.com/can-you-still-move-a-broken-bone-what-orthopedic-specialists-want-you-to-know/",
  },
  {
    date: "2026-08-06",
    title: {
      en: "Central Indiana Orthopedics Added to Anthem HealthSync Designated Orthopedic Network",
      pt: "Central Indiana Orthopedics entra na rede ortopédica designada Anthem HealthSync",
    },
    excerpt: {
      en: "We’re proud to announce that Central Indiana Orthopedics (CIO) has been added to the Anthem HealthSync Designated Orthopedic Network effective July 1, 2026. The designation includes CIO Fishers Surgery Center…",
      pt: "A Central Indiana Orthopedics (CIO) passou a integrar a Anthem HealthSync Designated Orthopedic Network em 1º de julho de 2026. A designação inclui o CIO Fishers Surgery Center…",
    },
    href: "https://ciocenter.com/central-indiana-orthopedics-added-to-anthem-healthsync-designated-orthopedic-network/",
  },
];

export const values: { title: Copy; body: Copy }[] = [
  {
    title: { en: "Integrity", pt: "Integridade" },
    body: {
      en: "Treat and care for every patient and each other with sincerity and honesty.",
      pt: "Tratar e cuidar de cada paciente e uns dos outros com sinceridade e honestidade.",
    },
  },
  {
    title: { en: "Mutual respect", pt: "Respeito mútuo" },
    body: {
      en: "Be mindful of the remarkable and unique character of all persons.",
      pt: "Ter presente o caráter notável e único de cada pessoa.",
    },
  },
  {
    title: { en: "Teamwork", pt: "Trabalho em equipe" },
    body: {
      en: "Recognizing we achieve more for our patients as a whole than we do as individuals.",
      pt: "Reconhecer que, juntos, fazemos mais pelos pacientes do que cada um sozinho.",
    },
  },
  {
    title: { en: "Community commitment", pt: "Compromisso com a comunidade" },
    body: {
      en: "It is our responsibility and privilege to give back to the communities we share as professionals and neighbors with our patients.",
      pt: "É responsabilidade e privilégio retribuir às comunidades que dividimos, como profissionais e vizinhos, com os pacientes.",
    },
  },
  {
    title: { en: "Innovation", pt: "Inovação" },
    body: {
      en: "Seek and implement technologies and practices that result in the best evidence-based outcomes.",
      pt: "Buscar e aplicar tecnologias e práticas que levem aos melhores resultados baseados em evidência.",
    },
  },
];
