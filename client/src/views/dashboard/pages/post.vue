<template>
    <section class="main-dashboard">
            <!--Main -->
            <div class="main-header">
                <div class="main-dashboard-name">
                    <h2>Manage Post</h2>
                </div>
            </div>
            <div class="table-store">
                <table>
                    <tr>
                        <th>Image</th>
                        <th>User name</th>
                        <th>Like</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="post in posts" :key="post._id">
                        <td>   
                                <img :src=" post.image " alt="users_post" />
                        </td>
                        <td> {{post.username}} </td>
                        <td> {{post.like}}</td>
                        <td> {{post.location}}</td>

                        <td>
                            <span class="material-symbols-outlined" style="color: rgb(241, 16, 16)">
                                delete
                            </span>
                        </td>
                    </tr>
                    
                </table>
            </div>
        </section>
</template>

<script>
    export default {
        data() {
            return {
                posts:[
                    {
                        username:"bekkhem",
                        image:"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6083aefe-1558-11eb-bca5-e85774a5f3b9.jpg?crop=2369%2C1333%2C566%2C264&resize=1180",
                        location:"Vietnam",
                        like:"5"
                    }
                ]
            }
        },
    }
</script>

<style scoped>
h1{
    margin-left: 21vw;
}
</style>