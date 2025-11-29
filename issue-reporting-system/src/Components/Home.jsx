import React from "react";
import { AlertCircle, Zap, FileText, CircleCheckBig } from "lucide-react";
import { Button } from "./index";
import { Link } from "react-router-dom";
function Home() {
  return (
    <header className="border-t-2 border-gray-100">
      <div className="grid justify-items-center mx-20 p-6">
        <div className="mb-6">
          <AlertCircle className="h-16 w-16 text-blue-600 bg-blue-100 p-4 rounded-full" />
        </div>
        <div className="font-medium p-4">
          <p>Hostel/PG Issue Reporting System</p>
        </div>
        <div className="font-light w-1/2 p-1 text-center">
          <p>
            Report and track maintenance issues, complaints, and requests in
            your hostel or PG accommodation. Our system ensures quick resolution
            and transparent communication.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 m-10">
          <Button variant="secoandary" className="p-2 rounded-lg">
            {/* TODO */}
            <Link to="/report-issue">Report an Issue</Link>
          </Button>
          <Button className="p-2 rounded-lg hover:bg-gray-100">
            {/* TODO */}
            <Link to="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 text-center justify-items-center mx-20 mb-10 gap-6">
        <div className="justify-items-center text-center bg-white border-2 border-gray-100 rounded-lg w-full p-6">
          <FileText className="text-blue-600" />
          <p className="m-2">Easy Reporting</p>
          <p>Report issues quickly with our simple form interface</p>
        </div>
        <div className="justify-items-center text-center bg-white border-2 border-gray-100 rounded-lg w-full p-6">
          <Zap className="text-yellow-600" />
          <p className="m-2">Fast Resolution</p>
          <p className="font-light">
            Track your issues and get updates in real-time
          </p>
        </div>
        <div className="justify-items-center text-center bg-white border-2 border-gray-100 rounded-lg w-full p-6">
          <CircleCheckBig className="text-green-600" />
          <p className="m-2">Transparent Process</p>
          <p>See the status of all reported issues in one place</p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-100 rounded-lg mx-20 mb-10">
        <p className="text-center p-4 mt-4">Issue Categories</p>
        <div className="grid grid-cols-4 justify-items-center gap-6 p-6">
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100  text-center">
            Plumbing
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            Electrical
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            Cleaning
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            Food Quality
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            WiFi/Internet
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            Furniture
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            Safety
          </div>
          <div className="bg-slate-50 p-4 w-full rounded-lg border-2 border-gray-100 text-center">
            Other
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
