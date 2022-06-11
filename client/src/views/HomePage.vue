<template>
  <main>
    <Header />
    <SildeHome />
    <TrendingCard :stores="stores" />
    <BodyHome />
    <!-- <AboutUs /> -->
    <Footer />
  </main>
</template>

<script>
import BodyHome from '../components/BodyHome.vue'
import Header from '../components/Header.vue'
import SildeHome from '../components/SildeHome.vue'
import TrendingCard from '../components/TrendingCard.vue'
import Footer from '../components/Footer.vue'
import AboutUs from '../components/AboutUs.vue'
export default {
  components: {
    BodyHome,
    SildeHome,
    Header,
    Footer,
    TrendingCard,
    AboutUs,
  },
  data() {
    return {
      stores: [],
    }
  },
  name: 'HomePage',
  methods: {
    showMyDiv() {},
  },
  async created() {
    const res = await fetch('http://localhost:3001/store/all', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })

    const resData = await res.json()

    this.stores = resData.data
    console.log(this.stores);
  },
}
</script>

<style></style>
