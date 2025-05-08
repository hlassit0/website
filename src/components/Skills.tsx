import React from 'react';
import { BookOpen, Terminal, Code, Shield, Network, Database } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-pink-500">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-slate-600 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Currently Learning",
      skills: ["Network Security Basics", "Linux Fundamentals", "Python Programming", "Security Concepts"]
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Tools I'm Learning",
      skills: ["Wireshark Basics", "Virtual Machines", "Command Line", "Basic Security Tools"]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming",
      skills: ["Python", "HTML/CSS", "JavaScript", "Basic Scripting"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Interests",
      skills: ["Ethical Hacking", "Network Defense", "Security Best Practices", "Cybersecurity Basics"]
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Networking",
      skills: ["TCP/IP Basics", "Network Protocols", "Basic Network Setup", "Network Security"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Course Topics",
      skills: ["Database Security", "Operating Systems", "Computer Networks", "Information Security"]
    }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What I'm Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}