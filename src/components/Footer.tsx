import React from 'react';

export function Footer() {
  return (
    <footer className="bg-pink-100 text-slate-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600">
          © {new Date().getFullYear()} Heather Lassiter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}