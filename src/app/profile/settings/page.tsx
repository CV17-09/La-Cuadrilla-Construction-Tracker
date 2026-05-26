"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: "Claudia Dominguez",
    role: "Manager",
    email: "claudia@example.com",
    emailNotifications: true,
    lowStockThreshold: 60,
    qrScannerPermissions: true,
    currentPassword: "",
    newPassword: "",
    twoFactorAuth: false,
  });

  useEffect(() => {
    localStorage.removeItem("darkMode");
    document.documentElement.classList.remove("dark");

    const savedSettings = localStorage.getItem("userSettings");

    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      delete parsed.darkMode;

      setSettings((prev) => ({
        ...prev,
        ...parsed,
      }));
    }
  }, []);

  const updateSetting = (
    key: keyof typeof settings,
    value: string | number | boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveSettings = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  const cardStyle =
    "rounded-3xl shadow-lg p-6 bg-white text-gray-900 border border-gray-200";

  const inputStyle =
    "w-full mt-1 p-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <main className="min-h-screen p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-2">⚙️ Settings</h1>

      <p className="text-gray-600 mb-8">
        Manage profile, preferences, and security.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

          <label className="block mb-4">
            <span className="font-medium">Name</span>
            <input
              type="text"
              value={settings.name}
              onChange={(e) => updateSetting("name", e.target.value)}
              className={inputStyle}
            />
          </label>

          <label className="block mb-4">
            <span className="font-medium">Role</span>
            <select
              value={settings.role}
              onChange={(e) => updateSetting("role", e.target.value)}
              className={inputStyle}
            >
              <option>Worker</option>
              <option>Manager</option>
              <option>Admin</option>
            </select>
          </label>

          <label className="block">
            <span className="font-medium">Email</span>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => updateSetting("email", e.target.value)}
              className={inputStyle}
            />
          </label>
        </section>

        <section className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4">App Preferences</h2>

          <label className="flex justify-between items-center mb-6">
            <span className="font-medium">Email Notifications</span>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) =>
                updateSetting("emailNotifications", e.target.checked)
              }
              className="w-5 h-5 accent-orange-600"
            />
          </label>

          <label className="block mb-6">
            <span className="font-medium">Low Stock Alert Threshold</span>
            <input
              type="number"
              value={settings.lowStockThreshold}
              onChange={(e) =>
                updateSetting("lowStockThreshold", Number(e.target.value))
              }
              className={inputStyle}
            />
          </label>

          <label className="flex justify-between items-center">
            <span className="font-medium">QR Scanner Permissions</span>
            <input
              type="checkbox"
              checked={settings.qrScannerPermissions}
              onChange={(e) =>
                updateSetting("qrScannerPermissions", e.target.checked)
              }
              className="w-5 h-5 accent-orange-600"
            />
          </label>
        </section>

        <section className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4">Security</h2>

          <label className="block mb-4">
            <span className="font-medium">Current Password</span>
            <input
              type="password"
              value={settings.currentPassword}
              onChange={(e) =>
                updateSetting("currentPassword", e.target.value)
              }
              className={inputStyle}
            />
          </label>

          <label className="block mb-6">
            <span className="font-medium">New Password</span>
            <input
              type="password"
              value={settings.newPassword}
              onChange={(e) => updateSetting("newPassword", e.target.value)}
              className={inputStyle}
            />
          </label>

          <label className="flex justify-between items-center">
            <span className="font-medium">Two-Factor Authentication</span>
            <input
              type="checkbox"
              checked={settings.twoFactorAuth}
              onChange={(e) =>
                updateSetting("twoFactorAuth", e.target.checked)
              }
              className="w-5 h-5 accent-orange-600"
            />
          </label>
        </section>
      </div>

      <button
        onClick={saveSettings}
        className="mt-8 px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg"
      >
        Save Settings
      </button>
    </main>
  );
}