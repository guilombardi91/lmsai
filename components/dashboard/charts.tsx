"use client"

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 20 },
  { name: 'Mar', users: 40 },
  { name: 'Apr', users: 35 },
  { name: 'May', users: 50 },
]

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-xl shadow col-span-2">
        <h2 className="mb-4 font-semibold">This Year</h2>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#6366f1" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center">
        <span className="opacity-50">Donut Chart (próximo)</span>
      </div>
    </div>
  )
}