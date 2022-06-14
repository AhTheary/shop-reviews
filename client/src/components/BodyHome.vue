<template>
  <div>
    <div class="wrapper-slide-box">
      <div class="title">
        <h1>Browse by Category</h1>
      </div>
      <div class="box-card">
                <div class="box category-card">
          <router-link to="/browse">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3170/3170733.png"
              alt="eror"
            />
            <span>Restaurant</span>
          </router-link>
        </div>
        <div class="box category-card">
          <router-link to="/browse">
            <img
              src="https://cdn-icons.flaticon.com/png/512/3211/premium/3211391.png?token=exp=1655222199~hmac=b65824d0e6f74eaef7b29a4470dcb6d6"
              alt="eror"
            />
            <span>Clothes</span>
          </router-link>
        </div>
        <div class="box category-card">
            <router-link to="/browse">
              <img
              src="https://cdn-icons.flaticon.com/png/512/4284/premium/4284954.png?token=exp=1655221113~hmac=be3ba9bff08840f6c18a23e5472bf9c2"
              alt="eror"
            />
            <span>Supermarket</span>
            </router-link>
        </div>
        <div class="box category-card">
          <router-link to="/browse">
            <img
              src="https://cdn-icons.flaticon.com/png/512/2944/premium/2944415.png?token=exp=1655221136~hmac=138dd5f251e4d1a7421ee7f897ab9659"
              alt="eror"
            />
            <span>Sport</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="wrapper-slide-box">
      <div class="title about-us">
        <h1 style="margin-bottom: 50px;"><b>ABOUT US</b></h1>
      </div>
      <div class="box-card">
        <div class="box aboutus-card">
          <img src="https://cdn-icons-png.flaticon.com/512/273/273177.png" alt="home icon" />
          <h3>Browse Store</h3>
          <span>Easy for find your favorite Store Online</span>
        </div>
        <div class="box aboutus-card">
          <img src="https://cdn-icons-png.flaticon.com/512/4207/4207277.png" alt="error" />
          <h3>Social Interraction</h3>
          <span>Make interaction with other users</span>
        </div>
        <div class="box aboutus-card">
          <img src="https://cdn-icons.flaticon.com/png/512/1365/premium/1365307.png?token=exp=1655222441~hmac=1f2e2b99a716cd692fe43f26c25e71d4" alt="error" />
          <h3>Review Store</h3>
          <span>Write reviwe and rate for your favorite store</span>
        </div>
        <div class="box aboutus-card">
          <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="location" />
          <h3>Location Store</h3>
          <span>Get direction to your favorite store</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyHome',
}
</script>
<style scoped>
.wrapper-slide-box {
  position: relative;
  width: 92%;
  height: 40vh;
  /* background-color: yellow; */
  margin: 16vh auto;
}

.wrapper-slide-box .title {
  width: 100%;
  height: 20%;
  /* background-color: blue; */
  align-items: center;
  display: flex;
  padding-left: 10px;
}

.about-us {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.box-card {
  width: 100%;
  height: 70%;
  display: flex;
}

.box-card .box {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  margin: 14px 28px;
}

.box-card .box .user-name {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
}

.box-card .box .user-name .profile-card {
  width: 80%;
}

.box-card .box .user-name .hearth {
  width: 20%;
  height: 100%;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.box-card .box .img {
  width: 100%;
  height: 58%;
}

.star-review {
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.star-review .star {
  width: 70%;
  height: 100%;
}

.star-review .count-review {
  width: 30%;
  height: 100%;
}

.des {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
}

.wrapper-slide-box .aboutus-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}
.wrapper-slide-box .aboutus-card h3 {
  margin-bottom: 12px;
}
.wrapper-slide-box .box img {
  width: 60%;
  position: relative;
  margin-bottom: 8%;
}
.wrapper-slide-box .box span {
  text-align: center;
  color: black;
}

.wrapper-slide-box .category-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin-left: 50px;
}
.wrapper-slide-box .category-card  a{
  text-decoration: none;
  text-align: center;
  font-size: 26px;
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    height: 30vh;
}
.wrapper-slide-box .category-card  img {
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
}
.wrapper-slide-box .category-card img:hover {
  -ms-transform: scale(1.05);
  /*IE9*/
  -webkit-transform: scale(1.05);
  /*Safari3-8*/
  transform: scale(1);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -o-transform: scale(1.05);
}
.wrapper-slide-box .category-card img:hover {
  border-radius: 50%;
  box-shadow: 10px 10px 5px rgba(156, 154, 152, 0.572) inset;
  box-shadow: 0 8px 8px -4px rgb(156, 154, 152, 0.572);
}
</style>
