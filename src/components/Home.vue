<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container mb-">
        <h4 class="my-4 fw-600 d-blue">Самое вкусное</h4>
        <div class="row">
          <div
            v-for="items in topRated"
            :key="items.id"
            v-on:click="foodDetails(items)"
            class="col-md-3 pointer"
          >
            <img
              :src="items.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
              alt="" />
            <h5 class="fw-600 black">{{ items.name }}</h5>
          </div>
        </div>
        <h4 class="my-4 fw-600 d-blue">Разное</h4>
        <div class="row">
          <div
            v-for="items in allCategories"
            :key="items.id"
            class="col-md-3 pointer"
          >
            <img
              :src="items.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
              alt="" />
            <h5 class="fw-600 black">{{ items.name }}</h5>
          </div>
        </div>
        <h4 class="my-4 fw-600 d-blue">Акции</h4>
        <div class="row">
          <div
            v-for="items in dishesNearYou"
            :key="items.id"
            class="col-md-3 pointer"
          >
            <img
              :src="items.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
              alt='' />
            <h5 class="fw-600 black">{{ items.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },
    dishesNearYou() {
      return this.$store.state.dishesNearYou;
    }
  },
  methods: {
    foodDetails(item) {
      this.$router.push({ name: "food-details", params: item });
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}

.fw-600 {
  font-weight: 600;
}

.d-blue {
  color: dodgerblue;
}

.black {
  color: black;
}

.pointer {
  cursor: pointer;
}
</style>
