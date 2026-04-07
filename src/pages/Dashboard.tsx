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
        <StatCard label="Active Shipments" value={0} color="#3b82f6" />
        <StatCard label="In Transit" value={0} color="#f59e0b" />
        <StatCard label="Delivered" value={0} color="#22c55e" />
        <StatCard label="Delayed" value={0} color="#ef4444" />
      </section>

      <section className="recent-section">
        <h3>Recent Activity</h3>
        <p className="empty-state">No recent activity yet.</p>
      </section>
    </main>
  );
}

export default Dashboard;
