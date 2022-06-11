<template>
  <div>
    <Header />
    <div style="margin-top:17vh">
     <h1>Welcome to Location page</h1>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Footer },

  name: 'HomePage',
}
</script>

<style>
</style>
