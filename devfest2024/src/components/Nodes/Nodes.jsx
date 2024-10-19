import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const nodesData = [
    {
      id: 1,
      ip: "10.10.10.10",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Connected",
    },
    {
      id: 2,
      ip: "11.11.11.11",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Connected",
    },
    {
      id: 3,
      ip: "12.12.12.12",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Disconnected",
    },
    {
      id: 4,
      ip: "13.13.13.13",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Disconnected",
    },
    {
      id: 5,
      ip: "14.14.14.14",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Disconnected",
    },
    {
      id: 6,
      ip: "15.15.15.15",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Connected",
    },
    {
      id: 7,
      ip: "16.16.16.16",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Connected",
    },
    {
      id: 8,
      ip: "17.17.17.17",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Connected",
    },
    {
      id: 9,
      ip: "18.18.18.18",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Disconnected",
    },
    {
      id: 10,
      ip: "19.19.19.19",
      requested: "10 mbps",
      allocated: "1 mbps",
      status: "Disconnected",
    },
  ];

  // Filtering the data based on search term
  const filteredData = nodesData.filter(
    (node) =>
      node.ip.includes(searchTerm) ||
      node.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Node ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                IP address
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Requested bandwidth
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Allocated bandwidth
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Status
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((node) => (
              <tr key={node.id} className="odd:bg-blue-50">
                <td className="border border-gray-300 px-4 py-2">{node.id}</td>
                <td className="border border-gray-300 px-4 py-2">{node.ip}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {node.requested}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {node.allocated}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      node.status === "Connected"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {node.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
