import React, { useState } from "react";
import { validateEmail } from "./emailValidation";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, Shield, Zap } from "lucide-react";

export default function Home({ setEmailsList }) {
  const [emails, setEmails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailsList = [];
    const emailsArray = emails.split("\n");
    emailsArray.forEach((email) => {
      emailsList.push(validateEmail(email.trim().toLowerCase()));
    });
    console.log(emailsList);
    setEmailsList(emailsList);
    navigate("/dashboard");
  };

  return (
    <div className="flex-1">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Validate Your Emails</span>
              <span className="block text-yellow-400">with Ease</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ">
              Organize your email lists and protect your
              sender reputation with this powerful email validation tool.
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
                    className="shadow-md block w-full sm:text-sm border border-gray-400 rounded-lg p-2"
                    placeholder="Enter emails"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  One email per line to get the perfect results.
                </p>

                <button
                  type="submit"
                  className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black hover:cursor-pointer bg-yellow-400 hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-black" />
                    Validate Emails
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-xl p-5 flex items-center">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">Accurate</h3>
              <p className="mt-2 text-sm text-gray-600">
                Get accurate results in email validation
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-xl p-5 flex items-center">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">Secure</h3>
              <p className="mt-2 text-sm text-gray-600">
                Your data is completely safe with us
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-xl p-5 flex items-center">
            <div className="flex-shrink-0">
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">Speedy</h3>
              <p className="mt-2 text-sm text-gray-600">
                Validate emails in the blink of an eye
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
