import { defineStore } from 'pinia'
import axios from 'axios'

export interface Card {
  id: number;
  name: string;
  rate: number;
  genres: string[];
  types: string[];
  description: string;
  duration_all: number;
  filename: string;
  year: number;
}

export interface CardState {
  cards: Card[];
}

export const useCardsStore = defineStore('cards', {
  state: (): CardState => ({ cards: [] }),
  actions: {
    async getCards() {
      this.cards.splice(0, this.cards.length, ...(await axios.get<Card[]>('http://127.0.0.1:8000/cards/')).data) 
    }
  }
})
