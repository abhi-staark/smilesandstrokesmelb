import React from 'react';
import { PROFILE_DATA } from '../constants';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-8 animate-fade-in-down">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-tr from-art-accent to-gray-200 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src={PROFILE_DATA.avatarUrl} 
            alt={PROFILE_DATA.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
      
      <div className="space-y-2 px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-art-ink tracking-tight">
          {PROFILE_DATA.name}
        </h1>
        <div className="w-16 h-0.5 bg-art-accent mx-auto rounded-full opacity-60"></div>
        <p className="text-sm md:text-base font-sans font-medium text-stone-600 uppercase tracking-widest">
          {PROFILE_DATA.title}
        </p>
        <p className="text-stone-500 font-serif italic text-base md:text-lg max-w-xs mx-auto leading-relaxed pt-2">
          "{PROFILE_DATA.bio}"
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
