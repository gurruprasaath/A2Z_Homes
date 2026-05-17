import { useState, useEffect } from 'react';
import { 
  Sparkles, Droplets, Bug, Menu, X, Phone, Mail, MapPin, 
  ShieldCheck, HelpCircle, ChevronDown, ChevronUp, 
  MessageSquare, Calculator, Layers, Award, Clock, ChevronRight, Check, CheckCircle, Star
} from 'lucide-react';
import { Logo } from './components/Logo';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  // Interactive Cost Estimator State
  const [selectedService, setSelectedService] = useState('cleaning');
  const [areaSize, setAreaSize] = useState(1200);
  const [isDeepClean, setIsDeepClean] = useState(false);
  const [isExpress, setIsExpress] = useState(false);
  const [isEco, setIsEco] = useState(false);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Chat Widget State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatReplies, setChatReplies] = useState<string[]>([]);

  // Modal State auto-filled from Estimator
  const [modalService, setModalService] = useState('Home/office services');

  // Intersection Observer for Premium Scroll Reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Estimate Calculation Logic
  const calculateEstimate = () => {
    let baseRate = 0.08; // per sq ft
    let flatAddition = 50;

    if (selectedService === 'repair') {
      baseRate = 0.12;
      flatAddition = 75;
    } else if (selectedService === 'pest') {
      baseRate = 0.06;
      flatAddition = 60;
    }

    let estimate = (areaSize * baseRate) + flatAddition;
    if (isDeepClean) estimate += 55;
    if (isExpress) estimate += 25;
    if (isEco) estimate += 15;

    return Math.round(estimate);
  };

  const handleEstimatorBooking = () => {
    let svc = 'Home/office services';
    if (selectedService === 'repair') svc = 'Repair/maintain';
    if (selectedService === 'pest') svc = 'Pest control';
    setModalService(svc);
    setBookingModalOpen(true);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const userMsg = chatMessage;
    setChatMessage('');
    
    // Add quick simulated reply
    setTimeout(() => {
      setChatReplies(prev => [
        ...prev, 
        `Thanks for asking! Regarding "${userMsg}", our service managers can assist you immediately at 048 2320108920.`
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-800 font-sans selection:bg-brand-pink selection:text-white">
      
      {/* --- Navbar (Exact slanted mockup design with Outfit + Jakarta Sans Font styles) --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 relative">
          
          {/* Left slanted pink block with logo */}
          <div 
            className="bg-brand-pink h-full px-8 md:px-12 flex items-center pr-16 absolute left-0 top-0 z-10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
          >
            <Logo className="scale-90 md:scale-100 origin-left" light={true} />
          </div>

          {/* Spacer to push navbar menu to the right */}
          <div className="w-[180px] md:w-[260px] h-full shrink-0"></div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-700 pr-8">
            <a href="#hero" className="text-brand-pink transition-colors hover:text-brand-deep">Home</a>
            <a href="#about" className="hover:text-brand-pink transition-colors">About Us</a>
            <a href="#services-detailed" className="hover:text-brand-pink transition-colors">Services</a>
            <a href="#estimator" className="hover:text-brand-pink transition-colors">Estimator</a>
            <a href="#faq" className="hover:text-brand-pink transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-brand-pink transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-brand-pink mr-4 absolute right-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-brand-pink font-bold text-sm">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink font-bold text-sm transition-colors">About Us</a>
            <a href="#services-detailed" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink font-bold text-sm transition-colors">Our Services</a>
            <a href="#amc" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink font-bold text-sm transition-colors">Rec Packages (AMC)</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink font-bold text-sm transition-colors">Pricing Estimator</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink font-bold text-sm transition-colors">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink font-bold text-sm transition-colors">Contact</a>
          </div>
        )}
      </header>

      {/* --- Hero Section (Slanted layout enriched with catchy copy & Rose-Fuchsia shades) --- */}
      <section id="hero" className="relative bg-brand-pink overflow-hidden min-h-[520px] lg:h-[650px] flex items-center py-12 lg:py-0">
        
        {/* Left Text Block */}
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col items-start text-white pr-4">
            
            {/* Catchy Visual Tag */}
            

            {/* Catchy Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] mb-4 drop-shadow-md">
              Your Home Our Priority
            </h1>
            
            {/* Descriptive Catchy Paragraph */}
            <p className="text-xs sm:text-sm font-medium opacity-95 tracking-wide mb-6 drop-shadow-sm leading-relaxed max-w-lg">
              Complete home care engineered for ultimate peace of mind. From deep intensive sanitization and eco pest control to expert handyman facility repairs, A2Z delivers verified specialists right to your doorstep.
            </p>

            {/* Trust Markers Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-[10px] sm:text-xs font-bold text-white/90">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                <span>Police-Verified Staff</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                <span>Express 2-Hour Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                <span>15-Day Service Warranty</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => { setModalService('Home/office services'); setBookingModalOpen(true); }}
                className="border-2 border-white text-white px-8 py-3.5 rounded-full text-xs font-black tracking-wider uppercase hover:bg-white/10 transition-all hover:scale-105"
              >
                Home Quote
              </button>
              <button 
                onClick={() => { setModalService('Home/office services'); setBookingModalOpen(true); }}
                className="bg-white text-brand-pink px-8 py-3.5 rounded-full text-xs font-black tracking-wider uppercase shadow-xl shadow-brand-pink/25 hover:bg-brand-light transition-all hover:scale-105"
              >
                Our Services
              </button>
            </div>

            {/* Social Proof Rating Widget */}
            <div className="flex items-center gap-3.5 bg-white/5 border border-white/10 backdrop-blur-md p-2.5 rounded-2xl">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-brand-pink bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User 1" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-pink bg-gray-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="User 2" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-pink bg-gray-400 overflow-hidden"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="User 3" /></div>
              </div>
              <div className="flex flex-col items-start leading-none text-white">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-black tracking-wide">4.9 / 5 Rating</span>
                  <div className="flex text-yellow-400"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                </div>
                <span className="text-[9px] opacity-75 mt-0.5">Trusted by 15,000+ Happy Homes</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Slanted White Block with House */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[55%] bg-white z-0 hidden lg:block"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <img 
            src="../public/istockphoto-1474780481-1024x1024.jpeg" 
            alt="White house with red/pink roof" 
            className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle color multiplier overlay using fuchsia-pink shades */}
          <div className="absolute inset-0 bg-brand-fuchsia/5 mix-blend-multiply"></div>
        </div>

      </section>

      {/* --- Circular Service Categories Bar (Exact mockup + Reveal scroll animation) --- */}
      <section id="services" className="py-16 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <div className="grid grid-cols-3 gap-6 sm:gap-12">
            {[
              { icon: Sparkles, name: 'Home/office services', code: 'cleaning' },
              { icon: Droplets, name: 'Repair/maintain', code: 'repair' },
              { icon: Bug, name: 'Pest control', code: 'pest' },
            ].map((service, i) => (
              <div 
                key={i} 
                onClick={() => {
                  setSelectedService(service.code);
                  const element = document.getElementById('estimator');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-pink flex items-center justify-center mb-4 shadow-lg shadow-brand-pink/20 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                </div>
                <h4 className="text-[11px] sm:text-xs font-black text-gray-800 tracking-wider group-hover:text-brand-pink transition-colors uppercase">
                  {service.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Bar --- */}
      <section id="about-bar" className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <div className="border-t border-gray-100 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <h3 className="text-xl sm:text-2xl font-black text-brand-pink uppercase tracking-widest">
              Why Choose Us
            </h3>
            <button 
              onClick={() => {
                setSelectedService('cleaning');
                const element = document.getElementById('estimator');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-pink hover:bg-brand-deep text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-pink/20 transition-all hover:scale-105"
            >
              Our Advantages
            </button>
          </div>
        </div>
      </section>

      {/* --- About Us Section (Incorporate Brochure details + Slide scroll animations) --- */}
      <section id="about" className="py-24 bg-gray-50/50 border-t border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Brochure Visual Grid (Slide-in left) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative reveal-left">
              <div className="absolute inset-0 bg-brand-pink/5 rounded-3xl blur-2xl z-0 pointer-events-none"></div>
              
              <div className="h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:scale-[1.02] transition-transform duration-300 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop" 
                  alt="Service professional in pink uniform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:scale-[1.02] transition-transform duration-300 relative z-10 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop" 
                  alt="Quality interior checkups" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Brochure Content (Slide-in right) */}
            <div className="lg:col-span-6 flex flex-col items-start reveal-right">
              <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-pink/20 px-4 py-1.5 rounded-full text-brand-pink text-xs font-black uppercase mb-4">
                <span>Who We Are</span>
              </div>
              
              {/* Exact Brochure Header Style */}
              <h2 className="text-3xl sm:text-4xl font-black text-brand-pink leading-tight mb-2 uppercase">
                Your Trusted Home
              </h2>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-pink leading-none mb-6 uppercase">
                & Facility Services Partner
              </h2>
              
              <h3 className="text-gray-900 font-extrabold text-sm sm:text-base tracking-wide mb-4 uppercase">
                Dear Art Home Serve
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                We are dedicated to maintaining premium residential homes and commercial facility assets in pristine condition. Our background-verified technicians leverage advanced diagnostics and USDA-certified eco-friendly products to deliver unmatched care, reliability, and precision every single time.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 w-full border-t border-gray-200 pt-6">
                {[
                  "100% Background-Vetted Staff",
                  "Signature 15-Day Quality Guarantees",
                  "Fully Insured $1M Liability Cover",
                  "24/7 Priority Emergency Support"
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-pink shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Detailed Services Section with Glide animations --- */}
      <section id="services-detailed" className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-pink/20 px-4 py-1.5 rounded-full text-brand-pink text-xs font-black uppercase mb-4">
              <span>Expert Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Our Specialized Services</h2>
            <p className="text-sm text-gray-500">Explore our professional on-demand services backed by guarantees and certified specialists.</p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Home/Office Deep Services",
                desc: "Complete interior sanitization, deep sanitizing, vacuuming, window washing, and disinfecting. We restore your living and workplace environment to a clean, spotless state with absolute care.",
                features: ["Commercial Grade HEPA Vacuums", "Non-Toxic USDA Sanitizers", "Detailed Kitchen & Bathroom Wash"],
                img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
                icon: Sparkles,
                reverse: false
              },
              {
                title: "Repair & Facility Maintenance",
                desc: "Expert solutions for plumbing, electrical installations, AC checks, carpentry, and handyman repairs. We inspect and keep your HVAC, fixtures, and structures fully functional year-round.",
                features: ["Certified HVAC & AC Specialists", "Prompt Emergency Electrical Repair", "Comprehensive Plumbing Fixing"],
                img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
                icon: Droplets,
                reverse: true
              },
              {
                title: "Safe Eco Pest Control",
                desc: "Eco-friendly, highly targeted treatments that safely clear bedbugs, termites, rodents, and insects while completely protecting your children, pets, and home's hygiene.",
                features: ["Organic Non-Hazardous Sprays", "Integrated Pest Management (IPM)", "Complete Post-Treatment Warranties"],
                img: "https://5.imimg.com/data5/SELLER/Default/2024/3/399078634/RY/AG/IZ/154618970/eco-friendly-pest-control.jpeg",
                icon: Bug,
                reverse: false
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-16 last:border-0 last:pb-0"
              >
                {/* Image panel (Slide-in) */}
                <div className={`lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border-4 border-white ${
                  service.reverse ? 'lg:order-last reveal-right' : 'reveal-left'
                }`}>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Panel (Slide-in) */}
                <div className={`lg:col-span-6 flex flex-col items-start ${
                  service.reverse ? 'reveal-left' : 'reveal-right'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center mb-6 shadow-lg shadow-brand-pink/20">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  
                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-gray-700">
                        <ChevronRight className="w-4 h-4 text-brand-pink shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => { setModalService(index === 0 ? 'Home/office services' : index === 1 ? 'Repair/maintain' : 'Pest control'); setBookingModalOpen(true); }}
                    className="bg-brand-pink hover:bg-brand-deep text-white px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-pink/20 transition-all hover:scale-103"
                  >
                    Request Service
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Annual Maintenance Contracts (AMC) Pricing Cards (Brochure right page) --- */}
      

      {/* --- Interactive Pricing Calculator / Estimator --- */}
      <section id="estimator" className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-pink/20 px-4 py-1.5 rounded-full text-brand-pink text-xs font-black uppercase mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Cost Calculator</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Calculate Your Service Quote</h2>
            <p className="text-sm text-gray-500">Get an instant, transparent price estimate. Customize your package and book directly.</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 grid md:grid-cols-12 gap-8 items-start">
            
            {/* Calculator Inputs (Slide-in) */}
            <div className="md:col-span-7 space-y-6 reveal-left">
              
              {/* Service Tab Select */}
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Select Service Type</label>
                <div className="grid grid-cols-3 gap-2 bg-white p-1.5 rounded-xl border border-gray-100">
                  {[
                    { id: 'cleaning', label: 'Cleaning', icon: Sparkles },
                    { id: 'repair', label: 'Repairs', icon: Droplets },
                    { id: 'pest', label: 'Pest Control', icon: Bug }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedService(tab.id)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-black transition-all ${
                        selectedService === tab.id 
                          ? 'bg-brand-pink text-white shadow-md shadow-brand-pink/20' 
                          : 'text-gray-500 hover:text-brand-pink hover:bg-white'
                      }`}
                    >
                      <tab.icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Home / Facility Size</label>
                  <span className="text-sm font-black text-brand-pink bg-brand-light px-2.5 py-0.5 rounded-md">{areaSize} Sq. Ft.</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="100" 
                  value={areaSize}
                  onChange={(e) => setAreaSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-pink focus:outline-none"
                />
                <div className="flex justify-between text-[9px] text-gray-400 font-bold mt-1.5">
                  <span>500 sq ft (Apartment)</span>
                  <span>5,000 sq ft (Villa)</span>
                </div>
              </div>

              {/* Add-ons Checkboxes */}
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Service Add-Ons & Upgrades</label>
                <div className="space-y-2.5">
                  {[
                    { id: 'deep', label: 'Deep Intensive Sanitization Upgrade', desc: 'Detailed corner disinfection & premium machine work.', checked: isDeepClean, setter: setIsDeepClean, cost: 55 },
                    { id: 'express', label: 'Priority Express Booking', desc: 'Guaranteed technician arrival within 2 hours.', checked: isExpress, setter: setIsExpress, cost: 25 },
                    { id: 'eco', label: 'Green Eco-Friendly Products Only', desc: 'USDA certified non-toxic biodegradable products.', checked: isEco, setter: setIsEco, cost: 15 }
                  ].map(addon => (
                    <div 
                      key={addon.id}
                      onClick={() => addon.setter(!addon.checked)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all bg-white ${
                        addon.checked 
                          ? 'border-brand-pink/30 bg-brand-light' 
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={addon.checked} 
                        onChange={() => {}} // handled by div click
                        className="mt-0.5 accent-brand-pink"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h5 className="text-[11px] font-black text-gray-900 leading-tight">{addon.label}</h5>
                          <span className="text-[10px] font-black text-brand-pink">+₹{addon.cost}</span>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-0.5 leading-relaxed">{addon.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quote Output Card (Slide-in) */}
            <div className="md:col-span-5 bg-brand-pink text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between h-full min-h-[350px] reveal-right">
              <div>
                <span className="text-[9px] font-black tracking-widest uppercase opacity-75">Estimated Invoice</span>
                <h3 className="text-2xl font-black mt-1 mb-6">A2Z Instant Quote</h3>
                
                <div className="space-y-3.5 border-b border-white/20 pb-6 mb-6">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="opacity-80">Base Rate:</span>
                    <span>${selectedService === 'cleaning' ? 146 : selectedService === 'repair' ? 219 : 132}</span>
                  </div>
                  {isDeepClean && (
                    <div className="flex justify-between text-xs font-bold">
                      <span className="opacity-80">Deep Sanitization:</span>
                      <span>+55</span>
                    </div>
                  )}
                  {isExpress && (
                    <div className="flex justify-between text-xs font-bold">
                      <span className="opacity-80">Express Dispatch:</span>
                      <span>+$25</span>
                    </div>
                  )}
                  {isEco && (
                    <div className="flex justify-between text-xs font-bold">
                      <span className="opacity-80">Eco Products:</span>
                      <span>+$15</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-6">
                  <span className="text-xs font-bold opacity-80">Estimated Total:</span>
                  <span className="text-4xl font-black tracking-tight leading-none">${calculateEstimate()}</span>
                </div>
                
                <button 
                  onClick={handleEstimatorBooking}
                  className="w-full bg-white text-brand-pink py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-black/10 hover:scale-103 active:scale-98 transition-all"
                >
                  Book This Estimate
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- Professional Accreditations Section --- */}
      <section className="py-12 bg-white border-t border-gray-100 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Accredited & Insured Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 opacity-40">
            <div className="flex items-center gap-1.5 text-sm font-black text-gray-800"><ShieldCheck className="w-5 h-5" /> <span>BBB ACCREDITED</span></div>
            <div className="flex items-center gap-1.5 text-sm font-black text-gray-800"><Award className="w-5 h-5" /> <span>HOMEADVISOR APPROVED</span></div>
            <div className="flex items-center gap-1.5 text-sm font-black text-gray-800"><Layers className="w-5 h-5" /> <span>$1M LIABILITY INSURANCE</span></div>
            <div className="flex items-center gap-1.5 text-sm font-black text-gray-800"><Clock className="w-5 h-5" /> <span>24/7 SUPPORT CHARTER</span></div>
          </div>
        </div>
      </section>

      {/* --- Interactive FAQ Accordion Section --- */}
      <section id="faq" className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 reveal">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-pink/20 px-4 py-1.5 rounded-full text-brand-pink text-xs font-black uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500 font-medium">Everything you need to know about our certified facility management services.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Are A2Z technicians background checked and vetted?", a: "Absolutely. Safety is our primary pillar. Every specialist undergoes strict local police checks, background verification, and continuous training under our facility supervisors." },
              { q: "What happens if I am not satisfied with the service quality?", a: "We back our services with a signature 15-day workmanship guarantee. If anything is subpar, our rapid response team will re-visit and resolve it entirely free of charge." },
              { q: "How does the pricing estimator calculate my invoice?", a: "Our pricing algorithm factors in flat service dispatch fees, home size square-footage base rates, and optional premium add-ons to give you a transparent, non-surprise quote." },
              { q: "Do you offer emergency or same-day dispatch services?", a: "Yes. By selecting our 'Express Dispatch' addon in the estimator or via direct call, we guarantee a certified technician will arrive at your premises within 2 hours." }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-black text-xs sm:text-sm text-gray-900 hover:text-brand-pink transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="w-4 h-4 shrink-0 text-brand-pink" /> : <ChevronDown className="w-4 h-4 shrink-0 text-gray-400" />}
                </button>
                
                {activeFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-white animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Footer (Sleek Dark Theme) --- */}
      <footer id="contact" className="bg-[#111113] text-white pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 border-b border-white/10 pb-12">
          
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="scale-75 origin-left" light={true} />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mt-4 font-medium">
              Providing modern, expert home facility and repair solutions tailored for premium homes and facility spaces.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider mb-4 text-gray-300">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                <li><a href="#hero" className="hover:text-brand-pink transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-pink transition-colors">About Us</a></li>
                <li><a href="#services-detailed" className="hover:text-brand-pink transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider mb-4 text-gray-300">Get In Touch</h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                <li className="flex gap-2 items-center"><Phone className="w-3.5 h-3.5 text-brand-pink" /> <span>048 2320108920</span></li>
                <li className="flex gap-2 items-center"><Mail className="w-3.5 h-3.5 text-brand-pink" /> <span>info@a2zhomeserve.com</span></li>
                <li className="flex gap-2 items-start"><MapPin className="w-3.5 h-3.5 text-brand-pink mt-0.5" /> <span>No 12, Main Street, NY</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-500 gap-4">
          <p>© 2026 A2Z Home Serve. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* --- Interactive Booking Modal --- */}
      {bookingModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-1 text-gray-400 hover:text-brand-pink"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-black text-gray-900 mb-1">Book Your Service</h3>
            <p className="text-xs text-gray-500 mb-6 font-medium">Our service manager will call you back within 15 minutes to confirm details.</p>

            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                setBookingModalOpen(false); 
                alert('Booking request received successfully! We will call you shortly.'); 
              }} 
              className="space-y-4"
            >
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">Phone Number</label>
                <input required type="tel" placeholder="048 2320108920" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">Select Service</label>
                <select 
                  value={modalService}
                  onChange={(e) => setModalService(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink"
                >
                  <option value="Home/office services">Home/office services</option>
                  <option value="Repair/maintain">Repair/maintain</option>
                  <option value="Pest control">Pest control</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">Preferred Date</label>
                  <input required type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">Time Slot</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink">
                    <option>Morning (08 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 04 PM)</option>
                    <option>Evening (04 PM - 08 PM)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-pink hover:bg-brand-deep text-white py-3.5 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-pink/20 mt-4 transition-all hover:scale-102"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- Interactive Floating Live Chat Widget --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="bg-white rounded-2xl w-[300px] h-[400px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-3 animate-in slide-in-from-bottom-5 duration-200 select-none">
            {/* Chat Header */}
            <div className="bg-brand-pink text-white px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-xs font-black tracking-wider uppercase">A2Z Live Support</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white hover:text-brand-light">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Chat Body Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gray-50/50">
              <div className="bg-white rounded-xl p-3 border border-gray-100 text-[10px] text-gray-600 leading-relaxed max-w-[85%] shadow-sm">
                👋 Hello! Welcome to A2Z Home Serve. How can our facility coordinators help you today?
              </div>
              
              {chatReplies.map((reply, index) => (
                <div key={index} className="bg-white rounded-xl p-3 border border-gray-100 text-[10px] text-gray-600 leading-relaxed max-w-[85%] shadow-sm font-medium">
                  {reply}
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-100 bg-white flex gap-2">
              <input 
                type="text" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about pricing or book..." 
                className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[10px] focus:outline-none focus:ring-1 focus:ring-brand-pink"
              />
              <button 
                type="submit" 
                className="bg-brand-pink hover:bg-brand-deep text-white px-4 rounded-lg text-[10px] font-black uppercase tracking-wider"
              >
                Send
              </button>
            </form>
          </div>
        )}
        
        {/* Chat Toggle Button */}
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-brand-pink hover:bg-brand-deep text-white flex items-center justify-center shadow-xl shadow-brand-pink/20 hover:scale-105 active:scale-95 transition-all"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
}
