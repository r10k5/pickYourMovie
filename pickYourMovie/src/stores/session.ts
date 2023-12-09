import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user';
import axios from 'axios'

export interface History {
  user: string;
  cardId: number;
  isLike: boolean;
}

export interface SessionResult {
  cardId: number;
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
  status?: boolean;
  result: SessionResult[];
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
      console.log(requestResult);
    },

    async connectToSession(uid: string, username: string) {
      const checkResult = await axios.get(`${import.meta.env.VITE_API}/cards/check-session/${uid}`)
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

    getSession(uid: string, username: string) {
      return axios.post(`${import.meta.env.VITE_API}/cards/get-session/${uid}`, {
        name: username,
      })
        .then((resp) => resp.data);
    },

    runInfinityUpdate() {
      if (this.session.uid) {
        if (this.timerId) {
          clearTimeout(this.timerId);
        }

        const userStore = useUserStore();
        const update = () => {
           this.getSession(this.session.uid, userStore.name)
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

    updateSessionLocal(session) {
      console.log(session);
      this.session.uid = session.uid;
      this.session.creatorName = session.creator_name;
      this.session.users.splice(0, this.session.users.length, ...session.guest_names);
      this.session.genre = session.genre;
      this.session.type = session.type;
      this.session.limit = session.limit;
      this.session.history.splice(0, this.session.users.length, ...session.history);
      this.session.status = session.status;
      this.session.result.splice(0, this.session.users.length, ...session.result);
    }
  }
})