import React from 'react';

const SeekBar = ({ currentTime, setCurrentTime, maxTime }) => (
  <div style={{ textAlign: 'center', margin: '20px 0' }}>
    <input
      type="range"
      min="0"
      max={maxTime}
      value={currentTime}
      onChange={(e) => setCurrentTime(Number(e.target.value))}
      style={{
        width: '80%',
        appearance: 'none',
        height: '8px',
        borderRadius: '5px',
        background: '#D1D5DB',
        outline: 'none',
        transition: 'background 0.3s'
      }}
      onMouseEnter={(e) => (e.target.style.background = '#9CA3AF')}
      onMouseLeave={(e) => (e.target.style.background = '#D1D5DB')}
    />
    <p style={{ fontSize: '14px', color: '#4B5563', marginTop: '5px' }}>
      Time: <span style={{ color: '#1F2937' }}>{currentTime}s</span> / {maxTime}s
    </p>
  </div>
);

export default SeekBar;
