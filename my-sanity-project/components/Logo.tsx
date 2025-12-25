import React from 'react'

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #2563eb 0%, #dc2626 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        FU
      </div>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#1a1a1a' }}>
          Friends United
        </div>
        <div style={{ fontSize: '11px', color: '#666' }}>Admin Dashboard</div>
      </div>
    </div>
  )
}

export default Logo
