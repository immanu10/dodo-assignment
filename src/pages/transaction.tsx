import React, { useState } from "react";
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
  description: string;
  amount: number;
  status: string;
}

const dummyData: Transaction[] = [
  {
    id: 1,
    date: "2024-07-01",
    description: "Grocery Shopping",
    amount: 50,
    status: "Success",
  },
  {
    id: 3,
    date: "2024-07-03",
    description: "Internet Bill",
    amount: 30,
    status: "Success",
  },
  {
    id: 2,
    date: "2024-07-02",
    description: "Electricity Bill",
    amount: 100,
    status: "Success",
  },
  {
    id: 4,
    date: "2024-07-04",
    description: "Dining Out",
    amount: 75,
    status: "Success",
  },
  {
    id: 5,
    date: "2024-07-05",
    description: "Movie Tickets",
    amount: 20,
    status: "Success",
  },
  {
    id: 6,
    date: "2024-07-06",
    description: "Gasoline",
    amount: 60,
    status: "Success",
  },
  {
    id: 7,
    date: "2024-07-07",
    description: "Monthly Rent",
    amount: 500,
    status: "Success",
  },
  {
    id: 8,
    date: "2024-07-08",
    description: "Gym Membership",
    amount: 40,
    status: "Success",
  },
  {
    id: 9,
    date: "2024-07-09",
    description: "Coffee",
    amount: 10,
    status: "Success",
  },
  {
    id: 10,
    date: "2024-07-10",
    description: "New Shoes",
    amount: 120,
    status: "Success",
  },
  {
    id: 11,
    date: "2024-07-11",
    description: "Doctor Visit",
    amount: 150,
    status: "Success",
  },
  {
    id: 12,
    date: "2024-07-12",
    description: "Pharmacy",
    amount: 25,
    status: "Success",
  },
  {
    id: 13,
    date: "2024-07-13",
    description: "Haircut",
    amount: 30,
    status: "Success",
  },
  {
    id: 14,
    date: "2024-07-14",
    description: "Concert Tickets",
    amount: 90,
    status: "Success",
  },
  {
    id: 15,
    date: "2024-07-15",
    description: "Book Purchase",
    amount: 15,
    status: "Success",
  },
  {
    id: 16,
    date: "2024-07-16",
    description: "Car Repair",
    amount: 200,
    status: "Success",
  },
  {
    id: 17,
    date: "2024-07-17",
    description: "Water Bill",
    amount: 45,
    status: "Success",
  },
  {
    id: 18,
    date: "2024-07-18",
    description: "School Supplies",
    amount: 60,
    status: "Success",
  },
  {
    id: 19,
    date: "2024-07-19",
    description: "Bus Ticket",
    amount: 5,
    status: "Success",
  },
  {
    id: 20,
    date: "2024-07-20",
    description: "Lunch",
    amount: 12,
    status: "Success",
  },
  {
    id: 21,
    date: "2024-07-21",
    description: "Music Subscription",
    amount: 10,
    status: "Success",
  },
  {
    id: 22,
    date: "2024-07-22",
    description: "Online Course",
    amount: 50,
    status: "Success",
  },
  {
    id: 23,
    date: "2024-07-23",
    description: "Office Supplies",
    amount: 25,
    status: "Success",
  },
  {
    id: 24,
    date: "2024-07-24",
    description: "Home Decor",
    amount: 75,
    status: "Success",
  },
  {
    id: 25,
    date: "2024-07-25",
    description: "Gift",
    amount: 100,
    status: "Success",
  },
  {
    id: 26,
    date: "2024-07-26",
    description: "Bike Repair",
    amount: 40,
    status: "Success",
  },
  {
    id: 27,
    date: "2024-07-27",
    description: "Taxi Ride",
    amount: 20,
    status: "Success",
  },
  {
    id: 28,
    date: "2024-07-28",
    description: "Dinner",
    amount: 30,
    status: "Success",
  },
  {
    id: 29,
    date: "2024-07-29",
    description: "Gardening",
    amount: 50,
    status: "Success",
  },
  {
    id: 30,
    date: "2024-07-30",
    description: "Laundry",
    amount: 15,
    status: "Success",
  },
  {
    id: 31,
    date: "2024-07-31",
    description: "Parking Fee",
    amount: 10,
    status: "Success",
  },
  {
    id: 32,
    date: "2024-08-01",
    description: "Streaming Subscription",
    amount: 15,
    status: "Success",
  },
  {
    id: 33,
    date: "2024-08-02",
    description: "Charity Donation",
    amount: 50,
    status: "Success",
  },
  {
    id: 34,
    date: "2024-08-03",
    description: "Pet Food",
    amount: 25,
    status: "Success",
  },
  {
    id: 35,
    date: "2024-08-04",
    description: "House Cleaning",
    amount: 100,
    status: "Success",
  },
  {
    id: 36,
    date: "2024-08-05",
    description: "Workshop Fee",
    amount: 80,
    status: "Success",
  },
  {
    id: 37,
    date: "2024-08-06",
    description: "Travel Booking",
    amount: 300,
    status: "Success",
  },
  {
    id: 38,
    date: "2024-08-07",
    description: "Furniture Purchase",
    amount: 200,
    status: "Success",
  },
  {
    id: 39,
    date: "2024-08-08",
    description: "Mobile Recharge",
    amount: 20,
    status: "Success",
  },
  {
    id: 40,
    date: "2024-08-09",
    description: "Gardening Tools",
    amount: 45,
    status: "Success",
  },
  {
    id: 41,
    date: "2024-08-10",
    description: "Festival Tickets",
    amount: 150,
    status: "Success",
  },
  {
    id: 42,
    date: "2024-08-11",
    description: "Craft Supplies",
    amount: 30,
    status: "Success",
  },
  {
    id: 43,
    date: "2024-08-12",
    description: "Taxi Fare",
    amount: 25,
    status: "Success",
  },
  {
    id: 44,
    date: "2024-08-13",
    description: "Groceries",
    amount: 70,
    status: "Success",
  },
  {
    id: 45,
    date: "2024-08-14",
    description: "Snacks",
    amount: 10,
    status: "Success",
  },
  {
    id: 46,
    date: "2024-08-15",
    description: "Medical Checkup",
    amount: 100,
    status: "Success",
  },
  {
    id: 47,
    date: "2024-08-16",
    description: "Shoe Repair",
    amount: 15,
    status: "Success",
  },
  {
    id: 48,
    date: "2024-08-17",
    description: "Utility Bill",
    amount: 120,
    status: "Success",
  },
  {
    id: 49,
    date: "2024-08-18",
    description: "Subscription Renewal",
    amount: 25,
    status: "Success",
  },
  {
    id: 50,
    date: "2024-08-19",
    description: "Birthday Gift",
    amount: 60,
    status: "Success",
  },
];

const TransactionsTable: React.FC = () => {
  const transactions = dummyData;
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
    transaction.description.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold my-4">Transactions</h1>
      <input
        type="text"
        placeholder="Filter by description"
        value={filter}
        onChange={handleFilterChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                onClick={() => handleSort("date")}
                className="px-6 py-3 cursor-pointer"
              >
                Date
              </th>
              <th
                onClick={() => handleSort("description")}
                className="px-6 py-3 cursor-pointer"
              >
                Description
              </th>
              <th
                onClick={() => handleSort("amount")}
                className="px-6 py-3 cursor-pointer"
              >
                Amount
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
                <td className="px-6 py-4">{transaction.description}</td>
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
            className={`px-3 py-1 mx-1 border ${
              index + 1 === currentPage ? "bg-gray-300" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
