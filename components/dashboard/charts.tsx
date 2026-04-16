export function Charts(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-white/5 p-4 rounded-xl">
        <p className="mb-2">This Year</p>
        <div className="h-40 flex items-center justify-center opacity-50">[Chart aqui]</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl">
        <p className="mb-2">Monthly Report</p>
        <div className="h-40 flex items-center justify-center opacity-50">[Donut Chart]</div>
      </div>
    </div>
  )
}