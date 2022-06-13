<script>
import Header2 from '../components/Header2.vue'
export default {
  components: { Header2 },
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
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
        body: JSON.stringify({ email: this.email, password: this.password }),
      })

      const resData = await res.json()
      if (resData.success == true)  { 

        //change status user logged in
        this.$store.commit('setUserLoggedIn', true)

        this.$router.push('/')
      }
      else console.log(res)

      // if (this.email == 'bekkhemka@gmail.com' && this.password == '123') {
      //   this.$router.push({ name: 'home' })
      // } else {
      //   return (this.incorrect = 'This is wrong')
      // }
    },
  },
}
</script>
<template>
  <div>
    <header-2/>
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
                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <button type="submit" class="btn btn-primary btn-lg">
                          <a class="login">Login</a>
                        </button>
                      </div>
                      <div class="account">
                        <a href="#">Forgot account?</a>
                        <a href="/register">&nbsp; Sign Up</a>
                      </div>
                    </form>
                  </div>
                  <div
                    class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                  >
                    <img
                      src="@/assets/Form/Login.png/"
                      class="img-fluid"
                      alt="Login image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.account {
  display: flex;
  justify-content: center;
  text-align: center;
}
.login {
  color: white;
}
.login:hover {
  color: white;
}
.img-fluid {
  position: absolute;
  margin-top: -4%;
  margin-left: -10%;
  width: 800px;
  height: 800px;
}
</style>
