<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div v-if="totalPrice !== 0" class="container mb-5">
        <h4 class="my-4 my-cart">Моя корзина</h4>
        <div class="d-flex my-3" style="justify-content: space-between">
          <h4 class="fw-600">Ваш заказ</h4>
          <h4 class="fw-600" style="margin-right: 49%">В корзине</h4>
        </div>
        <div class="d-flex">
          <div v-show="totalPrice !== 0" class="row" style="width: 50%">
            <div class="col-md-4">
              <h6>Сумма покупки:</h6>
              <h6>Доставка:</h6>
              <div class="my-3 line w-120"></div>
              <h6>Итого:</h6>
            </div>
            <div class="col-md-4">
              <h6>{{ totalPrice }} руб.</h6>
              <h6>50 руб.</h6>
              <div class="my-3 line w-60"></div>
              <h6>{{ totalPrice + 50 }} руб.</h6>
            </div>
          </div>
          <div class="row" style="width: 50%">
            <div style="max-width: 70%" class="col-md-12">
              <ul style="padding: 0">
                <li
                  v-for="items in cartItems"
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
                      {{ items.name }} по {{ items.price }} за шт.
                    </h6>
                    <div class="d-flex mt-10">
                      <button
                        v-on:click="removeItem(items)"
                        class="add"
                        type="button"
                      >
                        -
                      </button>
                      <span class="cart-quantity">{{ items.quantity }}</span>
                      <button
                        v-on:click="addToCart(items)"
                        class="remove"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <h6 class="mt-15">{{ items.price * items.quantity }}</h6>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-end"
          style="width: 80%; margin-top: 2%"
        >
          <button v-on:click="checkout" class="btn btn-primary" type="button">
            Купить
          </button>
        </div>
      </div>
      <div v-else class="container my-5" style="text-align: center">
        <img src="../assets/shopping-cart.png" width="200px" alt="" />
        <div class="mt-4">
          <h4 class="orange-red fw-600">Ваша корзина пуста</h4>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
import swal from "sweetalert";

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
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
    checkout() {
      // console.log(this.$store.state.cartItems);
      const finalOrder = this.$store.state.cartItems.map((el) => el.name);
      // console.log(finalOrder);
      swal(
        `Спасибо!`,
        `Товары ${finalOrder} оформлены в доставку`,
        "success"
      ).then(() => {
        window.location.href = "/cart";
      });
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      return this.$store.getters.countTotal;
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
