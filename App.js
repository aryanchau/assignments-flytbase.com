import React, { useState } from 'react';
import DroneMap from './components/DroneMap';
import PathInput from './components/PathInput';
import FileInput from './components/FileInput';
import ControlPanel from './components/ControlPanel';
import SeekBar from './components/SeekBar';

const App = () => {
  const [paths, setPaths] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const addPath = (newPath) => {
    setPaths([...paths, newPath]);
  };

  const toggleSimulation = () => {
    setIsSimulating(!isSimulating);
    if (!isSimulating) setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  return (
    <div className="app">
      <h1 className="text-2xl font-bold mb-4">Drone Motion Simulator</h1>
      <div className="flex">
        <div className="controls p-4">
          <PathInput addPath={addPath} />
          {/* <FileInput addPath={addPath} /> */}
          <ControlPanel
            isSimulating={isSimulating}
            isPaused={isPaused}
            toggleSimulation={toggleSimulation}
            togglePause={togglePause}
            resetSimulation={resetSimulation}
          />
          <SeekBar
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            maxTime={paths.length > 0 ? paths[0].length : 0}
          />
        </div>
        <DroneMap
          paths={paths}
          isSimulating={isSimulating}
          isPaused={isPaused}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      </div>
    </div>
  );
};

export default App;
