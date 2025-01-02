import React, { useState } from "react";
import QRReader from "react-qr-reader";

const QRScanner = ({ onScanResult }) => {
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      onScanResult(data); // Pass the scanned data to the parent component
    }
  };

  const handleError = (err) => {
    setError(err);
  };

  return (
    <div>
      <h2>Scan QR Code</h2>
      <QRReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default QRScanner;
