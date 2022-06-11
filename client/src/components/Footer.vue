<template>
  <div>
    <div class="footer" :class="{ active: hover }">
      <div class="footer-warpper">
        <div class="policy">
          <div class="txt-policy">
            <span>
              <router-link to="/privacy"><b>Privacy Policy</b></router-link>
            </span>
            <span class="term">
              <router-link to="/termofuse"><b>Term of Use</b></router-link>
            </span>
            <span>
              <router-link to="/cookie">
                <b>Cookie Preferences</b>
              </router-link>
            </span>
          </div>
          <span style="font-size:18px">storereview2022@gmail.com</span>
          <span style="font-size:20px"><i class="bx bx-copyright">2022 All right reserved</i></span>
        </div>
        <div class="contact">
          <span>Connect with us</span>
          <div class="icon-contact">
            <i class="bx bxs-phone-call"></i>
            <i class="bx bxl-facebook"></i>
            <i class="bx bx-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
}
</script>

<style></style>
