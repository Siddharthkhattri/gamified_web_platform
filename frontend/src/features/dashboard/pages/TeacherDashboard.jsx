import React, { useState } from 'react';

/**
 * INTERNAL ICONS (Teacher Context)
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
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
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
  PlusCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/>
    </svg>
  ),
  BarChart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
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
  )
};

/**
 * MOCK DATA (Synced with Student Dashboard)
 * ------------------------------------------------------------------
 */
const CLASS_DATA = [
  { rank: 1, name: "Aarav Patel", points: 2450, quizzes: 12, challenges: 5, status: "Excellent" },
  { rank: 2, name: "Diya Sharma", points: 2380, quizzes: 11, challenges: 5, status: "Excellent" },
  { rank: 3, name: "Vihaan Singh", points: 2310, quizzes: 10, challenges: 4, status: "Good" },
  { rank: 4, name: "Ananya Gupta", points: 2250, quizzes: 12, challenges: 4, status: "Good" },
  { rank: 5, name: "Ishaan Kumar", points: 2100, quizzes: 9, challenges: 3, status: "Average" },
  { rank: 6, name: "Riya Verma", points: 2050, quizzes: 9, challenges: 3, status: "Average" },
  { rank: 7, name: "Kabir Mehta", points: 1980, quizzes: 8, challenges: 2, status: "Needs Support" },
  { rank: 8, name: "Saira Khan", points: 1900, quizzes: 7, challenges: 2, status: "Needs Support" },
  { rank: 9, name: "Arjun Reddy", points: 1850, quizzes: 6, challenges: 1, status: "At Risk" },
  { rank: 10, name: "Meera Nair", points: 1800, quizzes: 6, challenges: 1, status: "At Risk" },
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
  .badge-excellent { background: #d1fae5; color: #059669; }
  .badge-good { background: #e0f2fe; color: #0284c7; }
  .badge-average { background: #fef3c7; color: #d97706; }
  .badge-risk { background: #fee2e2; color: #dc2626; }

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
      <h1 className="eq-title">Teacher Dashboard 🧑‍🏫</h1>
      <p className="eq-subtitle">Manage your students, create challenges, and track class progress.</p>
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Your Classes & Activity
    </h2>

    <div className="eq-grid">
      <StatCard 
        title="Total Students" 
        value="45" 
        icon={Icons.Users}
      />
      <StatCard 
        title="Pending Challenges" 
        value="3" 
        icon={Icons.Target}
      />
      <StatCard 
        title="New Submissions" 
        value="12" 
        icon={Icons.BookOpen}
      />
    </div>

    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#1e293b' }}>
      Action Center
    </h2>
    
    <div className="eq-grid">
      <ActionButton 
        onClick={() => onNavigate('create')}
        icon={Icons.PlusCircle}
        title="Create New Challenge"
        description="Launch a new initiative or quiz for your class."
      />
      <ActionButton 
        onClick={() => onNavigate('lessons')}
        icon={Icons.BookOpen}
        title="Assign Lessons"
        description="Select new modules from the curriculum."
      />
      <ActionButton 
        onClick={() => onNavigate('progress')}
        icon={Icons.BarChart}
        title="View Student Progress Reports"
        description="Detailed breakdown of grades and engagement."
      />
    </div>
  </>
);

const StudentProgressView = () => (
  <>
    <div className="eq-title-section">
      <h1 className="eq-title">Student Progress Reports</h1>
      <p className="eq-subtitle">Detailed performance metrics for Class 9-A.</p>
    </div>

    <div className="eq-table-container">
      <table className="eq-table">
        <thead>
          <tr>
            <th className="eq-th">Student Name</th>
            <th className="eq-th">Total Points</th>
            <th className="eq-th">Quizzes Passed</th>
            <th className="eq-th">Challenges Done</th>
            <th className="eq-th">Performance</th>
            <th className="eq-th">Action</th>
          </tr>
        </thead>
        <tbody>
          {CLASS_DATA.map((student) => {
            let badgeClass = "badge-average";
            if (student.status === "Excellent") badgeClass = "badge-excellent";
            if (student.status === "Good") badgeClass = "badge-good";
            if (student.status === "At Risk") badgeClass = "badge-risk";

            return (
              <tr key={student.rank} className="eq-tr">
                <td className="eq-td" style={{ fontWeight: 500 }}>{student.name}</td>
                <td className="eq-td" style={{ color: '#2563eb', fontWeight: 600 }}>{student.points.toLocaleString()}</td>
                <td className="eq-td">{student.quizzes}</td>
                <td className="eq-td">{student.challenges}</td>
                <td className="eq-td">
                  <span className={`eq-badge ${badgeClass}`}>{student.status}</span>
                </td>
                <td className="eq-td">
                  <button style={{ color: '#64748b', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline' }}>
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </>
);

const CreateChallengeView = ({ onCancel }) => {
  const [step, setStep] = useState('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '48px' }}>
        <div style={{ marginBottom: '16px', color: '#10b981', display: 'inline-block' }}>
          <div style={{ width: 64, height: 64, background: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Icons.CheckCircle />
          </div>
        </div>
        <h2 style={{ color: '#0f172a', marginBottom: '8px', fontSize: '24px' }}>Challenge Published!</h2>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>Your students have been notified and the challenge is now live.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            onClick={onCancel}
            style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', fontWeight: 600, cursor: 'pointer' }}
          >
            Back to Dashboard
          </button>
          <button 
            onClick={() => setStep('form')}
            style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', background: '#2563eb', color: 'white', fontWeight: 600, cursor: 'pointer' }}
          >
            Create Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="eq-title-section">
        <h1 className="eq-title">Create New Challenge</h1>
        <p className="eq-subtitle">Design a new activity or quiz for your class.</p>
      </div>

      <div className="eq-card">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Title */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '14px' }}>Challenge Title</label>
            <input 
              type="text" 
              placeholder="e.g., Plastic-Free Week" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
              required 
            />
          </div>

          {/* Type & Points */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '14px' }}>Challenge Type</label>
              <div style={{ position: 'relative' }}>
                <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', background: 'white', appearance: 'none', cursor: 'pointer' }}>
                  <option>Quiz</option>
                  <option>Photo Submission</option>
                  <option>Reading Assignment</option>
                  <option>Field Activity</option>
                </select>
                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }}>▼</div>
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '14px' }}>Points Reward</label>
              <input 
                type="number" 
                placeholder="e.g., 50" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                required 
              />
            </div>
          </div>

          {/* Date */}
           <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '14px' }}>Due Date</label>
            <input 
              type="date" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
              required 
            />
          </div>

          {/* Description */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '14px' }}>Description & Instructions</label>
            <textarea 
              rows="5" 
              placeholder="Explain what students need to do..." 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }}
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
            <button 
              type="button" 
              onClick={onCancel}
              style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', fontWeight: 600, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', background: '#2563eb', color: 'white', fontWeight: 600, cursor: 'pointer' }}
            >
              Publish Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PlaceholderView = ({ title }) => (
  <div style={{ textAlign: 'center', padding: '48px', color: '#64748b' }}>
    <h2 style={{ color: '#0f172a', marginBottom: '8px' }}>{title}</h2>
    <p>This module is coming soon!</p>
  </div>
);

