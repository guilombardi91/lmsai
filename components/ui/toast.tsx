"use client"

import { useEffect, useState } from "react"

export function useToast() {
  const [message, setMessage] = useState<string | null>(null)

  function show(msg: string) {
    setMessage(msg)
  }

  function Toast() {
    useEffect(() => {
      if (message) {
        setTimeout(() => setMessage(null), 3000)
      }
    }, [message])

    if (!message) return null

    return (
      <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg">
        {message}
      </div>
    )
  }

  return { show, Toast }
}