import { ResponsiveContainer, PieChart as PieReChart, Pie } from "recharts";

const data = [
  {
    name: "USA",
    amt: 38.6,
    fill: "#e28745",
  },
  {
    name: "Canada",
    amt: 22.5,
    fill: "#c5da5c",
  },
  {
    name: "Europe",
    amt: 30.8,
    fill: "#7d7573",
  },
  {
    name: "Others",
    amt: 8.1,
    fill: "#655252",
  },
];

export function PieChart({ title }: { title: string }) {
  return (
    <div className="relative min-h-[328px] py-6 px-6 rounded-2xl bg-[#f8f9fb]  dark:bg-slate-800">
      <h3 className="absolute top-6 left-6 text-foreground font-medium dark:text-foreground-dark">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieReChart
          width={200}
          height={200}
          margin={{
            top: 20,
            right: 150,
          }}
        >
          <Pie
            data={data}
            dataKey="amt"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            cornerRadius={12}
          />
        </PieReChart>
      </ResponsiveContainer>
      <div className="absolute right-6 top-[50%]  translate-y-[-50%]  ">
        <ul className="flex flex-col space-y-2">
          {data.map((item) => (
            <li className="flex gap-8 items-center text-sm text-foreground dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>
                <span>{item.name}</span>
              </div>
              <span>{item.amt}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
