<template>
  <div>
    <header-2 />
    <section class="py-5 my-5">
      <div class="container">
        <h1 class="mb-5">Account Setting</h1>
        <div class="bg-white shadow rounded-lg d-block d-sm-flex">
          <div class="profile-tab-nav border-right">
            <div class="p-4">
              <div class="img-circle text-center mb-3">
                <img src="@/assets/pf.png" alt="Image" class="shadow" />
              </div>
              <h4 class="text-center">{{ me.username }}</h4>
            </div>
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="account-tab"
                data-toggle="pill"
                href="#account"
                role="tab"
                aria-controls="account"
                aria-selected="true"
              >
                <i class="fa fa-home text-center mr-1"></i>
                Account
              </a>
              <a
                class="nav-link"
                id="password-tab"
                data-toggle="pill"
                href="#password"
                role="tab"
                aria-controls="password"
                aria-selected="false"
              >
                <i class="fa fa-key text-center mr-1"></i>
                Password
              </a>
            </div>
          </div>
          <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h3 class="mb-4">Edit Profile</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>First Name</label>
                    {{ me.firstName }}
                    <input
                      type="text"
                      class="form-control"
                      :value="text"
                      @input="(event) => (text = event.target.value)"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Last Name</label>
                    {{ me.firstName }}
                    <input type="text" class="form-control" value="" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email</label>
                    {{ me.email }}
                    <input
                      type="text"
                      class="form-control"
                      value="davidbeckham@gmail.com"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Phone number</label>
                    <input type="text" class="form-control" value="012345678" />
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-primary">Update</button>
                <button class="btn btn-light">Cancel</button>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <h3 class="mb-4">Password Settings</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Old password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>New password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Confirm new password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-primary">
                  <a href="/" style="color: white;">Update</a>
                </button>
                <button class="btn btn-light">
                  <a href="/" style="color: black;">Cancel</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header2 from '../components/Header2.vue'

export default {
  components: { Header2 },

  name: 'EditProfile',
  data() {
    return {
      me: '',
      username: '',
    }
  },
  mounted() {},
  async created() {
    const res = await fetch('http://localhost:3001/auth/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })

    const resData = await res.json()
    this.me = resData
    console.log('User', this.me)
  },
}
</script>

<style scoped></style>
