import React, { useState } from 'react';

const PathInput = ({ addPath }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    try {
      const parsedPath = JSON.parse(input);
      addPath(parsedPath);
      setInput('');
    } catch (e) {
      alert('Invalid input! Please enter a valid JSON array of [latitude, longitude] pairs.');
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          if (Array.isArray(json)) {
            json.forEach(path => {
              if (Array.isArray(path)) {
                addPath(path);
              } else {
                alert('Invalid path format!');
              }
            });
          } else {
            alert('Invalid file format!');
          }
        } catch (error) {
          alert(`Invalid file format in ${file.name}`);
        }
      };
      reader.readAsText(file);
    });
  };
  

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '50vh',
        paddingTop: '60px',
        backgroundColor: '#F3F4F6'
      }}
    >
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        padding: '20px',
        width: '60%',
        maxWidth: '600px'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '8px',
          marginBottom: '20px'
        }}>
          Add Path
        </h2>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <textarea
            rows="4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter path as [[lat, lng], [lat, lng], ...]'
            style={{
              width: '50%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #D1D5DB',
              outline: 'none',
              resize: 'none',
              boxSizing: 'border-box'
            }}
          />

          <div style={{ width: '50%' }}>
            <span style={{
              display: 'block',
              color: '#4B5563',
              marginBottom: '8px',
              fontSize: '14px'
            }}>
              Upload JSON File(s):
            </span>
            <input
              type="file"
              accept=".json"
              multiple
              onChange={handleFileChange}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                fontSize: '14px',
                color: '#374151',
                border: '1px solid #D1D5DB',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        <button 
          onClick={handleSubmit} 
          style={{
            display: 'block',
            width: '100%',
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#3B82F6',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563EB'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3B82F6'}
        >
          Add Path
        </button>
      </div>
    </div>
  );
};

export default PathInput;
