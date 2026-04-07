import './Routes.css';

interface Route {
  id: string;
  name: string;
  origin: string;
  destination: string;
  distanceKm: number;
  estimatedHours: number;
  activeShipments: number;
}

const SAMPLE_ROUTES: Route[] = [
  { id: 'RTE-001', name: 'East Coast Express', origin: 'New York, NY', destination: 'Miami, FL', distanceKm: 2050, estimatedHours: 20, activeShipments: 3 },
  { id: 'RTE-002', name: 'Midwest Loop', origin: 'Chicago, IL', destination: 'Detroit, MI', distanceKm: 460, estimatedHours: 5, activeShipments: 1 },
  { id: 'RTE-003', name: 'Southern Cross', origin: 'Dallas, TX', destination: 'Atlanta, GA', distanceKm: 1290, estimatedHours: 13, activeShipments: 2 },
  { id: 'RTE-004', name: 'Pacific Corridor', origin: 'Los Angeles, CA', destination: 'Seattle, WA', distanceKm: 1860, estimatedHours: 18, activeShipments: 0 },
];

function Routes() {
  return (
    <main className="page routes-page">
      <h2>Routes</h2>

      <table className="routes-table">
        <thead>
          <tr>
            <th>Route ID</th>
            <th>Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Distance (km)</th>
            <th>Est. Hours</th>
            <th>Active Shipments</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_ROUTES.map((route) => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.name}</td>
              <td>{route.origin}</td>
              <td>{route.destination}</td>
              <td>{route.distanceKm.toLocaleString()}</td>
              <td>{route.estimatedHours}</td>
              <td>
                <span className={`shipment-count${route.activeShipments > 0 ? ' has-shipments' : ''}`}>
                  {route.activeShipments}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Routes;
