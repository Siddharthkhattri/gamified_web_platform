import React, { useState } from 'react';

/**
 * INTERNAL ICONS (Student Context)
 * ------------------------------------------------------------------
 */
const Icons = {
  Leaf: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  LayoutDashboard: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Target: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Trophy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  ),
  User: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  LogOut: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  Award: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  AlertCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
    </svg>
  )
};

/**
 * MOCK DATA
 * ------------------------------------------------------------------
 */

const LEADERBOARD_DATA = [
  { rank: 1, name: "Aarav Patel", school: "Delhi Public School", points: 2450, badge: "Eco-Champion" },
  { rank: 2, name: "Diya Sharma", school: "The Doon School", points: 2380, badge: "Water Warrior" },
  { rank: 3, name: "Vihaan Singh", school: "Kendriya Vidyalaya", points: 2310, badge: "Solar Star" },
  { rank: 4, name: "Ananya Gupta", school: "Sanskriti School", points: 2250, badge: "Recycler" },
  { rank: 5, name: "Ishaan Kumar", school: "St. Xavier's", points: 2100, badge: "Green Guardian" },
  { rank: 6, name: "Riya Verma", school: "Bluebells International", points: 2050, badge: "Planter" },
  { rank: 7, name: "Kabir Mehta", school: "Springdales", points: 1980, badge: "Energy Saver" },
  { rank: 8, name: "Saira Khan", school: "Modern School", points: 1900, badge: "Activist" },
  { rank: 9, name: "Arjun Reddy", school: "Hyderabad Public School", points: 1850, badge: "Novice" },
  { rank: 10, name: "Meera Nair", school: "Loyola School", points: 1800, badge: "Novice" },
];

