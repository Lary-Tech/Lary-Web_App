import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "user",
  state: () => ({
    user: null,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
  },
});
