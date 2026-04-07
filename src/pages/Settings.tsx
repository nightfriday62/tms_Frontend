import './Settings.css';

function Settings() {
  return (
    <main className="page settings-page">
      <h2>Settings</h2>

      <section className="settings-section">
        <h3>Profile</h3>
        <div className="form-group">
          <label htmlFor="name">Display Name</label>
          <input id="name" type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>
      </section>

      <section className="settings-section">
        <h3>Preferences</h3>
        <div className="form-group form-group--row">
          <input id="notifications" type="checkbox" />
          <label htmlFor="notifications">Enable email notifications</label>
        </div>
      </section>

      <button className="btn-save" disabled>
        Save Changes
      </button>
    </main>
  );
}

export default Settings;
