import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { QrReader } from 'react-qr-reader';

// The 3D Model Component
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const App = () => {
  const [modelPath, setModelPath] = useState("");

  // Handle the scanned QR code result
  const handleScanResult = (data) => {
    if (data) {
      console.log("Scanned QR Code:", data);
      setModelPath(data); // Assume the QR code gives the path to the 3D model
    }
  };

  const handleError = (error) => {
    console.error("QR scan error:", error);
  };

  return (
    <div>
      <h1>QR Scanner and 3D Model Viewer</h1>
      
      {/* Display the QR Scanner */}
      <QrReader
        onResult={handleScanResult}
        onError={handleError}
        style={{ width: "100%" }}
      />
      
      {/* Display the 3D model when a model path is available */}
      {modelPath && (
        <Canvas style={{ height: "500px" }}>
          <ambientLight />
          <spotLight position={[10, 10, 10]} />
          <Model modelPath={modelPath} />
        </Canvas>
      )}
    </div>
  );
};

export default App;
