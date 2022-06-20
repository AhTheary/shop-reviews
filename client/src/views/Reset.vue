<template>
  <div class="container">
<h1 class="form-heading">login Form</h1>
<div class="login-form">
<div class="main-div">
    <div class="panel">
   <h2>Reset Password</h2>
  
   </div>
    <form id="Login" @submit.prevent="onSubmit">

        <div class="form-group">


            <input v-model="password"  required type="password" class="form-control" id="inputPassword" placeholder="Enter New Password">

        </div>

        <div class="form-group">

            <input v-model="confirm_password" required type="password" class="form-control" id="inputPassword" placeholder="Comfirm Password">

        </div>

        <button type="submit" class="btn btn-primary">Reset Password</button>

    </form>
    </div>
<p class="botto-text"> Designed by Sunil Rajput</p>
</div></div>
</template>

<script>
export default {
    name: 'reset',
        data(){
        return{
            password: '',
            confirm_password: '',
        }
    },
  methods: {
    async onSubmit() {

      let user_id = this.$route.query.user_id
      console.log('user id', user_id);

      const res = await fetch('http://localhost:3001/user/change-password', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
        "user_id": user_id,
        "pass": this.password,
        "conf": this.confirm_password
       }),
      })

      const resData = await res.json()
      console.log('change password', resData)
<<<<<<< HEAD
      this.$router.push('/login')
=======

>>>>>>> ac0cc60450b1c4b4df0909e4629a8efe24d9602b
    },
  },
}
</script>

<style>

</style>