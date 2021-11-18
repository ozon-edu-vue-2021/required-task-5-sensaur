<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div class="container mb-5">
        <h4 class="my-4 my-cart">Избранное</h4>
      </div>
      <div style="max-width: 70%" class="col-md-2">
        <ul>
          <li
            v-for="items in getFavorites"
            :key="items.id"
            style="list-style: none"
          >
            <div class="cart-items">
              <img
                :src="items.url"
                width="50px"
                height="50px"
                style="border-radius: 50%"
                alt=""
              />
              <h6 class="mt-15">
                {{ items.name }} Цена {{ items.price }} руб.
              </h6>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      item: 0,
    };
  },
  methods: {},
  computed: {
    getFavorites() {
      return this.$store.getters.getFavorites;
    },
  },
};
</script>

<style scoped>
.cart-outer-div {
  flex-direction: column;
  height: 100vh;
}

.cart-body {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}

.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}

.my-cart {
  color: orange;
  font-weight: 600;
}

input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}

.mt-15 {
  margin-top: 15px;
}
</style>
