<template>
  <div>
    <Header />
    <ReviewCard :stores="stores"/>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import ReviewCard from '../components/ReviewCard.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, ReviewCard, Footer },
  name: 'ReviewPage',
  data() {
    return {
      stores: [],
    }
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

    this.stores = resData.data.stores.docs
    console.log(this.stores)
  },
}
</script>
<style></style>
