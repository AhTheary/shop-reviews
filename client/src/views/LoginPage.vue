<script>
import Header2 from '../components/Header2.vue'
export default {
  components: { Header2 },
  name: 'login',
  data() {
    return {
      // email: '',
      username: '',
      password: '',
      message: '',
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      })

      const resData = await res.json()
      if (resData.success == true) {
        //change status user logged in
        this.$store.commit('setUserLoggedIn', true)

        this.$router.push('/')
      } else {
<<<<<<< HEAD
        console.log(res)
      }
=======
        this.message = error.toString()
        console.log(res)
      }

      // if (this.email == 'bekkhemka@gmail.com' && this.password == '123') {
      //   this.$router.push({ name: 'home' })
      // } else {
      //   return (this.incorrect = 'This is wrong')
      // }
>>>>>>> ac0cc60450b1c4b4df0909e4629a8efe24d9602b
    },
  },
}
</script>
<template>
  <div>
    <header-2 />
<<<<<<< HEAD
    <section class="py-5 my-5">
      <div class="container">
        <div class="bg-white shadow rounded-lg d-block d-sm-flex">
          <div class="profile-tab-nav border-right">
            <div class="p-4">
              <div class="img-circle text-center mb-3">
                <img
                  src="../assets/img-acc/Login.png"
                  alt="Image"
                  style="margin-top: 0%;"
                />
              </div>
            </div>
          </div>
          <form class="mx-1 mx-md-4" @submit="onSubmit" method="post">
            <div class="tab-content p-3 p-md-5" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h1 class="mb-4">Log In</h1>
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <label>Username</label>
                      <input
                        type="text"
                        v-model="username"
                        class="form-control"
                        required
                      />
                    </div>
=======
    <section class="vh-100" style="background-color: #eee;">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <form class="mx-1 mx-md-4" @submit="onSubmit" method="post">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="email"
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="password"
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div
                          v-if="message"
                          class="alert alert-danger"
                          role="alert"
                        >
                          {{ message }}
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <button type="submit" class="btn btn-primary btn-lg">
                          <a class="login">Login</a>
                        </button>
                      </div>
                      <div class="account">
                        <a href="/forget">Forgot account?</a>
                        <a href="/register">&nbsp; Sign Up</a>
                      </div>
                    </form>
>>>>>>> ac0cc60450b1c4b4df0909e4629a8efe24d9602b
                  </div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <i class="fa fa-lock" aria-hidden="true"></i>
                      <label>Password</label>
                      <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary" style="width: 150px;">
                    Log in
                  </button>
                  <div class="mt-3">
                    <a href="/forget">Forgot account?</a> |
                    <a href="/register">Not our member yet?</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
body {
  background: #f9f9f9;
  font-family: 'Roboto', sans-serif;
}

.shadow {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

.profile-tab-nav {
  min-width: 250px;
}

.tab-content {
  flex: 1;
}

.form-group {
  margin-bottom: 1.5rem;
}

.nav-pills a.nav-link {
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  color: #333;
}

.nav-pills a.nav-link i {
  width: 20px;
}

.img-circle img {
  margin-top: 15%;
  height: 400px;
  width: 400px;
  /* border-radius: 100%; */
  border: 5px solid #fff;
}
</style>
