import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function Result({ formData }) {
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    const tableColumnNames = ["Field", "Value"];
    const tableRows = [];

    // Preparing the table data
    Object.entries(formData).map(([key, value]) => {
      let formattedValue =
        typeof value === "object" && value ? value.name : value;
      tableRows.push([key, formattedValue]);
    });

    doc.setFontSize(18);
    doc.text("Project Details", 10, 20);

    doc.autoTable({
      startY: 30,
      head: [tableColumnNames],
      body: tableRows,
      styles: {
        fontSize: 12,
        cellPadding: { top: 2, right: 2, bottom: 2, left: 2 },
        lineColor: [0, 0, 0],
        lineWidth: 0.2,
        fontStyle: "normal",
      },
      headStyles: {
        fillColor: [59, 130, 246], // Color for header rows
        textColor: 255, // White text color
        fontStyle: "bold",
      },
    });

    doc.save("project-details.pdf");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-offwhite w-full mx-auto">
      <div className="p-8 bg-opacity-80 bg-lightgray rounded-lg shadow-xl w-3/5 max-w-screen-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 hover:text-blue-600">Result</h1>

        <table className="min-w-full border border-collapse">
          <thead>
            <tr>
              <th className="bg-blue-500 text-white hover:bg-lightgray hover:text-black border px-4 py-2">
                Field
              </th>
              <th className="bg-blue-500 text-white border hover:bg-lightgray hover:text-black px-4 py-2">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2 font-semibold">{key}</td>
                <td className="border px-4 py-2">
                  {typeof value === "object" && value ? value.name : value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center mt-6">
          <button
            onClick={downloadAsPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
