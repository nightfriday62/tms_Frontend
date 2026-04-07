import { useState } from 'react';
import './Shipments.css';

type ShipmentStatus = 'Pending' | 'In Transit' | 'Delivered' | 'Delayed';

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  carrier: string;
  status: ShipmentStatus;
  eta: string;
}

const SAMPLE_SHIPMENTS: Shipment[] = [
  { id: 'SHP-001', origin: 'New York, NY', destination: 'Los Angeles, CA', carrier: 'Swift Freight', status: 'In Transit', eta: '2026-04-10' },
  { id: 'SHP-002', origin: 'Chicago, IL', destination: 'Houston, TX', carrier: 'Eagle Logistics', status: 'Pending', eta: '2026-04-12' },
  { id: 'SHP-003', origin: 'Miami, FL', destination: 'Seattle, WA', carrier: 'Pacific Carriers', status: 'Delayed', eta: '2026-04-09' },
  { id: 'SHP-004', origin: 'Dallas, TX', destination: 'Phoenix, AZ', carrier: 'Desert Express', status: 'Delivered', eta: '2026-04-06' },
  { id: 'SHP-005', origin: 'Boston, MA', destination: 'Denver, CO', carrier: 'Swift Freight', status: 'In Transit', eta: '2026-04-11' },
];

const STATUS_COLOR: Record<ShipmentStatus, string> = {
  Pending: '#94a3b8',
  'In Transit': '#3b82f6',
  Delivered: '#22c55e',
  Delayed: '#ef4444',
};

function Shipments() {
  const [shipments] = useState<Shipment[]>(SAMPLE_SHIPMENTS);
  const [filter, setFilter] = useState<ShipmentStatus | 'All'>('All');

  const visible =
    filter === 'All' ? shipments : shipments.filter((s) => s.status === filter);

  return (
    <main className="page shipments-page">
      <h2>Shipments</h2>

      <div className="shipments-toolbar">
        {(['All', 'Pending', 'In Transit', 'Delivered', 'Delayed'] as const).map((s) => (
          <button
            key={s}
            className={`filter-btn${filter === s ? ' active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty-state">No shipments found.</p>
      ) : (
        <table className="shipments-table">
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Carrier</th>
              <th>ETA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.origin}</td>
                <td>{shipment.destination}</td>
                <td>{shipment.carrier}</td>
                <td>{shipment.eta}</td>
                <td>
                  <span
                    className="badge"
                    style={{ backgroundColor: STATUS_COLOR[shipment.status] }}
                  >
                    {shipment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Shipments;

