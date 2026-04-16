import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Completed', value: 65 },
  { name: 'Pending', value: 35 },
]

const COLORS = ['#22c55e', '#e5e7eb']

function Donut() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}