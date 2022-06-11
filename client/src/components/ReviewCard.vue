<template>
  <div class="wrapper_body_review">
    <div class="box_card_review" v-for="review in reviews" :key="review._id">
      <div class="box_card_left">
        <div class="shop-name">
          <span>
            <b>{{ review.shopName }}</b>
          </span>
        </div>
        <div class="img-post">
          <img
            :src="review.src"
            alt="erorUserpost"
            style="width: 100%; height: 100%;"
          />
        </div>
      </div>
      <div class="box_card_right">
        <div class="like">
          <div class="icon" @click="fovorite"><i class="bx bxs-heart" @click="fovorite"></i></div>
        </div>
        <div class="card-detail">
          <div class="description-post">
            <span>Description:</span>
            <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <a href="#seemore">See more</a>
            </span>
          </div>
          <div class="location-news">
            <span>Location:</span>
            <span>Tk,Cambodia</span>
          </div>
          <div class="star-user">
            <span>
              <i class="bx bx-star"></i>
              <i class="bx bx-star"></i>
              <i class="bx bx-star"></i>
              <i class="bx bxs-star-half"></i>
              <i class="bx bxs-star-half"></i>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span>{{ review.reviewNumber }} Review</span>
          </div>
          <!-- <div class="commend-other-user">
            <span>{{ review.userComment }}</span>
            <br />
            <span v-text="inputcomment"></span>
          </div> -->
          <!-- <div class="input-commend">
            <input
              type="text"
              placeholder="what are you thinkking"
              v-model="inputcomment"
            />
            <input type="submit" @click="post" />
          </div> -->
        </div>
      </div>
    </div>
    <div class="page">
        <a href="#" class="previous">&laquo; Previous</a>
        <a href="#" class="previous">1</a>
        <a href="#" class="previous">2</a>
        <a href="#" class="previous">3</a>
        <a href="#" class="previous">4</a>
        <a href="#" class="previous">5</a>
        <a href="#" class="previous">6</a>
        <a href="#" class="previous">Next &raquo;</a>
        <a href="#" class="next">End</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  data() {
    return {
      inputcomment: '',
      reviews: [
        {
          _id: 1,
          shopName: 'FC Bayern Store',
          src:
            'https://th.bing.com/th/id/OIP.w060E0fzhisX7NX4xYsX7QHaEK?pid=ImgDet&w=1366&h=768&rs=1',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 2,
          shopName: 'Luis Vitton',
          src:
            'https://th.bing.com/th/id/R.e613cca6423d17f5db7ef5953854b509?rik=PaM25HTNgA%2bOlg&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 3,
          shopName: 'Dior',
          src:
            'https://th.bing.com/th/id/OIP.EbdByJpWPdywMaak1VQ9EQHaE8?pid=ImgDet&rs=1',
          des: 'Come to get your dior here',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 4,
          shopName: 'Manchester United Store',
          src:
            'https://th.bing.com/th/id/R.e3e1f004e527b316779f86bc7d2d7e05?rik=uXim9tWBfaHuTg&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 5,
          shopName: 'Asenal store',
          src:
            'https://th.bing.com/th/id/R.deb0042be08516252aa16706bf0f54d9?rik=Bdu8vwQ23p6ewg&riu=http%3a%2f%2fwww.arsenal.com%2fsites%2fdefault%2ffiles%2fstyles%2flarge%2fpublic%2fimages%2fgun__1359991334_shop_highburyhouse.jpg%3fitok%3dz40igRV1&ehk=0OjsqBE%2fH1Ne8%2fX2vxEp2rCJPtwWEKd%2f7k%2f7s0zB9Ac%3d&risl=&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 6,
          shopName: 'Dortmund Store',
          src:
            'https://th.bing.com/th/id/R.03e7ddf8588a9e0958d9993232df417d?rik=cVtwlxMK07RxWA&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 7,
          shopName: 'West Ham United Store',
          src:
            'https://th.bing.com/th/id/R.16da35b62a2a7c70b42d97007fdf1ebe?rik=UF0jiCsEcUuD4A&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fF84WRM%2fwest-ham-united-football-club-kit-store-open-plan-shop-front-in-the-F84WRM.jpg&ehk=wKUFPYDyiobMnZAEPS9SCj1SQm9xWsygRrB%2bagFwo4A%3d&risl=&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 8,
          shopName: 'CR7 Channel',
          src:
            'https://th.bing.com/th/id/R.bc760f09b11431c973cefcc108ff11b5?rik=iUfU692KzZWXxw&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 9,
          shopName: 'Gucci Store',
          src:
            'https://th.bing.com/th/id/R.fa3654e7db6796df031a0b664f47e016?rik=4ZkFtRE93b4T4w&riu=http%3a%2f%2fbigbrandboys.com%2fwp-content%2fuploads%2f2015%2f07%2fgucci-store.jpg&ehk=nXHa%2bt8p7l6TwS%2fBC42TUWGflCdRGxj7VztgcsbvWg4%3d&risl=&pid=ImgRaw&r=0',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
        {
          _id: 10,
          shopName: 'Starbucks',
          src:
            'https://i.pinimg.com/originals/aa/81/52/aa8152a067ffcb6a549e42254552895e.jpg',
          des: 'the shir ever',
          reviewNumber: 16,
          userComment: 'I never go there! but one day i will go',
        },
      ],
    }
  },
  methods: {
    post() {
      alert('U wanna post somthing!')
      return this.inputcomment
    },
    fovorite() {
      alert('You add me to Fovorite cart! ')
    },
  },
}
</script>
<style>

.page{
    margin: 15px auto 0;
    width: 100%;
}
.page a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  margin: 0px 2px;
}

.page a:hover {
  background-color: #ddd;
  color: black;
}

.page .previous {
  background-color: #f1f1f1;
  color: black;
}
.page .next {
  background-color: #04AA6D;
  color: white;
}
.wrapper_body_review {
  position: relative;
  width: 80%;
  height: auto;
  margin: 17vh auto;
}

.box_card_review {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border: 1px solid #e5e5e5;
}

.box_card_left {
  position: relative;
  width: 45%;
  height: 100%;
}

.box_card_left .shop-name {
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 25px;
}

.box_card_left .shop-name span {
  font-size: 24px;
  font-weight: 600;
}

.box_card_left .img-post {
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  padding-left: 25px;
   transition: transform .2s;
}
.box_card_left .img-post img{
   transition: transform .2s;
}
.box_card_left .img-post img:hover{
      -ms-transform: scale(1.05);
    /*IE9*/
    -webkit-transform: scale(1.05);
    /*Safari3-8*/
    transform: scale(1);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    box-shadow: 10px 10px 5px lightblue inset;
    box-shadow: 0 8px 8px -4px lightblue;
}

.box_card_right {
  position: relative;
  width: 50%;
  height: 100%;
}

.like {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
}

.like .icon {
  font-size: 38px;
  position: absolute;
  right: 10%;
  color: rgb(221, 210, 210);
  cursor: pointer;
}
.like .icon:hover {
  color: rgb(255, 0, 43);
}
.card-detail {
  width: 100%;
  height: 85%;
}

.card-detail > div {
  padding-bottom: 25px;
}

/* .box_card_right input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  border: 1px solid #e5e5e5;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  position: relative;
}

.box_card_right input[type='text'] {
  width: 50%;
}

.box_card_right input[type='text'],
.box_card_right input[type='submit'] {
  border-radius: 0.25rem;
  padding: 8px;
  padding: 0.6rem;
}

.box_card_right input[type='submit'] {
  cursor: pointer;
} */
</style>