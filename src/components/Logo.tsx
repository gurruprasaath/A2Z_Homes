

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className = "", light = true }: LogoProps) {
  const textColor = light ? "text-white" : "text-brand-pink";
  const bgColor = light ? "bg-white text-brand-pink" : "bg-brand-pink text-white";
  const strokeColor = light ? "white" : "#ff2c7f";

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Roof outline */}
      <div className="relative flex flex-col items-center">
        <svg className="w-16 h-8" viewBox="0 0 100 50">
          {/* Slanted Roof Line */}
          <path 
            d="M10 45 L50 15 L90 45" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Chimney */}
          <path 
            d="M72 20 L72 32" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
        </svg>
        {/* A2Z in the center */}
        <span className={`text-xl font-black tracking-tighter ${textColor} -mt-[18px] z-10`}>
          A2Z
        </span>
      </div>
      
      {/* HOME SERVE Text block */}
      <div className={`mt-0.5 px-3 py-[1px] rounded ${bgColor} text-[7px] font-black tracking-[0.15em] uppercase`}>
        HOME SERVE
      </div>
      
      {/* Tagline */}
      <span className={`text-[5px] tracking-wider font-bold uppercase mt-0.5 text-center ${light ? "text-white/90" : "text-brand-pink/90"}`}>
        Complete Home & Facility Services
      </span>
    </div>
  );
}
