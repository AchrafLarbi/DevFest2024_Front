import { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash2, Search } from "lucide-react";

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nodesData, setNodesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/clients/metrics/")
      .then((response) => {
        const data = response.data;

        const formattedData = data.map((item) => {
          const [date, time] = item.timestamp.split("T");
          return {
            id: item.id,
            client: item.client,
            bwRequested: item.bw_requested,
            frames: item.frames,
            bytes: item.bytes,
            date,
            time: time.split(".")[0],
          };
        });
        setNodesData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = nodesData.filter(
    (node) =>
      node.client.toString().includes(searchTerm) ||
      node.id.toString().includes(searchTerm)
  );

  return (
    <div className="w-full h-full p-6">
      <div className="relative mb-4">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mr-6">
          <Search />
        </span>
        <input
          type="text"
          placeholder="Search by client or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className=" px-4 py-2 text-left">Client</th>
              <th className=" px-4 py-2 text-left">BW Requested</th>
              <th className=" px-4 py-2 text-left">Frames</th>
              <th className=" px-4 py-2 text-left">Bytes</th>
              <th className=" px-4 py-2 text-left">Date</th>
              <th className=" px-4 py-2 text-left">Time</th>
              <th className=" px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((node) => (
              <tr key={node.id} className="odd:bg-blue-50">
                <td className="px-4 py-2">{node.id}</td>
                <td className="px-4 py-2">{node.client}</td>
                <td className="px-4 py-2">{node.bwRequested}</td>
                <td className="px-4 py-2">{node.frames}</td>
                <td className="px-4 py-2">{node.bytes}</td>
                <td className="px-4 py-2">{node.date}</td>
                <td className="px-4 py-2">{node.time}</td>
                <td className="px-4 py-2 flex space-x-2">
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
