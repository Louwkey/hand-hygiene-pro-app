import { useState } from 'react';
import { Shield, Activity, Users, TrendingUp, BarChart3, FileText, User, Plus } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const complianceData = {
    overall: 87,
    departments: [
      { name: "ICU", compliance: 92, observations: 156 },
      { name: "Emergency", compliance: 84, observations: 203 },
      { name: "Surgery", compliance: 89, observations: 178 },
      { name: "Pediatrics", compliance: 91, observations: 134 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield size={32} color="#22c55e" />
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Hand Hygiene Audit</h1>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Healthcare Compliance Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Navigation */}
        <div style={{ display: 'flex', gap: '0.25rem', background: '#f3f4f6', padding: '0.25rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'audit', label: 'Audit', icon: FileText },
            { id: 'reports', label: 'Reports', icon: TrendingUp },
            { id: 'account', label: 'Account', icon: User }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? '#22c55e' : '#6b7280',
                boxShadow: activeTab === tab.id ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'
              }}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' and (
          <div>Dashboard Loaded</div>
        )}
      </main>
    </div>
  );
};

export default Index;