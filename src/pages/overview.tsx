import { ChevronDownIcon } from "lucide-react";
import { Card } from "../components/ui/card";
import { BarChart } from "../components/ui/bar-chart";
import { LineChart } from "../components/ui/line-chart";
import { PieChart } from "../components/ui/pie-chart";

export function OverViewPage() {
  return (
    <div>
      <div className="mb-4 relative text-black-30 w-fit">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </div>
        <select
          defaultValue="today"
          className="appearance-none h-9 rounded  bg-background dark:bg-background-dark text-sm font-semibold cursor-pointer outline-none py-[6px] px-[14px] pr-6"
        >
          <option value="today">Today</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 text-foreground">
        <Card
          className="bg-[#f9fef0]"
          label="Revenue"
          amount="$25M"
          sublabel="+11.03%"
          growth="positive"
        />
        <Card
          className="bg-[#DBE6f2]"
          label="Transaction"
          amount="25K"
          sublabel="-1.03%"
          growth="negative"
        />
        <Card
          className="bg-[#f9fef0]"
          label="Avg Transaction"
          amount="$2K"
          sublabel="+15.03%"
          growth="positive"
        />
        <Card
          className="bg-[#DBE6f2]"
          label="Refunds"
          amount="1K"
          sublabel="+0.03%"
          growth="positive"
        />
      </div>
      <div className="mt-6 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart title="Revenue" />
        <LineChart title="Number of Transactions" />
        <BarChart title="Transaction value by Referrer (in $)" />
        <PieChart title="% Transaction value by Location" />
      </div>
    </div>
  );
}
