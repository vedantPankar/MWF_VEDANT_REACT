import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select } from "../index";
import { AlertCircle } from "lucide-react";
import { useSelector } from "react-redux";

function ReportIssueForm() {
  const user = useSelector((state) => state.auth.userData);
  const [issueTitle, setIssueTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleReport = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!issueTitle || !category || !priority || !description || !location) {
      setError("All fields are required");
      return;
    }

    const newReport = {
      issueTitle,
      category,
      priority,
      description,
      location,
      roomNumber: user.roomNumber,
      fullName: user.fullName,
      date: new Date().toISOString(),
    };

    const existingReports = JSON.parse(localStorage.getItem("reports")) || [];

    existingReports.push(newReport);

    localStorage.setItem("reports", JSON.stringify(existingReports));

    setSuccess("Issue is registered");

    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <header className="mt-4 w-2/3 mx-auto">
      <div className="grid p-2 mx-20">
        <div className="flex font-extralight">
          <AlertCircle className="h-6 w-6 text-blue-600 rounded-full" />
          <p className="px-2 font-semibold">Report an Issue</p>
        </div>
        <div className="text-gray-500 w-1/2 py-2">
          <p>
            Fill out the form below to report a maintenance issue or complaint
          </p>
        </div>
      </div>

      <form onSubmit={handleReport} className="grid mx-20 p-2">
        <div className="bg-white border-2 border-gray-100 text-sm w-full rounded-xl p-4">
          <div className="mb-6">
            <p className="font-semibold text-base">Issue Details</p>
            <p className="text-gray-500">
              Please provide as much detail as possible to help us resolve your
              issue quickly
            </p>
          </div>

          {/* Messages */}
          {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
          {success && (
            <p className="text-green-600 mb-3 text-center">{success}</p>
          )}

          <div className="mb-5">
            <Input
              label="Issue Title *"
              type="text"
              placeholder="Brief desciption of the issue"
              onChange={(e) => setIssueTitle(e.target.value)}
            />
          </div>

          <div className=" grid grid-cols-2 mb-5 gap-4">
            <Select
              label="Category *"
              list="category"
              options={[
                "Plumbing",
                "Electrical",
                "Cleaning",
                "Food Quality",
                "WiFi/Internet",
                "Furniture",
                "Safety",
                "Other",
              ]}
              placeholder="Select category"
              onChange={(e) => setCategory(e.target.value)}
            />

            <Select
              label="Priority *"
              list="priority"
              options={["Low", "Medium", "High", "Critical"]}
              placeholder="Select priority"
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="text-sm font-semibold">Description *</label>
            <textarea
              className=" bg-gray-100 rounded-lg w-full p-2 mt-1"
              placeholder="Provide the detailed information about the issue"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className=" grid grid-cols-2 mb-5 gap-4">
            <Input
              label="Location *"
              type="text"
              placeholder="e.g. 2nd floor, Common Area"
              onChange={(e) => setLocation(e.target.value)}
            />

            <Input
              label="Room Number"
              type="text"
              value={user.roomNumber}
              disabled
            />
          </div>

          <div className="mb-5">
            <Input
              label="Your Name"
              type="text"
              value={user?.fullName || "-"}
              disabled
            />
          </div>

          <div className="mb-5">
            <Button type="submit" className="w-full" variant="secoandary">
              Submit Issue
            </Button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default ReportIssueForm;
