import { useState } from "react";
import { Key } from "lucide-react";
import { Button, Input } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Store/authSlice";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      setError("No account found. Please register first.");
      return;
    }

    if (email === userData.email && password === userData.password) {
      localStorage.setItem("isLoggedIn", "true");
      dispatch(login(userData));
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <header className="mt-4">
      <div className="grid justify-items-center mx-20 p-2">
        <div className="font-light">
          <Key className="h-16 w-16 text-blue-600 bg-blue-100 p-4 rounded-full" />
        </div>
        <div className="font-medium p-2">
          <p>Welcome Back</p>
        </div>
        <div className="text-gray-500 w-1/2 text-center">
          <p>Sign in to your account</p>
        </div>
      </div>

      <div className="grid justify-items-center mx-20 p-2">
        <div className="bg-white text-sm w-1/3 rounded-xl p-4">
          <div className="mb-6">
            <p className="font-semibold">Login</p>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>

          {error && <p className="text-red-500 text-center mb-3">{error}</p>}

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
            <Button
              type="submit"
              className="w-full"
              variant="secoandary"
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </div>

          <div className="mb-5 text-center">
            <p>
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="mb-2">Demo Credentials:</p>
            <div className="text-gray-500">
              <p>Email: demo@hostel.com</p>
              <p>Password: demo123</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LoginForm;
