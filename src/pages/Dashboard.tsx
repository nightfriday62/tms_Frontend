import './Dashboard.css';

interface StatCardProps {
  label: string;
  value: number;
  color: string;
}

function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="stat-card" style={{ borderTopColor: color }}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Dashboard() {
  return (
    <main className="page dashboard-page">
      <h2>Dashboard</h2>

      <section className="stats-grid">
        <StatCard label="Shipments" value={0} color="#3b82f6" />
        <StatCard label="Shipping Units" value={0} color="#f59e0b" />
        <StatCard label="Trucks" value={0} color="#22c55e" />
        <StatCard label="Drivers" value={0} color="#8b5cf6" />
      </section>

      <section className="recent-section">
        <h3>Recent Activity</h3>
        <p className="empty-state">No recent activity yet.</p>
      </section>
    </main>
  );
}

export default Dashboard;
