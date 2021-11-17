<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div class="container mb-5">
        <h4 class="my-4 my-cart">Избранное</h4>
      </div>
      <h6>{{ getFavorites }} руб.</h6>
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
  methods: {
    // getFavorites() {
    //   return this.$store.getters.collectFavorites;
    // },
  },
  computed: {
    getFavorites() {
      return this.$store.getters.collectFavorites;
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

.cart-quantity {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
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

.fw-600 {
  font-weight: 600;
}

.line {
  height: 1px;
  border-bottom: 1px solid black;
}

.w-120 {
  width: 120%;
}

.w-60 {
  width: 60%;
}

.add,
.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, #f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}

.mt-10 {
  margin-top: 10px;
}

.mt-15 {
  margin-top: 15px;
}

.orange-red {
  color: orangered;
}
</style>
