export function SkeletonCard() {
  return (
    <div className="p-4 rounded-xl bg-white shadow animate-pulse space-y-2">
      <div className="h-4 w-1/2 bg-gray-300 rounded" />
      <div className="h-6 w-1/3 bg-gray-400 rounded" />
    </div>
  )
}