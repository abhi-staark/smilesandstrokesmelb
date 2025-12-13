import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ActionCard from './components/ActionCard';
import { CONTACT_OPTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-art-paper selection:bg-art-accent selection:text-white">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 texture-overlay pointer-events-none z-0 mix-blend-multiply opacity-40"></div>
      
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-art-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-stone-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-0"></div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-md mx-auto px-6 py-12 md:py-16 min-h-screen flex flex-col justify-center">
        
        <ProfileHeader />

        <div className="flex flex-col items-center space-y-4 w-full animate-fade-in-up">
          {CONTACT_OPTIONS.map((option, index) => (
            <ActionCard key={option.id} option={option} index={index} />
          ))}
        </div>

        <footer className="mt-12 text-center space-y-2 opacity-60">
          <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-art-accent"></span>
            <span className="w-2 h-2 rounded-full bg-art-accent opacity-60"></span>
            <span className="w-2 h-2 rounded-full bg-art-accent opacity-30"></span>
          </div>
          <p className="text-xs font-sans text-stone-500 pt-2">
            © {new Date().getFullYear()} Art Studio. All rights reserved.
          </p>
        </footer>
      </main>

      {/* CSS for custom animations that Tailwind standard doesn't cover easily without config */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards 0.3s;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
};

export default App;
