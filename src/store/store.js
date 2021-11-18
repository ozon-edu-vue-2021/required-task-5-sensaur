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
    stock: [
      {
        id: 1,
        name: "Гречотто",
        price: 100,
        url: item1,
        desc: "aaa",
        rate: 5,
        isFavorite: false,
      },
      {
        id: 2,
        name: "Борщ",
        price: 200,
        url: item2,
        desc: "bbb",
        rate: 4,
        isFavorite: false,
      },
      {
        id: 3,
        name: "Солянка",
        price: 300,
        url: item3,
        desc: "ccc",
        rate: 3,
        isFavorite: false,
      },
      {
        id: 4,
        name: "Карбонара",
        price: 400,
        url: item4,
        desc: "ddd",
        rate: 3,
        isFavorite: false,
      },
      {
        id: 5,
        name: "Попкорн",
        price: 100,
        url: item5,
        desc: "eee",
        rate: 2,
        isFavorite: false,
      },
      {
        id: 6,
        name: "Блины",
        price: 100,
        url: item6,
        desc: "fff",
        rate: 2,
        isFavorite: false,
      },
      {
        id: 7,
        name: "Котлетос",
        price: 100,
        url: item7,
        desc: "ggg",
        rate: 2,
        isFavorite: false,
      },
      {
        id: 8,
        name: "Йогурт",
        price: 100,
        url: item8,
        desc: "hhh",
        rate: 2,
        isFavorite: false,
      },
      {
        id: 9,
        name: "Колбаса",
        price: 50,
        url: item9,
        desc: "jjj",
        rate: 1,
        isFavorite: false,
      },
      {
        id: 10,
        name: "Паштет",
        price: 50,
        url: item10,
        desc: "kkk",
        rate: 1,
        isFavorite: false,
      },
      {
        id: 11,
        name: "Сосиски",
        price: 50,
        url: item11,
        desc: "lll",
        rate: 1,
        isFavorite: false,
      },
      {
        id: 12,
        name: "Бри",
        price: 50,
        url: item12,
        desc: "mmm",
        rate: 1,
        isFavorite: false,
      },
    ],
    count: 0,
    cartItemCount: 0,
    cartItems: [],
    totalPrice: 0,
    favoriteItems: [],
    topRated: [],
    allCategories: [],
    promo: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool === true) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
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
        let bool = state.cartItems.some((i) => i.id === payload.id);
        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id === payload.id);
          state.cartItems[index]["quantity"] === 0
            ? (state.cartItems[index]["quantity"] = 0)
            : (state.cartItems[index]["quantity"] -= 1);
          if (state.cartItems[index]["quantity"] === 0)
            state.cartItems.splice(index, 1);
          if (state.cartItemCount !== 0) state.cartItemCount--;
        }
      }
    },
    setFavorite(state, payload) {
      let item = payload;
      let index = state.favoriteItems.findIndex((el) => el.id === payload.id);
      // console.log(index);
      if (index === -1) {
        item.isFavorite = !item.isFavorite;
        // console.log("добавляем");
        return state.favoriteItems.push(item);
      } else {
        // console.log("убираем");
        state.favoriteItems.splice(index, 1);
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
    setFavorite: (context, payload) => {
      context.commit("setFavorite", payload);
    },
  },
  getters: {
    countTotal: (state) => {
      let price = 0;
      state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
    getFavorites: (state) => {
      // console.log(state.favoriteItems);
      return state.favoriteItems;
    },
    topRated: (state) => {
      return (state.topRated = state.stock.filter((el) => el.rate >= 3));
    },
    allCategories: (state) => {
      return (state.allCategories = state.stock.filter((el) => el.rate === 2));
    },
    promo: (state) => {
      return (state.promo = state.stock.filter((el) => el.rate === 1));
    },
  },
});
