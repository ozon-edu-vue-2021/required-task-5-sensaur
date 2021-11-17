<template>
  <header>
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <h4 class="sweet">Магазин</h4>
        </div>
      </router-link>

      <div
        class="d-flex"
        style="width: 300px; justify-content: space-evenly; padding-top: 3px"
      >
        <router-link class="link" to="/favorites">
          <i class="fa fa-heart cart-icon"></i>
        </router-link>
        <router-link class="link" to="/cart">
          <i class="fa fa-shopping-cart cart-icon"></i>
          <span class="cart-count">{{ count }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {},
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}

.sweet {
  color: deeppink;
  font-weight: 600;
  margin-top: 7px;
}

.cart-count {
  font-size: 15px;
  color: #d4570cf2;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  height: 20px;
  border-radius: 50%;
  width: 20px;
}

.cart-icon {
  line-height: 45px;
  font-size: 24px;
  color: #2aa5a0;
  cursor: pointer;
}

.login,
.register {
  font-weight: 600;
  margin: 5px 5px 5px 5px;
}

.link {
  margin: 5px 5px 5px 5px;
}
</style>
