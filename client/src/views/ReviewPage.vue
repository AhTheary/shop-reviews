<template>
  <div>
    <Header />
    <ReviewCard />
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import ReviewCard from '../components/ReviewCard.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header,ReviewCard, Footer },
  name: 'ReviewPage',
}
</script>
<style>
</style>
