import React, { useState } from 'react';

/**
 * INTERNAL ICONS (Customized for NGO Context)
 * ------------------------------------------------------------------
 */
const Icons = {
  Globe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Megaphone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Leaf: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  PlusCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/>
    </svg>
  ),
  ClipboardCheck: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>
    </svg>
  ),
  Building: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
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
  LogOut: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  )
};

/**
 * MOCK DATA (NGO Context)
 * ------------------------------------------------------------------
 */

const CAMPAIGNS_DATA = [
  { id: 1, name: "Clean Yamuna Drive", status: "Active", participants: 1200, impact: "5 Tons Waste", schools: 15 },
  { id: 2, name: "Green Diwali Awareness", status: "Completed", participants: 5000, impact: "High Awareness", schools: 45 },
  { id: 3, name: "Monsoon Plantation", status: "Active", participants: 850, impact: "2000 Saplings", schools: 12 },
  { id: 4, name: "Plastic-Free Campus", status: "Planning", participants: 0, impact: "Pending", schools: 8 },
];

const PARTNER_SCHOOLS_DATA = [
  { id: 1, name: "The Doon School", engagement: "High", lastActivity: "2 days ago", campaigns: 3 },
  { id: 2, name: "Sanskriti School", engagement: "Medium", lastActivity: "5 days ago", campaigns: 2 },
  { id: 3, name: "Bluebells International", engagement: "Very High", lastActivity: "Yesterday", campaigns: 5 },
  { id: 4, name: "Springdales School", engagement: "Low", lastActivity: "1 month ago", campaigns: 1 },
];

