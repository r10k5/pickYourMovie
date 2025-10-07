import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user';
import axios from 'axios'
import type { Card } from './cards';

export interface History {
  user: string;
  card: Card;
  isLike: boolean;
}

export interface SessionResult {
  card: Card;
  likeCount: number;
}

export interface Session {
  uid?: string;
  users: string[];
  creatorName?: string;
  genre?: number;
  type?: number;
  limit?: number;
  history: History[];
  status?: 'pending' | 'started' | 'finished';
  result: SessionResult[];
  cards: Card[];
}

export interface SessionData {
  uid?: string;
  guest_names: string[];
  creator_name?: string;
  genre?: number;
  type?: number;
  limit?: number;
  history: History[];
  status?: 'pending' | 'started' | 'finished';
  result: SessionResult[];
  cards: Card[];
}

export interface SessionState {
  session: Session;
  error: string;
  timerId?: number;
}

export const useSessionStore = defineStore('session', {
  state: (): SessionState => ({
    session: {
      users: [],
      history: [],
      result: [],
      cards: [],
    },
    error: ''
  }),
  actions: {
    async createSession(creatorName: string, _type: number, genre: number, limit: number) {
      const userStore = useUserStore();
      userStore.newUser(creatorName);

      const requestResult = await axios.post(`${import.meta.env.VITE_API}/cards/create-session`, {
        name: creatorName,
        type: _type,
        genre,
        limit,
      })
        .then((resp) => resp.data)
        .catch((err) => {
          this.error = err.response?.data;
          return null;
        });

      if (requestResult) {
        this.updateSessionLocal(requestResult);
        this.runInfinityUpdate();
      }
    },

    async changeCardLike(card: Card, value: boolean) {
      const userStore = useUserStore();

      const requestResult = await axios.post(`${import.meta.env.VITE_API}/cards/like-card/${this.session.uid}`, {
        card_id: card.id,
        name: userStore.name,
        value
      })
        .then((resp) => resp.data)
        .catch((err) => {
          this.error = err.response?.data;
          return null;
        });

        if (requestResult) {
          this.updateSessionLocal(requestResult);
        }
    },

    likeCard(card: Card) {
      return this.changeCardLike(card, true);
    },


    unlikeCard(card: Card) {
      return this.changeCardLike(card, false);
    },

    async startSession() {
      const userStore = useUserStore();

      if (userStore.name && this.session.uid) {
        const result = await axios.post(`${import.meta.env.VITE_API}/cards/start-session/${this.session.uid}`, {
          name: userStore.name
        })
          .then((resp) => resp.data)
          .catch((err) => err.response?.data);

        if (result.error) {
          this.error = result.error;
          return;
        }

        this.updateSessionLocal(result);
      }
    },

    async connectToSession(uid: string, username: string) {
      const checkResult = await axios.post(`${import.meta.env.VITE_API}/cards/check-session/${uid}`)
        .then((resp) => resp.data)
        .catch((error) => error.response?.data);

      if (checkResult !== 'OK') {
        this.error = checkResult;
        return;
      }

      const connectionResult = await axios.post(`${import.meta.env.VITE_API}/cards/connect-session/${uid}`, {
        name: username,
      })
        .then((resp) => resp.data);

      if (connectionResult.error) {
        this.error = connectionResult.error;
        return;
      }

      const userStore = useUserStore();
      userStore.newUser(username);

      this.updateSessionLocal(connectionResult);
      this.runInfinityUpdate();
    },

    async getSession(uid: string, username: string) {
      return await axios.post(`${import.meta.env.VITE_API}/cards/get-session/${uid}`, {
        name: username,
      })
        .then((resp) => resp.data);
    },

    runInfinityUpdate() {
      const sessionUid = this.session.uid;
      if (sessionUid) {
        if (this.timerId) {
          clearTimeout(this.timerId);
        }

        const userStore = useUserStore();
        const update = () => {
           this.getSession(sessionUid, userStore.name)
            .then((session) => {
              if (!session.error) {
                this.updateSessionLocal(session);
                this.timerId = setTimeout(update, 500);
              }
            })
        }

        this.timerId = setTimeout(update, 500)
      }
    },

    stopInfinityUpdate() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    },

    updateSessionLocal(session: SessionData) {
      this.session.uid = session.uid;
      this.session.creatorName = session.creator_name;
      this.session.users.splice(0, this.session.users.length, ...session.guest_names);
      this.session.genre = session.genre;
      this.session.type = session.type;
      this.session.limit = session.limit;
      this.session.history.splice(0, this.session.history.length, ...session.history);
      this.session.status = session.status;
      this.session.result.splice(0, this.session.result.length, ...session.result);
      this.session.cards.splice(0, this.session.cards.length, ...session.cards);
    },

    clearSession() {
      this.session.uid = undefined;
      this.session.creatorName = undefined;
      this.session.users.splice(0, this.session.users.length);
      this.session.genre = undefined;
      this.session.type = undefined;
      this.session.limit = undefined;
      this.session.history.splice(0, this.session.history.length);
      this.session.status = undefined;
      this.session.result.splice(0, this.session.result.length);
      this.session.cards.splice(0, this.session.cards.length);
    }
  }
})