import { ShieldCheck, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export default function Brochure() {
  return (
    <div className="flex w-full max-w-[800px] h-[500px] shadow-2xl shadow-black/60 rounded-xl overflow-hidden select-none">
      
      {/* Left Fold (White background) */}
      <div className="flex-1 bg-white p-6 flex flex-col justify-between border-r border-gray-100 relative">
        {/* Subtle folded shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-3 shadow-[inset_-10px_0_15px_rgba(0,0,0,0.03)] pointer-events-none"></div>
        
        <div>
          <h2 className="text-brand-pink font-black text-[18px] leading-snug mb-1">
            Your Trusted Home
          </h2>
          <h2 className="text-brand-pink font-black text-[18px] leading-none mb-3">
            & Facility Services Partner
          </h2>
          
          <h3 className="text-gray-900 font-bold text-xs mb-2">
            Dear Art home Sone
          </h3>
          
          <p className="text-[8px] text-gray-500 leading-relaxed mb-6">
            We are dedicated to keeping your home and commercial facility spaces in absolute perfect condition. Our highly-trained, police-verified technicians deliver on-demand solutions customized to your specific needs.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 rounded-lg overflow-hidden border border-gray-100 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop" 
                alt="Service professional in pink shirt" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 rounded-lg overflow-hidden border border-gray-100 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=400&auto=format&fit=crop" 
                alt="Detailed interior maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom micro elements */}
        <div className="flex items-center gap-1.5 text-[7px] text-gray-400 font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-pink" />
          <span>100% Quality Guaranteed Assured</span>
        </div>
      </div>

      {/* Right Fold (Pink background) */}
      <div className="flex-1 bg-brand-pink p-6 text-white flex flex-col justify-between relative overflow-hidden">
        {/* Subtle folded shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-3 shadow-[inset_10px_0_15px_rgba(0,0,0,0.05)] pointer-events-none"></div>

        <div>
          <h2 className="font-black text-xl tracking-wide border-b border-white/20 pb-2 mb-4">
            Our Services
          </h2>
          
          <ul className="space-y-3.5 mb-6">
            {[
              "Cleaning Solutions",
              "Plumbing Maintenance",
              "Electrical Repairs",
              "AC Repair & Inspections",
              "Gardening Services"
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-2 text-[10px] font-extrabold tracking-wide">
                <ChevronRight className="w-3 h-3 text-white/80 shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-black text-xs uppercase tracking-wider mb-2.5">
            Annual Maintenance Contracts
          </h3>
          <ul className="space-y-1.5 text-[8px] opacity-90 pl-3 list-disc">
            <li>Standard Plan</li>
            <li>Premium Plan</li>
          </ul>
        </div>

        {/* Bottom branding block matching crop exactly */}
        <div className="relative mt-8 pt-4">
          {/* Curved white bottom background */}
          <div className="absolute -left-6 -right-6 bottom-[-24px] h-[75px] bg-white z-0" style={{ clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 0 100%)' }}></div>
          
          <div className="relative z-10 flex items-end justify-between">
            {/* Logo in pink */}
            <Logo className="scale-65 origin-bottom-left" light={false} />
            
            {/* Red/pink service car graphic */}
            <div className="w-24 h-12 overflow-hidden flex items-end pr-2">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop" 
                alt="Branded service SUV car" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform" 
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
