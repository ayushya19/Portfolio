'use client';

import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center animate-slide-up">
        <AlertCircle className="w-20 h-20 text-purple-400 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          Oops! It seems like you're looking for something that doesn't exist yet. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="px-6 py-3 border-2 border-purple-500 hover:border-purple-400 text-purple-300 hover:text-purple-200 rounded-lg font-semibold transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
