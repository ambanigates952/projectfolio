export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Shree Vidyut Website",
    description: "E-commerce platform with AR product visualization",
    image: "/projects/shree-vidyut.jpg",
    tags: ["UI/UX", "Web Development", "AR", "3D"],
    link: "https://example.com"
  },
  // Add more projects...
]; 