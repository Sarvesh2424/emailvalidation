import React, { useState } from "react";
import { Download, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 10;

export default function Dashboard({ emailsList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const filteredResults = emailsList.filter(
    (result) => filter === "all" || result.status === filter
  );

  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = filteredResults.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const stats = {
    total: emailsList.length,
    valid: emailsList.filter((r) => r.status === "valid").length,
    invalid: emailsList.filter((r) => r.status === "invalid").length,
    disposable: emailsList.filter((r) => r.status === "disposable").length,
    catchAll: emailsList.filter((r) => r.status === "catch-all").length,
  };

  return (
    <div className="w-full py-12 pb-24 px-4 sm:px-12 lg:px-16 bg-black">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Total Emails
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stats.total}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Valid
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-green-600">
              {stats.valid}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Invalid
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-red-600">
              {stats.invalid}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Disposable
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-yellow-600">
              {stats.disposable}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Catch-All
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-blue-600">
              {stats.catchAll}
            </dd>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center">
          <Filter className="h-6 w-6 text-white" />
          <select
            className="hover:cursor-pointer mt-1 block w-full pl-3 pr-10 py-2 text-base text-white focus:bg-black sm:text-sm rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Results</option>
            <option value="valid">Valid</option>
            <option value="invalid">Invalid</option>
            <option value="disposable">Disposable</option>
            <option value="catch-all">Catch-All</option>
          </select>
        </div>

        <button className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm transition-colors hover:cursor-pointer text-black bg-yellow-400 hover:bg-yellow-500">
          <Download className="h-5 w-5 mr-2" />
          Download Report
        </button>
      </div>

      <div className="mt-8 flex flex-col justify-center my-2 overflow-x-auto sm:mx-6 lg:mx-8 py-2 align-middle min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedResults.map((result, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {result.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        result.status === "valid"
                          ? "bg-green-100 text-green-800"
                          : result.status === "invalid"
                          ? "bg-red-100 text-red-800"
                          : result.status === "disposable"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {result.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between flex-row">
        <div className="flex-1 flex items-center justify-between">
          <p className="text-sm text-white">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredResults.length)}
            </span>{" "}
            of <span className="font-medium">{filteredResults.length}</span>{" "}
            results
          </p>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md hover:cursor-pointer transition-colors bg-yellow-400 text-sm font-medium hover:bg-yellow-500"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2  rounded-r-md hover:cursor-pointer transition-colors bg-yellow-400 text-sm font-medium hover:bg-yellow-500"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
