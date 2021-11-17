import Vue from "vue";
import Vuex from "vuex";

import item1 from "../assets/images/6123150777.webp";
import item2 from "../assets/images/6126039472.webp";
import item3 from "../assets/images/6126040354.webp";
import item4 from "../assets/images/6128597660.webp";
import item5 from "../assets/images/6134992334.webp";
import item6 from "../assets/images/6136170572.webp";
import item7 from "../assets/images/6136172483.webp";
import item8 from "../assets/images/6140906765.webp";
import item9 from "../assets/images/6142673815.webp";
import item10 from "../assets/images/6142681673.webp";
import item11 from "../assets/images/6142683276.webp";
import item12 from "../assets/images/6148226736.webp";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    topRated: [
      { id: 1, name: "Item 1", price: 100, url: item1, desc: "aaa", rate: 5 },
      { id: 2, name: "Item 2", price: 200, url: item2, desc: "bbb", rate: 4 },
      { id: 3, name: "Item 3", price: 300, url: item3, desc: "ccc", rate: 3 },
      { id: 4, name: "Item 4", price: 400, url: item4, desc: "ddd", rate: 3 },
    ],
    allCategories: [
      { id: 5, name: "Item 5", price: 100, url: item5, desc: "eee", rate: 2 },
      { id: 6, name: "Item 6", price: 100, url: item6, desc: "fff", rate: 2 },
      { id: 7, name: "Item 7", price: 100, url: item7, desc: "ggg", rate: 1 },
      { id: 8, name: "Item 8", price: 100, url: item8, desc: "hhh", rate: 1 },
    ],
    dishesNearYou: [
      { id: 9, name: "Item 9", price: 50, url: item9, desc: "jjj", rate: 1 },
      { id: 10, name: "Item 10", price: 50, url: item10, desc: "kkk", rate: 0 },
      { id: 11, name: "Item 11", price: 50, url: item11, desc: "lll", rate: 1 },
      { id: 12, name: "Item 12", price: 50, url: item12, desc: "mmm", rate: 2 },
    ],
    count: 0,
    cartItemCount: 0,
    cartItems: [],
    totalPrice: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == item.id);
        if (bool == true) {
          let itemIndex = state.cartItems.findIndex((el) => el.id == item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++;
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == payload.id);
        console.log("bool", bool);
        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id == payload.id);
          //to prevent quantity from being negative
          state.cartItems[index]["quantity"] === 0
            ? (state.cartItems[index]["quantity"] = 0)
            : (state.cartItems[index]["quantity"] -= 1);
          if (state.cartItems[index]["quantity"] === 0)
            state.cartItems.splice(index, 1);
          if (state.cartItemCount !== 0) state.cartItemCount--;
        }
      }
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
    increment: (context, payload) => {
      setTimeout(() => {
        context.commit("increment", payload);
      }, 5000);
    },
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
  },
});
