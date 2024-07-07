import { Outlet } from "react-router-dom";

export default function TransactionLayout() {
  return (
    <div className="">
      <h2 className="text-2xl font-bold">Transaction</h2>
      <Outlet />
    </div>
  );
}
