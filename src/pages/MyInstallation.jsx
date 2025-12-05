import { useState, useEffect } from "react";
import { getInstalled, removeInstalled } from "../utils/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyInstallation() {
  const [list, setList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setList(getInstalled());
  }, []);

  function handleUninstall(id) {
    removeInstalled(id);
    const updated = getInstalled();
    setList(updated);
    toast.success("App Uninstalled Successfully");
  }

  const displayed = (() => {
    let ls = [...list];
    if (sort === "high-low") ls.sort((a, b) => b.downloads - a.downloads);
    if (sort === "low-high") ls.sort((a, b) => a.downloads - b.downloads);
    return ls;
  })();

  return (
    <main className="max-w-5xl mx-auto p-6 min-h-screen">
      <ToastContainer />

      {/* Header Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage all apps you have installed.
        </p>
      </div>

      {/* Stats + Sorting */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-gray-600 font-medium">
          {list.length} App(s) Installed
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="">Sort By</option>
          <option value="high-low">Downloads: High → Low</option>
          <option value="low-high">Downloads: Low → High</option>
        </select>
      </div>

      {/* If No Installed Apps */}
      {displayed.length === 0 ? (
        <div className="flex flex-col items-center mt-16 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="Not Found"
            className="w-40 opacity-90"
          />
          <h2 className="mt-6 text-xl font-semibold">No Apps Installed</h2>
          <p className="text-gray-500 text-sm">
            You haven't installed any app yet.
          </p>
        </div>
      ) : (
        /* Installed Apps List */
        <div className="mt-8 space-y-4">
          {displayed.map((app) => (
            <div
              key={app.id}
              className="bg-white border rounded-lg p-4 flex items-center justify-between shadow-sm"
            >
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-lg object-cover border"
                />

                <div>
                  <h3 className="font-semibold text-lg">{app.title}</h3>
                  <p className="text-xs text-gray-500">{app.companyName}</p>

                  {/* Stats Row */}
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>📥 {app.downloads.toLocaleString()} Downloads</span>
                    <span>⭐ {app.ratingAvg}</span>
                    <span>📦 {app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-lg text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
