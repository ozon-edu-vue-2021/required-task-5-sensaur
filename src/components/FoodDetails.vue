<template>
  <div class="d-flex food-details-outer">
    <Header />
    <div class="food-details">
      <div class="container mb-5">
        <div class="container mb-5">
          <h4 class="my-4 fw-600">Товар</h4>
          <div class="row">
            <div class="col-md-4" style="cursor: pointer">
              <img
                :src="details.url"
                width="300px"
                height="300px"
                style="border-radius: 15px"
                alt=""
              />
            </div>
            <div class="col-md-4" style="cursor: pointer">
              <h5 class="my-4 fw-600">Name: {{ details.name }}</h5>
              <h5 class="my-4 fw-600">Price: {{ details.price }}</h5>
              <h5 class="my-4 fw-600">Description: {{ details.desc }}</h5>
              <h5 class="my-4 fw-600">Rating: {{ details.rate }} *</h5>
              <div>
                <button v-on:click="goToCart" class="btn btn-primary">
                  Перейти в корзину
                </button>
                <button v-on:click="addToCart" class="btn btn-success">
                  Добавить в корзину
                </button>
                <button v-on:click="removeItem" class="btn btn-danger">
                  Удалить из корзины
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
export default {
  name: "FoodDetails",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
      console.log("this.$store", this.$store.state.cartItems);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    },
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<style scoped>
.food-details-outer {
  flex-direction: column;
  height: 100vh;
}
.food-details {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
}
button {
  margin: 5px 5px 5px 5px;
}
</style>
