import { useState } from "react";
import axios from "axios";

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("pcap_file", file);

    setLoading(true); // Set loading to true when upload starts

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/clients/bandwidth-monitor/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);

      // Refresh the page after a successful upload
      window.location.reload();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    } finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <div className="file-upload p-4 mb-4 border border-gray-300 rounded-lg bg-gray-50">
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 rounded-lg p-2 mb-2"
      />
      <button
        onClick={handleUpload}
        className={`bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading} // Disable button if loading
      >
        {loading ? "Uploading..." : "Upload File"}{" "}
        {/* Update button text based on loading state */}
      </button>
    </div>
  );
};

export default FileUploadComponent;
