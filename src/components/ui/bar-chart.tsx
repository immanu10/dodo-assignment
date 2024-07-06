import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart as BarReChart,
  Bar,
} from "recharts";

const data = [
  {
    name: "Youtube",
    amt: 2300,
    fill: "#e65353",
  },
  {
    name: "Twitter",
    amt: 2810,
    fill: "#8884d8",
  },
  {
    name: "Reddit",
    amt: 1790,
    fill: "#FF8b60",
  },
  {
    name: "IndieHack",
    amt: 600,
    fill: "#e57a53",
  },
];

export function BarChart({ title }: { title: string }) {
  return (
    <div className="relative min-h-[328px] py-6 px-6 rounded-2xl bg-[#f8f9fb] dark:bg-slate-800">
      <h3 className="absolute top-6 left-6 text-foreground font-medium dark:text-foreground-dark">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarReChart
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
          <Bar dataKey="amt" barSize={25} radius={[6, 6, 0, 0]} />
        </BarReChart>
      </ResponsiveContainer>
    </div>
  );
}
