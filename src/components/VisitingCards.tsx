import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export default function VisitingCards() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-[800px] justify-center items-center select-none">
      
      {/* Front Side (Left - Pink) */}
      <div className="w-[350px] h-[200px] bg-gradient-to-br from-brand-pink to-[#e0155b] rounded-lg shadow-2xl shadow-black/40 flex flex-col items-center justify-center text-white relative overflow-hidden group">
        {/* Subtle curved background lines */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-[10px] border-white/5 pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-[10px] border-white/5 pointer-events-none"></div>
        
        {/* Central Logo */}
        <div className="relative z-10 scale-125">
          <Logo light={true} />
        </div>
        
        {/* Sleek bottom accent curves */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20"></div>
      </div>

      {/* Back Side (Right - White) */}
      <div className="w-[350px] h-[200px] bg-white rounded-lg shadow-2xl shadow-black/40 flex items-center relative overflow-hidden text-gray-800">
        {/* Slanted pink bar on left */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-brand-pink"></div>
        
        {/* Back Content Info */}
        <div className="flex-1 pl-8 pr-4 py-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-gray-900 font-extrabold text-base tracking-wide leading-tight">
              Erulsehen V
            </h3>
            <p className="text-brand-pink text-[8px] font-bold tracking-wider uppercase mb-4">
              Facility Management Specialist
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-3 h-3 text-brand-pink shrink-0" />
                <span className="text-[9px] font-bold">048 2320108920</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-3 h-3 text-brand-pink shrink-0" />
                <span className="text-[9px] font-bold">info@a2zhomeserve.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-3 h-3 text-brand-pink shrink-0" />
                <span className="text-[9px] font-bold">www.a2zhomeserve.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-3 h-3 text-brand-pink shrink-0 mt-0.5" />
                <span className="text-[9px] font-bold leading-tight">No 12, Main Street, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pink House Icon Outline on the right */}
        <div className="w-24 h-full flex items-center justify-center pr-6 relative">
          <svg className="w-14 h-14 text-brand-pink" viewBox="0 0 100 100">
            {/* House base */}
            <rect x="25" y="45" width="50" height="40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
            {/* Windows */}
            <rect x="35" y="55" width="10" height="20" fill="currentColor" />
            <rect x="55" y="55" width="10" height="20" fill="currentColor" />
            {/* Roof */}
            <polygon points="50,15 90,50 80,50 80,85 20,85 20,50 10,50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
            {/* Chimney */}
            <rect x="70" y="25" width="8" height="15" fill="currentColor" />
          </svg>
        </div>

      </div>

    </div>
  );
}
