import React, { useState } from "react";
import { Input, Select } from "./index";
import { Link } from "react-router-dom";

function Dashboard() {
  const [status, setStatus] = useState("All Status");
  const [category, setCategory] = useState("All Category");
  const [search, setSearch] = useState("");

  const reportedIssed = JSON.parse(localStorage.getItem("reports")) || [];
  console.log(reportedIssed);

  const totalIssue = reportedIssed.length;
  const pendingIssue = reportedIssed.filter(
    (issue) => issue.status === "Pending"
  ).length;

  const inProgressIssue = reportedIssed.filter(
    (issue) => issue.status === "In Progress"
  ).length;

  const resolvedIssue = reportedIssed.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  const filteredIssues = reportedIssed.filter((issue) => {
    // Status filter
    const statusMatch =
      status === "All Status" ||
      issue.status === status ||
      (status === "Open" && issue.status === "Pending"); // If your form uses "Pending"

    // Category filter
    const categoryMatch =
      category === "All Category" || issue.category === category;

    // Search filter (title + description)
    const searchMatch =
      issue.issueTitle.toLowerCase().includes(search.toLowerCase()) ||
      issue.description.toLowerCase().includes(search.toLowerCase());

    return statusMatch && categoryMatch && searchMatch;
  });

  return (
    <div className="mx-20 my-10">
      <div>
        <p className="text-2xl font-semibold">Issue DashBoard</p>
        <p className="mt-4 text-gray-500">
          View and manage all reported issues
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8 text-center">
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          Total Issue
          <p>{totalIssue}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          Open
          <p className="text-red-500">{pendingIssue}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          In Progress
          <p className="text-blue-500">{inProgressIssue}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
          Resolved
          <p className="text-green-500">{resolvedIssue}</p>
        </div>
      </div>

      <div className="mt-10 p-4 bg-white rounded-xl border-2 border-gray-100">
        <p className="mb-4">Filter Issue</p>
        <div className="grid grid-cols-3 gap-6 text-sm text-gray-500">
          <Select
            label="Status"
            options={[
              "All Status",
              "Open",
              "In Progress",
              "Resolved",
              "Closed",
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <Select
            label="Category"
            options={[
              "All Category",
              "Plumbing",
              "Electrical",
              "Cleaning",
              "Food Quality",
              "WiFi/Internet",
              "Furniture",
              "Safety",
              "Other",
            ]}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            label="Search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredIssues.map((issue, index) => (
        <Link key={index} to={`/${index}`}>
          <div className="mt-4 p-4 bg-white rounded-xl border-2 border-gray-100">
            <div>
              <p className="font-semibold m-2">{issue.issueTitle}</p>
              <p className="text-sm m-2">{issue.description}</p>
              <div className="flex text-xs mb-4 justify-between m-2 w-1/3">
                <span className="p-2 border-2 border-gray-100 rounded-xl">
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
                </span>
                <span className="p-2 border-2 border-gray-100 rounded-xl">
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
                </span>
                <span className="p-2 border-2 border-gray-100 rounded-xl">
                  {issue.category}
                </span>
                <span className="p-2 border-2 border-gray-100 rounded-xl">
                  Room: {issue.roomNumber}
                </span>
              </div>
              <hr />
              <div>
                <p className="m-2 text-gray-500">
                  Reported by: {issue.fullName} <br />
                  Location: {issue.location}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Dashboard;
