import './Home.css';

function Home() {
  return (
    <main className="page home-page">
      <div className="hero">
        <h1>Welcome to TMS</h1>
        <p className="hero-subtitle">
          A modern Transportation Management System to plan, track, and optimise your freight operations.
        </p>
        <div className="hero-actions">
          <a href="/dashboard" className="btn btn-primary">Go to Dashboard</a>
          <a href="/shipments" className="btn btn-secondary">View Shipments</a>
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <h3>Shipment Tracking</h3>
          <p>Create, assign, and monitor shipments in real time.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🗺️</span>
          <h3>Route Planning</h3>
          <p>Optimise delivery routes to cut costs and transit times.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3>Dashboard</h3>
          <p>Get an at-a-glance overview of your entire fleet operations.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚙️</span>
          <h3>Settings</h3>
          <p>Customise the system to fit your logistics workflow.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
