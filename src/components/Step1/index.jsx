import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import MyChartComponent from "../MyChartComponent";

function Step1({ setFormData }) {
  const navigate = useNavigate();

  const [localFormData, setLocalFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    csvFile: null,
    maxX: "",
    minX: "",
    maxY: "",
    minY: "",
    maxZ: "",
    minZ: "",
  });

  const [chartData, setChartData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalFormData((prev) => ({ ...prev, csvFile: file }));

      Papa.parse(file, {
        header: true,
        complete: (result) => {
          const data = result.data;

          let maxX = -Infinity,
            minX = Infinity,
            maxY = -Infinity,
            minY = Infinity,
            maxZ = -Infinity,
            minZ = Infinity;

          for (let row of data) {
            let x = parseFloat(row.X),
              y = parseFloat(row.Y),
              z = parseFloat(row.Z);

            if (x > maxX) maxX = x;
            if (x < minX) minX = x;
            if (y > maxY) maxY = y;
            if (y < minY) minY = y;
            if (z > maxZ) maxZ = z;
            if (z < minZ) minZ = z;
          }

          setLocalFormData((prevData) => ({
            ...prevData,
            maxX: maxX,
            minX: minX,
            maxY: maxY,
            minY: minY,
            maxZ: maxZ,
            minZ: minZ,
          }));

          // Extract KP and X values for the chart
          const kps = data.map((row) => row.KP);
          const xs = data.map((row) => row.X);

          setChartData({
            labels: kps,
            datasets: [
              {
                label: "X values",
                data: xs,
                tension: 0.1,
                borderColor: "rgb(75, 192, 192)",
                fill: false,
              },
            ],
          });
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localFormData);
    navigate("/step-2");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-offwhite w-full mx-auto">
      <form
        className="p-8 bg-opacity-80 bg-lightgray rounded-lg shadow-xl w-3/5 max-w-screen-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 hover:text-blue-600">
          Project Details
        </h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* ... (Your input fields here) */}
          <div>
            <label className="text-gray-700">Project Name</label>
            <input
              name="projectName"
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={localFormData.projectName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Project Description</label>
            <textarea
              name="projectDescription"
              className="mt-1 p-2 border rounded-md w-full"
              value={localFormData.projectDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label className="text-gray-700">Client</label>
            <input
              name="client"
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={localFormData.client}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Contractor</label>
            <input
              name="contractor"
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={localFormData.contractor}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-700">Upload CSV</label>
            <input
              name="csvFile"
              className="mt-1 p-2 border rounded-md w-full"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Max X</label>
            <input
              name="maxX"
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={localFormData.maxX}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Min X</label>
            <input
              name="minX"
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={localFormData.minX}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Max Y</label>
            <input
              name="maxY"
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={localFormData.maxY}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Min Y</label>
            <input
              name="minY"
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={localFormData.minY}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Max Z</label>
            <input
              name="maxZ"
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={localFormData.maxZ}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700">Min Z</label>
            <input
              name="minZ"
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={localFormData.minZ}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Conditional render of the chart */}
        {chartData && (
          <div className="my-4">
            <MyChartComponent data={chartData} />
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step1;
