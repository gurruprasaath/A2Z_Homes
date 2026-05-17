import { Home, Droplets, Zap, Bug, Search, User, FileText, Bell, Sparkles } from 'lucide-react';

export default function MobileMockup() {
  return (
    <div className="w-[300px] bg-white rounded-[40px] p-2 shadow-2xl shadow-black/50 border-4 border-gray-100 relative">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex justify-center items-end pb-1 shadow-sm">
        <div className="w-16 h-1.5 bg-gray-200 rounded-full"></div>
      </div>

      {/* Screen */}
      <div className="bg-gray-50 h-[600px] rounded-[32px] overflow-hidden relative flex flex-col border border-gray-100">
        
        {/* Header (Pink) */}
        <div className="bg-brand-pink pt-12 pb-6 px-5 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <Home className="w-5 h-5" />
              <div>
                <div className="text-lg font-bold leading-none tracking-tight">A2Z</div>
                <div className="text-[6px] font-semibold leading-none">HOME SERVE</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Search className="w-4 h-4" />
              <Bell className="w-4 h-4" />
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-1">My Home App</h2>
          <p className="text-[10px] opacity-80">What service do you need today?</p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white -mt-4 rounded-t-xl px-5 pt-6 overflow-y-auto mockup-scroll relative z-10">
          
          {/* Service Grid */}
          <div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-6">
            {[
              { icon: Sparkles, name: 'Cleaning' },
              { icon: Droplets, name: 'Plumbing' },
              { icon: Zap, name: 'Electrical' },
              { icon: Bug, name: 'Pest Control' },
              { icon: Home, name: 'Painting' },
              { icon: User, name: 'Carpentry' },
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-brand-light/30 flex items-center justify-center mb-2 shadow-sm border border-brand-pink/10">
                  <service.icon className="w-5 h-5 text-brand-pink" />
                </div>
                <h4 className="text-[9px] font-bold text-gray-700">{service.name}</h4>
              </div>
            ))}
          </div>

          {/* Special Offer Card */}
          <div className="bg-brand-pink/5 border border-brand-pink/20 rounded-xl p-4 flex items-center gap-4">
            <div className="bg-brand-pink text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
              %
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">Special Discount</h4>
              <p className="text-[9px] text-gray-500">Get 20% off on first booking</p>
            </div>
          </div>
          
          <div className="h-20"></div> {/* Spacer for bottom nav */}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 px-6 flex justify-between items-center z-20 pb-5">
          <div className="flex flex-col items-center text-brand-pink cursor-pointer">
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[8px] font-bold">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-brand-pink cursor-pointer">
            <FileText className="w-5 h-5 mb-1" />
            <span className="text-[8px] font-medium">Bookings</span>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-brand-pink cursor-pointer">
            <User className="w-5 h-5 mb-1" />
            <span className="text-[8px] font-medium">Profile</span>
          </div>
        </div>

      </div>
    </div>
  );
}
