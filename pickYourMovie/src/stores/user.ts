import { defineStore } from 'pinia'
import axios from 'axios'

export interface User {
  name: string;
}

export interface UserState {
  user?: User;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({  }),
    actions: {
        newUser(name: string) {
            this.user = {
                name
            }
        }
  }
})