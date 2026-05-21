export default function AccountPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">👤 View Account</h1>
      <p className="text-gray-600 mb-8">Account information and permissions.</p>

      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl">
        <div className="space-y-4 text-gray-800">
          <p><strong>Name:</strong> Claudia</p>
          <p><strong>Role:</strong> Project Manager</p>
          <p><strong>Email:</strong> claudia@example.com</p>
          <p><strong>Department:</strong> Construction Operations</p>
          <p><strong>Assigned Job Site:</strong> Houston Downtown Project</p>
          <p><strong>Account Status:</strong> Active</p>
          <p><strong>Last Login:</strong> Today</p>
          <p><strong>Permissions:</strong> Materials, Inventory, Requests, Alerts</p>
        </div>
      </div>
    </main>
  );
}