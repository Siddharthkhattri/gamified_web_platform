import React, { useState } from 'react';

/**
 * INTERNAL ICONS (School Admin Context)
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
  GraduationCap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Target: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  FileText: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
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
  Download: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  )
};

/**
 * MOCK DATA
 * ------------------------------------------------------------------
 */
const TEACHER_DATA = [
  { id: 1, name: "Sarah Jenkins", subject: "Biology", students: 45, impactScore: 92, status: "Active" },
  { id: 2, name: "Rajesh Kumar", subject: "Environmental Science", students: 52, impactScore: 95, status: "Active" },
  { id: 3, name: "Anita Desai", subject: "Geography", students: 38, impactScore: 88, status: "On Leave" },
  { id: 4, name: "Michael Chang", subject: "Chemistry", students: 42, impactScore: 85, status: "Active" },
];

const STUDENT_RANK_DATA = [
  { rank: 1, name: "Aarav Patel", grade: "9-A", points: 2450 },
  { rank: 2, name: "Diya Sharma", grade: "10-B", points: 2380 },
  { rank: 3, name: "Vihaan Singh", grade: "9-B", points: 2310 },
  { rank: 4, name: "Ananya Gupta", grade: "11-A", points: 2250 },
  { rank: 5, name: "Ishaan Kumar", grade: "12-C", points: 2100 },
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

  /* Table Styles */
  .eq-table-container { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
  .eq-table { width: 100%; border-collapse: collapse; text-align: left; }
  .eq-th { padding: 16px 24px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; font-size: 13px; background: #f8fafc; text-transform: uppercase; letter-spacing: 0.05em; }
  .eq-td { padding: 16px 24px; border-bottom: 1px solid #f1f5f9; color: #334155; font-size: 14px; }
  .eq-tr:last-child .eq-td { border-bottom: none; }
  .eq-tr:hover { background: #f8fafc; }

  .eq-badge { padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; display: inline-block; }
  .badge-active { background: #d1fae5; color: #059669; }
  .badge-leave { background: #fee2e2; color: #dc2626; }

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

const StatCard = ({ title, value, icon: Icon }) => (
  <div className="eq-card">
    <div className="eq-stat-header">
      <div className="eq-stat-icon"><Icon /></div>
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

const DashboardHome = ({ onNavigate }) => (
  <>
    <div className="eq-title-section">
      <h1 className="eq-title">School/College Dashboard 🏫</h1>
      <p className="eq-subtitle">Oversee institutional impact, manage teachers, and track campus-wide metrics.</p>
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      School-Wide Metrics
    </h2>

    <div className="eq-grid">
      <StatCard 
        title="Total Eco-Points" 
        value="15,000" 
        icon={Icons.Leaf}
      />
      <StatCard 
        title="Active Teachers" 
        value="5" 
        icon={Icons.Users}
      />
      <StatCard 
        title="Campus Challenges" 
        value="2" 
        icon={Icons.Target}
      />
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Management & Reporting
    </h2>
    
    <div className="eq-grid">
      <ActionButton 
        onClick={() => onNavigate('teachers')}
        icon={Icons.Users}
        title="Manage Teachers"
        description="View teacher performance and activity status."
      />
      <ActionButton 
        onClick={() => onNavigate('students')}
        icon={Icons.GraduationCap}
        title="Student Ranks"
        description="View top performing students across all grades."
      />
      <ActionButton 
        onClick={() => onNavigate('reports')}
        icon={Icons.FileText}
        title="Impact Report"
        description="Download full semester impact assessment."
      />
    </div>
  </>
);

const TeachersView = () => (
  <>
    <div className="eq-title-section">
      <h1 className="eq-title">Manage Teachers</h1>
      <p className="eq-subtitle">Overview of faculty engagement and performance.</p>
    </div>

    <div className="eq-table-container">
      <table className="eq-table">
        <thead>
          <tr>
            <th className="eq-th">Teacher Name</th>
            <th className="eq-th">Subject</th>
            <th className="eq-th">Students</th>
            <th className="eq-th">Impact Score</th>
            <th className="eq-th">Status</th>
          </tr>
        </thead>
        <tbody>
          {TEACHER_DATA.map((teacher) => (
            <tr key={teacher.id} className="eq-tr">
              <td className="eq-td" style={{ fontWeight: 500 }}>{teacher.name}</td>
              <td className="eq-td">{teacher.subject}</td>
              <td className="eq-td">{teacher.students}</td>
              <td className="eq-td" style={{ color: '#2563eb', fontWeight: 600 }}>{teacher.impactScore}</td>
              <td className="eq-td">
                <span className={`eq-badge ${teacher.status === 'Active' ? 'badge-active' : 'badge-leave'}`}>
                  {teacher.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const StudentsView = () => (
  <>
    <div className="eq-title-section">
      <h1 className="eq-title">Student Rankings</h1>
      <p className="eq-subtitle">Top performing students across the campus.</p>
    </div>

    <div className="eq-table-container">
      <table className="eq-table">
        <thead>
          <tr>
            <th className="eq-th">Rank</th>
            <th className="eq-th">Student Name</th>
            <th className="eq-th">Grade/Class</th>
            <th className="eq-th">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {STUDENT_RANK_DATA.map((student) => (
            <tr key={student.rank} className="eq-tr">
              <td className="eq-td">
                <div style={{ width: 28, height: 28, background: student.rank <= 3 ? '#fef3c7' : '#f1f5f9', color: student.rank <= 3 ? '#d97706' : '#64748b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '13px' }}>
                  {student.rank}
                </div>
              </td>
              <td className="eq-td" style={{ fontWeight: 500 }}>{student.name}</td>
              <td className="eq-td">{student.grade}</td>
              <td className="eq-td" style={{ color: '#059669', fontWeight: 600 }}>{student.points.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const ReportsView = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '48px', color: '#64748b' }}>
    <div style={{ marginBottom: '16px', color: '#2563eb' }}>
      <Icons.FileText />
    </div>
    <h2 style={{ color: '#0f172a', marginBottom: '8px' }}>Download Impact Reports</h2>
    <p style={{ marginBottom: '24px' }}>Select a report period to download PDF analytics.</p>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
      <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', width: '100%', maxWidth: '300px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', color: '#334155' }}>
        <Icons.Download /> Semester 1 Report (2024)
      </button>
      <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', width: '100%', maxWidth: '300px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', color: '#334155' }}>
        <Icons.Download /> Annual Green Audit (2023)
      </button>
    </div>
  </div>
);

const SchoolDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => { 
        setActiveTab(id); 
        setIsMobileMenuOpen(false); 
      }}
      className={`eq-nav-item ${activeTab === id ? 'active' : ''}`}
    >
      <div style={{ width: 20 }}><Icon /></div>
      {label}
    </button>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <DashboardHome onNavigate={setActiveTab} />;
      case 'teachers': return <TeachersView />;
      case 'students': return <StudentsView />;
      case 'reports': return <ReportsView />;
      default: return <DashboardHome onNavigate={setActiveTab} />;
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
          <NavItem id="teachers" label="Teachers" icon={Icons.Users} />
          <NavItem id="students" label="Students" icon={Icons.GraduationCap} />
          <NavItem id="reports" label="Reports" icon={Icons.FileText} />
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
             <NavItem id="teachers" label="Teachers" icon={Icons.Users} />
             <NavItem id="students" label="Students" icon={Icons.GraduationCap} />
             <NavItem id="reports" label="Reports" icon={Icons.FileText} />
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

export default SchoolDashboard;