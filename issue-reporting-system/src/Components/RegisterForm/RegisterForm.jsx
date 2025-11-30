import { UserRoundPlus } from "lucide-react";
import React, { useState } from "react";
import { Input, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
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

    // Save to sessionStorage
    sessionStorage.setItem("user", JSON.stringify(newUser));

    setSuccess("Account created successfully!");

    // Redirect to Login page
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <header className="mt-4">
      <div className="grid justify-items-center mx-20 p-2">
        <div className="font-extralight">
          <UserRoundPlus className="h-16 w-16 text-blue-600 bg-blue-100 p-4 rounded-full" />
        </div>
        <div className="font-medium p-2">
          <p>Create Account</p>
        </div>
        <div className="text-gray-500 w-1/2 text-center">
          <p>Register to report and track issues</p>
        </div>
      </div>

      <form
        onSubmit={handleRegister}
        className="grid justify-items-center mx-20 p-2"
      >
        <div className="bg-white text-sm w-1/3 rounded-xl p-4">
          <div className="mb-6">
            <p className="font-semibold">Register</p>
            <p className="text-gray-500">Create a new account to get started</p>
          </div>

          {/* Messages */}
          {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
          {success && (
            <p className="text-green-600 mb-3 text-center">{success}</p>
          )}

          <div className="mb-5">
            <Input
              label="Full Name:"
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Room Number:"
              type="number"
              placeholder="e.g. 201"
              onChange={(e) => setRoomNumber(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Confirm Password:"
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default RegisterForm;
