import React, { useState } from 'react';

/**
 * INTERNAL ICONS (Parent/Family Context)
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
  User: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Star: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  Home: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
};

/**
 * MOCK DATA
 * ------------------------------------------------------------------
 */
const CHILDREN_DATA = [
  { 
    id: 1, 
    name: "Aarav Patel", 
    grade: "Class 9", 
    points: 2450, 
    latestLesson: "Renewable Energy in India", 
    lessonStatus: "Completed",
    challenge: "The Recycling Race", 
    challengeStatus: "In Progress",
    avatarColor: "#e0f2fe", // light blue
    textColor: "#0369a1",
    recentActivity: [
      { id: 1, action: "Completed Quiz: Solar Power", score: "9/10", date: "2 days ago" },
      { id: 2, action: "Started Challenge: Waste Audit", score: "In Progress", date: "4 days ago" },
      { id: 3, action: "Watched Lesson: Wind Energy", score: "Completed", date: "1 week ago" }
    ],
    teacherFeedback: "Aarav shows excellent understanding of renewable concepts. Encourage him to participate more in group discussions."
  },
  { 
    id: 2, 
    name: "Ananya Patel", 
    grade: "Class 6", 
    points: 1850, 
    latestLesson: "Monsoon & Climate", 
    lessonStatus: "Completed",
    challenge: "Plant a Tree", 
    challengeStatus: "Not Started",
    avatarColor: "#fef3c7", // light yellow
    textColor: "#b45309",
    recentActivity: [
      { id: 1, action: "Completed Quiz: Water Cycle", score: "10/10", date: "Yesterday" },
      { id: 2, action: "Badge Earned: Water Warrior", score: "Awarded", date: "3 days ago" }
    ],
    teacherFeedback: "Ananya is very enthusiastic! She did a great job on her water conservation poster."
  }
];

const GUIDES_DATA = [
  {
    id: 1,
    title: "Fostering Environmental Stewardship in Early Childhood",
    readTime: "5 min read",
    content: "Instilling a love for nature in children begins with exposure. Regular walks in local parks, identifying native plants, and observing insects can spark curiosity. When children understand that they are part of a larger ecosystem, they are more likely to develop protective behaviors towards the environment. Encourage questions like 'Where does this water come from?' or 'Where does the trash go?' to build critical thinking about resource consumption."
  },
  {
    id: 2,
    title: "Sustainable Living at Home: A Practical Guide",
    readTime: "8 min read",
    content: "Sustainability starts in the kitchen and living room. Simple switches, such as using cloth napkins instead of paper, installing LED bulbs, and setting up a home composting bin, can significantly reduce a household's carbon footprint. Involving children in these decisions—letting them choose the reusable bags or help sort the recycling—empowers them to feel like active participants in the family's green mission."
  },
  {
    id: 3,
    title: "Understanding the '3 Rs' for the Modern Era",
    readTime: "6 min read",
    content: "While Reduce, Reuse, and Recycle are well-known, the order of importance is often overlooked. 'Reduce' is the most powerful step. By teaching children to refuse unnecessary single-use items and value experiences over material possessions, we tackle waste at the source. 'Reuse' encourages creativity and repair skills, while 'Recycle' should be the last resort after the first two options have been exhausted."
  }
];

const FAMILY_CHALLENGES = [
  {
    id: 1,
    title: "Zero-Waste Weekend",
    points: 200,
    description: "Try to go 48 hours without generating any non-recyclable trash. Use reusable containers, buy unpackaged produce, and compost food scraps.",
    status: "Active"
  },
  {
    id: 2,
    title: "Energy Detective",
    points: 150,
    description: "Inspect your home for 'energy vampires'—devices left plugged in when not in use. Unplug them and switch to natural light for one evening.",
    status: "New"
  },
  {
    id: 3,
    title: "The Local Market Mission",
    points: 300,
    description: "Visit a local farmer's market instead of a supermarket. Buy 3 locally grown vegetables and cook a meal together using them.",
    status: "New"
  }
];

