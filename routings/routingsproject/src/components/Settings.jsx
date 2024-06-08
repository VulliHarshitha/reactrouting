// src/components/Settings.jsx
import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    theme: 'light',
    language: 'en',
  });



  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({ ...generalSettings, [name]: value });
  };


  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings({ ...notificationSettings, [name]: checked });
  };

  const handleSave = () => {
    // Here you would typically send the settings to the server
    alert('Settings saved!');
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <section className="settings-section">
        <h2 className="settings-section-title">General Settings</h2>
        <label>
          Theme:
          <select name="theme" value={generalSettings.theme} onChange={handleGeneralChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          Language:
          <select name="language" value={generalSettings.language} onChange={handleGeneralChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </section>
      <section className="settings-section">
        <h2 className="settings-section-title">Notification Settings</h2>
        <label>
          Email Notifications:
          <input
            type="checkbox"
            name="emailNotifications"
            checked={notificationSettings.emailNotifications}
            onChange={handleNotificationChange}
          />
        </label>
        <label>
          SMS Notifications:
          <input
            type="checkbox"
            name="smsNotifications"
            checked={notificationSettings.smsNotifications}
            onChange={handleNotificationChange}
          />
        </label>
      </section>
      <button className="settings-save-button" onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;
