export function Stats() {
  const data = [
    { title: 'Total User', value: 14, color: 'from-indigo-500 to-blue-500' },
    { title: 'Published Courses', value: 11, color: 'from-purple-500 to-pink-500' },
    { title: 'Pending Courses', value: 9, color: 'from-green-500 to-emerald-500' },
    { title: 'Completed Courses', value: 6, color: 'from-teal-500 to-cyan-500' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.title}
          className={`p-4 rounded-xl text-white bg-gradient-to-r ${item.color}`}
        >
          <p className="text-sm opacity-80">{item.title}</p>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  )
}