<template>
    <div>
        <div class="dashboard">
        <!-- Dashboard -->
        <section class="navigation">
            <!-- Navigation -->
            <div class="logo">
                <img src="../../assets/Logo.png" alt="reviwe Logo" />
            </div>

            <div class="branch">
                 <li>
                   <router-link to="/dashboard/user"> <span class="material-symbols-outlined">&nbsp;&nbsp;&nbsp;&nbsp; category </span>&nbsp; Category</router-link>
                </li>
                <li>
                   <router-link to="/dashboard/store"> <span class="material-symbols-outlined">  &nbsp;&nbsp; add_business </span>  STORE</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/post"><span class="material-symbols-outlined"> post_add </span>&nbsp; POST</router-link>
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
    </div>
</template>

<script>
    export default {
        name: 'dashboard'
    }
</script>
<style scoped>
a{
    text-decoration: none;
    color: #fff;
}

</style>