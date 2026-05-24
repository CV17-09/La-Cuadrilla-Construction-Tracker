"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: "Claudia Dominguez",
    role: "Manager",
    email: "claudia@example.com",
    darkMode: false,
    emailNotifications: true,
    lowStockThreshold: 60,
    qrScannerPermissions: true,
    currentPassword: "",
    newPassword: "",
    twoFactorAuth: false,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedSettings) {
      setSettings((prev) => ({
        ...prev,
        ...JSON.parse(savedSettings),
        darkMode: savedDarkMode === "true",
      }));
    }

    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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

  const toggleDarkMode = (value: boolean) => {
    setSettings((prev) => ({
      ...prev,
      darkMode: value,
    }));

    localStorage.setItem("darkMode", String(value));

    if (value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const saveSettings = () => {
    localStorage.setItem(
      "userSettings",
      JSON.stringify(settings)
    );

    localStorage.setItem(
      "darkMode",
      String(settings.darkMode)
    );

    alert("Settings saved successfully!");
  };

  const cardStyle =
    "rounded-3xl shadow-lg p-6 bg-white text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700";

  const inputStyle =
    "w-full mt-1 p-3 rounded-xl border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <main className="min-h-screen p-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition">
      <h1 className="text-4xl font-bold mb-2">
        ⚙️ Settings
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Manage profile, preferences, and security.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4">
            Profile Settings
          </h2>

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
          <h2 className="text-2xl font-bold mb-4">
            App Preferences
          </h2>

          <label className="flex justify-between items-center mb-6">
            <span className="font-medium">Dark Mode</span>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => toggleDarkMode(e.target.checked)}
              className="w-5 h-5"
            />
          </label>

          <label className="flex justify-between items-center mb-6">
            <span className="font-medium">Email Notifications</span>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) =>
                updateSetting("emailNotifications", e.target.checked)
              }
              className="w-5 h-5"
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
              className="w-5 h-5"
            />
          </label>
        </section>

        <section className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4">
            Security
          </h2>

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
              className="w-5 h-5"
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