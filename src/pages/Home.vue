<template>
  <div class="homePage">
    <Footer />
  </div>
</template>

<script>
//引入组件
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
.homePage{
  position:relative;
}

</style>