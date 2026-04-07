import './Settings.css';

function Settings() {
  return (
    <main className="page settings-page">
      <h2>Settings</h2>

      <section className="settings-section">
        <h3>Organisation</h3>
        <div className="form-group">
          <label htmlFor="org-name">Company Name</label>
          <input id="org-name" type="text" placeholder="Your company name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Contact Email</label>
          <input id="email" type="email" placeholder="operations@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="timezone">Timezone</label>
          <input id="timezone" type="text" placeholder="e.g. America/New_York" />
        </div>
      </section>

      <section className="settings-section">
        <h3>Preferences</h3>
        <div className="form-group form-group--row">
          <input id="notifications" type="checkbox" />
          <label htmlFor="notifications">Enable shipment delay notifications</label>
        </div>
        <div className="form-group form-group--row">
          <input id="metric" type="checkbox" defaultChecked />
          <label htmlFor="metric">Use metric units (km)</label>
        </div>
      </section>

      <button className="btn-save" disabled>
        Save Changes
      </button>
    </main>
  );
}

export default Settings;