const QUIZ_DATA = [
  // Climate Change & Global Warming
  { id: 1, question: "Which gas is primarily responsible for the greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Carbon Dioxide" },
  { id: 2, question: "What is the main cause of rising sea levels?", options: ["Melting polar ice caps", "Increased rainfall", "Tectonic plate movement", "Ocean acidification"], answer: "Melting polar ice caps" },
  { id: 3, question: "Which international agreement aims to limit global warming to 1.5 degrees Celsius?", options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Geneva Convention"], answer: "Paris Agreement" },
  { id: 4, question: "What is 'carbon footprint'?", options: ["The amount of carbon in the soil", "The total greenhouse gas emissions caused by an individual", "A fossil discovered in 2020", "Carbon deposits in the ocean"], answer: "The total greenhouse gas emissions caused by an individual" },
  { id: 5, question: "Which sector contributes most to global greenhouse gas emissions?", options: ["Agriculture", "Energy/Electricity", "Fashion", "Waste"], answer: "Energy/Electricity" },
  
  // Biodiversity & Ecosystems
  { id: 6, question: "What is the term for a species that has a disproportionately large effect on its environment?", options: ["Keystone species", "Invasive species", "Endangered species", "Apex predator"], answer: "Keystone species" },
  { id: 7, question: "Which biome has the highest biodiversity?", options: ["Tundra", "Tropical Rainforest", "Desert", "Savanna"], answer: "Tropical Rainforest" },
  { id: 8, question: "What phenomenon causes the whitening of coral reefs?", options: ["Coral Bleaching", "Algal Bloom", "Eutrophication", "Ocean Salinity"], answer: "Coral Bleaching" },
  { id: 9, question: "The process by which fertile land becomes desert is called:", options: ["Deforestation", "Desertification", "Erosion", "Urbanization"], answer: "Desertification" },
  { id: 10, question: "Which of these is an example of an invasive species in India?", options: ["Bengal Tiger", "Water Hyacinth", "Indian Elephant", "Peacock"], answer: "Water Hyacinth" },

  // Renewable Energy
  { id: 11, question: "Photovoltaic cells are used in which type of energy generation?", options: ["Wind", "Solar", "Hydro", "Geothermal"], answer: "Solar" },
  { id: 12, question: "Which country is the largest producer of wind energy?", options: ["India", "USA", "China", "Germany"], answer: "China" },
  { id: 13, question: "What is the primary disadvantage of solar energy?", options: ["High pollution", "Intermittency", "Low efficiency", "Radioactive waste"], answer: "Intermittency" },
  { id: 14, question: "Biofuels are primarily derived from:", options: ["Coal", "Biomass/Plants", "Natural Gas", "Uranium"], answer: "Biomass/Plants" },
  { id: 15, question: "Geothermal energy utilizes heat from:", options: ["The Sun", "The Ocean", "The Earth's core", "Wind friction"], answer: "The Earth's core" },

  // Waste Management & Pollution
  { id: 16, question: "What is the 3R principle?", options: ["Read, Recite, Reuse", "Reduce, Reuse, Recycle", "Repair, Recover, Reject", "Run, Rest, Repeat"], answer: "Reduce, Reuse, Recycle" },
  { id: 17, question: "Which plastic type is considered single-use?", options: ["PET bottles", "PVC pipes", "Tupperware", "Lego bricks"], answer: "PET bottles" },
  { id: 18, question: "What is the term for decomposing organic waste using worms?", options: ["Composting", "Vermicomposting", "Incineration", "Landfilling"], answer: "Vermicomposting" },
  { id: 19, question: "E-waste refers to:", options: ["Electronic waste", "Energy waste", "Environmental waste", "Emergency waste"], answer: "Electronic waste" },
  { id: 20, question: "Minamata disease was caused by which pollutant?", options: ["Lead", "Mercury", "Arsenic", "Cadmium"], answer: "Mercury" },

  // Water Conservation
  { id: 21, question: "What percentage of Earth's water is fresh water?", options: ["70%", "50%", "3%", "10%"], answer: "3%" },
  { id: 22, question: "Rainwater harvesting helps to:", options: ["Increase flooding", "Recharge groundwater", "Pollute rivers", "Increase humidity"], answer: "Recharge groundwater" },
  { id: 23, question: "What is a 'water table'?", options: ["A chart about water", "The upper level of underground water", "Water stored in dams", "A flat river"], answer: "The upper level of underground water" },
  { id: 24, question: "Drip irrigation is efficient because:", options: ["It uses more water", "It delivers water directly to roots", "It sprays water in the air", "It relies on rain"], answer: "It delivers water directly to roots" },
  { id: 25, question: "Which river is known as the 'Sorrow of Bihar' due to floods?", options: ["Ganga", "Yamuna", "Kosi", "Brahmaputra"], answer: "Kosi" },

  // Sustainable Development Goals (SDGs)
  { id: 26, question: "How many UN Sustainable Development Goals are there?", options: ["10", "15", "17", "20"], answer: "17" },
  { id: 27, question: "SDG 13 relates to:", options: ["No Poverty", "Climate Action", "Quality Education", "Zero Hunger"], answer: "Climate Action" },
  { id: 28, question: "The 'Clean India Mission' is also known as:", options: ["Swachh Bharat Abhiyan", "Green India Mission", "Namami Gange", "Project Tiger"], answer: "Swachh Bharat Abhiyan" },
  { id: 29, question: "Which year is the target for achieving the UN SDGs?", options: ["2025", "2030", "2050", "2100"], answer: "2030" },
  { id: 30, question: "What does 'sustainable development' mean?", options: ["Rapid industrialization", "Meeting present needs without compromising future needs", "Using all resources now", "Stopping all development"], answer: "Meeting present needs without compromising future needs" },

  // General Environmental Science
  { id: 31, question: "The layer of ozone in the atmosphere protects us from:", options: ["Infrared rays", "UV rays", "Gamma rays", "X-rays"], answer: "UV rays" },
  { id: 32, question: "Which gas was responsible for the Bhopal Gas Tragedy?", options: ["Carbon Monoxide", "Methyl Isocyanate", "Sulfur Dioxide", "Chlorine"], answer: "Methyl Isocyanate" },
  { id: 33, question: "Chipko Movement was related to:", options: ["Water conservation", "Forest conservation", "Air pollution", "Tiger protection"], answer: "Forest conservation" },
  { id: 34, question: "The study of interactions between organisms and their environment is:", options: ["Biology", "Ecology", "Geology", "Zoology"], answer: "Ecology" },
  { id: 35, question: "Which of these is a biotic component of an ecosystem?", options: ["Sunlight", "Soil", "Bacteria", "Water"], answer: "Bacteria" },

  // Advanced Topics (Grade 11-12)
  { id: 36, question: "What is 'Albedo'?", options: ["Ocean depth", "Reflectivity of a surface", "A type of cloud", "Soil acidity"], answer: "Reflectivity of a surface" },
  { id: 37, question: "Which convention deals with the control of transboundary movements of hazardous wastes?", options: ["Basel Convention", "Ramsar Convention", "Bonn Convention", "CITES"], answer: "Basel Convention" },
  { id: 38, question: "What is 'Eutrophication'?", options: ["Excessive nutrients in water bodies", "Lack of oxygen in air", "Soil erosion", "Deforestation"], answer: "Excessive nutrients in water bodies" },
  { id: 39, question: "The 'Green Revolution' in India refers to:", options: ["Forest expansion", "Increase in food grain production", "Renewable energy", "Electric vehicles"], answer: "Increase in food grain production" },
  { id: 40, question: "Which isotope is commonly used in nuclear energy?", options: ["Uranium-235", "Carbon-14", "Oxygen-18", "Hydrogen-3"], answer: "Uranium-235" },
  { id: 41, question: "What is the full form of IPCC?", options: ["International Panel on Climate Change", "Intergovernmental Panel on Climate Change", "Indian Pollution Control Center", "International Pollution Control Committee"], answer: "Intergovernmental Panel on Climate Change" },
  { id: 42, question: "Blue Carbon refers to carbon stored in:", options: ["The atmosphere", "Coastal and marine ecosystems", "Fossil fuels", "Rainforests"], answer: "Coastal and marine ecosystems" },
  { id: 43, question: "Which of the following is a secondary pollutant?", options: ["CO2", "Methane", "Ozone (Ground level)", "Sulfur Dioxide"], answer: "Ozone (Ground level)" },
  { id: 44, question: "The concept of 'Ecological Niche' refers to:", options: ["Where an organism lives", "The role an organism plays in its ecosystem", "The size of a population", "A type of biome"], answer: "The role an organism plays in its ecosystem" },
  { id: 45, question: "BOD stands for:", options: ["Biological Oxygen Demand", "Basic Oxygen Deposit", "Bio-Organic Decay", "Bacterial Oxygen Death"], answer: "Biological Oxygen Demand" },
  { id: 46, question: "Which national park in India is famous for the One-Horned Rhinoceros?", options: ["Jim Corbett", "Kaziranga", "Gir", "Periyar"], answer: "Kaziranga" },
  { id: 47, question: "What is 'Greenwashing'?", options: ["Cleaning with eco-products", "Deceptive marketing to appear eco-friendly", "Planting trees in cities", "Recycling water"], answer: "Deceptive marketing to appear eco-friendly" },
  { id: 48, question: "Which gas is released from paddy fields and cattle?", options: ["Methane", "Oxygen", "Nitrogen", "Chlorine"], answer: "Methane" },
  { id: 49, question: "The Ramsar Convention protects:", options: ["Tigers", "Wetlands", "Ozone Layer", "Coral Reefs"], answer: "Wetlands" },
  { id: 50, question: "What is the pH of acid rain?", options: ["7", "Greater than 7", "Less than 5.6", "Exactly 14"], answer: "Less than 5.6" }
];

/**
 * STYLES (Exact match to previous dashboards)
 * ------------------------------------------------------------------
 */
const styles = `
  .eq-container { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; min-height: 100vh; display: flex; color: #0f172a; }
  .eq-sidebar { width: 260px; background: white; border-right: 1px solid #e2e8f0; position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; }
  .eq-logo-area { padding: 24px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 20px; color: #064e3b; }
  .eq-logo-icon { width: 32px; height: 32px; background: #d1fae5; color: #059669; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
  .eq-nav { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 4px; }
  .eq-nav-item { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; cursor: pointer; color: #64748b; border: none; background: none; width: 100%; font-size: 14px; font-weight: 500; transition: all 0.2s; }
  .eq-nav-item:hover { background: #f1f5f9; color: #0f172a; }
  .eq-nav-item.active { background: #eff6ff; color: #1d4ed8; }
  .eq-nav-item.logout { color: #ef4444; }
  .eq-nav-item.logout:hover { background: #fef2f2; color: #dc2626; }
  
  .eq-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  .eq-header-mobile { display: none; padding: 16px; background: white; border-bottom: 1px solid #e2e8f0; align-items: center; justify-content: space-between; }
  
  .eq-content { padding: 32px; max-width: 1200px; margin: 0 auto; width: 100%; }
  
  .eq-title-section { margin-bottom: 32px; }
  .eq-title { font-size: 28px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0; }
  .eq-subtitle { color: #64748b; font-size: 16px; margin: 0; max-width: 600px; line-height: 1.5; }
  
  .eq-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 40px; }
  
  .eq-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  .eq-stat-header { display: flex; justify-content: space-between; margin-bottom: 16px; }
  .eq-stat-icon { padding: 8px; background: #f8fafc; border-radius: 8px; color: #475569; }
  .eq-stat-label { font-size: 14px; font-weight: 500; color: #64748b; margin: 0 0 4px 0; }
  .eq-stat-value { font-size: 28px; font-weight: 700; color: #0f172a; margin: 0; }

  /* Quiz Styles */
  .eq-quiz-container { max-width: 700px; margin: 0 auto; }
  .eq-option-btn { width: 100%; text-align: left; padding: 16px; margin-bottom: 12px; border: 2px solid #e2e8f0; border-radius: 12px; background: white; cursor: pointer; transition: all 0.2s; font-size: 15px; color: #334155; }
  .eq-option-btn:hover { border-color: #3b82f6; background: #f8fafc; }
  .eq-option-btn.selected { border-color: #3b82f6; background: #eff6ff; color: #1d4ed8; font-weight: 500; }
  .eq-option-btn.correct { border-color: #10b981; background: #ecfdf5; color: #047857; }
  .eq-option-btn.incorrect { border-color: #ef4444; background: #fef2f2; color: #b91c1c; }
  .eq-btn-primary { background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; font-size: 14px; transition: bg 0.2s; }
  .eq-btn-primary:hover { background: #1d4ed8; }

  /* Leaderboard Styles */
  .eq-lb-table { width: 100%; border-collapse: separate; border-spacing: 0 8px; }
  .eq-lb-row { background: white; transition: transform 0.2s; }
  .eq-lb-row:hover { transform: scale(1.01); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .eq-lb-cell { padding: 16px; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }
  .eq-lb-row td:first-child { border-left: 1px solid #f1f5f9; border-top-left-radius: 12px; border-bottom-left-radius: 12px; }
  .eq-lb-row td:last-child { border-right: 1px solid #f1f5f9; border-top-right-radius: 12px; border-bottom-right-radius: 12px; }
  .eq-rank-badge { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; }
  .rank-1 { background: #fef3c7; color: #d97706; border: 1px solid #fcd34d; }
  .rank-2 { background: #f1f5f9; color: #64748b; border: 1px solid #cbd5e1; }
  .rank-3 { background: #ffedd5; color: #c2410c; border: 1px solid #fdba74; }
  .rank-other { background: #f8fafc; color: #64748b; border: 1px solid #e2e8f0; }

  @media (max-width: 1024px) {
    .eq-sidebar, .eq-header { display: none; }
    .eq-header-mobile { display: flex; }
    .eq-grid { grid-template-columns: 1fr; }
    .eq-content { padding: 16px; }
  }
`;

/**
 * COMPONENTS
 * ------------------------------------------------------------------
 */

const StatCard = ({ title, value, icon: Icon, subtext }) => (
  <div className="eq-card">
    <div className="eq-stat-header">
      <div className="eq-stat-icon"><Icon /></div>
    </div>
    <div>
      <h3 className="eq-stat-label">{title}</h3>
      <p className="eq-stat-value">{value}</p>
      {subtext && <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{subtext}</p>}
    </div>
  </div>
);

const QuickLink = ({ text, onClick }) => (
  <button 
    onClick={onClick}
    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', borderBottom: '1px solid #e2e8f0', color: '#2563eb', cursor: 'pointer', fontSize: '14px' }}
  >
    {text}
  </button>
);

/* --- Views --- */

const DashboardHome = ({ onNavigate }) => (
  <>
    <div className="eq-title-section">
      <h1 className="eq-title">Welcome Back, Eco-Explorer! 🎓</h1>
      <p className="eq-subtitle">Your journey to making a real environmental impact continues.</p>
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Your Progress at a Glance
    </h2>

    <div className="eq-grid">
      <StatCard 
        title="Eco-Points" 
        value="1,250" 
        icon={Icons.Leaf}
        subtext="Top 10% of students"
      />
      <StatCard 
        title="Badges Earned" 
        value="8" 
        icon={Icons.Award}
        subtext="Latest: Water Warrior"
      />
      <StatCard 
        title="Next Challenge" 
        value="The Recycling Race" 
        icon={Icons.Target}
        subtext="Ends in 2 days"
      />
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Quick Links
    </h2>
    
    <div className="eq-card">
      <QuickLink text="Explore New Lessons" onClick={() => onNavigate('lessons')} />
      <QuickLink text="View Pending Challenges" onClick={() => onNavigate('challenges')} />
      <QuickLink text="Check the Leaderboard" onClick={() => onNavigate('leaderboard')} />
    </div>
  </>
);

const LeaderboardView = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <div className="eq-card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', color: 'white', border: 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Top Eco-Warriors 🏆</h2>
          <p style={{ opacity: 0.9 }}>Compete with students across India to make a difference!</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>YOUR RANK</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>#42</p>
        </div>
      </div>
    </div>

    <table className="eq-lb-table">
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '0 16px', color: '#64748b', fontSize: '12px', fontWeight: 600 }}>RANK</th>
          <th style={{ textAlign: 'left', padding: '0 16px', color: '#64748b', fontSize: '12px', fontWeight: 600 }}>STUDENT</th>
          <th style={{ textAlign: 'left', padding: '0 16px', color: '#64748b', fontSize: '12px', fontWeight: 600 }}>SCHOOL</th>
          <th style={{ textAlign: 'right', padding: '0 16px', color: '#64748b', fontSize: '12px', fontWeight: 600 }}>POINTS</th>
        </tr>
      </thead>
      <tbody>
        {LEADERBOARD_DATA.map((student) => (
          <tr key={student.rank} className="eq-lb-row">
            <td className="eq-lb-cell">
              <div className={`eq-rank-badge rank-${student.rank <= 3 ? student.rank : 'other'}`}>
                {student.rank}
              </div>
            </td>
            <td className="eq-lb-cell">
              <div style={{ fontWeight: 600, color: '#0f172a' }}>{student.name}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{student.badge}</div>
            </td>
            <td className="eq-lb-cell" style={{ color: '#475569', fontSize: '14px' }}>
              {student.school}
            </td>
            <td className="eq-lb-cell" style={{ textAlign: 'right', fontWeight: 700, color: '#2563eb' }}>
              {student.points.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const QuizComponent = ({ onComplete }) => {
  // Use state to hold the shuffled questions so they don't change on re-renders
  const [questions] = useState(() => {
    // Shuffle the QUIZ_DATA array and slice the first 7 items
    return [...QUIZ_DATA]
      .sort(() => Math.random() - 0.5)
      .slice(0, 7);
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="eq-card eq-quiz-container" style={{ textAlign: 'center', padding: '48px' }}>
        <div style={{ marginBottom: '24px', color: '#2563eb' }}>
          <Icons.Award />
        </div>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Quiz Completed!</h2>
        <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '32px' }}>
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
        </p>
        <button className="eq-btn-primary" onClick={onComplete}>
          Return to Challenges
        </button>
      </div>
    );
  }

  return (
    <div className="eq-quiz-container">
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: '#64748b' }}>Question {currentQuestionIndex + 1}/{questions.length}</span>
        <span style={{ fontSize: '14px', color: '#2563eb', fontWeight: 600 }}>Score: {score}</span>
      </div>
      
      <div className="eq-card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', lineHeight: '1.5', marginBottom: '0' }}>
          {currentQuestion.question}
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {currentQuestion.options.map((option, index) => {
          let className = "eq-option-btn";
          if (isAnswered) {
            if (option === currentQuestion.answer) className += " correct";
            else if (option === selectedOption) className += " incorrect";
          } else if (selectedOption === option) {
            className += " selected";
          }
          
          return (
            <button 
              key={index} 
              className={className}
              onClick={() => handleOptionClick(option)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {option}
                {isAnswered && option === currentQuestion.answer && <Icons.CheckCircle />}
                {isAnswered && option === selectedOption && option !== currentQuestion.answer && <Icons.AlertCircle />}
              </div>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <button className="eq-btn-primary" onClick={handleNext}>
            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};

const ChallengesView = ({ onStartQuiz }) => (
  <div className="eq-grid" style={{ gridTemplateColumns: '1fr' }}>
    <div className="eq-card" style={{ borderLeft: '4px solid #2563eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>The Ultimate Eco-Mastery Quiz</h3>
          <p style={{ color: '#64748b', margin: '0 0 16px 0', fontSize: '14px' }}>
            Test your knowledge on Climate Change, Biodiversity, and Renewable Energy.
            Answer 7 random questions to earn the "Eco-Scholar" badge!
          </p>
          <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
            <span>• 7 Questions</span>
            <span>• +70 Points</span>
            <span>• Grade 9-12 Level</span>
          </div>
        </div>
        <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', color: '#2563eb' }}>
           <Icons.Target />
        </div>
      </div>
      <button className="eq-btn-primary" onClick={onStartQuiz}>Start Quiz</button>
    </div>

    <div className="eq-card" style={{ opacity: 0.7 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>The Recycling Race</h3>
          <p style={{ color: '#64748b', margin: '0 0 16px 0', fontSize: '14px' }}>
            Sort 20 virtual waste items into the correct bins before time runs out.
          </p>
        </div>
        <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '8px', color: '#64748b' }}>
           <Icons.Leaf />
        </div>
      </div>
      <button className="eq-btn-primary" style={{ background: '#cbd5e1', cursor: 'not-allowed' }} disabled>Locked</button>
    </div>
  </div>
);

const PlaceholderView = ({ title }) => (
  <div style={{ textAlign: 'center', padding: '48px', color: '#64748b' }}>
    <h2 style={{ color: '#0f172a', marginBottom: '8px' }}>{title}</h2>
    <p>This module is coming soon!</p>
  </div>
);

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quizMode, setQuizMode] = useState(false);

  const NavItem = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => { 
        setActiveTab(id); 
        setIsMobileMenuOpen(false); 
        setQuizMode(false); // Reset quiz mode when changing tabs
      }}
      className={`eq-nav-item ${activeTab === id ? 'active' : ''}`}
    >
      <div style={{ width: 20 }}><Icon /></div>
      {label}
    </button>
  );

  const renderContent = () => {
    if (quizMode) {
      return <QuizComponent onComplete={() => setQuizMode(false)} />;
    }

    switch(activeTab) {
      case 'dashboard': return <DashboardHome onNavigate={setActiveTab} />;
      case 'challenges': return <ChallengesView onStartQuiz={() => setQuizMode(true)} />;
      case 'lessons': return <PlaceholderView title="Interactive Lessons" />;
      case 'leaderboard': return <LeaderboardView />;
      case 'profile': return <PlaceholderView title="Student Profile" />;
      default: return <DashboardHome onNavigate={setActiveTab} />;
    }
  };

  const getTitle = () => {
    if (quizMode) return 'Eco-Mastery Quiz';
    switch(activeTab) {
      case 'dashboard': return 'Student Portal';
      case 'challenges': return 'Challenges & Quizzes';
      case 'lessons': return 'My Lessons';
      case 'leaderboard': return 'Leaderboard';
      case 'profile': return 'My Profile';
      default: return 'Student Portal';
    }
  };

  return (
    <div className="eq-container">
      <style>{styles}</style>
      
      {/* Sidebar (Desktop) */}
      <aside className="eq-sidebar">
        <div className="eq-logo-area">
          <div className="eq-logo-icon">
            <Icons.Leaf />
          </div>
          EcoQuest
        </div>
        
        <div className="eq-nav">
          <NavItem id="dashboard" label="Dashboard" icon={Icons.LayoutDashboard} />
          <NavItem id="lessons" label="Lessons" icon={Icons.BookOpen} />
          <NavItem id="challenges" label="Challenges" icon={Icons.Target} />
          <NavItem id="leaderboard" label="Leaderboard" icon={Icons.Trophy} />
          <NavItem id="profile" label="Profile" icon={Icons.User} />
        </div>

        {/* Logout Section */}
        <div style={{ padding: '16px', borderTop: '1px solid #f1f5f9' }}>
           <button 
             className="eq-nav-item logout" 
             onClick={() => console.log('Logout clicked')}
           >
              <div style={{ width: 20 }}><Icons.LogOut /></div>
              Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="eq-main">
        {/* Mobile Header */}
        <header className="eq-header-mobile">
          <div className="eq-logo-area" style={{ padding: 0, border: 'none' }}>
            <div className="eq-logo-icon">
              <Icons.Leaf />
            </div>
            EcoQuest
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none' }}>
            {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </header>

        {isMobileMenuOpen && (
          <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '16px', position: 'absolute', top: '60px', left: 0, right: 0, zIndex: 50, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
             <NavItem id="dashboard" label="Dashboard" icon={Icons.LayoutDashboard} />
             <NavItem id="lessons" label="Lessons" icon={Icons.BookOpen} />
             <NavItem id="challenges" label="Challenges" icon={Icons.Target} />
             <NavItem id="leaderboard" label="Leaderboard" icon={Icons.Trophy} />
             <NavItem id="profile" label="Profile" icon={Icons.User} />
             <div style={{ height: '1px', background: '#f1f5f9', margin: '8px 0' }} />
             <button className="eq-nav-item logout">
               <div style={{ width: 20 }}><Icons.LogOut /></div>
               Logout
             </button>
          </div>
        )}

        <main className="eq-content">
          {/* Only show Title Section if NOT in Dashboard Home (since Home has its own Welcome message) AND NOT in Quiz Mode */}
          {activeTab !== 'dashboard' && !quizMode && (
            <div className="eq-title-section">
              <h1 className="eq-title">{getTitle()}</h1>
            </div>
          )}

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;