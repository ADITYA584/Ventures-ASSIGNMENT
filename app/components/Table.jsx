import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr className="text-left text-sm font-medium text-gray-600 uppercase text-nowrap">
            <th className="py-2 px-3">First Name</th>
            <th className="py-2 px-3">Last Name</th>
            <th className="py-2 px-3">Age</th>
            <th className="py-2 px-3">Aadhar Number</th>
            <th className="py-2 px-3">Address</th>
            <th className="py-2 px-3">City</th>
            <th className="py-2 px-3">Pincode</th>
            <th className="py-2 px-3">State</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="text-sm text-gray-600">
              <td className="py-3 px-3">{item["First Name"]}</td>
              <td className="py-3 px-3">{item["Last Name"]}</td>
              <td className="py-3 px-3">{item.Age}</td>
              <td className="py-3 px-3">{item.Aadhar}</td>
              <td className="py-3 px-3">{item.Address}</td>
              <td className="py-3 px-3">{item.City}</td>
              <td className="py-3 px-3">{item["Pin Code"]}</td>
              <td className="py-3 px-3">{item.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
