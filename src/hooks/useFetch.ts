export async function useFetch(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  } catch(error) {
    throw error;
  }
}