const TeacherDashboard = () => {
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
      case 'progress': return <StudentProgressView />;
      case 'create': return <CreateChallengeView onCancel={() => setActiveTab('dashboard')} />;
      case 'lessons': return <PlaceholderView title="Lesson Planner" />;
      case 'challenges': return <PlaceholderView title="Challenge Manager" />;
      case 'leaderboard': return <PlaceholderView title="Class Leaderboard" />;
      case 'profile': return <PlaceholderView title="Teacher Profile" />;
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
          <NavItem id="lessons" label="Lessons" icon={Icons.BookOpen} />
          <NavItem id="challenges" label="Challenges" icon={Icons.Target} />
          <NavItem id="leaderboard" label="Leaderboard" icon={Icons.Trophy} />
          <NavItem id="profile" label="Profile" icon={Icons.Users} />
          <div style={{ height: '1px', background: '#f1f5f9', margin: '8px 12px' }} />
          <NavItem id="progress" label="Student Progress" icon={Icons.BarChart} />
          <NavItem id="create" label="Create Challenge" icon={Icons.PlusCircle} />
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
             <NavItem id="profile" label="Profile" icon={Icons.Users} />
             <NavItem id="progress" label="Student Progress" icon={Icons.BarChart} />
             <NavItem id="create" label="Create Challenge" icon={Icons.PlusCircle} />
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

export default TeacherDashboard;