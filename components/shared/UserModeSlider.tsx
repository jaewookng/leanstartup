import React, { useState, useRef, useEffect } from 'react';
import { useUserMode, UserMode } from '../../utils/UserModeContext';

const UserModeSlider: React.FC = () => {
  const { mode, setMode } = useUserMode();
  const [pillStyle, setPillStyle] = useState({ width: '0px', transform: 'translateX(0px)' });
  const buttonRefs = {
    consumer: useRef<HTMLButtonElement>(null),
    student: useRef<HTMLButtonElement>(null),
    scientist: useRef<HTMLButtonElement>(null)
  };

  // SVG icons for each mode (simplified representations)
  const icons = {
    consumer: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    student: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
      </svg>
    ),
    scientist: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
      </svg>
    )
  };

  const modeLabels: Record<UserMode, string> = {
    consumer: 'Consumer',
    student: 'Student',
    scientist: 'Scientist'
  };

  // Update pill dimensions when mode changes or window resizes
  useEffect(() => {
    const updatePillStyle = () => {
      const activeButton = buttonRefs[mode]?.current;
      
      if (activeButton) {
        // Add a small padding to the width for better appearance
        const width = activeButton.offsetWidth + 4;
        const offsetLeft = activeButton.offsetLeft;
        
        setPillStyle({
          width: `${width}px`,
          transform: `translateX(${offsetLeft}px)`
        });
      }
    };

    // Update on mode change
    updatePillStyle();

    // Update on window resize
    window.addEventListener('resize', updatePillStyle);
    return () => window.removeEventListener('resize', updatePillStyle);
  }, [mode]);
  
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 p-0.5 rounded-full flex relative shadow-sm">
        {Object.entries(modeLabels).map(([key, label]) => (
          <button
            key={key}
            ref={buttonRefs[key as UserMode]}
            onClick={() => setMode(key as UserMode)}
            className="relative z-10 flex items-center justify-center h-6 px-2 rounded-full text-xs font-medium transition-colors duration-200"
            aria-pressed={mode === key}
          >
            <div className="flex items-center space-x-1">
              <span className="text-current">{icons[key as UserMode]}</span>
              <span className="text-xs">{label}</span>
            </div>
          </button>
        ))}
        
        {/* Active background pill that slides */}
        <div 
          className="absolute top-0.5 left-0.5 h-6 rounded-full bg-white shadow-md transition-all duration-200 ease-in-out z-0"
          style={pillStyle}
        ></div>
      </div>
    </div>
  );
};

export default UserModeSlider;