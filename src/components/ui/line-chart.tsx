import {
  LineChart as LineReChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amt: 600,
  },
  {
    name: "Feb",
    amt: 1810,
  },
  {
    name: "Mar",
    amt: 2290,
  },
  {
    name: "Apr",
    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "Jun",
    amt: 2500,
  },
  {
    name: "July",
    amt: 3100,
  },
];

export function LineChart({ title }: { title: string }) {
  return (
    <div className="relative min-h-[328px] py-6 px-6 rounded-2xl bg-[#f8f9fb] dark:bg-slate-800">
      <h3 className="absolute top-6 left-6 text-foreground font-medium dark:text-foreground-dark">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineReChart
          className="w-full h-full"
          data={data}
          margin={{
            top: 50,
            right: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} stroke="#cccdce97" />
          <XAxis
            dataKey="name"
            tickLine={false}
            stroke="#a0a1a2"
            className="text-sm font-medium"
          />
          <YAxis
            dataKey="amt"
            axisLine={false}
            tickLine={false}
            stroke="#a0a1a2"
            dx={-10}
            className="text-sm font-medium"
          />
          <Tooltip
            cursor={{ strokeDasharray: 10 }}
            content={<CustomTooltip />}
          />

          <Line
            type="monotone"
            dataKey="amt"
            stroke="#526062"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineReChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#474748] text-white text-sm px-2 py-1 rounded-lg">
        <p className="label">{`$ ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