/**
 * STYLES (Exact match to Government Dashboard for consistency)
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
  
  .eq-action-btn { width: 100%; text-align: left; display: flex; align-items: center; gap: 16px; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 12px; cursor: pointer; transition: all 0.2s; }
  .eq-action-btn:hover { border-color: #3b82f6; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1); }
  .eq-action-icon { width: 48px; height: 48px; background: #eff6ff; color: #2563eb; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
  .eq-action-text h4 { margin: 0 0 4px 0; font-size: 16px; color: #0f172a; }
  .eq-action-text p { margin: 0; font-size: 13px; color: #64748b; }
  
  .eq-badge { padding: 4px 8px; background: #ecfdf5; color: #047857; border-radius: 99px; font-size: 12px; font-weight: 600; }

  /* Table Styles */
  .eq-table-container { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
  .eq-table { width: 100%; border-collapse: collapse; text-align: left; }
  .eq-th { padding: 16px 24px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; font-size: 13px; background: #f8fafc; text-transform: uppercase; letter-spacing: 0.05em; }
  .eq-td { padding: 16px 24px; border-bottom: 1px solid #f1f5f9; color: #334155; font-size: 14px; }
  .eq-tr:last-child .eq-td { border-bottom: none; }
  .eq-tr:hover { background: #f8fafc; }

  .eq-status-active { color: #059669; background: #d1fae5; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
  .eq-status-completed { color: #475569; background: #f1f5f9; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
  .eq-status-planning { color: #d97706; background: #fef3c7; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }

  @media (max-width: 1024px) {
    .eq-sidebar, .eq-header { display: none; }
    .eq-header-mobile { display: flex; }
    .eq-grid { grid-template-columns: 1fr; }
    .eq-content { padding: 16px; }
    .eq-table { display: block; overflow-x: auto; }
  }
`;

/**
 * COMPONENTS
 * ------------------------------------------------------------------
 */

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="eq-card">
    <div className="eq-stat-header">
      <div className="eq-stat-icon"><Icon /></div>
      {trend && <span className="eq-badge">+{trend}%</span>}
    </div>
    <div>
      <h3 className="eq-stat-label">{title}</h3>
      <p className="eq-stat-value">{value}</p>
    </div>
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

/* --- Views --- */

const NGODashboardHome = ({ onNavigate }) => (
  <>
    <div className="eq-grid">
      <StatCard 
        title="Active Campaigns" 
        value="3" 
        icon={Icons.Megaphone}
        trend={20}
      />
      <StatCard 
        title="Participants Engaged" 
        value="3,200" 
        icon={Icons.Users}
        trend={15.4}
      />
      <StatCard 
        title="Impact Units Saved" 
        value="10k" 
        icon={Icons.Leaf}
        trend={8.2}
      />
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Action Center
    </h2>
    
    <div className="eq-grid">
      <ActionButton 
        onClick={() => onNavigate('campaigns')}
        icon={Icons.PlusCircle}
        title="Create New Campaign"
        description="Launch a new initiative, set goals, and invite schools."
      />
      <ActionButton 
        onClick={() => onNavigate('schools')}
        icon={Icons.Building}
        title="School Partner Data"
        description="Analyze performance and engagement across partner schools."
      />
      <ActionButton 
        onClick={() => onNavigate('campaigns')}
        icon={Icons.ClipboardCheck}
        title="Review Submissions"
        description="Validate impact claims and approve challenge completions."
      />
    </div>
  </>
);

const CampaignsView = () => (
  <div className="eq-table-container">
    <table className="eq-table">
      <thead>
        <tr>
          <th className="eq-th">Campaign Name</th>
          <th className="eq-th">Status</th>
          <th className="eq-th">Participants</th>
          <th className="eq-th">Participating Schools</th>
          <th className="eq-th">Impact Generated</th>
        </tr>
      </thead>
      <tbody>
        {CAMPAIGNS_DATA.map((campaign) => (
          <tr key={campaign.id} className="eq-tr">
            <td className="eq-td" style={{ fontWeight: 500 }}>{campaign.name}</td>
            <td className="eq-td">
              <span className={`eq-status-${campaign.status.toLowerCase()}`}>{campaign.status}</span>
            </td>
            <td className="eq-td">{campaign.participants.toLocaleString()}</td>
            <td className="eq-td">{campaign.schools}</td>
            <td className="eq-td" style={{ color: '#059669', fontWeight: 500 }}>{campaign.impact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SchoolPartnersView = () => (
  <div className="eq-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
    {PARTNER_SCHOOLS_DATA.map((school) => (
      <div key={school.id} className="eq-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, margin: 0, color: '#0f172a' }}>{school.name}</h3>
          <span className="eq-badge">{school.campaigns} Active Campaigns</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>Engagement Level</p>
            <p style={{ fontWeight: 500, margin: 0, color: school.engagement === 'Very High' ? '#059669' : '#334155' }}>{school.engagement}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>Last Activity</p>
            <p style={{ fontWeight: 500, margin: 0 }}>{school.lastActivity}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => { setActiveTab(id); setIsMobileMenuOpen(false); }}
      className={`eq-nav-item ${activeTab === id ? 'active' : ''}`}
    >
      <div style={{ width: 20 }}><Icon /></div>
      {label}
    </button>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <NGODashboardHome onNavigate={setActiveTab} />;
      case 'campaigns':
        return <CampaignsView />;
      case 'schools':
        return <SchoolPartnersView />;
      default:
        return <NGODashboardHome onNavigate={setActiveTab} />;
    }
  };

  const getTitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'NGO Impact Dashboard';
      case 'campaigns': return 'Active Campaigns & Initiatives';
      case 'schools': return 'School Partner Network';
      default: return 'Dashboard';
    }
  };

  const getSubtitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'Coordinate campaigns, track community outreach, and measure your environmental impact in real-time.';
      case 'campaigns': return 'Manage your ongoing initiatives, track participation numbers, and validate impact data.';
      case 'schools': return 'Monitor engagement levels and activity across all your partner educational institutions.';
      default: return '';
    }
  };

  return (
    <div className="eq-container">
      <style>{styles}</style>
      
      {/* Sidebar (Desktop) */}
      <aside className="eq-sidebar">
        <div className="eq-logo-area">
          <div className="eq-logo-icon">
            <Icons.Globe />
          </div>
          EcoQuest NGO
        </div>
        
        <div className="eq-nav">
          <NavItem id="dashboard" label="Dashboard" icon={Icons.Globe} />
          <NavItem id="campaigns" label="Campaigns" icon={Icons.Megaphone} />
          <NavItem id="schools" label="School Partners" icon={Icons.Building} />
        </div>

        {/* Logout Section */}
        <div style={{ padding: '16px', borderTop: '1px solid #f1f5f9' }}>
           <div style={{ padding: '0 12px 12px 12px' }}>
              <p style={{ margin: '0', fontSize: '12px', fontWeight: 600, color: '#0f172a' }}>Organization Admin</p>
              <p style={{ margin: '0', fontSize: '11px', color: '#64748b' }}>admin@greenyatra.org</p>
           </div>
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
              <Icons.Globe />
            </div>
            EcoQuest NGO
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none' }}>
            {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </header>

        {isMobileMenuOpen && (
          <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '16px', position: 'absolute', top: '60px', left: 0, right: 0, zIndex: 50, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
             <NavItem id="dashboard" label="Dashboard" icon={Icons.Globe} />
             <NavItem id="campaigns" label="Campaigns" icon={Icons.Megaphone} />
             <NavItem id="schools" label="School Partners" icon={Icons.Building} />
             <div style={{ height: '1px', background: '#f1f5f9', margin: '8px 0' }} />
             <button className="eq-nav-item logout">
               <div style={{ width: 20 }}><Icons.LogOut /></div>
               Logout
             </button>
          </div>
        )}

        <main className="eq-content">
          <div className="eq-title-section">
            <h1 className="eq-title">{getTitle()}</h1>
            <p className="eq-subtitle">{getSubtitle()}</p>
          </div>

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default NGODashboard;