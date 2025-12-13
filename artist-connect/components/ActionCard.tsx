import React from 'react';
import { ContactOption } from '../types';

interface ActionCardProps {
  option: ContactOption;
  index: number;
}

const ActionCard: React.FC<ActionCardProps> = ({ option, index }) => {
  const Icon = option.icon;

  // Stagger animation delay based on index
  const animationDelay = `${index * 100}ms`;

  return (
    <a
      href={option.value}
      target={option.value.startsWith('tel:') || option.value.startsWith('mailto:') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="block w-full max-w-sm group transform transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay }}
    >
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-stone-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-4">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Icon Container */}
        <div 
          className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-inner transition-transform group-hover:scale-110 duration-300"
          style={{ backgroundColor: option.primaryColor }}
        >
          <Icon size={24} strokeWidth={2} />
        </div>

        {/* Text */}
        <div className="relative z-10 flex-1">
          <span className="block font-sans font-semibold text-art-ink text-lg group-hover:text-black transition-colors">
            {option.label}
          </span>
          <span className="block text-xs text-stone-400 font-medium uppercase tracking-wide group-hover:text-stone-500 transition-colors">
            Connect
          </span>
        </div>

        {/* Arrow Hint */}
        <div className="relative z-10 text-stone-300 group-hover:text-art-accent transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ActionCard;
