<template>
  <div>
    <div>{{$route.params.id}}</div>
    <div class="wrapper_reviewdetails">
      <div class="store_info">
        <div class="store_card">
          <div class="icon">
            <i class="bx bx-info-circle"></i>
            <i class="bx bx-heart">
              <!-- <span>730</span> -->
            </i>
            <!-- <span>730</span> -->
          </div>
          <div class="img">
            <img
              src="https://th.bing.com/th/id/R.4af8350c12ad026bf194832e0919b3b8?rik=DQZ1PcJCDOpF2g&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt=""
            />
          </div>
        </div>
        <div class="store_des">
          <div class="title">
            <i class="bx bx-menu-alt-left"></i>
            <span>Descriptions</span>
          </div>
          <div class="title_info">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et
              suscipit quis ab repudiandae officiis inventore quisquam
            </span>
          </div>
        </div>
        <div class="sotre_rating-info">
          <div><b>STORE RATING</b></div>
          <div class="store_rating">
            <input id="rating1" type="radio" name="rating" value="1" />
            <label for="rating1"></label>
            <input id="rating2" type="radio" name="rating" value="2" />
            <label for="rating2"></label>
            <input id="rating3" type="radio" name="rating" value="3" />
            <label for="rating3"></label>
            <input id="rating4" type="radio" name="rating" value="4" />
            <label for="rating4"></label>
            <input id="rating5" type="radio" name="rating" value="5" />
            <label for="rating5"></label>
          </div>
        </div>
      </div>
      <div class="user_review">
        <div class="icon">
          <div class="space"></div>
          <div class="icon_info">
            <i class="bx bx-refresh"></i>
            <!-- <i class='bx bx-repost'></i> -->
            <i class="bx bx-share-alt"></i>
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
        <div class="user_review_post">
          <div class="title">
            <span>REVIEW</span>
          </div>
          <div class="user_comment_review">
            <div class="username">
              <!-- <img src="" alt="" /> -->
              <i class="bx bxs-user-circle"></i>
              <div><b>Sonic</b></div>
            </div>
            <div class="star">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <span><b>Excelent</b></span>
            </div>
            <div class="comment">
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident voluptatum inventore illum ad veritatis odit animi
                vel.
              </span>
            </div>
          </div>
          <div class="post-btn">
            <input type="text" placeholder="what are you thinkking" />
            <input type="submit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped></style>
