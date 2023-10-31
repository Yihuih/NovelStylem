import { ref } from 'vue'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
  const IsLogin = ref(false)

  return { IsLogin }
})

export default useUserStore