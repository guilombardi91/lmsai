import { Stats } from '@/components/dashboard/stats'
import { Charts } from '@/components/dashboard/charts'

export default function Page() {
  return (
    <div className="space-y-6">
      <Stats />
      <Charts />
    </div>
  )
}