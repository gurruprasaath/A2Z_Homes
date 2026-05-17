import { Sparkles, Droplets, Bug } from 'lucide-react';
import { Logo } from './Logo';

export default function LaptopMockup() {
  return (
    <div className="w-full relative shadow-2xl shadow-black/80 mx-auto" style={{ maxWidth: '750px' }}>
      {/* Laptop Screen Frame */}
      <div className="bg-[#0f0f11] p-3.5 rounded-t-3xl border-t border-l border-r border-gray-800 relative">
        {/* Camera Dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        
        {/* Screen Area */}
        <div className="bg-white rounded overflow-hidden relative aspect-[16/10] overflow-y-auto mockup-scroll select-none">
          
          {/* --- Website Content --- */}
          
          {/* Header/Navbar */}
          <nav className="flex items-center justify-between h-[70px] bg-white border-b border-gray-100 relative">
            {/* Left Pink Block for Logo */}
            <div className="bg-brand-pink h-full px-6 flex items-center pr-12 relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}>
              <Logo className="scale-65 origin-left" light={true} />
            </div>
            
            {/* Navigation links inside slanted banner */}
            <div className="flex gap-4 pr-6 text-[10px] font-bold text-gray-700">
              <a href="#" className="text-brand-pink">Home</a>
              <a href="#" className="hover:text-brand-pink transition-colors">About Us</a>
              <a href="#" className="hover:text-brand-pink transition-colors">Services</a>
              <a href="#" className="hover:text-brand-pink transition-colors">Rec Package</a>
              <a href="#" className="hover:text-brand-pink transition-colors">Contact</a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative flex h-[270px] bg-brand-pink overflow-hidden">
            {/* Left Text Side */}
            <div className="w-[50%] h-full flex flex-col justify-center pl-10 pr-2 text-white relative z-10">
              <h1 className="text-2xl font-black tracking-tight leading-tight mb-2">
                Your Home Our Priority
              </h1>
              <p className="text-[10px] font-bold opacity-90 tracking-wide mb-6">
                Held & seit FM Services
              </p>
              
              <div className="flex gap-3">
                <button className="border border-white/60 text-white px-4 py-1.5 rounded text-[8px] font-bold hover:bg-white/10 transition">
                  Home Quote
                </button>
                <button className="bg-white text-brand-pink px-4 py-1.5 rounded text-[8px] font-black shadow hover:bg-gray-50 transition">
                  Our Services
                </button>
              </div>
            </div>

            {/* Right Slanted White Block with House */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-white z-0" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                alt="White modern house with red/pink roof" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-pink/5 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Service Categories Bar */}
          <div className="py-6 px-10 bg-white">
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Sparkles, name: 'Home/office services' },
                { icon: Droplets, name: 'Repair/maintain' },
                { icon: Bug, name: 'Pest control' },
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center mb-2 shadow-md shadow-brand-pink/20 hover:scale-105 transition-transform">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-[9px] font-black text-gray-800 tracking-wide">{service.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us & Advantages Bar */}
          <div className="mx-10 mb-8 border-t border-gray-100 pt-5 flex justify-between items-center">
            <h3 className="text-[11px] font-black text-brand-pink uppercase tracking-widest">
              Why Choose Us
            </h3>
            <button className="bg-brand-pink hover:bg-[#d0155b] text-white px-5 py-2 rounded text-[8px] font-black shadow transition-all hover:scale-105">
              Our Advantages
            </button>
          </div>

        </div>
      </div>
      
      {/* Laptop Keyboard Bottom Lip */}
      <div className="h-4 bg-[#cccccc] rounded-b-2xl relative shadow-lg flex justify-center border-b border-gray-400">
        {/* Trackpad Indentation */}
        <div className="w-1/4 h-2 bg-[#b8b8b8] rounded-b-lg absolute top-0 shadow-inner"></div>
      </div>
    </div>
  );
}
