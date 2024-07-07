import React, { useState } from "react";
import { TRANSACTION_DATA } from "../data/transaction-data";
import { cn } from "../lib/utils";
import { SortableIcon } from "../assets/icons/SortableIcon";

export function Transaction() {
  return (
    <div>
      <TransactionsTable />
    </div>
  );
}

interface Transaction {
  id: number;
  date: string;
  name: string;
  amount: number;
  status: string;
}

const transactions = TRANSACTION_DATA;

const TransactionsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSort = (key: string) => {
    if (key === "status") return;
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedTransactions = React.useMemo(() => {
    let sortableTransactions = [...transactions];
    if (sortConfig !== null) {
      sortableTransactions.sort((a, b) => {
        if (
          a[sortConfig.key as keyof Transaction] <
          b[sortConfig.key as keyof Transaction]
        ) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (
          a[sortConfig.key as keyof Transaction] >
          b[sortConfig.key as keyof Transaction]
        ) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableTransactions;
  }, [transactions, sortConfig]);

  const filteredTransactions = sortedTransactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container my-4">
      <input
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={handleFilterChange}
        className="mb-4 px-4 py-2 text-gray-900 dark:text-white border border-gray-300 rounded-lg w-80 bg-gray-50 dark:border-slate-500 dark:bg-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300"
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                onClick={() => handleSort("date")}
                className="px-6 py-3 cursor-pointer "
              >
                <div className="flex items-center">
                  Date
                  <SortableIcon />
                </div>
              </th>
              <th
                onClick={() => handleSort("name")}
                className="px-6 py-3 cursor-pointer "
              >
                <div className="flex items-center">
                  Name
                  <SortableIcon />
                </div>
              </th>
              <th
                onClick={() => handleSort("amount")}
                className="px-6 py-3 cursor-pointer "
              >
                <div className="flex items-center">
                  Amount
                  <SortableIcon />
                </div>
              </th>
              <th
                onClick={() => handleSort("status")}
                className="px-6 py-3 cursor-pointer"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{transaction.date}</td>
                <td className="px-6 py-4">{transaction.name}</td>
                <td className="px-6 py-4">{transaction.amount}</td>
                <td className="px-6 py-4">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {[
          ...Array(
            Math.ceil(filteredTransactions.length / transactionsPerPage)
          ),
        ].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={cn(
              "px-3 py-1 mx-1 rounded-lg bg-white dark:bg-muted-dark dark:text-foreground-dark text-foreground border dark:border-slate-500 ",
              index + 1 === currentPage &&
                "bg-muted dark:bg-slate-700 dark:text-white border-blue-500 dark:border-blue-500"
            )}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
