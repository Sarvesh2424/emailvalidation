import React from "react";
import { RotateCw } from "lucide-react";

export default function ProcessingScreen() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center">
          <RotateCw className="h-12 w-12 text-yellow-400 animate-spin" />
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Validating Emails
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please wait while your emails are being processed...
          </p>
        </div>
      </div>
    </div>
  );
}
