export function Recent(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white/5 p-4 rounded-xl">
        <p className="mb-2">Recent Users</p>
        <ul className="space-y-2">
          <li className="p-2 bg-white/5 rounded">User 1</li>
          <li className="p-2 bg-white/5 rounded">User 2</li>
        </ul>
      </div>
      <div className="bg-white/5 p-4 rounded-xl">
        <p className="mb-2">Recent Courses</p>
        <ul className="space-y-2">
          <li className="p-2 bg-white/5 rounded">Course A</li>
          <li className="p-2 bg-white/5 rounded">Course B</li>
        </ul>
      </div>
    </div>
  )
}