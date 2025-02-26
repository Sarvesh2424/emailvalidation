import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, Shield, Zap } from "lucide-react";

export default function Home() {
  const [emails, setEmails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex-1">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Validate Your Email Lists</span>
              <span className="block text-yellow-400">with Confidence</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ">
              Clean your email lists, improve deliverability, and protect your
              sender reputation with our powerful email validation tool.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto py-12 px-4 sm:px-28 lg:px-32 bg-black">
        <div className="bg-white shadow rounded-2xl">
          <div className="px-8 py-5 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 px-4">
                <label
                  htmlFor="emails"
                  className="block text-xl font-medium text-black mb-4"
                >
                  Enter your email list
                </label>
                <div className="mt-1">
                  <textarea
                    id="emails"
                    rows={8}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter emails (one per line)"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  One email per line, maximum 5,000 emails per batch
                </p>
                <button
                type="submit"
                className="w-1/3 mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black hover:cursor-pointer bg-yellow-400 hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Validate Emails
              </button>
              </div>

              
            </form>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Accurate Results
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      99.9% accuracy in email validation with real-time
                      verification
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Secure Processing
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Your data is encrypted and processed securely
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Fast Processing
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Validate thousands of emails in minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
