import { useState } from 'react';
import '../styles/ProfileSettings.css';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
    privacy: 'public',
  });

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="profile-settings">
      <h2>Profile Settings (Nested Route)</h2>
      
      <div className="settings-form">
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleChange('notifications', e.target.checked)}
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting-item">
          <label>Theme:</label>
          <select value={settings.theme} onChange={(e) => handleChange('theme', e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Privacy:</label>
          <select value={settings.privacy} onChange={(e) => handleChange('privacy', e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <button className="save-btn">Save Settings</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
