import { Code, PenTool, Layers, Palette } from 'lucide-react';

export interface Skill {
  name: string;
  icon: JSX.Element;
  skills: string[];
}

export const skills = [
  { 
    name: "Web Development", 
    icon: <Code className="w-12 h-12 text-blue-500" />,
    skills: ["Next.js", "React", "HTML5", "CSS", "JavaScript"]
  },
  { 
    name: "UX/UI Design", 
    icon: <PenTool className="w-12 h-12 text-purple-500" />,
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
  },
  { 
    name: "3D & Animation", 
    icon: <Layers className="w-12 h-12 text-green-500" />,
    skills: ["Blender", "3D Modeling", "Motion Graphics", "Animation"]
  },
  { 
    name: "Graphics Design", 
    icon: <Palette className="w-12 h-12 text-pink-500" />,
    skills: ["Photoshop", "Illustrator", "Branding", "Visual Design"]
  }
]; 