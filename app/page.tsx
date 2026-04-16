import { Stats } from '@/components/dashboard/stats'
import { Charts } from '@/components/dashboard/charts'
import { Recent } from '@/components/dashboard/recent'

export default function Page(){
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <Stats />
      <Charts />
      <Recent />
    </div>
  )
}