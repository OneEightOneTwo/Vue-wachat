<template>
  <div>
    <Header/>
    <Sousuo/>
    <Main/>
  </div>
    
</template>

<script>
import Header from "./Header/Header.vue"
import Sousuo from "./Header/Sousuo.vue"
import Main from "./Main/Main.vue"
export default {
  components:{
    Header,
    Sousuo,
    Main
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
