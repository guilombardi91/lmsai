import { Home, Book, Users, BarChart } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0B1B2B] text-white p-5">
      <h2 className="text-xl font-bold mb-8">LMS Portals</h2>

      <nav className="space-y-2">
        <Item icon={<Home size={18} />} label="Dashboard" active />
        <Item icon={<Book size={18} />} label="Courses" />
        <Item icon={<Users size={18} />} label="Users" />
        <Item icon={<BarChart size={18} />} label="Reports" />
      </nav>
    </aside>
  )
}

function Item({ icon, label, active }: any) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
      ${active ? 'bg-cyan-400 text-black' : 'hover:bg-white/10'}`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  )
}