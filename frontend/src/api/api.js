const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9000/api'

export async function sendContactMessage(data) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = await res.json()

  if (!res.ok) {
    throw new Error(json.message || 'Something went wrong')
  }

  return json
}

export async function healthCheck() {
  const res = await fetch(`${BASE_URL}/health`)
  return res.json()
}