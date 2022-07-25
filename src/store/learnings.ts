// 👇️ only necessary if running in Node.js
// (Remove this line if running in the browser)
// import fetch from 'node-fetch'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePublicLearnings = defineStore('learnings', () => {
  // 👇️ const response: Response
  const response = fetch('https://reqres.in/api/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  // 👇️ const result: GetUsersResponse
  const result = (response)

  return result
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePublicLearnings, import.meta.hot))
