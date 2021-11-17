<template>
  <footer>
    <div class="footer">
      <div style="margin-left: 20px">
        <h4 class="fw-600">Скидки</h4>
      </div>
      <div class="about-us">
        <div>
          <h5 class="fw-600">Контакты</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  min-height: 60px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
}

.about-us {
  display: flex;
  width: 200px;
  justify-content: space-around;
}

.fw-600 {
  font-weight: 600;
}
</style>
