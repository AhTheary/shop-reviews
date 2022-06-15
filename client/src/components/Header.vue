<template>
  <div>
    <div class="container_nav1">
      <div class="wrapper_nav">
        <div class="logo">
          <router-link to="/">
            <img
              src="../assets/LoginLogo.jpg"
              style="margin-left: 20px;"
              alt="Logo store"
            />
          </router-link>
        </div>
        <div class="search_box">
          <div class="search__container">
            <input class="search__input" type="text" placeholder="Search" />
          </div>
        </div>
        <div class="user-info">
          <div class="btn-signin-up" v-if="!userLoggedIn">
            <button>
              <router-link to="/login"><span>Log In</span></router-link>
            </button>
            <button>
              <router-link to="/register"><span>Register</span></router-link>
            </button>
          </div>
          <div class="user-favorite" v-else>
            <a class="user" @click="menuToggle">
              <i class="bx bxs-user-circle"></i>
            </a>
            <a>
              <label for="slide-menu-right" class="menu-button">
                <i class="bx bxs-heart"></i>
              </label>
            </a>
          </div>
        </div>
      </div>
      <div class="wrapper_menu">
        <div class="menu-bar">
          <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/newsfeed">New Feeds</router-link>
            <router-link to="/review">Review</router-link>
            <router-link to="/location">Location</router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu">
      <h3><b>Bekkhem</b></h3>
      <ul>
        <li>
          <!-- <i class="bx bx-edit-alt"></i>
          &nbsp; -->
          <a href="/editprofile">Edit Profile</a>
        </li>
        <li>
          <!-- <i class="bx bxs-meh-blank"></i>
          &nbsp; -->
          <a href="#">Dark Mode</a>
        </li>
        <li>
          <!-- <i class="bx bxs-contact"></i>
          &nbsp; -->
          <a href="/feedback">Feedback</a>
        </li>
        <li>
          <!-- <i class="bx bx-log-out"></i>
          &nbsp; -->
          <a href="#" @click="onLogout">Logout</a>
        </li>
      </ul>
    </div>
    <div class="slide-menu">
      <input id="slide-menu-right" class="menu-toggle" type="checkbox" />
      <div class="menu-wrap">
        <h1 class="menu-title">Favorite</h1>
        <div class="menu-list">
          <ul>
            <li>
              <a href="#">Shop 1</a>
            </li>
            <li>
              <a href="#">Shop 2</a>
            </li>
            <li>
              <a href="#">Shop 3</a>
            </li>
            <li>
              <a href="#">Shop 4</a>
            </li>
            <li>
              <a href="#">Shop 5</a>
            </li>
          </ul>
        </div>
      </div>
      <label for="slide-menu-right" class="menu-overlay"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      user: true,
      username: '',
      logged: true,
    }
  },

  computed: {
    userLoggedIn() {
      return this.$store.state.userLoggedIn
    },
  },

  methods: {
    menuToggle() {
      const toggleMenu = document.querySelector('.menu')
      toggleMenu.classList.toggle('active')
    },
    async onLogout() {
      console.log('test')
      const res = await fetch('http://localhost:3001/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(),
      })
      const resData = await res.json()
      console.log(resData)

      if (resData) {
        this.$router.push({ name: 'home' })
        this.logged = false
      }
    },
  },
}
</script>
<style></style>
