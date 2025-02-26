import React from "react";
import { RotateCw } from "lucide-react";

export default function ProcessingScreen({ progress, total }) {
  const percentage = Math.round((progress / total) * 100);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center">
          <RotateCw className="h-12 w-12 text-blue-600 animate-spin" />
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Validating Emails
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please wait while we process your emails...
          </p>

          <div className="w-full mt-6">
            <div className="relative">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                <div
                  style={{ width: `${percentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                />
              </div>
            </div>
            <div className="mt-2 text-center text-sm text-gray-600">
              {progress} of {total} emails processed ({percentage}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
