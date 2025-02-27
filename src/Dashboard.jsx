import React, { useEffect, useState } from "react";
import { Download, Filter } from "lucide-react";
import ResultTable from "./ResultTable";

const items = 10;

export default function Dashboard({ emailsList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("");
  const [sortedResults, setSortedResults] = useState(emailsList);

  const handleSort = (command) => {
    if (command === "stop") {
      setSortedResults(emailsList);
      return;
    }
    const newSortOrder = command === "asc" ? "desc" : "asc";
    const newEmailList = [...emailsList].sort((a, b) => {
      const aValue = a["email"];
      const bValue = b["email"];

      if (newSortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else if (newSortOrder === "desc") {
        return aValue < bValue ? 1 : -1;
      } else {
        return 0;
      }
    });
    setSortedResults(newEmailList);
    setSortOrder(newSortOrder);
  };

  const filteredResults = sortedResults.filter(
    (result) => filter === "all" || result.status === filter
  );

  const totalPages = Math.ceil(filteredResults.length / items);
  const startIndex = (currentPage - 1) * items;
  const paginatedResults = filteredResults.slice(
    startIndex,
    startIndex + items
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
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-black truncate">
            Total Emails
          </dt>
          <dd className="mt-1 text-4xl font-semibold text-gray-900">
            {stats.total}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-xl px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-black truncate">Valid</dt>
          <dd className="mt-1 text-4xl font-semibold text-green-500">
            {stats.valid}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-xl px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-black truncate">Invalid</dt>
          <dd className="mt-1 text-4xl font-semibold text-red-500">
            {stats.invalid}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-xl px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-black truncate">
            Disposable
          </dt>
          <dd className="mt-1 text-4xl font-semibold text-yellow-500">
            {stats.disposable}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-xl px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-black truncate">Catch-All</dt>
          <dd className="mt-1 text-4xl font-semibold text-blue-500">
            {stats.catchAll}
          </dd>
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

      {filteredResults.length === 0 ? (
        <p className="mt-8 text-white text-center text-lg">
          No data found... add some emails to get started!
        </p>
      ) : (
        <ResultTable
          paginatedResults={paginatedResults}
          startIndex={startIndex}
          items={items}
          filteredResults={filteredResults}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          sortOrder={sortOrder}
          handleSort={handleSort}
        />
      )}
    </div>
  );
}
