export function Sidebar(){
  const items = [
    'Dashboard','Courses','Disciplines','Lessons','Exams','Users'
  ]

  return (
    <aside className="w-64 h-screen bg-[#0f172a] text-white p-4">
      <h2 className="text-lg font-bold mb-6">LMS</h2>
      <nav className="space-y-2">
        {items.map(i => (
          <div key={i} className="p-2 rounded hover:bg-white/10 cursor-pointer">
            {i}
          </div>
        ))}
      </nav>
    </aside>
  )
}