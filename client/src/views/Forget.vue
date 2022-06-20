<template>
  <div class="container">
    <h1 class="form-heading">login Form</h1>
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <h2>Forget Password</h2>
          <br />
          <p>
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
        </div>
        <form id="Login" @submit.prevent="onSubmit">
          <div class="form-group">
            <input
              v-model="email"
              required
              type="email"
              class="form-control"
              id="inputEmail"
<<<<<<< HEAD
              placeholder="email"
=======
              placeholder="Phone"
>>>>>>> ac0cc60450b1c4b4df0909e4629a8efe24d9602b
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Request password reset
          </button>
        </form>
      </div>
      <p class="botto-text">Designed by Sunil Rajput</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forget',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async onSubmit() {
      const res = await fetch('http://localhost:3001/user/reset-password', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: this.email }),
      })
      const resData = await res.json()
      console.log(resData)

      if (resData.success) {
        this.$router.push('/reset?user_id=' + resData.user._id)
      }
    },
  },
}
</script>

<style></style>
