import './App.css';
import React, { useState } from 'react';
import Canvas from './Components/Canvas';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


function App() {

  // radius of canvas
  const diameter = 500;

  // boolean for deleting path by button
  const [delPath, setDelPath] = useState(null);

  const [drawingPoints, setDrawingPoints] = useState([]);

  const handlePathDelete = () => {
    setDelPath(true);
  };

  
  // Function to update the variable
  const updateDrawingPoints = (newPoints) => {

    setDrawingPoints([...drawingPoints, [Math.round(newPoints.x * 1000) / 1000, Math.round(newPoints.y * 1000) / 1000]]);
    // setDrawingPoints([[...drawingPoints, newPoints.x, newPoints.y]]);
    console.log(drawingPoints);
  };


  // maps
  // const center = [44.8566, 2.3522];
  const zoom = 13;
  
  return (
    <div className="App">
      <MapContainer center = {[44.8566, 2.3522]} zoom={{zoom}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
      <Canvas 
      width={diameter}
      height={diameter}
      delPath={delPath}
      setDelPath={setDelPath}
      updateDrawingPoints={updateDrawingPoints}
      />
      <button type="button" onClick={handlePathDelete}>Delete Path</button>
    </div>
  );
}

export default App;
