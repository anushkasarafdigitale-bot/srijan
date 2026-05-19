import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  CheckCircle2, 
  Download, 
  Plus, 
  MapPin, 
  Building, 
  Truck, 
  Network, 
  Activity,
  Headset,
  Tag,
  PhoneCall,
  Menu
} from 'lucide-react';

const galleryImages = [
  "https://i.ibb.co/S48y0Zdx/Unloading-areahires.jpg",
  "https://i.ibb.co/d0Qcz9Vv/Unloading-area-04hires.jpg",
  "https://i.ibb.co/VYtVXp8z/Gate-view-day-v01hires.jpg",
  "https://i.ibb.co/pvqy3SHc/Elevation-cam02-v01hires.jpg",
  "https://i.ibb.co/KcyZxWFb/Elevation-cam-01-V01hires.jpg"
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSpecTab, setActiveSpecTab] = useState('Facilities');
  const [activeResourceTab, setActiveResourceTab] = useState('Master Plan');
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0);

  const floorPlanImages = [
    "https://i.ibb.co/W4mJZZm3/Logistic-Park-Barasat-Logo-Direct-AW-03.png",
    "https://i.ibb.co/mF154GSg/Logistic-Park-Barasat-Logo-Direct-AW-04.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsModalOpen(true);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextFloorPlan = () => {
    setCurrentFloorPlanIndex((prev) => (prev + 1) % floorPlanImages.length);
  };

  const handlePrevFloorPlan = () => {
    setCurrentFloorPlanIndex((prev) => (prev - 1 + floorPlanImages.length) % floorPlanImages.length);
  };

  return (
    <div className={`min-h-screen bg-white font-sans text-gray-800 flex flex-col relative`}>

      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-1 min-h-[3.5rem] flex items-center justify-between">
          <a href="#" className="block">
            <img src="https://i.ibb.co/Z6BqK6Cr/Logistic-Park-Barasat-Logo-Direct-AW.png" alt="Project Logo" className="h-12 md:h-16 object-contain" />
          </a>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider text-gray-800">
              <a href="#about" className="hover:text-[#e92429] transition-colors">
                <span>About</span>
              </a>
              <a href="#amenities" className="hover:text-[#e92429] transition-colors">
                <span>Amenities</span>
              </a>
              <a href="#specifications" className="hover:text-[#e92429] transition-colors">
                <span>Specifications</span>
              </a>
              <a href="#gallery" className="hover:text-[#e92429] transition-colors">
                <span>Gallery</span>
              </a>
            </nav>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:block bg-[#0b529e] hover:bg-[#09417c] text-white px-6 py-3 font-medium text-sm uppercase tracking-wide transition-colors rounded-full"
            >
              <span>Request A Call</span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#0b529e] p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 z-50">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm font-bold uppercase tracking-wider text-[#0b529e] border-b border-gray-100">About</a>
            <a href="#amenities" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm font-bold uppercase tracking-wider text-[#0b529e] border-b border-gray-100">Amenities</a>
            <a href="#specifications" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm font-bold uppercase tracking-wider text-[#0b529e] border-b border-gray-100">Specifications</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm font-bold uppercase tracking-wider text-[#0b529e] border-b border-gray-100">Gallery</a>
            <button 
              onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
              className="mt-4 bg-[#0b529e] text-white px-6 py-3 font-medium text-sm uppercase tracking-wide rounded-full text-center"
            >
              Request A Call
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <div className="relative h-[90vh] min-h-[600px] w-full bg-gray-900 flex items-center justify-center overflow-hidden">
          <img src="https://i.ibb.co/FLwV5kW1/Aerial-view01-v01hires.jpg" alt="Aerial view01 v01hires" border="0" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
          
          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="text-[65px] font-bold text-white mb-4 uppercase tracking-[0.10em] leading-tight">
             A Centre of Convenience
            </h1>
            <h2 className="text-[28px] text-gray-200 mb-6 font-bold">
             Built for Industrial Excellence
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0b529e] hover:bg-[#09417c] text-white px-8 py-4 rounded-full font-medium flex items-center space-x-3 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Get a callback from Our Experts</span>
            </button>
          </div>

          {/* Right Floating Actions */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[100]">
            <a href="tel:" className="bg-white text-[#0b529e] w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-gray-50 transition-all hover:scale-105 border border-gray-100"><span>Call</span></a>
            <a href="https://wa.me/" className="bg-white text-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-gray-50 transition-all hover:scale-105 border border-gray-100"><span>WA</span></a>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#e92429] w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-gray-50 transition-all hover:scale-105 border border-gray-100"><span>EN</span></button>
          </div>

          {/* New Launch Patch */}
          <div className="absolute bottom-10 right-4 lg:right-10 bg-[#e92429] text-white px-6 py-3 lg:px-8 lg:py-4 font-black text-xl lg:text-2xl tracking-[0.2em] shadow-[0_0_40px_rgba(233,36,41,0.6)] rounded-full border-4 border-white animate-pulse uppercase text-center whitespace-nowrap">
            NEW LAUNCH PATCH
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 flex flex-col gap-12 md:gap-20">
          
          {/* =========================================
              ABOUT SECTION 
              ========================================= */}
          <section id="about" className="scroll-mt-24 flex flex-col gap-10 md:gap-14">
            
            {/* 3. About The Project */}
            <div className="w-full max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
                <div className="pr-0 lg:pr-4 h-full flex flex-col justify-center">
                  <h2 className="text-[24px] md:text-[28px] text-[#0b529e] mb-2 uppercase tracking-wide inline-block pb-1 text-balance leading-snug">SRIJAN'S FUTURE-READY INDUSTRIAL SPACES DESIGNED TO SCALE</h2>
                  <div className="h-1 w-24 bg-[#e92429] mb-6"></div>
                  <p className="text-gray-700 mb-10 leading-relaxed text-justify text-[15px] pt-4 text-balance">
                    Srijan Barasat Logistics Park is a Grade A industrial and garment-focused logistics destination strategically located on Jessore Road, Barasat. Designed for high-efficiency operations, the park combines scalable infrastructure, seamless truck movement, advanced logistics support, and excellent regional connectivity to create a business ecosystem built for growth.
                  </p>
                  <div>
                    <a href="https://drive.google.com/file/d/1CqavpdDpfuT4FqS8ltJjJYLflJrU4zhE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-[#0b529e] hover:bg-[#09417c] text-white px-8 py-4 rounded-full font-medium transition-colors shadow inline-flex items-center space-x-3 mt-4">
                      <Download className="w-5 h-5" />
                      <span>Download Brochure</span>
                    </a>
                  </div>
                </div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-[#0b529e]/5 p-8 rounded-xl shadow-lg border border-[#0b529e]/10 h-full flex flex-col justify-center">
                  <h3 className="text-[24px] text-[#0b529e] mb-4 uppercase tracking-wide flex items-center gap-3">
                    <Activity className="w-6 h-6 text-[#e92429]" />
                    Key Pointers
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">G+5</span><br/>
                        <span className="inline-block mt-0.5">Storeyed Building</span><br/>
                        <span className="inline-block mt-0.5">Industrial Floors</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">24x7</span><br/>
                        <span className="inline-block mt-0.5">Security Systems &</span><br/>
                        <span className="inline-block mt-0.5">CCTV Surveillance</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">4 Tons</span><br/>
                        <span className="inline-block mt-0.5">Capacity by</span><br/>
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">8</span><span className="inline-block mt-0.5 ml-1">Goods Lifts</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">32 ft</span><br/>
                        <span className="inline-block mt-0.5">Wide Internal</span><br/>
                        <span className="inline-block mt-0.5">Access Roads</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">1.9 Kms</span><br/>
                        <span className="inline-block mt-0.5">from Nearest</span><br/>
                        <span className="inline-block mt-0.5">Railway Station</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">4-ft</span><br/>
                        <span className="inline-block mt-0.5">Raised Dock-level</span><br/>
                        <span className="inline-block mt-0.5">Loading Platform</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600 pr-2">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">3000 kg/sqmt</span><br/>
                        <span className="inline-block mt-0.5">Weight Capacity</span><br/>
                        <span className="inline-block mt-0.5">(Ground Floor)</span>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md cursor-pointer border-l-4 border-transparent hover:border-[#e92429] transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#0b529e] shrink-0 mt-1" />
                      <div className="text-[13px] text-gray-600">
                        <span className="text-[24px] text-gray-900 font-bold inline-block leading-none mt-1">500 kg/sqmt</span><br/>
                        <span className="inline-block mt-0.5">Weight Capacity</span><br/>
                        <span className="inline-block mt-0.5">(1st-5th Floor)</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* 4. Walkthrough Video */}
            <div className="w-full max-w-3xl mx-auto">
              <div>
                <div className="w-full aspect-video bg-gray-900 relative rounded-xl shadow-2xl overflow-hidden">
                  <iframe 
                    src="https://player.vimeo.com/video/1051818862?h=fd4cd6391e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    title="Walkthrough Video"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 5. Top 4 USPs */}
            <div className="w-full max-w-4xl mx-auto">
              <div>
                <h2 className="text-center text-[24px] text-[#0b529e] mb-4 uppercase tracking-wide text-balance">REDEFINING BUSINESS EFFICIENCY WITH WORLD-CLASS INFRASTRUCTURE</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      title: "Strategic<br/>Connectivity", 
                      desc: "Seamless access to major commercial corridors, highways, and transit routes.",
                      img: "https://i.ibb.co/whYbdcky/Internal-roadhires.jpg" 
                    },
                    { 
                      title: "Grade A<br/>Infrastructure", 
                      desc: "Future-ready industrial spaces with modern logistics support and scalability.",
                      img: "https://i.ibb.co/FNKDkNx/Unloading-Area-with-Canopy-v01hires.jpg"
                    },
                    { 
                      title: "Efficient<br/>Logistics", 
                      desc: "Dock-level loading bays, a weighbridge facility, and smooth vehicle movement.",
                      img: "https://i.ibb.co/LX04Bdmf/Weight-Bridge-View-v01hires.jpg"
                    },
                    { 
                      title: "Operational<br/>Convenience", 
                      desc: "24x7 security, power backup, labour amenities, and business-friendly facilities.",
                      img: "https://i.ibb.co/0RpxRVDs/Unloading-area-02hires.jpg" 
                    }
                  ].map((usp, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative flex flex-col justify-end py-6 px-4 sm:p-6 md:p-5 lg:p-6 text-left bg-gray-900 transition-all duration-500 min-h-[220px] sm:min-h-[260px] cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-[#0b529e] opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
                      <img 
                        src={usp.img} 
                        alt={usp.title.replace('<br/>', ' ')} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-30" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-[5]"></div>
                      
                      <div className="relative z-20 flex flex-col h-full justify-between">
                        <div className="text-[#e92429] group-hover:text-white font-bold text-[32px] opacity-80 group-hover:opacity-100 transition-colors drop-shadow-md" style={{ fontWeight: 900 }}>0{idx + 1}</div>
                        <div className="pr-4 sm:pr-8">
                          <h3 className="font-bold text-white uppercase text-[15px] sm:text-[17px] tracking-[0.05em] mb-2 leading-tight transition-colors" dangerouslySetInnerHTML={{ __html: usp.title }}></h3>
                          <div className="max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-700 ease-in-out">
                            <p className="text-[13px] sm:text-[14px] text-gray-100 pt-2 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed text-balance" dangerouslySetInnerHTML={{ __html: usp.desc.replace(/ ([^ ]+)$/, '&nbsp;$1') }}></p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Top Trusted Brands */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-center text-[24px] text-[#0b529e] mb-2 uppercase tracking-wide text-balance">TRUSTED BY RENOWNED BRANDS</h2>
                <div className="relative w-full overflow-hidden py-4 border-y border-gray-100 flex shadow-inner bg-gray-50/50">
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    className="flex shrink-0 min-w-max"
                  >
                    <img 
                       src="https://i.ibb.co/RTMfkgY0/BRAND.png"
                       alt="Trusted Brands"
                       className="h-20 sm:h-28 md:h-32 object-contain mr-8"
                    />
                    <img 
                       src="https://i.ibb.co/RTMfkgY0/BRAND.png"
                       alt="Trusted Brands"
                       className="h-20 sm:h-28 md:h-32 object-contain mr-8"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

          </section>

          {/* =========================================
              AMENITIES SECTION 
              ========================================= */}
          <section id="amenities" className="scroll-mt-24 flex flex-col gap-10 md:gap-14">
            
            {/* 7. Facilities & Specifications */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl relative z-10 overflow-hidden border border-gray-100">
                <div className="w-full md:w-1/2 min-h-[300px] relative bg-gray-50">
                   <img 
                    src="https://i.ibb.co/k2F1S3Pw/Aerial-view-night-v01hires.jpg" 
                    alt="Facilities"
                    className="absolute w-full h-full object-cover inset-0 opacity-80"
                  />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col bg-white z-20 h-auto">
                  <div className="p-6 pb-2 text-center border-b border-gray-50 shrink-0">
                    <h2 className="text-[24px] font-heading text-[#0b529e] mb-2 uppercase tracking-wide text-balance leading-snug">
                      DESIGNED FOR SPEED, SCALE & SEAMLESS OPERATIONS
                    </h2>
                    
                    <div className="flex relative z-10 w-full">
                      {['Facilities', 'Specifications'].map(tab => (
                        <button
                          key={tab}
                          onClick={() => setActiveSpecTab(tab)}
                          className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wider text-center transition-colors border-b-4 ${
                            activeSpecTab === tab ? 'border-[#e92429] text-gray-900' : ' text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          <span>{tab}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 overflow-y-auto bg-white text-gray-600 leading-relaxed text-left">
                    {activeSpecTab === 'Facilities' && (
                      <div className="space-y-6 animate-in fade-in duration-500">
                        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: 0.1}}>
                          <h3 className="text-[#0b529e] flex items-center mb-2 text-[18px]">
                            <span className="w-6 h-6 bg-[#e92429] text-white rounded-full flex items-center justify-center mr-3 shadow-md font-bold text-xs">1</span>
                            Access & Movements
                          </h3>
                          <ul className="text-[14px] space-y-1 pl-10 list-disc text-gray-600">
                            <li>6–9 metre internal wide&nbsp;road</li>
                            <li>Boom Barrier facility entry & exit&nbsp;gate</li>
                            <li>Ample parking for containers, trucks & small&nbsp;vehicles</li>
                          </ul>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2}}>
                          <h3 className="text-[#0b529e] flex items-center mb-2 text-[18px]">
                            <span className="w-6 h-6 bg-[#e92429] text-white rounded-full flex items-center justify-center mr-3 shadow-md font-bold text-xs">2</span>
                            Logistic Infrastructure
                          </h3>
                          <ul className="text-[14px] space-y-1 pl-10 list-disc text-gray-600">
                            <li>Dock-level loading/unloading&nbsp;bays</li>
                            <li>Open loading/unloading bays with 4-ft dock&nbsp;platform</li>
                            <li>Computerised weighbridge facility up to 60&nbsp;MT</li>
                          </ul>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3}}>
                          <h3 className="text-[#0b529e] flex items-center mb-2 text-[18px]">
                            <span className="w-6 h-6 bg-[#e92429] text-white rounded-full flex items-center justify-center mr-3 shadow-md font-bold text-xs">3</span>
                            Utilities & Power
                          </h3>
                          <ul className="text-[14px] space-y-1 pl-10 list-disc text-gray-600">
                            <li>24x7 generator power&nbsp;backup</li>
                            <li>Ventilation windows for natural&nbsp;airflow</li>
                            <li>Stormwater drainage&nbsp;network</li>
                            <li>24x7 operational&nbsp;building</li>
                          </ul>
                        </motion.div>
                      </div>
                    )}
                    
                    {activeSpecTab === 'Specifications' && (
                      <div className="space-y-6 animate-in fade-in duration-500">
                        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: 0.1}}>
                          <h3 className="text-[#0b529e] flex items-center mb-2 text-[18px]">
                            <span className="w-6 h-6 bg-[#e92429] text-white rounded-full flex items-center justify-center mr-3 shadow-md font-bold text-xs">1</span>
                            Building Specification
                          </h3>
                          <ul className="text-[14px] space-y-1 pl-10 list-disc text-gray-600">
                            <li>G+5 RCC structure with multi-level&nbsp;warehousing</li>
                            <li>Ground floor load capacity: 3000&nbsp;kg/sqmt</li>
                            <li>Upper floors: 500&nbsp;kg/sqmt</li>
                          </ul>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2}}>
                          <h3 className="text-[#0b529e] flex items-center mb-2 text-[18px]">
                            <span className="w-6 h-6 bg-[#e92429] text-white rounded-full flex items-center justify-center mr-3 shadow-md font-bold text-xs">2</span>
                            Safety & Security
                          </h3>
                          <ul className="text-[14px] space-y-1 pl-10 list-disc text-gray-600">
                            <li>24x7 security &&nbsp;surveillance</li>
                            <li>Fire-fighting & protection system as per WBFS&nbsp;guidelines</li>
                            <li>Lightning&nbsp;arrestor</li>
                            <li>Professional maintenance & world-class&nbsp;upkeep</li>
                          </ul>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3}}>
                          <h3 className="text-[#0b529e] flex items-center mb-2 text-[18px]">
                            <span className="w-6 h-6 bg-[#e92429] text-white rounded-full flex items-center justify-center mr-3 shadow-md font-bold text-xs">3</span>
                            Sustainable Features
                          </h3>
                          <ul className="text-[14px] space-y-1 pl-10 list-disc text-gray-600">
                            <li>Rainwater harvesting&nbsp;system</li>
                            <li>Solid waste disposal&nbsp;system</li>
                            <li>V.D.F cement concrete&nbsp;flooring/densification</li>
                          </ul>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* =========================================
              SPECIFICATIONS SECTION (Project Resources)
              ========================================= */}
          <section id="specifications" className="scroll-mt-24 flex flex-col gap-10 md:gap-14">
            
            {/* 8. Project Resources */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-[#0b529e]/5 to-transparent rounded-2xl px-6 pt-6 pb-4 relative z-10 flex flex-col items-center w-full">
                <div className="mb-4 w-full flex justify-center">
                  <div className="text-center bg-white shadow-sm p-3 rounded-xl border border-gray-100 inline-block w-full max-w-lg">
                    <h2 className="text-[24px] text-[#0b529e] uppercase tracking-wide px-8 text-balance">PROJECT LANDSCAPE VIEW</h2>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-6 relative z-10 justify-center">
                  {['Master Plan', 'Floor Plans'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveResourceTab(tab)}
                      className={`px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full transition-all shadow-sm ${
                        activeResourceTab === tab ? 'bg-[#0b529e] text-white shadow-md scale-105' : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                      }`}
                    >
                      <span>{tab}</span>
                    </button>
                  ))}
                </div>
                
                <div className="flex flex-col md:flex-row min-h-[350px] w-full bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-gray-100">
                  <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
                    <motion.div 
                      key={activeResourceTab}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative text-center w-full h-full min-h-[300px] flex flex-col items-center justify-center py-6 gap-6"
                    >
                      {activeResourceTab === 'Floor Plans' ? (
                        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-white rounded-lg p-4 border border-gray-100">
                          {floorPlanImages.map((img, idx) => (
                            <img 
                              key={idx}
                              src={img}
                              alt={`Floor Plan ${idx + 1}`}
                              className={`absolute w-full h-full object-contain p-4 transition-opacity duration-500 ${
                                idx === currentFloorPlanIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                              }`}
                            />
                          ))}
                          
                          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4 z-20 pointer-events-none">
                            <button 
                              onClick={handlePrevFloorPlan}
                              className="pointer-events-auto w-10 h-10 bg-white/80 hover:bg-white text-[#0b529e] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                              aria-label="Previous floor plan"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                              onClick={handleNextFloorPlan}
                              className="pointer-events-auto w-10 h-10 bg-white/80 hover:bg-white text-[#0b529e] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                              aria-label="Next floor plan"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>
                          </div>
                          
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {floorPlanImages.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentFloorPlanIndex(idx)}
                                className={`h-2 rounded-full transition-all ${
                                  idx === currentFloorPlanIndex ? 'bg-[#e92429] w-8' : 'bg-gray-300 hover:bg-gray-400 w-2'
                                }`}
                                aria-label={`Go to floor plan ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center p-2 bg-white rounded-lg border border-gray-100">
                          <img 
                            src="https://i.ibb.co/N2Ph8GJ2/Logistic-Park-Barasat-Logo-Direct-AW.png"
                            alt="Logistic Park Barasat Logo Direct AW"
                            className="w-full h-full object-contain mx-auto rounded"
                          />
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8 relative z-10 justify-center">
                  <a href="https://drive.google.com/file/d/1CqavpdDpfuT4FqS8ltJjJYLflJrU4zhE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-[#e92429] hover:bg-[#d01d24] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                    <span className="flex items-center justify-center gap-3">
                      <Download className="w-5 h-5" /> <span>Download Brochure</span>
                    </span>
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0b529e] hover:bg-[#09417c] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <span>Book A Visit</span>
                  </button>
                </div>
              </div>
            </div>

          </section>

          {/* =========================================
              GALLERY SECTION
              ========================================= */}
          <section id="gallery" className="scroll-mt-24 flex flex-col gap-10 md:gap-14 -mt-10">
            
            {/* 9. Gallery */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative z-10">
                <div className="bg-transparent text-center mb-2">
                  <h2 className="text-[24px] text-[#0b529e] uppercase tracking-wide text-balance">WITNESS BUSINESSES TAKE FLIGHT HERE</h2>
                </div>
                
                <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-xl mt-4">
                  {galleryImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Gallery Image ${idx + 1}`} 
                      className={`absolute w-full h-full object-cover inset-0 transition-opacity duration-700 ${
                        idx === currentGalleryIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 z-20 pointer-events-none">
                    <button 
                      onClick={handlePrevImage}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-gray-900 transition-colors shadow-lg pointer-events-auto backdrop-blur"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-gray-900 transition-colors shadow-lg pointer-events-auto backdrop-blur"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentGalleryIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentGalleryIndex ? 'bg-[#e92429] w-8' : 'bg-white/50 hover:bg-white w-2'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* =========================================
              CONNECTIVITY & NEIGHBOURHOOD SECTION
              ========================================= */}
          <section id="connectivity" className="scroll-mt-24 flex flex-col gap-10 md:gap-14">
            
            {/* 10. Connectivity & Neighbourhood */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl relative z-10 overflow-hidden border border-gray-100">
                <div className="w-full md:w-1/2 min-h-[350px] relative bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58875.34047446709!2d88.43408914142334!3d22.7390632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3995044e495%3A0x56561a5dae24c346!2sSrijan%20Industrial%20Logistic%20Park%20Barasat!5e0!3m2!1sen!2sin!4v1779093072140!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="Location Map"
                  ></iframe>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col bg-white z-20 max-h-[450px]">
                  <div className="p-6 flex flex-col items-center justify-center text-center border-b border-gray-50 flex-none gap-4">
                    <h2 className="text-[24px] text-[#0b529e] uppercase tracking-wide text-balance leading-snug">WELCOME TO THE GATEWAY OF EASE</h2>
                    <p className="text-[18px] text-[#e92429] uppercase tracking-wide font-bold text-balance">Seamless Access to Key Commercial Corridors</p>
                  </div>
                  
                  <div className="flex-1 p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Bamungachi railway station: 1.9 km",
                        "Barasat railway station: 3.8 km",
                        "Duttapukur railway station: 5.5 km",
                        "Madhyamgram railway station: 8.6 km",
                        "Airport: 15 km",
                        "Airport Metro (upcoming): 15 km",
                        "Barrackpore railway station: 15.5 km",
                        "Dum Dum Metro: 21.7 km",
                        "Kalyani Expressway (via BT Road): 22 km",
                        "Dankuni Toll: 32.6 km",
                        "Kona Expressway: 41.8 km",
                        "Dhulagarh Truck Terminal: 43.7 km"
                      ].map((location, i) => (
                        <motion.div 
                          key={i} 
                          initial={{opacity: 0, y: 10}} 
                          whileInView={{opacity: 1, y: 0}} 
                          transition={{delay: i * 0.05}} 
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[#0b529e] hover:text-white transition-all cursor-pointer group shadow-sm hover:shadow-md"
                        >
                          <span className="font-medium text-gray-700 group-hover:text-white text-sm">{location}</span>
                          <MapPin className="w-4 h-4 text-[#e92429] shrink-0 ml-4 group-hover:text-white transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Awards & Accolades */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden">
              <div className="text-center bg-transparent relative z-10">
                <h2 className="text-[24px] text-[#0b529e] uppercase tracking-wide mb-4 text-balance px-8">ACHIEVEMENTS THAT DEFINE OUR LEGACY</h2>
                <div className="relative w-full overflow-hidden py-6 flex">
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex shrink-0 min-w-max"
                  >
                    <img 
                      src="https://i.ibb.co/8L4q76Tj/Logistic-Park-Barasat-Logo-Direct-AW.png" 
                      alt="Awards Accolades" 
                      className="h-32 sm:h-40 md:h-48 xl:h-56 object-contain mr-12" 
                    />
                    <img 
                      src="https://i.ibb.co/8L4q76Tj/Logistic-Park-Barasat-Logo-Direct-AW.png" 
                      alt="Awards Accolades" 
                      className="h-32 sm:h-40 md:h-48 xl:h-56 object-contain mr-12" 
                    />
                  </motion.div>
                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

      {/* 12. Footer */}
      <footer className="bg-[#0b529e] text-white mt-auto">
        <div className="w-full max-w-full px-4 md:px-8 xl:px-16 flex flex-col md:flex-row relative z-10 py-8 md:py-12 gap-6 md:gap-8">
          
          {/* Col 1 */}
          <div className="flex-1 flex flex-col justify-between">
            <h4 className="text-gray-300 uppercase tracking-wider mb-3 md:mb-6">Lets Connect</h4>
            <div className="w-32 md:w-48 relative flex items-center justify-start overflow-hidden">
               <img 
                  src="https://i.ibb.co/cSWLfkKq/Logistic-Park-Barasat-Logo-Direct-AW.png"
                  alt="Logistic Park Barasat Logo Direct AW"
                  className="w-full h-auto object-contain"
               />
               <span className="sr-only">Developer Logo</span>
            </div>
            <div className="mt-4 md:mt-8 text-sm text-blue-200 flex flex-col">
              <span className="font-semibold block mb-1">RERA No:</span> 
              <span>WBRERA/P/2026/000000</span>
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="flex-1 flex flex-col text-blue-100 mt-6 md:mt-0">
            <div className="mb-4 md:mb-6">
              <h4 className="text-gray-300 uppercase tracking-wider mb-1 md:mb-2">Address</h4>
              <p className="text-[14px] leading-relaxed">
                123 Logistics Park Way<br/>
                Jessore Road, Barasat<br/>
                West Bengal
              </p>
            </div>
            <div className="flex items-center text-sm mb-2 md:mb-3">
              <div className="font-semibold w-24 md:w-28">E-Mail ID:</div>
              <div className="flex-1 text-xs md:text-sm">info@srijanbarasat.com</div>
            </div>
            <div className="flex items-center text-sm mb-2 md:mb-3">
              <div className="font-semibold w-24 md:w-28">Phone:</div>
              <div className="flex-1 text-xs md:text-sm">+91 98765 43210</div>
            </div>
          </div>
          
          {/* Col 3 */}
          <div className="flex-1 flex flex-col mt-6 md:mt-0">
            <div className="flex flex-col mb-6 md:mb-8 text-sm">
              <a href="#about" className="uppercase tracking-widest hover:text-[#e92429] transition-colors mb-3 md:mb-4"><span>About</span></a>
              <a href="#amenities" className="uppercase tracking-widest hover:text-[#e92429] transition-colors mb-3 md:mb-4"><span>Amenities</span></a>
              <a href="#connectivity" className="uppercase tracking-widest hover:text-[#e92429] transition-colors mb-3 md:mb-4"><span>Connectivity</span></a>
              <a href="#specifications" className="uppercase tracking-widest hover:text-[#e92429] transition-colors mb-3 md:mb-4"><span>Resources</span></a>
              <a href="#" className="uppercase tracking-widest text-gray-400 hover:text-white transition-colors"><span>Privacy Policy</span></a>
            </div>
            
            <div className="flex gap-4">
              <a href="https://drive.google.com/file/d/1CqavpdDpfuT4FqS8ltJjJYLflJrU4zhE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-[#e92429] rounded-full flex items-center justify-center hover:bg-[#d01d24] transition-colors text-white shadow-md">
                <Download className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
              <a 
                href="tel:"
                className="w-10 h-10 md:w-12 md:h-12 bg-[#e92429] rounded-full flex items-center justify-center hover:bg-[#d01d24] transition-colors text-white shadow-md"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
              <a href="sms:" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white shadow-md">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="bg-[#09417c] py-4 text-center text-xs uppercase tracking-widest text-blue-200">
          All Rights Reserved. Copyright 2026.
        </div>
      </footer>

      {/* 13. Pop-Up Form Modal */}
      {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-[#0b529e] w-full max-w-md shadow-2xl relative border-t-8 border-[#e92429] overflow-hidden rounded-[2rem]">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-100/80 hover:bg-[#e92429] text-gray-600 hover:text-white rounded-full transition-colors z-20 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header/Logos area */}
            <div className="bg-white px-8 py-6 flex items-center justify-center">
              <img src="https://i.ibb.co/Z6BqK6Cr/Logistic-Park-Barasat-Logo-Direct-AW.png" alt="Logistic Park Barasat Logo Direct AW" border="0" className="h-16 object-contain" />
            </div>

            <div className="p-8">
              <h3 className="text-[24px] text-white text-center mb-4">Get in touch with us</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-gray-300 px-2 py-3 focus:outline-none focus:border-[#e92429] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Mobile No." 
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-gray-300 px-2 py-3 focus:outline-none focus:border-[#e92429] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-gray-300 px-2 py-3 focus:outline-none focus:border-[#e92429] transition-colors"
                  />
                </div>
                <div className="pt-6 text-center">
                  <button type="submit" className="bg-[#e92429] hover:bg-[#d01d24] text-white px-10 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-colors shadow-lg">
                    <span>Submit</span>
                  </button>
                </div>
              </form>

              <div className="flex justify-center gap-8 mt-10">
                <div className="flex flex-col items-center text-center">
                  <Headset className="w-8 h-8 text-[#e92429] mb-2"/>
                  <span className="text-[10px] text-white uppercase tracking-widest">Instant<br/>Call Back</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Tag className="w-8 h-8 text-[#e92429] mb-2"/>
                  <span className="text-[10px] text-white uppercase tracking-widest">Unmatched<br/>Price</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
  );
}

