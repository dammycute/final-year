import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";
import axios from "axios";

const Invoice = ({ client, datePeriod, invoiceNo, totalDue }) => {
  const invoiceRef = useRef(null);
  const [taskData, setTaskData] = useState(null);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const { projectId } = useParams();
  const [formData, setFormData] = useState({
    projectId: projectId
  })

  

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.post(
          `https://pm-api.cyclic.app/project/invoices`,
          formData,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data;
        console.log('Invoice Data:', data);
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchTaskData();
  }, [userId]);

  const tasks = taskData?.tasks || [];
  const filteredTasks = tasks.filter((task) => task.projectId === projectId);
  // totalDue={tasks.reduce((sum, task) => sum + task.rate, 0)}
  const handleDownloadPDF = () => {
    if (!invoiceRef.current) return;

    const input = invoiceRef.current;
    const pdf = new jsPDF({
      scale: 1,
      unit: "px",
      format: "a4",
    });

    html2canvas(input, {
      scrollY: -window.scrollY,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <>
      <button className="bg-[#036EFF] text-white rounded-lg px-12 max-w-full my-5 py-2" onClick={handleDownloadPDF}>Download PDF</button>

      <div className="invoice h-full " ref={invoiceRef}>
        <div className="min-h-[300px] overflow-y-scroll">
        <div className="container  py-3">
          <h1 className="">Invoice</h1>
          <p className="client">
            Client - <strong>{filteredTasks.ownerEmail}</strong>
          </p>
          <p>Date Period: {filteredTasks.duration}</p>
          <div className="flex justify-between">
            <p>
              Invoice No.: <strong>{invoiceNo}</strong>
            </p>
            <p>Installation of Lathe Machine</p>
          </div>

          <div className="flex font-bold justify-between my-6">
            <h2>Description</h2>
            <h2>Rate (Monthly)</h2>
          </div>

          <div className="task-container">
            {tasks.map((task, index) => (
              <div className="task-row flex justify-between my-2" key={index}>
                <div className="task-description ">{task.description}</div>
                <div className="task-rate">
                  {task.estimatedCosts ? task.estimatedCosts.otherExpenses.toLocaleString("en-US", {
                    style: "currency",
                    currency: "NGN",
                  }) : 'N/A'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="color">
          <div className="container">
            <div className="invoice-footer flex justify-between">
              <strong>Additional Information</strong>
              <strong>Total Due:</strong>
            </div>

            <div className="bord flex justify-between">
              <div className="before"></div>
              <div className="money">
                <p className="large">
                  {" "}
                  <strong>
                    {/* {totalDue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })} */}
                  </strong>
                </p>
                <p className="small">Total payment due in 30 days.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Invoice

// export default function App() {
//   return (
//     <div>
//       <Invoice
//         client="Client Name"
//         datePeriod="January 2023"
//         invoiceNo="12345"
//         tasks={tasks}
//         totalDue={tasks.reduce((sum, task) => sum + task.rate, 0)}
//       />
//     </div>
//   );
// }
