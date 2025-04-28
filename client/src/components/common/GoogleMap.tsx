import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
  height?: string;
  zoom?: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  address, 
  className = "w-full h-full rounded-lg",
  height = "100%",
  zoom = 15
}) => {
  const mapRef = useRef<HTMLIFrameElement>(null);

  // Function to create a safe URL-encoded address
  const getMapUrl = (address: string): string => {
    const encodedAddress = encodeURIComponent(address);
    return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className={className} style={{ height }}>
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={getMapUrl(address)}
        title={`Google Map - ${address}`}
        style={{ border: 0, borderRadius: 'inherit' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;