/**
 * STYLES
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
  
  .eq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 40px; }
  
  .eq-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  
  .eq-action-btn { width: 100%; text-align: left; display: flex; align-items: center; gap: 16px; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 12px; cursor: pointer; transition: all 0.2s; }
  .eq-action-btn:hover { border-color: #3b82f6; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1); }
  .eq-action-icon { width: 48px; height: 48px; background: #eff6ff; color: #2563eb; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
  .eq-action-text h4 { margin: 0 0 4px 0; font-size: 16px; color: #0f172a; }
  .eq-action-text p { margin: 0; font-size: 13px; color: #64748b; }

  /* Child Card Specifics */
  .child-card-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9; }
  .child-avatar { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; }
  .child-info h3 { margin: 0; font-size: 18px; color: #0f172a; }
  .child-info p { margin: 4px 0 0 0; font-size: 14px; color: #64748b; }
  
  .progress-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
  .progress-label { color: #64748b; }
  .progress-value { font-weight: 600; color: #0f172a; }
  .status-badge { padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600; margin-left: 8px; }
  .status-completed { background: #d1fae5; color: #059669; }
  .status-progress { background: #e0f2fe; color: #0369a1; }
  .status-todo { background: #f1f5f9; color: #64748b; }

  /* New Article Styles */
  .article-card { border-bottom: 1px solid #f1f5f9; padding-bottom: 24px; margin-bottom: 24px; }
  .article-card:last-child { border-bottom: none; margin-bottom: 0; }
  .article-title { font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 8px; }
  .article-meta { font-size: 12px; color: #94a3b8; margin-bottom: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
  .article-content { font-size: 15px; line-height: 1.6; color: #475569; }

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

const ChildProgressCard = ({ child, onViewReport }) => (
  <div className="eq-card">
    <div className="child-card-header">
      <div className="child-avatar" style={{ background: child.avatarColor, color: child.textColor }}>
        <Icons.User />
      </div>
      <div className="child-info">
        <h3>{child.name}</h3>
        <p>{child.grade}</p>
      </div>
    </div>
    
    <div style={{ marginBottom: '20px' }}>
      <div className="progress-row">
        <span className="progress-label">Total Eco-Points</span>
        <span className="progress-value" style={{ color: '#2563eb', fontSize: '16px' }}>{child.points.toLocaleString()}</span>
      </div>
      <div className="progress-row">
        <span className="progress-label">Latest Lesson</span>
        <span className="progress-value">
          {child.latestLesson}
          <span className="status-badge status-completed">Completed</span>
        </span>
      </div>
      <div className="progress-row">
        <span className="progress-label">Current Challenge</span>
        <span className="progress-value">
          {child.challenge}
          <span className={`status-badge ${child.challengeStatus === 'In Progress' ? 'status-progress' : 'status-todo'}`}>
            {child.challengeStatus}
          </span>
        </span>
      </div>
    </div>

    <button 
      onClick={() => onViewReport(child.id)}
      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', color: '#475569', cursor: 'pointer', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
    >
      View Full Report <Icons.ArrowRight />
    </button>
  </div>
);

const ActionButton = ({ icon: Icon, title, description, onClick }) => (
  <button className="eq-action-btn" onClick={onClick}>
    <div className="eq-action-icon"><Icon /></div>
    <div className="eq-action-text" style={{ flex: 1 }}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <div style={{ color: '#cbd5e1' }}><Icons.ArrowRight /></div>
  </button>
);

const FullReportView = ({ childId, onBack }) => {
  const child = CHILDREN_DATA.find(c => c.id === childId);
  
  if (!child) return <div>Student not found</div>;

  return (
    <div>
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px', fontSize: '14px' }}>
        <Icons.ChevronLeft /> Back to Dashboard
      </button>

      <div className="eq-card" style={{ marginBottom: '24px' }}>
        <div className="child-card-header" style={{ borderBottom: 'none', marginBottom: 0 }}>
          <div className="child-avatar" style={{ background: child.avatarColor, color: child.textColor, width: 80, height: 80, fontSize: 32 }}>
            <Icons.User />
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', color: '#0f172a' }}>{child.name}</h1>
            <p style={{ margin: '4px 0', color: '#64748b' }}>{child.grade} • ID: #2024-{child.id}</p>
          </div>
        </div>
      </div>

      <div className="eq-grid">
        <div className="eq-card">
          <h3 style={{ marginTop: 0, color: '#0f172a' }}>Academic Performance</h3>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
             {child.recentActivity.map(activity => (
               <div key={activity.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                 <div>
                   <p style={{ margin: 0, fontWeight: 500, color: '#334155' }}>{activity.action}</p>
                   <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>{activity.date}</p>
                 </div>
                 <span style={{ fontWeight: 600, color: '#059669' }}>{activity.score}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="eq-card">
           <h3 style={{ marginTop: 0, color: '#0f172a' }}>Teacher's Remarks</h3>
           <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
             <p style={{ margin: 0, fontStyle: 'italic', color: '#475569' }}>
               "{child.teacherFeedback}"
             </p>
             <p style={{ marginTop: '12px', fontSize: '12px', fontWeight: 600, color: '#64748b', textAlign: 'right' }}>
               - Class Teacher
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

/* --- Views --- */

const DashboardHome = ({ onNavigate, onViewReport }) => (
  <>
    <div className="eq-title-section">
      <h1 className="eq-title">Parent / Guardian Dashboard 👨‍👩‍👧‍👦</h1>
      <p className="eq-subtitle">Monitor your child's progress, celebrate their achievements, and encourage learning at home.</p>
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Children's Progress Overview
    </h2>

    <div className="eq-grid">
      {CHILDREN_DATA.map(child => (
        <ChildProgressCard key={child.id} child={child} onViewReport={onViewReport} />
      ))}
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Family Resources & Activities
    </h2>
    
    <div className="eq-grid">
      <ActionButton 
        onClick={() => onNavigate('guides')}
        icon={Icons.BookOpen}
        title="Parent Guides & Tips"
        description="How to support eco-learning at home."
      />
      <ActionButton 
        onClick={() => onNavigate('family-challenges')}
        icon={Icons.Home}
        title="Family Eco-Challenges"
        description="Weekend activities to do together."
      />
    </div>
  </>
);

const ResourcesView = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <div className="eq-title-section">
      <h1 className="eq-title">Parent Resource Library 📚</h1>
      <p className="eq-subtitle">Expert advice and practical tips for raising eco-conscious children.</p>
    </div>

    <div className="eq-card">
      {GUIDES_DATA.map(guide => (
        <div key={guide.id} className="article-card">
          <p className="article-meta">{guide.readTime} • Guide</p>
          <h3 className="article-title">{guide.title}</h3>
          <p className="article-content">{guide.content}</p>
          <button style={{ color: '#2563eb', background: 'none', border: 'none', padding: 0, fontWeight: 600, cursor: 'pointer', marginTop: '8px' }}>
            Read Full Article →
          </button>
        </div>
      ))}
    </div>
  </div>
);

const FamilyChallengesView = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <div className="eq-title-section">
      <h1 className="eq-title">Family Eco-Challenges 🏡</h1>
      <p className="eq-subtitle">Fun, collaborative activities to build sustainable habits together.</p>
    </div>

    <div className="eq-grid">
      {FAMILY_CHALLENGES.map(challenge => (
        <div key={challenge.id} className="eq-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
             <h3 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>{challenge.title}</h3>
             <span className="status-badge status-progress">+{challenge.points} pts</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '14px', flex: 1 }}>{challenge.description}</p>
          
          <div style={{ marginTop: '20px', display: 'flex', gap: '8px' }}>
            <button style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', cursor: 'pointer', fontWeight: 600 }}>
              Details
            </button>
            <button style={{ flex: 1, padding: '8px', borderRadius: '6px', border: 'none', background: '#2563eb', color: 'white', cursor: 'pointer', fontWeight: 600 }}>
              Accept Challenge
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedChildId, setSelectedChildId] = useState(null);

  const handleViewReport = (childId) => {
    setSelectedChildId(childId);
    setActiveTab('report');
  };

  const NavItem = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => { 
        setActiveTab(id); 
        setIsMobileMenuOpen(false); 
        setSelectedChildId(null); // Reset child selection when changing tabs
      }}
      className={`eq-nav-item ${activeTab === id ? 'active' : ''}`}
    >
      <div style={{ width: 20 }}><Icon /></div>
      {label}
    </button>
  );

  const renderContent = () => {
    if (activeTab === 'report' && selectedChildId) {
      return <FullReportView childId={selectedChildId} onBack={() => setActiveTab('dashboard')} />;
    }

    switch(activeTab) {
      case 'dashboard': return <DashboardHome onNavigate={setActiveTab} onViewReport={handleViewReport} />;
      case 'guides': return <ResourcesView />;
      case 'family-challenges': return <FamilyChallengesView />;
      case 'profile': return <ResourcesView />; // Placeholder using resource view for now
      default: return <DashboardHome onNavigate={setActiveTab} onViewReport={handleViewReport} />;
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
          <NavItem id="guides" label="Parent Guides" icon={Icons.BookOpen} />
          <NavItem id="family-challenges" label="Family Activities" icon={Icons.Home} />
          <NavItem id="profile" label="Family Profile" icon={Icons.Users} />
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
             <NavItem id="guides" label="Parent Guides" icon={Icons.BookOpen} />
             <NavItem id="family-challenges" label="Family Activities" icon={Icons.Home} />
             <NavItem id="profile" label="Family Profile" icon={Icons.Users} />
             <div style={{ height: '1px', background: '#f1f5f9', margin: '8px 0' }} />
             <button className="eq-nav-item logout">
               <div style={{ width: 20 }}><Icons.LogOut /></div>
               Logout
             </button>
          </div>
        )}

        <main className="eq-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default ParentDashboard;