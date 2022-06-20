<template>
  <div>
    <Header />
    <ReviewCard :stores="stores" :totalPage="totalPage" />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import ReviewCard from "../components/ReviewCard.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, ReviewCard, Footer },
  name: "ReviewPage",
  data() {
    return {
      stores: [],

      //pagination
      totalPage: 1,
    };
  },
  methods: {
    //get Review data
    async getReview(page) {
      const res = await fetch(`http://localhost:3001/store/all?page=${page}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });

      const resData = await res.json();
      this.stores = resData.data.stores.docs;
      this.totalPage = resData.data.stores.totalPages;
      console.log(resData.data.stores);
    },
  },
  watch: {
    "$route.query": {
      handler(query) {
        this.getReview(query.page);
      },
      immediate: true,
      deep: true,
    },
  },
  // async created() {
  //   const res = await fetch("http://localhost:3001/store/all?page=1", {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });

  //   const resData = await res.json();

  //   this.stores = resData.data.stores.docs;
  //   console.log(this.resData.data.stores);
  // },
};
</script>
<style></style>
