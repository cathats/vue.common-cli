import { defineStore } from 'pinia'

interface AppState {
  pageLoading: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    pageLoading: false
  })
})
