import { defineStore } from 'pinia'
import axios from 'axios'

export const useCardsStore = defineStore('cards', {
  state: () => ({ cards: [] }),
  actions: {
    async getCards() {
      this.cards.splice(0, this.cards.length, ...(await axios.get('http://127.0.0.1:8000/cards/')).data) 
    }
  }
})
