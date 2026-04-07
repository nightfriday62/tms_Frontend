import './Home.css';

function Home() {
  return (
    <main className="page home-page">
      <div className="hero">
        <h1>Welcome to TMS</h1>
        <p className="hero-subtitle">
          A simple, fast task management system to keep your work organised.
        </p>
        <div className="hero-actions">
          <a href="/dashboard" className="btn btn-primary">Go to Dashboard</a>
          <a href="/tasks" className="btn btn-secondary">View Tasks</a>
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">📋</span>
          <h3>Task Tracking</h3>
          <p>Create, assign, and track tasks across your team.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3>Dashboard</h3>
          <p>Get an at-a-glance overview of all your active work.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚙️</span>
          <h3>Settings</h3>
          <p>Customise the system to fit your workflow.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
