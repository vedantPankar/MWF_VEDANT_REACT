import { ArrowLeft, Locate, MapPin } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

function Issue() {
  const { id } = useParams();
  const issue = JSON.parse(localStorage.getItem("reports"))[id];
  return (
    <div className="mx-20 my-10">
      <div className="flex text-blue-500">
        <ArrowLeft className=" p-1" />
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-2 mt-10">
        <div>
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2">
            <p>{issue.issueTitle}</p>
            <div className="grid grid-cols-3 gap-2 text-center w-1/2 text-xs p-2">
              <div className="border-2 border-gray-100 rounded-lg bg-gray-100">
                <span
                  className={
                    issue.status === "Pending"
                      ? "text-red-500"
                      : issue.status === "In Progress"
                      ? "text-blue-500"
                      : "text-green-500"
                  }
                >
                  {issue.status}
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
              <p className="text-lg font-smibold">Description</p>
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
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2">
            box2
          </div>
        </div>
        <div>
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2"></div>
          <div className="border-2 border-gray-100 bg-white p-4 rounded-xl m-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Issue;
