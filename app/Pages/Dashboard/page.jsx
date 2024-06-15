"use client";
import Table from "@/app/components/Table";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "@/app/context/context";
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { InfoOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const { data } = useDataContext();
  const [tableData, setTableData] = useState([
    {
      "First Name": "Jyoti",
      "Last Name": "Sharma",
      Email: "Sharma@123",
      Age: "23",
      DOB: "22/05/01",
      Password: "",
      "Confirm Password": "",
      Aadhar: "123456789876",
      Address: "dhiva apartments",
      City: "Bareilly",
      "Pin Code": "243312",
      State: "Uttar pradesh",
    },
    ...data,
  ]);
  const ComponentRef = useRef(null);
  const handleGeneratePdf = async () => {
    const inputData = ComponentRef.current;
    try {
      const canvas = await html2canvas(inputData);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "Portrait",
        unit: "px",
        format: "a4",
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("Data.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col mt-6 gap-6 items-center  w-full h-[89vh]">
      {" "}
      <button
        onClick={() => handleGeneratePdf()}
        className="p-2 bg-green-500 text-white font-semibold rounded-md w-[8rem] hover:bg-green-600"
      >
        Print
      </button>
      <div ref={ComponentRef}>
        <Table data={tableData} />{" "}
      </div>
    </div>
  );
};

export default Dashboard;
