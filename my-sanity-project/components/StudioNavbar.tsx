import React from 'react'
import { NavbarProps } from 'sanity'

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      {props.renderDefault(props)}
      <div
        style={{
          padding: '10px 20px',
          background: 'linear-gradient(90deg, #2563eb 0%, #dc2626 100%)',
          color: 'white',
          fontSize: '12px',
          fontWeight: '500',
          textAlign: 'center',
        }}
      >
        🇦🇺 Making Australia the Lucky Country Again
      </div>
    </div>
  )
}

export default StudioNavbar
