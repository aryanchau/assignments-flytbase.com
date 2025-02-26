// import React, { useState } from 'react';

// const PathInput = ({ addPath }) => {
//   const [input, setInput] = useState('');

//   const handleSubmit = () => {
//     try {
//       const parsedPath = JSON.parse(input);
//       addPath(parsedPath);
//       setInput('');
//     } catch (e) {
//       alert('Invalid input! Please enter a valid JSON array of [latitude, longitude] pairs.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//       <textarea
//         rows="4"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder='Enter path as [[lat, lng], [lat, lng], ...]'
//         style={{
//           width: '100%',
//           padding: '10px',
//           borderRadius: '8px',
//           border: '1px solid #ccc',
//           boxSizing: 'border-box',
//           fontSize: '14px',
//           transition: 'border 0.3s',
//           resize: 'vertical'
//         }}
//         onFocus={(e) => (e.target.style.borderColor = '#4F46E5')}
//         onBlur={(e) => (e.target.style.borderColor = '#ccc')}
//       />
//       <button 
//         onClick={handleSubmit} 
//         style={{
//           display: 'inline-block',
//           marginTop: '10px',
//           padding: '10px 20px',
//           backgroundColor: '#4F46E5',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           fontSize: '14px',
//           transition: 'background-color 0.3s, box-shadow 0.3s'
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.backgroundColor = '#4338CA';
//           e.target.style.boxShadow = '0 4px 10px rgba(67, 56, 202, 0.3)';
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.backgroundColor = '#4F46E5';
//           e.target.style.boxShadow = 'none';
//         }}
//         onMouseDown={(e) => {
//           e.target.style.backgroundColor = '#3730A3';
//           e.target.style.boxShadow = 'none';
//           e.target.style.transform = 'translateY(1px)';
//         }}
//         onMouseUp={(e) => {
//           e.target.style.backgroundColor = '#4338CA';
//           e.target.style.transform = 'none';
//         }}
//       >
//         Add Path
//       </button>
//     </div>
//   );
// };

// export default PathInput;
