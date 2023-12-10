import { defineStore } from 'pinia'

export interface UserState {
  name: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: localStorage.getItem('user-name') ?? ''
  }),
  actions: {
    newUser(name: string) {
      this.name = name;
      localStorage.setItem('user-name', name);
    }
  }
})