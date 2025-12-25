import React from 'react'
import { LayoutProps } from 'sanity'
import { Menu, Search, Bell, User } from 'lucide-react'

const CustomLayout = (props: LayoutProps) => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-logo">FU</div>
            <div className="brand-text">
              <h1>Friends United</h1>
              <p>Admin Console</p>
            </div>
          </div>
        </div>

        <div className="sidebar-content">
          {/* We render the default tool menu here, but styled via CSS */}
          {props.renderDefault(props)}
        </div>

        <div className="sidebar-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
            <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
            System Operational
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Navigation Bar */}
        <header className="top-bar">
          <div className="page-title">Dashboard</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={20} color="#64748b" />
            </div>
            <div style={{ position: 'relative' }}>
              <Bell size={20} color="#64748b" />
              <div style={{ 
                position: 'absolute', 
                top: -2, 
                right: -2, 
                width: '8px', 
                height: '8px', 
                background: '#ef4444', 
                borderRadius: '50%',
                border: '2px solid white' 
              }}></div>
            </div>
            <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#0f172a' }}>Admin User</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Super Admin</div>
              </div>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                background: '#e2e8f0', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={20} color="#64748b" />
              </div>
            </div>
          </div>
        </header>

        {/* Tool Content Area */}
        <div className="content-area">
          {/* This renders the active tool (Desk, Dashboard, etc.) */}
          {props.renderDefault({ ...props })}
        </div>
      </main>
    </div>
  )
}

export default CustomLayout
