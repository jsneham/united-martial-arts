import type { FollowUsType, ProgramType, TestimonialType } from "@/types";

export const programsData: ProgramType[] = [
  {
    id: "1",
    title: "Karate Basics",
    subtitle: "Kids",
    image: "/images/programs1.jpg",
  },
  {
    id: "2",
    title: "Taekwondo",
    subtitle: "Teens",
    image: "/images/programs2.jpg",
  },
  {
    id: "3",
    title: "Self-Defense",
    subtitle: "Adults",
      image: "/images/programs1.jpg",
  },
  {
    id: "4",
    title: "MMA",
    subtitle: "All levels",
    image: "/images/programs2.jpg",
  },
  {
    id: "5",
      title: "Weapons Training",
      subtitle: "Advanced",
      image: "/images/programs1.jpg",
    },
    {
        id: "6",
      title: "Mixed Martial Arts",
      subtitle: "All Levels",
      image: "/images/programs2.jpg",
    },
];

export const followUsData: FollowUsType[] = [
   {
    id: "1",
    username: "Karate Basics",
    image: "/images/programs1.jpg",
  },
  {
    id: "2",
    username: "Taekwondo",
    image: "/images/programs2.jpg",
  },
  {
    id: "3",
    username: "Self-Defense",
    image: "/images/programs1.jpg",
  },
]

export const InstructorDetails: string = "Our lead instructor, Sensei Sneha Jadhav, brings over 20 years of martial arts expertise. She is passionate about teaching, combining advanced techniques with a personalized, approachable style.\n Sensei Sneha has guided students from their very first lesson to national competitions. Her unique achievements include multiple black belts and championship titles, plus a reputation for fostering discipline and confidence in every student.\n With a deep commitment to each individual’s journey, Sensei Sneha ensures every student feels supported and challenged. Her inspiring leadership transforms training into both personal growth and accomplishment."

export const galleryImages = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
  ];

export const testimonials: TestimonialType[] = [
  {
    name: "Riya M.",
    feedback:
      "Sensei Sneha’s classes changed my life—her encouragement and skill make every session empowering.",
  },
  {
    name: "Aarav P.",
    feedback:
      "The training is top-notch, and the discipline Sensei brings has helped me grow both physically and mentally.",
  },
  {
    name: "Maya S.",
    feedback:
      "Every class pushes me to be my best self. The sense of community here is amazing!",
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "₹45",
    features: [
      "2 group classes/week",
      "All skill levels",
      "No contract",
    ],
    buttonText: "Get Started",
    highlight: true,
  },
  {
    title: "Unlimited",
    price: "₹70",
    features: [
      "Unlimited classes",
      "Special seminars",
      "Family discounts",
    ],
    buttonText: "Get Started",
    highlight: true,
  },
];