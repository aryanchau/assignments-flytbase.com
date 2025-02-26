import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// Custom drone icon
const droneIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/color/48/000000/drone.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const interpolate = (start, end, t) => start + (end - start) * t;

const DroneMap = ({ paths, isSimulating, isPaused, setCurrentTime }) => {
  const [positions, setPositions] = useState([]);
  const [drawnPaths, setDrawnPaths] = useState([]);
  const animationRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const moveDrone = () => {
    if (isSimulating && !isPaused && paths.length > 0) {
      const newPositions = paths.map(path => {
        if (currentStep < path.length - 1) {
          const start = path[currentStep];
          const end = path[currentStep + 1];
          const lat = interpolate(Number(start[0]), Number(end[0]), progress);
          const lng = interpolate(Number(start[1]), Number(end[1]), progress);
          
          return [lat, lng];
        }
        return path[path.length - 1];
      });

      setPositions(newPositions);

      if (progress >= 1) {
        setCurrentStep(prev => prev + 1);
        setProgress(0);
        setDrawnPaths(paths.map(path => path.slice(0, currentStep + 2)));
      } else {
        setProgress(prev => prev + 0.005);  // Adjust this for speed
      }
    }

    animationRef.current = requestAnimationFrame(moveDrone);
  };

  useEffect(() => {
    if (isSimulating) {
      animationRef.current = requestAnimationFrame(moveDrone);
    }

    return () => cancelAnimationFrame(animationRef.current);
  }, [isSimulating, isPaused, currentStep, progress, paths]);

  return (
    <div className="map-container">
      <MapContainer center={[20, 77]} zoom={5} style={{ height: '600px', width: '100%', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {drawnPaths.map((path, index) => (
          <Polyline key={index} positions={path} color="blue" />
        ))}
        {positions.map((position, index) => (
          <Marker key={index} position={position} icon={droneIcon} />
        ))}
      </MapContainer>
    </div>
  );
};

export default DroneMap;
