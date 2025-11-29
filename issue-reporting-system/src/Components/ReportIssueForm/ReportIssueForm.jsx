import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button, Select } from "../index";
import { AlertCircle } from "lucide-react";

function ReportIssueForm() {
  const [fullName, setFullName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleReport = (e) => {
    e.preventDefault(); // Prevents page refresh
    setError("");
    setSuccess("");

    // Validation
    if (!fullName || !roomNumber || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Create user object
    const newUser = {
      fullName,
      roomNumber,
      email,
      password,
    };

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(newUser));

    setSuccess("Account created successfully!");

    // Redirect to Login page
    setTimeout(() => navigate("/login"), 1000);
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
              onChange={(e) => setFullName(e.target.value)}
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
              onChange={(e) => setRoomNumber(e.target.value)}
            />

            <Select
              label="Priority *"
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
              placeholder="Select priority"
              onChange={(e) => setRoomNumber(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Description *"
              type="text area"
              placeholder="Provide the detailed information about the issue"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" grid grid-cols-2 mb-5 gap-4">
            <Input
              label="Location *"
              type="password"
              placeholder="e.g. 2nd floor, Common Area"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              label="Room Number"
              type="password"
              placeholder="Enter your password"
              // TODO:
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
          </div>

          <div className="mb-5">
            <Input
              label="Your Name"
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled
            />
          </div>

          <div className="mb-5">
            <Button type="submit" className="w-full" variant="secoandary">
              Create Account
            </Button>
          </div>

          <div className="mb-5 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign In here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </header>
  );
}

export default ReportIssueForm;
