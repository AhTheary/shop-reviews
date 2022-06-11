<template>
  <div>
    <div class="title">
      <h1>Trending Store</h1>
    </div>
    <swiper
      :slidesPerView="4"
      :spaceBetween="0"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="false"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in stores" :key="item._id">
        <a :href="`/store/${item._id}`" class="box">
          <div class="user-name">
            <div class="profile-card">
              <span>{{ item.storeName }}</span>
            </div>
            <div class="hearth">
              <i class="bx bxs-heart" @click="addFovorite"></i>
              <!-- <img src="../assets/love.png" alt="" style="width:100%"> -->
            </div>
          </div>
          <div class="img">
            <img
              :src="item.imageUrl"
              alt="erorUserpost"
              style="width: 100%; height: 100%;"
            />
          </div>
          <div class="star-review">
            <div class="star">
              <!-- {{ item.rating }} --> rating
              <i class="bx bx-star"></i>
            </div>
            <div class="count-review">
              <span>21 Review</span>
            </div>
          </div>
          <div class="des">
            <div>Des: {{ item.desc }}</div>
            <div>Location: {{ item.location }}</div>
            <div><a :href="`/store/${item._id}`">see more</a></div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../public/css/trending.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default {
  name: 'TrendingCard',
  props: ['stores'],
  data() {
    return {
      // items: [
      //   {
      //     _id: 1,
      //     nameShop: 'FC Bayern Store',
      //     src:
      //       'https://th.bing.com/th/id/OIP.w060E0fzhisX7NX4xYsX7QHaEK?pid=ImgDet&w=1366&h=768&rs=1',
      //     rating: 4,
      //     desc: 'Bayern store here!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 2,
      //     nameShop: 'Luis Vitton',
      //     src:
      //       'https://th.bing.com/th/id/R.e613cca6423d17f5db7ef5953854b509?rik=PaM25HTNgA%2bOlg&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'Come here Yoo!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 3,
      //     nameShop: 'Dior',
      //     src:
      //       'https://th.bing.com/th/id/OIP.EbdByJpWPdywMaak1VQ9EQHaE8?pid=ImgDet&rs=1',
      //     rating: 4,
      //     desc: 'Doir your choice',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 4,
      //     nameShop: 'Manchester United Store',
      //     src:
      //       'https://th.bing.com/th/id/R.e3e1f004e527b316779f86bc7d2d7e05?rik=uXim9tWBfaHuTg&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'We are RedDevil!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 5,
      //     nameShop: 'Asenal store',
      //     src:
      //       'https://th.bing.com/th/id/R.deb0042be08516252aa16706bf0f54d9?rik=Bdu8vwQ23p6ewg&riu=http%3a%2f%2fwww.arsenal.com%2fsites%2fdefault%2ffiles%2fstyles%2flarge%2fpublic%2fimages%2fgun__1359991334_shop_highburyhouse.jpg%3fitok%3dz40igRV1&ehk=0OjsqBE%2fH1Ne8%2fX2vxEp2rCJPtwWEKd%2f7k%2f7s0zB9Ac%3d&risl=&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'We are gunner!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 6,
      //     nameShop: 'Dortmund Store',
      //     src:
      //       'https://th.bing.com/th/id/R.03e7ddf8588a9e0958d9993232df417d?rik=cVtwlxMK07RxWA&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'Army bee!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 7,
      //     nameShop: 'West Ham United Store',
      //     src:
      //       'https://th.bing.com/th/id/R.16da35b62a2a7c70b42d97007fdf1ebe?rik=UF0jiCsEcUuD4A&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fF84WRM%2fwest-ham-united-football-club-kit-store-open-plan-shop-front-in-the-F84WRM.jpg&ehk=wKUFPYDyiobMnZAEPS9SCj1SQm9xWsygRrB%2bagFwo4A%3d&risl=&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'We are London!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 8,
      //     nameShop: 'CR7 Channel',
      //     src:
      //       'https://th.bing.com/th/id/R.bc760f09b11431c973cefcc108ff11b5?rik=iUfU692KzZWXxw&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'Messi is the Best!',
      //     location: 'cambodia',
      //   },
      //   {
      //     _id: 9,
      //     nameShop: 'Gucci Store',
      //     src:
      //       'https://th.bing.com/th/id/R.fa3654e7db6796df031a0b664f47e016?rik=4ZkFtRE93b4T4w&riu=http%3a%2f%2fbigbrandboys.com%2fwp-content%2fuploads%2f2015%2f07%2fgucci-store.jpg&ehk=nXHa%2bt8p7l6TwS%2fBC42TUWGflCdRGxj7VztgcsbvWg4%3d&risl=&pid=ImgRaw&r=0',
      //     rating: 4,
      //     desc: 'Come Here!',
      //     location: 'cambodia',
      //   },
      // ],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },

  methods: {
    addFovorite(){
      alert('You add me to Fovorite Card!')
    }
  },
}
</script>
<style scoped>
a { color: inherit } 
.mySwiper{
  /* background-color: red; */
}
.box{
  width: 70%;
  padding: 0 0px;
}
</style>