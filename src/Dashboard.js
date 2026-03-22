// Importing necessary libraries
import React from 'react';
import { Map, Marker } from 'react-map-gl';

const Dashboard = () => {
  // Sample data for monitoring
  const incidents = [
    { id: 1, lat: 37.78, lng: -122.45, description: 'Incident 1' },
    { id: 2, lat: 37.79, lng: -122.46, description: 'Incident 2' }
  ];

  const fleetStatus = [
    { vehicleId: 'Ambulance 1', status: 'Available' },
    { vehicleId: 'Ambulance 2', status: 'En route' }
  ];

  return (
    <div>
      <h1>Ambulance Dispatch Dashboard</h1>
      <h2>Live Monitoring</h2>
      <Map
        initialViewState={{
          longitude: -122.45,
          latitude: 37.78,
          zoom: 12
        }}
        style={{ width: '100%', height: '400px' }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {incidents.map(incident => (
          <Marker key={incident.id} longitude={incident.lng} latitude={incident.lat}>
            <div style={{ color: 'red' }}>🚑</div>
          </Marker>
        ))}
      </Map>
      <h2>Incident Management</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>{incident.description}</li>
        ))}
      </ul>
      <h2>Fleet Status</h2>
      <ul>
        {fleetStatus.map(vehicle => (
          <li key={vehicle.vehicleId}>{vehicle.vehicleId}: {vehicle.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;