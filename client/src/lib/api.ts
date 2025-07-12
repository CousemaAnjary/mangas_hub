export const apiUrl = process.env.NEXT_PUBLIC_API_URL 
if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL is not defined in environment variables")

export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
if (!backendUrl) throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined in environment variables")