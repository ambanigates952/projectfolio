export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Shree Vidyut Enterprises",
    role: "Associate",
    duration: "January 2023 - December 2023",
    location: "Delhi, India",
    highlights: [
      "Led Demo Verticle: Crafted distinctive UI/UX design for website",
      "Contributed to web development",
      "Integrated AR functionalities for featured product",
      "Optimized 3D model assets with improved textures and lighting"
    ]
  },
  {
    company: "Future Garages",
    role: "UX Design & Web Development",
    duration: "June 2022 - July 2022",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Designed distinctive UI/UX for website",
      "Contributed to web development",
      "Integrated AR capabilities for featured product",
      "Enhanced 3D model quality through texture and lighting optimization"
    ]
  },
  {
    company: "Precisely - The Opportunity Hub",
    role: "UX Design & Animation",
    duration: "February 2021 - May 2022",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Created UI/UX design for product promotional campaign",
      "Developed working animation for prototype"
    ]
  }
]; 