import React from 'react';

const ControlPanel = ({ isSimulating, isPaused, toggleSimulation, togglePause, resetSimulation }) => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <button 
      onClick={toggleSimulation} 
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: isSimulating ? '#DC2626' : '#10B981',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s, box-shadow 0.3s'
      }}
      onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'}
      onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
      onMouseDown={(e) => {
        e.target.style.transform = 'translateY(1px)';
        e.target.style.boxShadow = 'none';
      }}
      onMouseUp={(e) => {
        e.target.style.transform = 'none';
      }}
    >
      {isSimulating ? 'Stop' : 'Simulate'}
    </button>

    {isSimulating && (
      <button 
        onClick={togglePause} 
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: isPaused ? '#3B82F6' : '#F59E0B',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'background-color 0.3s, box-shadow 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
        onMouseDown={(e) => {
          e.target.style.transform = 'translateY(1px)';
          e.target.style.boxShadow = 'none';
        }}
        onMouseUp={(e) => {
          e.target.style.transform = 'none';
        }}
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    )}

    <button 
      onClick={resetSimulation} 
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#6B7280',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s, box-shadow 0.3s'
      }}
      onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 2)'}
      onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
      onMouseDown={(e) => {
        e.target.style.transform = 'translateY(1px)';
        e.target.style.boxShadow = 'none';
      }}
      onMouseUp={(e) => {
        e.target.style.transform = 'none';
      }}
    >
      Reset
    </button>
  </div>
);

export default ControlPanel;
