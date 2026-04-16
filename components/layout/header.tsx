export function Header(){
  return (
    <div className="h-16 flex items-center justify-between px-6 bg-white/5 border-b border-white/10">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        <span>Admin</span>
      </div>
    </div>
  )
}