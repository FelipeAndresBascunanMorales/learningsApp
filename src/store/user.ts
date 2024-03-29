import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */
  const savedName = ref('')
  const password = ref('')
  const token = ref('')
  const user_id = ref('')
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  function login(name: string, password: string) {
    const user_data = {
      Username: '',
      Email: name,
      Password: password,
      Token: '',
      Learnings: [],
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_data),
    }
    const url = 'https://learningsapi.azurewebsites.net/api/users/autenticate'
    // const local = 'https://localhost:7032/api/users/autenticate'

    fetch(url, requestOptions)
      .then(response => response.json())
      .then((response) => {
        // console.log(response)
        token.value = response.token.Result
        user_id.value = response.newUser.Id
        return console.log(`en user: ${user_id.value}`)
      })
      .catch((error) => {
        console.log(user_data)
        return console.log('error', error)
      })

    // setNewName(name)
  }

  return {
    login,
    setNewName,
    otherNames,
    savedName,
    password,
    token,
    user_id,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
