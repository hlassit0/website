import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-pink-100 text-slate-800">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">Heather Lassiter</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/hlassit0/heather-s-vs-codes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/heather-lassiter/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:lassitermheather@gmail.com" 
              className="hover:text-pink-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}