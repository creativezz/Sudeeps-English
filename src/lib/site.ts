import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Laptop,
  Mic2,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";

export const phoneDisplay = "090374 76087";
export const phoneHref = "tel:+919037476087";
export const whatsappHref =
  "https://wa.me/919037476087?text=Hi%20Sudeeps%20English%2C%20I%20would%20like%20to%20book%20a%20demo%20class.";

export const address =
  "Canal road, Colonypadi Sudeeps edu, Changampuzha lane, Opp Lane to Pushpanagar Anganwadi, Pushpanagar, MES Canal Road, Chungamvely, Aluva, Kerala 683112";

export const socials = {
  youtube: "https://www.youtube.com/@sudeepsenglish",
  instagram: "https://www.instagram.com/sudeepsenglish/",
  linkedinOne: "https://in.linkedin.com/in/sudeep-soman-thadathil-7a6652258",
  linkedinTwo: "https://www.linkedin.com/in/thadathil-sudeep-603a932b6/",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Videos", href: "/videos" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const courses = [
  {
    title: "Basic Spoken English",
    description:
      "Start speaking with simple sentence patterns, daily vocabulary, pronunciation, and guided practice.",
    icon: Mic2,
  },
  {
    title: "Advanced Spoken English",
    description:
      "Build fluency for discussions, presentations, public speaking, and confident daily communication.",
    icon: Award,
  },
  {
    title: "Grammar Foundation",
    description:
      "Understand grammar through practical examples, Malayalam support, and usage-focused exercises.",
    icon: BookOpen,
  },
  {
    title: "Interview English",
    description:
      "Prepare self-introductions, HR answers, workplace vocabulary, and confident interview responses.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Communication",
    description:
      "Improve professional conversations, emails, meetings, workplace etiquette, and presentation confidence.",
    icon: Building2,
  },
  {
    title: "One-to-One Coaching",
    description:
      "Personal attention for learners who want focused correction, accountability, and flexible progress.",
    icon: Users,
  },
  {
    title: "Online English Classes",
    description:
      "Online English classes Kerala learners can join from home with structured practice and feedback.",
    icon: Laptop,
  },
  {
    title: "Offline Classes in Aluva",
    description:
      "Join a trusted English coaching center in Aluva for in-person spoken English training.",
    icon: GraduationCap,
  },
];

export const reviews = [
  {
    name: "Student Review",
    text: "A supportive place to build English confidence step by step, especially for learners who need clear explanations.",
  },
  {
    name: "Interview Learner",
    text: "The training focuses on practical speaking, self-introduction, and answering questions with confidence.",
  },
  {
    name: "Online Learner",
    text: "Helpful for learning English through Malayalam and improving communication from the basics.",
  },
];

export const faqs = [
  {
    question: "Do you offer spoken English classes in Aluva?",
    answer:
      "Yes. Sudeeps English offers spoken English classes in Aluva for beginners, students, job seekers, homemakers, and working professionals.",
  },
  {
    question: "Can I learn English through Malayalam?",
    answer:
      "Yes. English through Malayalam is a key part of the teaching style, helping Kerala learners understand grammar and speaking patterns clearly.",
  },
  {
    question: "Are online English classes available in Kerala?",
    answer:
      "Yes. Learners across Kerala can ask about online English classes and join structured coaching from home.",
  },
  {
    question: "Do you provide interview English training?",
    answer:
      "Yes. Interview English training covers self-introduction, HR questions, fluency, vocabulary, and confident professional communication.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. The basic course starts from fundamentals and gradually builds speaking confidence with guided practice.",
  },
];

export const stats = [
  { label: "Google rating", value: "5.0", icon: Star },
  { label: "Student reviews", value: "15", icon: MessageCircle },
  { label: "Offline + online", value: "2 modes", icon: Laptop },
];

export const youtubeVideos = [
  {
    title: "Spoken English for Beginners",
    src: "https://www.youtube-nocookie.com/embed/dEEmkVxu-Sc",
  },
  {
    title: "At the Greengrocers",
    src: "https://www.youtube-nocookie.com/embed/z-lYfSQ0Jis",
  },
];

export const mapEmbed =
  "https://www.google.com/maps?q=Sudeeps%20English%20Canal%20road%20Colonypadi%20Sudeeps%20edu%20Aluva%20Kerala%20683112&output=embed";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Sudeeps English",
  description:
    "Sudeeps English is an English coaching center in Aluva offering spoken English classes, English through Malayalam, interview English training, online English classes Kerala, and offline classes.",
  telephone: "+919037476087",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Canal road, Colonypadi Sudeeps edu, Changampuzha lane, Opp Lane to Pushpanagar Anganwadi, Pushpanagar, MES Canal Road, Chungamvely",
    addressLocality: "Aluva",
    addressRegion: "Kerala",
    postalCode: "683112",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
    },
  ],
  areaServed: ["Aluva", "Kerala", "Online learners in Kerala"],
  knowsAbout: [
    "Spoken English",
    "English through Malayalam",
    "Interview English",
    "Communication Skills",
    "Online English Classes",
  ],
  sameAs: [
    socials.youtube,
    socials.instagram,
    socials.linkedinOne,
    socials.linkedinTwo,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sudeeps English Courses",
    itemListElement: courses.map((course) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "Sudeeps English",
        },
      },
    })),
  },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
