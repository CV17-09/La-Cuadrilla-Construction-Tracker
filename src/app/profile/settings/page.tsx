export default function SettingsPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">⚙️ Settings</h1>
      <p className="text-gray-600 mb-8">Manage profile, preferences, and security.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Settings</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Update name</li>
            <li>Update role</li>
            <li>Update email</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">App Preferences</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Dark mode</li>
            <li>Email notifications</li>
            <li>Low stock alert threshold</li>
            <li>QR scanner permissions</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Change password</li>
            <li>Two-factor authentication</li>
            <li>Logout from all devices</li>
          </ul>
        </section>
      </div>
    </main>
  );
}