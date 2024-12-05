import React, { useState, ChangeEvent } from 'react';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';

const App: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>PDF Viewer</h1>

      <div className="upload-section" style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          style={{ marginBottom: '10px' }}
        />
      </div>

      {pdfUrl && (
        <div className="pdf-container" style={{ width: '100%', height: '600px' }}>
          {/* Assuming the correct prop name is 'file' */}
          <EmbedPDF file={pdfUrl} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default App;
