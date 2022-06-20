<template>
  <div>
    <div class="dashboard" v-if="dataAdmin.role == 'admin'">
      <!-- Dashboard -->
      <section class="navigation">
        <!-- Navigation -->
        <div class="logo">
          <img src="../../assets/Logo.png" alt="reviwe Logo" />
        </div>

        <div class="branch">
          <li>
            <router-link to="/dashboard/user">
              <span class="material-symbols-outlined"> person </span>&nbsp;
              User</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/store">
              <span class="material-symbols-outlined">
                &nbsp;&nbsp; add_business
              </span>
              STORE</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/post"
              ><span class="material-symbols-outlined"> post_add </span>&nbsp;
              POST</router-link
            >
          </li>
        </div>
        <div class="logout">
          <li>
            Logout &nbsp;<span class="material-symbols-outlined"> logout </span>
          </li>
        </div>
      </section>
      <section>
        <router-view></router-view>
      </section>
      <!-- Navigation End -->
    </div>
    <div v-else>You are not admin</div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data(){
    return {
        dataAdmin: ''
    }
  },
  methods: {
  },
 async created() {
    const res = await fetch('http://localhost:3001/auth/me', {
      method: 'POST',
        credentials: 'include',
        headers: {
        'Content-type': 'application/json',
        }
    })

    const resData = await res.json();
    this.dataAdmin = resData 
    console.log("DATA",this.dataAdmin);
},
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
</style>