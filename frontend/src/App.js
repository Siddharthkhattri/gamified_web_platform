import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
// The AuthProvider and GameProvider are wrapped in src/index.js

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages - Organized by Feature
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/authentication/pages/LoginPage';
import RoleSelectionPage from './features/authentication/pages/RoleSelectionPage';
import RegisterPage from './features/authentication/pages/RegisterPage';

// Role-Based Dashboards
import StudentDashboard from './features/dashboard/pages/StudentDashboard';
import TeacherDashboard from './features/dashboard/pages/TeacherDashboard';
import SchoolDashboard from './features/dashboard/pages/SchoolDashboard';
import NGODashboard from './features/dashboard/pages/NGODashboard';
import ParentDashboard from './features/dashboard/pages/ParentDashboard';
import GovernmentDashboard from './features/dashboard/pages/GovernmentDashboard';

// Feature Pages
import LessonsPage from './features/lessons/pages/LessonsPage';
import ChallengesPage from './features/challenges/pages/ChallengesPage';
import LeaderboardPage from './features/gamification/pages/LeaderboardPage';
import ProfilePage from './features/userProfile/pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage'; // Ensure this file exists

function App() {
  const { user, isAuthenticated } = useAuth();

  const getDashboardPath = (role) => {
    switch (role) {
      case 'student': return '/dashboard/student';
      case 'teacher': return '/dashboard/teacher';
      case 'school': return '/dashboard/school';
      case 'ngo': return '/dashboard/ngo';
      case 'parent': return '/dashboard/parent';
      case 'government': return '/dashboard/government';
      default: return '/dashboard/student';
    }
  };

  return (
    <Routes>
      {/* Public/Main Layout Routes */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      
      {/* Authentication Routes */}
      <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><RoleSelectionPage /></AuthLayout>} />
      <Route path="/register/:role" element={<AuthLayout><RegisterPage /></AuthLayout>} />

      {/* Redirect after login/registration based on role */}
      {isAuthenticated && (
        <Route 
          path="/dashboard" 
          element={<Navigate to={getDashboardPath(user?.role)} replace />} 
        />
      )}
      
      {/* Role-Based Protected Dashboard Routes (Using <Outlet /> in DashboardLayout) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/school" element={<SchoolDashboard />} />
        <Route path="/dashboard/ngo" element={<NGODashboard />} />
        <Route path="/dashboard/parent" element={<ParentDashboard />} />
        <Route path="/dashboard/government" element={<GovernmentDashboard />} />

        {/* Feature Routes */}
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* Catch all - 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;