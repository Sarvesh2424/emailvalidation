import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResultTable({
  paginatedResults,
  startIndex,
  items,
  filteredResults,
  currentPage,
  totalPages,
  setCurrentPage,
  sortOrder,
  handleSort,
}) {
  return (
    <>
      <div className="mt-8 flex flex-col justify-center my-2 overflow-x-auto sm:mx-6 lg:mx-8 py-2 align-middle sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 rounded-xl">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                >
                  <div className="flex items-center justify-between">
                    Email{" "}
                    <div className="flex items-center gap-4">
                      {sortOrder === "asc" ? (
                        <button
                          className="cursor-pointer"
                          onClick={() => handleSort("asc")}
                        >
                          ↑
                        </button>
                      ) : (
                        <button
                          className="cursor-pointer"
                          onClick={() => handleSort("desc")}
                        >
                          ↓
                        </button>
                      )}
                      <span
                        onClick={() => handleSort("stop")}
                        className="text-xs text-gray-500 hover:cursor-pointer"
                      >
                        Original
                      </span>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider cursor-pointer"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedResults.map((result, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {result.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 rounded-full ${
                        result.status === "valid"
                          ? "bg-green-100 text-green-700"
                          : result.status === "invalid"
                          ? "bg-red-100 text-red-700"
                          : result.status === "disposable"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {result.status[0].toUpperCase() + result.status.slice(1)}
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
              {Math.min(startIndex + items, filteredResults.length)}
            </span>{" "}
            of <span className="font-medium">{filteredResults.length}</span>{" "}
            results
          </p>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 disabled:text-gray-500 text-black rounded-l-md hover:cursor-pointer transition-colors bg-yellow-400 text-sm font-medium hover:bg-yellow-500"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 disabled:text-gray-500 text-black rounded-r-md hover:cursor-pointer transition-colors bg-yellow-400 text-sm font-medium hover:bg-yellow-500"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
