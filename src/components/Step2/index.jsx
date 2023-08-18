import React from "react";
import { useNavigate } from "react-router-dom";

function Step2({ formData }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    navigate("/result");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-offwhite w-full mx-auto">
      <div className="p-8 bg-opacity-80  bg-lightgray rounded-lg shadow-xl w-3/5 max-w-screen-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 hover:text-blue-600">
          Review Details
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-gray-700">Project Name</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={formData.projectName}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Project Description</label>
            <textarea
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.projectDescription}
              disabled
            ></textarea>
          </div>
          <div>
            <label className="text-gray-700">Client</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={formData.client}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Contractor</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={formData.contractor}
              disabled
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-700">CSV File</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              value={formData.csvFile ? formData.csvFile.name : ""}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Max X</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={formData.maxX}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Min X</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={formData.minX}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Max Y</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={formData.maxY}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Min Y</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={formData.minY}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Max Z</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={formData.maxZ}
              disabled
            />
          </div>
          <div>
            <label className="text-gray-700">Min Z</label>
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="number"
              value={formData.minZ}
              disabled
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
