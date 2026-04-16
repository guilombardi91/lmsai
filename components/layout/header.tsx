export function Header() {
  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        <span className="text-sm">Admin</span>
      </div>
    </div>
  )
}