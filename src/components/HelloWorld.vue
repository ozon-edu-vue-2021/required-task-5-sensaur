<template>
  <div class="box">
    <ul>
      <li v-for="i in doneTodos" :key="i.id">{{ i.name }}</li>
    </ul>
    <div style="padding: 25px">
      <h4>Count {{ count }}</h4>
      <button type="button" v-on:click="increment(3)" class="btn btn-primary">
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment(payload) {
      // this.$store.commit("inrement")
      this.$store.dispatch("increment", payload);
    },
  },
};
</script>

<style scoped>
.box {
  margin: 75px auto;
  width: 300px;
  background: lightcoral;
  padding-top: 10px;
}
</style>
