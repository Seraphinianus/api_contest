import logo from './logo.svg';
import './App.css';
import Setup from '../src/boilerplates/1-first-request';
import Setup2 from '../src/boilerplates/2-headers';
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
     <mesh {...props} ref={mesh}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"orange"} />
     </mesh>
  );
}

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <p>sal ba</p>
        <Setup />
        <Setup2 />
      </header>
    </div>

  );
}

export default App;
