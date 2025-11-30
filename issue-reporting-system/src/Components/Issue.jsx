import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Select, Button } from "./index";

function Issue() {
  const { id } = useParams();
  const navigate = useNavigate();

  const issueIndex = Number(id);

  const reportedIssues = JSON.parse(sessionStorage.getItem("reports")) || [];
  const issue = reportedIssues[issueIndex];

  const [updateStatus, setUpdateStatus] = useState(issue.status);

  useEffect(() => {
    const allIssues = JSON.parse(sessionStorage.getItem("reports")) || [];

    allIssues[issueIndex].status = updateStatus;

    sessionStorage.setItem("reports", JSON.stringify(allIssues));
  }, [updateStatus, issueIndex]);

  // Delete issue
  const handleDelete = () => {
    const updated = reportedIssues.filter((_, idx) => idx !== issueIndex);

    sessionStorage.setItem("reports", JSON.stringify(updated));

    navigate("/dashboard");
  };

  return (
    <div className="mx-20 my-10">
      <div className="flex text-blue-500">
        <ArrowLeft className="p-1" />
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-2 mt-10">
        <div>
          {/* Issue details */}
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2">
            <p>{issue.issueTitle}</p>

            <div className="grid grid-cols-3 gap-2 text-center w-1/2 text-xs p-2">
              <div className="border-2 border-gray-100 rounded-lg bg-gray-100">
                <span
                  className={
                    updateStatus === "Pending"
                      ? "text-red-500"
                      : updateStatus === "In Progress"
                      ? "text-blue-500"
                      : "text-green-500"
                  }
                >
                  {updateStatus}
                </span>
              </div>

              <div className="border-2 border-gray-100 rounded-lg bg-gray-100">
                <span
                  className={
                    issue.priority === "High"
                      ? "text-red-500"
                      : issue.priority === "Medium"
                      ? "text-blue-500"
                      : "text-green-500"
                  }
                >
                  {issue.priority}
                </span>
              </div>

              <div className="border-2 border-gray-100 rounded-lg bg-gray-100">
                {issue.category}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg font-semibold">Description</p>
              <p className="text-gray-500 py-4">{issue.description}</p>
              <hr />

              <div className="grid grid-cols-2 text-gray-500 py-4 gap-4">
                <p>{issue.location}</p>
                <p>Room: {issue.roomNumber}</p>
                <p>{issue.fullName}</p>
                <p>{issue.date}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Status update */}
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2">
            <p>Update Status</p>
            <div className="p-4">
              <Select
                label="Current Status"
                value={updateStatus}
                options={["Pending", "In Progress", "Resolved"]}
                className="text-sm"
                onChange={(e) => setUpdateStatus(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2">
            <p className="mb-4">Actions</p>

            <Link to="/report-issue">
              <Button className="w-full text-sm mb-2">Report New Issue</Button>
            </Link>

            <Button
              onClick={handleDelete}
              className="w-full text-sm text-red-500 mb-2"
            >
              Delete Issue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Issue;
