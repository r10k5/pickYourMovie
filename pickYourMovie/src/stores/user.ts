import { defineStore } from 'pinia'

export interface UserState {
  name: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({ name: '' }),
  actions: {
    newUser(name: string) {
      this.name = name;
    }
  }
})