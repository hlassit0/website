import React from 'react';
import { GraduationCap, Terminal } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-pink-100 to-pink-50 text-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-pink-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Computer Science Student
              </h1>
            </div>
            <p className="text-lg text-slate-600 mb-4">
              Hi! I'm Heather, a Computer Science student with a growing passion for cybersecurity. 
              I'm currently learning about digital security, networking, and ethical hacking through 
              my coursework and personal projects.
            </p>
            <div className="flex items-center gap-3 text-slate-600 mb-8">
              <Terminal className="h-5 w-5" />
              <span>Learning: Network Security, Programming, Security Fundamentals</span>
            </div>
            <div className="flex gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View My Projects
              </button>
              <button className="border border-pink-400 text-pink-500 hover:bg-pink-400/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Learning Journey
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={heroImage} 
              alt="Computer Science Setup"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}